import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,Validator} from '@angular/forms'; // Import the FormsModule
import { Observable } from 'rxjs';
import { PostService } from './services/post.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit{

  //#region vaiable decleration 
  
  title = 'Vinay Gupta';
  textboxValue :string = '';
  public displayName = '';
  public fruit = 'Banana';
  isdisplayName:boolean = true;
  a = ['A','B','C','D','E'];
  fruits = ["Apple","Banana","Mango","Grapes"];
  obj = { 
     name :"Vinay",
     age:24,
     isMarried:true
  }
  public msg ="";
  api ='Learning-API';
  posts:any;
  //#endregion

  /**
   *
   */
  constructor(private post:PostService) {  // all data of post service get in post variable
    
  }

  //this part contain issue after comment it will solve
  //when my app component ready this function execute
  ngOnInit():void
  {
    this.ngObservable.subscribe((val => {console.log(val);}))

    this.post.getPost().subscribe(response =>{
      this.posts = response;  //after getting response my data is getting stored in posts variable
    })//jo component service use karna chaa raha voo subscribe 
  }

  getTextBoxVal(fname:string,lname:string)
  {
    this.displayName =fname + " " +lname;
  }

  ngObservable = new Observable(observable =>{
    console.log("Observable Start");
    observable.next("a");
    observable.next("b");
    observable.next("c");
  });

  changeData()
  {
    this.title = 'Change Name is - Gupta Vinay';
  }

  // errorHandler(error:HttpErrorResponse)
  // {
  //   return Observable.throw(error.message||"Server Error");
    
  // }


}
