import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userObj } from '../interface/user';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  userObj : userObj ;
  constructor(private router:Router) { 
    this.userObj = new userObj();
    
  }

  ngOnInit(): void {
    
  }

  getUserId(){
    const oldRecords = localStorage.getItem('userList');
    if(oldRecords !== null){
      const userList = JSON.parse(oldRecords);
      return userList.length+1;
    }else{
      return 1;
    }
  }
  saveUser(){
    //debugger;
    const latestId = this.getUserId();
    this.userObj.userId = latestId;
    const oldRecords = localStorage.getItem('userList');
    if(oldRecords !== null){
      const userList = JSON.parse(oldRecords);
      userList.push(this.userObj);
      localStorage.setItem('userList',JSON.stringify(userList));
    }else{
      const userArr = [];
      userArr.push(this.userObj);
      localStorage.setItem('userList',JSON.stringify(userArr))
    }
    this.router.navigateByUrl('/view');
    
  }

}
