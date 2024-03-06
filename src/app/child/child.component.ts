import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  //defining input decorator , 
  //it will check any property are present on by myData name on Praent component
  // @Input('myData') mynewData:string ='';  //want to change a property name in child  
  @Input() myData:string =''; 
  @Input() myDataArray:string[] = []; 
  @Input() myDataObj:any = {}; 




  
}
