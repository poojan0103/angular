import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userObj } from '../interface/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userObj : userObj ;
  constructor(private route:ActivatedRoute ,private router: Router) { 
    this.userObj = new userObj();
    this.route.params.subscribe((res)=>{
      this.userObj.userId = res['id']
    })
  }

  ngOnInit(): void {
    const oldRecords = localStorage.getItem('userList');
    if(oldRecords !== null){
      const userList = JSON.parse(oldRecords)
      const current = userList.find((m:any) => m.userId == this.userObj.userId);
      if(current !== undefined){
        this.userObj.userName = current.userName;
        this.userObj.userCity = current.userCity;
        this.userObj.userMobile = current.userMobile;
        this.userObj.userAltMobile = current.userAltMobile;
        
      }
    }
  }
  
  
  updateUser(){
    //debugger;
  //  const latestId = this.getUserId();
    //this.userObj.userId = latestId;
    const oldRecords = localStorage.getItem('userList');
    if(oldRecords !== null){
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex((a:any)=> a.userId == this.userObj.userId),1)
      userList.push(this.userObj);
      localStorage.setItem('userList',JSON.stringify(userList));
    }
    this.router.navigateByUrl('/view')
    
  }

}



