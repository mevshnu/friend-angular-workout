import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  name=""
  readSearch=()=>
  {
  let data1:any={"name":this.name}
  console.log(data1)
  }
}
