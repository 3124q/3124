<?php


namespace app\admin\controller;
use app\index\model\User;

class useradmin
{
    public function userlist(User $user){
        $res=$user->db()->select();
        return json($res);
    }
    public  function searchuser(User $user){
        $key=input("post.")["key"];
        $res=$user->db()->where("userAcc","=",$key)->select();
        if (count($res)>0){
            return json(array("code"=>1000,"data"=>$res));
        }else{
            return json(array("code"=>1001,"msg"=>"对不起，没有找到该用户"));
        }
    }
    public function banuser(User $user){
        $userID=input("post.")["userID"];
        $U=$user->db()->where("userID","=",$userID)->find();
        if ($U["userState"]=="正常"){
            $res=$user->db()->where("userID","=",$userID)->update(["userState"=>"锁定"]);
        }else{
            $res=$user->db()->where("userID","=",$userID)->update(["userState"=>"正常"]);
        }
        $userlist=$user->db()->select();
        if($res){
            return json(array("code"=>1000,"msg"=>"操作成功","data"=>$userlist));
        }else{
            return json(array("code"=>1001,"msg"=>"操作失败"));
        }
    }
}