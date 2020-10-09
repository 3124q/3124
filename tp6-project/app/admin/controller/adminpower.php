<?php


namespace app\admin\controller;


use app\admin\model\Position;
use app\admin\model\Power;
use app\admin\model\Relation;

class adminpower
{
    public function powerlist( Position $position){
        $res=$position->db()->select();
        return json($res);

    }
    public function allpower(Power $power){
        $allPower=$power->db()->select();
        return json($allPower);
    }
    public function setpower(Relation $relation){
        $positionID=input("post.")["id"];
        $oldrelation=$relation->db()->where("positionID","=",$positionID)->delete();
        $relationkey=input("post.")["key"];
        $list=[];
        for ($i=0;$i<count($relationkey);$i++){
            array_push($list,[
                'positionID'=>$positionID,
                'powerID'=>$relationkey[$i]
            ]);
        }
        $newposition=$relation->saveAll($list);
        return json("修改成功");

    }
    public  function  getpower(Relation $relation){
        $positionID=input("post.")["positionID"];
        $relationlist=$relation->db()->where("positionID","=",$positionID)->select();
        if (count($relationlist)>0){
            return json(array("code"=>1000,"msg"=>"获得数据","data"=>$relationlist));
        }else{
            return json(array("code"=>1001,"msg"=>"无数据"));
        }
//        return json($relationlist);
    }
    public function addposition( Position $position){
        $newposition=input("post.");
        $result=$position->db()->insert($newposition);
        $positionlist=$position->db()->select();
        if ($result){
            return json(array("code"=>1000,"msg"=>"添加成功","data"=>$positionlist));
        }else{
            return json(array("code"=>1001,"msg"=>"添加失败"));
        }
    }
    public function changeposition(Position $position){
        $positionID=input("post.")["positionID"];
        $newposition=input("post.")["newposition"];
        $res=$position->db()->where("positionID","=",$positionID)->update($newposition);
        $positionlist=$position->db()->select();
        if ($res){
            return json(array("code"=>1000,"msg"=>"修改成功","data"=>$positionlist));
        }else{
            return json(array("code"=>1001,"msg"=>"修改失败"));
        }
    }
    public  function moveoutposition(Position $position){
        $positionID=input("post.")["positionID"];
        $res=$position->db()->where("positionID","=",$positionID)->delete();
        $positionlist=$position->db()->select();
        if ($res){
            return json(array("code"=>1000,"msg"=>"移除成功","data"=>$positionlist));
        }else{
            return json(array("code"=>1001,"msg"=>"移除失败"));
        }

    }
}