<?php


namespace app\admin\controller;


use think\facade\Db;

class echart
{
    public function getposition(){
        session_start();
        $nowuser=$_SESSION['nowadmin'][0];
        $positionID=$nowuser['positionID'];
        $position=Db::table('position')->where("positionID","=",$positionID)->find(1);
        if ($position=="景点商家"||$position=="酒店商家"){
            return json("商家");
        }else{
            return json("平台");
        }
    }
    public function getsellcount(){
//        return Db::table("order")->where([
//            'orderBusiness'=>'传一科技',
//            'orderState'=>'交易成功'
//        ]
//        )->field("month(orderTime) as months,count(*) as data")->group("months")->fetchSql("true")->select();
        session_start();
        $nowuser=$_SESSION['nowadmin'];
//        $positionID=$nowuser['positionID'];
//        $position=Db::table('position')->where("pisitionID","=",$positionID)->find(1);
//        $positionName=$position['positionName'];
//        $business= Db::table("business")->where("businessAcc","=",$nowuser['positionID'])->find();
//        $corporateName=$business['corporateName'];
        $sellcount= Db::table("order")->where([
            'orderBusiness'=>'传一科技',
            'orderState'=>'交易成功'
        ])->field("month(orderTime) as months,count(*) as data")->group("months")->select();
        return json($sellcount);
//        if ($positionName=='商家'){
//           $business= Db::table("business")->where("businessAcc","=",$nowuser['positionID'])->find();
//           $corporateName=$business['corporateName'];
//           $sellcount= Db::table("order")->where([
//            'orderBusiness'=>'传一科技',
//            'orderState'=>'交易成功'
//        ])->field("month(orderTime) as months,count(*) as data")->group("months")->select();
//           return json($sellcount);
//        }
    }
    public function getsellmoney(){
        session_start();
//        $nowuser=$_SESSION['nowadmin'];
//        $corporateName=$nowuser['corporateName'];
        $sellmoney= Db::table("order")->where([
            'orderBusiness'=>'传一科技',
            'orderState'=>'交易成功'
        ])->field("month(orderTime) as months,sum(orderPrice) as sum")->group("months")->select();
        return json($sellmoney);
    }
    public function registcount(){
        $registcount=Db::table("user")->field("month(registTime) as months,count(*) as data")->group("months")->select();
        return json($registcount);
    }
}