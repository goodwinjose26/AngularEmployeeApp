import { Component } from '@angular/core';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent {
 data:any=[
  {
    "name":"GOODWIN",
    "designation":"software engineer",
    "ph":9807675465
   },
   {
    "name":"AMRITHA",
    "designation":"software engineer",
    "ph":5678998765
   },
   {
    "name":"ARUN",
    "designation":"HR",
    "ph":1234567890
   },
   {
    "name":"Akhil",
    "designation":"Accountant",
    "ph":9973425665
   },
   {
    "name":"AMAL",
    "designation":"sales",
    "ph":11111111
   }
 ]

}
