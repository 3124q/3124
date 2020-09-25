<?php


namespace app\admin\controller;
    use app\admin\model\Admin;

class adminlogin
{
    public  function Login(Admin $admin){
        $res=input("post.");
        $username=$res["username"];
        $userpwd=$res["password"];
        $user=$admin->db()->where([
            ['adminAcc','=',$username],
            ['adminPwd','=',$userpwd]
        ])->select();
//        return json($res);
        if (count($user)<=0){
            return json(array('code'=>1001,'msg'=>'账户或密码错误'));
        }else{
            return json(array('code'=>1000,"msg"=>"登录成功"));
        }


    }
}