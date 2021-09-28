import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListpService } from './listp.service';
import { ListpComponent } from './listp/listp.component';

@NgModule({
  declarations: [
    AppComponent,
    ListpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ListpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
