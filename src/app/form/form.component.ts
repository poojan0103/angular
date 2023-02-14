import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // data:any={};
  // getData(data:any){
  //   console.log(data)
  //   this.data=data
  // }
  loginForm = new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)]),
  })
  loginUser(){
    console.log(this.loginForm.value)
  }
  get user(){
    return this.loginForm.get('user')
  }
  get password(){
    return this.loginForm.get('password')
  }
  constructor() { }
 
  ngOnInit(): void {
  }

}
