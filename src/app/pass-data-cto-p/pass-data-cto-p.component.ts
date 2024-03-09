import { Component,EventEmitter,Output } from '@angular/core';
import { MyservicesService } from '../services/myservices.service';

@Component({
  selector: 'app-pass-data-cto-p',
  templateUrl: './pass-data-cto-p.component.html',
  styleUrls: ['./pass-data-cto-p.component.css'],
  // providers:[MyservicesService]    // registering the services on component level
})
export class PassDataCtoPComponent {

  public child:any;
  constructor(private chi:MyservicesService)
  {
    this.child = chi.getData();
    console.log(this.child);

  }

  @Output() public childEvent = new EventEmitter();

  // emit == throw
  fireEvent(){
      this.childEvent.emit("Passed Data from Child to Parent");
  }

}
