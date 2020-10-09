<?php


namespace app\admin\controller;
use think\facade\Db;
use think\facade\Session;
use app\admin\model\Relation;
use app\admin\model\Power;
use app\admin\model\Position;

class admin
{
    public function getnowuser(){
        session_start();
        $nowuser=$_SESSION["nowadmin"];

      $powerlist=Db::table('rightsRelation')->alias('r')
          ->join('power p','r.powerID = p.powerID')->where("positionID","=",$nowuser[0]['positionID'])
          ->order('lever','asc')->select();
        if ($nowuser){
            return json(array("code"=>1000,"data"=>$nowuser,"menu"=>$powerlist));
        }else{
            return json(array("code"=>1001,"msg"=>"请先登录后再访问"));
        }
    }

    public function adminlogout(Position $position){
        session_start();
        $positionID=$_SESSION['nowadmin']['positionID'];
        $positionName=$position->db()->where("positionID","=",positionID)->find(1);
        if ($positionName=="商家"){
            return json(array("code"=>1000,"msg"=>"admin/shoplogin"));
        }else{
            return json(array("code"=>1001,"msg"=>"admin/login"));
        }

        unset($_SESSION['nowadmin']);


    }
}
