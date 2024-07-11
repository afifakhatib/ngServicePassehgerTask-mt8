import { Component, OnInit } from '@angular/core';
import { Ipass } from '../model/pass.interface';
import { PassengerService } from 'src/app/shared/services/passenger.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

   passArr !: Array<Ipass>

   totalCount !: number;
   checkInCount !: number

  constructor(
    private _pass : PassengerService ,
    private _snackBar : SnackbarService
  ) { }

  ngOnInit(): void {
    this.passArr = this._pass.fetchedPassData()
    this._snackBar.openSnackBar(`Fetched Passenger Info!!`)
    this.getCount()
  }

  getCount(){
    this.totalCount = this.passArr.length
    this.checkInCount = this.passArr.filter(check => check.checkedIn).length
  }

}
