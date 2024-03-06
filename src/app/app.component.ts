import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,Validator} from '@angular/forms'; // Import the FormsModule
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

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


  //#endregion

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

  //this part contain issue after comment it will solve
  ngOnInit():void
  {
    this.ngObservable.subscribe((val => {console.log(val);}))
  }

  changeData()
  {
    this.title = 'Change Name is - Gupta Vinay';
  }

}
