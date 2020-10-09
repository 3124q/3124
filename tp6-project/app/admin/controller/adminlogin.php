<?php


namespace app\admin\controller;
    use app\admin\model\Admin;
    use think\facade\Session;

class adminlogin
{
    public  function Login(Admin $admin){
        $res=input("post.");
        $username=$res["username"];
        $userpwd=$res["password"];
        $md5pwd=md5($userpwd);
        $user=$admin->db()->where([
            ['adminAcc','=',$username],
            ['adminPwd','=',$md5pwd]
        ])->select();
//        return json($res);
        if (count($user)<=0){

            return json(array('code'=>1001,'msg'=>'账户或密码错误'));
        }else{
            session_start();
            $_SESSION["nowadmin"]=$user;
//            Session::set('nowuser', $username);
            return json(array('code'=>1000,"msg"=>"登录成功"));
        }


    }
}