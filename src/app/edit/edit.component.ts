import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  name=""

  editValues=()=>
  {
    let data:any =
    {
      "name":this.name
    }
    console.log(data)
  }

}
