import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PassDataCtoPComponent } from './pass-data-cto-p/pass-data-cto-p.component';
import { MyservicesService } from './services/myservices.service';
import  {HttpClientModule} from '@angular/common/http';

@NgModule({

  // a component which we are using puting that component in this array 
  declarations: [
    AppComponent,
    ChildComponent,
    PassDataCtoPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // providers: [],
  providers:[MyservicesService],    // registering the services on App level , i can use this service on all my component

  bootstrap: [AppComponent]
})
export class AppModule { }
