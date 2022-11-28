import { Component } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  name=""
  designation=""
  ph=""


  readValues=()=>
  {
    let data:any=  {
      "name":this.name,
      "designation":this.designation,
      "ph":this.ph
     }
     console.log(data)
  }


}
