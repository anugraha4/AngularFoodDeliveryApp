import { Component } from '@angular/core';

@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.css']
})
export class OrderNowComponent {
cname=""
phnumber=""
deladdress=""

order=()=>
{
  let ord:any={"cname":this.cname,"phnumber":this.phnumber,"deladdress":this.deladdress}
  console.log(ord)
}
}
