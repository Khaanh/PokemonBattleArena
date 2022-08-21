import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { ProfileNameComponent } from './profile-name/profile-name.component';
import { ProfileHolderComponent } from './profile-holder/profile-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfilePicComponent,
    ProfileNameComponent,
    ProfileHolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
