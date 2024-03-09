import { Injectable } from '@angular/core';

//inject services on multiple component
//if remove this this will treat a normal class
//injectable decorator implement dependency injection
@Injectable({
  providedIn: 'root'
})

export class MyservicesService {

  constructor() { }

  getData(){
   
    // serviceobject =[
    //   {name:"Vinay",age:"25",Role:"FSD"},
    //   {name:"Harish",age:"28",Role:"FSD"},
    //   {name:"Swapnil",age:"30",Role:"FSD"},
    //   {name:"Deepak",age:"24",Role:"FSD"},
    // ];

    return [
      {name:"Vinay",age:"25",Role:"FSD"},
      {name:"Harish",age:"28",Role:"FSD"},
      {name:"Swapnil",age:"30",Role:"FSD"},
      {name:"Deepak",age:"24",Role:"FSD"},
    ];
  }

}
