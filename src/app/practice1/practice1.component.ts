import { Component, OnInit , Input } from '@angular/core';
// import { Directive } from '@angular/core';
import { PracticeService } from '../practice.service';
@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})

export class Practice1Component implements OnInit {
  title = "welcome to angular"
  users:any;
  constructor(private user:PracticeService) {
    console.log("user",user.user)
    this.users=user.users()
   }

  // @Input() item:{name:string,email:string,phone:any}={name:'',email:'',phone:''}

  ngOnInit(): void {
  }

}
