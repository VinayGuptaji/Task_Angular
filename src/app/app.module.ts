import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PassDataCtoPComponent } from './pass-data-cto-p/pass-data-cto-p.component';

@NgModule({

  // a component which we are using puting that component in this array 
  declarations: [
    AppComponent,
    ChildComponent,
    PassDataCtoPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
