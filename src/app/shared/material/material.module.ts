import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

const MaterialModuleArr = [
      MatCardModule,
      MatButtonModule,
      MatInputModule,
      MatListModule,
      MatDividerModule,
      MatSnackBarModule,
      MatDialogModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MaterialModuleArr
  ],
  exports : [
    ...MaterialModuleArr
  ]
})
export class MaterialModule { }


// passengerInfo  : Array<Ipassenger> = [
//   {
//     id: 1,
//     fullname: 'Stephen',
//     checkedIn: true,
//     checkInDate: 1490742000000,
//     children: null,
//   },
//   {
//     id: 2,
//     fullname: 'Rose',
//     checkedIn: false,
//     checkInDate: null,
//     children : [
//       { name: 'Ted', age: 12 },
//       { name: 'Chloe', age: 7 },
//     ],
//   },
//   {
//     id: 3,
//     fullname: 'James',
//     checkedIn: true,
//     checkInDate: 1491606000000,
//     children: null,
//   },
//   {
//     id: 4,
//     fullname: 'Louise',
//     checkedIn: true,
//     checkInDate: 1488412800000,
//     children: [{ name: 'Jessica', age: 1 }],
//   },
//   {
//     id: 5,
//     fullname: 'Tina',
//     checkedIn: false,
//     checkInDate: null,
//     children: null,
//     },
// ]