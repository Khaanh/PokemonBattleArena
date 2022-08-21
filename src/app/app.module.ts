import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile-components/profile/profile.component';
import { ProfilePicComponent } from './profile-components/profile-pic/profile-pic.component';
import { ProfileNameComponent } from './profile-components/profile-name/profile-name.component';
import { ProfileHolderComponent } from './profile-components/profile-holder/profile-holder.component';
import { ElemEnergyComponent } from './skills-components/elem-energy/elem-energy.component';
import { ElemPowerComponent } from './skills-components/elem-power/elem-power.component';
import { ElemHealthComponent } from './skills-components/elem-health/elem-health.component';
import { ElemDefenseComponent } from './skills-components/elem-defense/elem-defense.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfilePicComponent,
    ProfileNameComponent,
    ProfileHolderComponent,
    ElemEnergyComponent,
    ElemPowerComponent,
    ElemHealthComponent,
    ElemDefenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
