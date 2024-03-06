import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-pass-data-cto-p',
  templateUrl: './pass-data-cto-p.component.html',
  styleUrls: ['./pass-data-cto-p.component.css']
})
export class PassDataCtoPComponent {

  @Output() public childEvent = new EventEmitter();

  // emit == throw
  fireEvent(){
      this.childEvent.emit("Passed Data from Child to Parent");
  }

}
