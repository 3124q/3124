<?php


namespace app\index\controller;
use app\index\model\Complaint;

class complaints
{
    public function sendcomplaint(Complaint $complaint){
        $res=input("post.");
        $account=$res['account'];
        $type=$res['type'];
        $contact=$res['contact'];
        $phonenum=$res['phonenum'];
        $email=$res['email'];
        $content=$res['content'];
        $readstate='未读';
        $sendcomplaint= $complaint->save([
            'account'=>$account,
            'type'=>$type,
            'contact'=>$contact,
            'phonenum'=>$phonenum,
            'email'=>$email,
            'content'=>$content,
            'readstate'=>$readstate
        ]);
        if ($sendcomplaint){
            return json(array("code"=>1000,"msg"=>"投诉成功"));
        }else{
            return json(array("code"=>1001,"msg"=>"投诉失败"));
        }

    }
}