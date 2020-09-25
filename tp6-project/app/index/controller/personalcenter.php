<?php


namespace app\index\controller;
use app\index\model\User;

class personalcenter
{
    public function nowuser(User $user){
        $userID=input("post.")['id'];
        $res=$user->db()->where("userID","=",$userID)->select();
        return json($res);
    }
    public function edituser(User $user){
        $res=input("post.");
        $result=$user->db()->where("userID","=",$res['userID'])->update($res);
        $nowuser=$user->db()->select();
        if($result){
            return json(array("code"=>1000,"msg"=>"修改成功","data"=>$nowuser));
        }else{
            return json(array("code"=>1001,"msg"=>"修改失败"));
        }

    }
}