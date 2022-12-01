import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
name=""
number=""
mail=""
address=""
usr=""
pass=""
conpass=""

sign =()=>
{
  let signup:any={"name":this.name,"number":this.number,"mail":this.mail,"address":this.address,"usr":this.usr,"pass":this.pass,"conpass":this.conpass}
  console.log(signup)
}
}
