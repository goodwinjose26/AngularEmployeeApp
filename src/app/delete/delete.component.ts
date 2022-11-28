import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  name=""

  deleteValues=()=>
  {
    let data:any=  {
      "name":this.name
     }
     console.log(data)
  }
}
