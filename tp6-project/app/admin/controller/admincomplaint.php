<?php


namespace app\admin\controller;


use app\index\model\Complaint;

class admincomplaint
{
    public function getcomplaint(Complaint $complaint){
        $allcomplaint=$complaint->db()->select();
        return json($allcomplaint);
    }
    public function getunread(Complaint $complaint){
        $unreadcomplaint=$complaint->db()->where("readstate","=","未读")->select();
        return json($unreadcomplaint);
    }
    public function getread(Complaint $complaint){
        $readcomplaint=$complaint->db()->where("readstate","=","已读")->select();
        return json($readcomplaint);
    }
    public function getdelete(Complaint $complaint){
        $deletecomplaint=$complaint->db()->where("readstate","=","删除")->select();
        return json( $deletecomplaint);
    }
    public function haveread(Complaint $complaint){
        $complaintID=input("post.")['complaintID'];
        $complaint->db()->where("complaintID","=",$complaintID)->update(['readstate'=>'已读']);
        $unreadcomplaint=$complaint->db()->where("readstate","=","未读")->select();
        return json($unreadcomplaint);
    }
    public function deletecomplaint(Complaint $complaint){
        $complaintID=input("post.")['complaintID'];
        $complaint->db()->where("complaintID","=",$complaintID)->update(['readstate'=>'删除']);
        $unreadcomplaint=$complaint->db()->where("readstate","=","已读")->select();
        return json($unreadcomplaint);
    }
    public function clearcomplaint(Complaint $complaint){
        $complaintID=input("post.")['complaintID'];
        $complaint->db()->where("complaintID","=",$complaintID)->delete();
        $unreadcomplaint=$complaint->db()->where("readstate","=","删除")->select();
        return json($unreadcomplaint);
    }
    public function getdetail(Complaint $complaint){
        $complaintID=input("post.")['complaintID'];
        $res=$complaint->db()->where("complaintID","=",$complaintID)->select();
        return json($res);
    }
}