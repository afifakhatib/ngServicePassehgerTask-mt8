import { Component, Input, OnInit } from '@angular/core';
import { Ipass } from '../model/pass.interface';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerListComponent implements OnInit {

  @Input() passList !: Ipass

  constructor() { }

  ngOnInit(): void {
  }

}
