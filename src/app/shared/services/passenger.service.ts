import { Injectable } from '@angular/core';
import { UuidService } from './uuid.service';
import { SnackbarService } from './snackbar.service';
import { Ipass } from '../components/passenger/model/pass.interface';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  passengerInfo : Array<Ipass>  = [
  {
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null,
  },
  {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children : [
      { name: 'Ted', age: 12 },
      { name: 'Chloe', age: 7 },
    ],
  },
  {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null,
  },
  {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Jessica', age: 1 }],
  },
  {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null,
    children: null,
    },
]


  constructor(
    private _uuid : UuidService,
    private _snackbar : SnackbarService,
  ) { }

  fetchedPassData(){
    // api call
    return this.passengerInfo
  }


  updatePass(updateObj : Ipass){
    let getIndexId = this.passengerInfo.findIndex(find => find.id === updateObj.id)
    let oldObj = this.passengerInfo[getIndexId]
    this.passengerInfo[getIndexId] = updateObj
    this._snackbar.openSnackBar(`${oldObj.fullname} is updated to ${updateObj.fullname} successfully!!`)
  }

  removePass(removePass : Ipass){
    let getIndex = this.passengerInfo.findIndex(find => find.id === removePass.id)
    this.passengerInfo.splice(getIndex , 1)
    this._snackbar.openSnackBar(`passenger ${removePass.fullname} is removed successfully!!`)
  }
}
