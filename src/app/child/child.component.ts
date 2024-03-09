import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
  // providers:[MyservicesService]

})
export class ChildComponent {

  // public child:any;
  // constructor(private chi:MyservicesService)
  // {
  //   this.child = chi.getData();
  //   console.log(this.child);

  // }

  //defining input decorator , 
  //it will check any property are present on by myData name on Praent component
  // @Input('myData') mynewData:string ='';  //want to change a property name in child  
  @Input() myData:string =''; 
  @Input() myDataArray:string[] = []; 
  @Input() myDataObj:any = {}; 

  
}
