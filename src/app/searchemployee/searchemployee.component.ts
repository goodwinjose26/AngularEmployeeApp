import { Component } from '@angular/core';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent {
  name=""

  searchValues=()=>
  {
    let data:any =
    {
      "name":this.name
    }
    console.log(data)
  }

}
