import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""
  constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any= {"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
    console.log(data)
    this.api.adddata(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.status == "success")
        {
          alert("Friend added successfully")
          this.name=""
          this.friendName=""
          this.friendNickName=""
          this.DescribeYourFriend=""
        }
        else
        {
          alert("something went wrong")
        }
      }
    )
  }

}
