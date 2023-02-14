import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor() { }
  getname(abc:any,a:any){
    console.warn(abc,a)

  }
  getdata(val:string){
    console.warn(val)
  

  }
  //title:string = "Get Input Box Value"
  displayval = '';
  getvalue(abc:any){
    console.log(abc)
    this.displayval = abc
  }
  count=0
  counter(type:string){
    type==='add' ?this.count++:this.count--
  }

  // show = false
  // color = "red";

  users =['Anil','ram','shyam','sam','petter']
  userDeatails = [
    {name:'sam',email:'ab@gmai.com',phone:'1234'},
    {name:'ram',email:'abc@gmai.com',phone:'12034'},
    {name:'anil',email:'abcd@gmai.com',phone:'12345'},
    {name:'shyam',email:'abe@gmai.com',phone:'123456'},
    {name:'petter',email:'abw@gmai.com',phone:'1234567'},
    
  ]
  list:any[]=[];
  addTask(item:string){
    
    this.list.push({id:this.list.length,name:item})
    console.log(this.list)

  }
  remove(id:number){

    console.log(id)
    this.list = this.list.filter(item=>item.id!==id)

  }

    title = 'good morning'
    color = "green"
    updatecolor(){
      this.color="blue"
    }
    data=10
    updatechild(){
      this.data= Math.floor(Math.random() * 20)
    }

    user=[
      {name:'sam',email:'ab@gmai.com',phone:'1234'},
      {name:'ram',email:'abc@gmai.com',phone:'12034'},
      {name:'anil',email:'abcd@gmai.com',phone:'12345'},
      {name:'shyam',email:'abe@gmai.com',phone:'123456'},
      {name:'petter',email:'abw@gmai.com',phone:'1234567'},
      
    ]
    name:any;
    getVal(item:any){

      console.log(item)
    }
    a = 'hi'

    ngOnInit(): void {
  }
  
  
}
