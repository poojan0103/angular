import { LocalizedString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { userObj } from '../interface/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userList: userObj [];

  constructor() { 
    this.userList = []
  }


  ngOnInit(): void {
    const records = localStorage.getItem('userList');
    if(records !== null){
      this.userList = JSON.parse(records);
    }
  }
  delete(id:any){
    const oldRecords = localStorage.getItem('userList');
    if(oldRecords !== null){
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex((a:any)=> a.userId == id),1)
      // userList.push(this.userObj);
      localStorage.setItem('userList',JSON.stringify(userList));
    }
    const records = localStorage.getItem('userList');
    if(records !== null){
      this.userList = JSON.parse(records);
    }

    

  }
}
