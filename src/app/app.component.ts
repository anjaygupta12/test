import { getLocaleDayNames } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new Project';
  name = "Anjay Gupta";
  valuename1 = "....";
  show = "yes";
  count = 0;
  user = ['anjay','sanjay','sunil','Anil'];
  color = "red";
  display=true;
getName(){
return this.name;
}
object = {
  name:"pitter",
  age:25
}
clicked(name:any,type:any){
alert(name+type);
}

clickinput(type:any){
  // alert(type);
  console.log(type);
  }
  getvalue(value1:any){
    this.valuename1 =value1;
  }
  counters(type:any){
    type==='add'? this.count++:this.count--
  }
  colorchange(){
    this.color="blue";
  }
  togel(){
    this.display=!this.display;
  }
}
