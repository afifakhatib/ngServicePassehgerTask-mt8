import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component';
import { PassengercountComponent } from './passengercount/passengercount.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { PassengercardComponent } from './passengercard/passengercard.component';
import { MaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengercountComponent,
    PassengerListComponent,
    PassengercardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports :[
    PassengerDashboardComponent,
    PassengercountComponent,
    PassengerListComponent,
    PassengercardComponent
  ]
})
export class PassengerModule { }
