import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipass } from '../model/pass.interface';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-passengercard',
  templateUrl: './passengercard.component.html',
  styleUrls: ['./passengercard.component.scss']
})
export class PassengercardComponent implements OnInit { 

  @Input() Passenger !: Ipass

  @Output() emitRemoveMsg : EventEmitter<boolean> = new EventEmitter<boolean>()

  isEditMode : boolean = false 

  constructor(
    private _pass : PassengerService
  ) { }

  ngOnInit(): void {
    
  }

  onUpdatePass(fullname : HTMLInputElement){
      console.log(fullname)
      this.Passenger = {...this.Passenger , fullname : fullname.value}
      this.isEditMode = false
      this._pass.updatePass(this.Passenger)
  }

  onRemove(removePass : Ipass){
    let confirmation = confirm(`Are you sure? Do you want to remove this passenger ?`)
      if(confirmation){
        this._pass.removePass(removePass)
        this.emitRemoveMsg.emit(true)
      }
  }

}
