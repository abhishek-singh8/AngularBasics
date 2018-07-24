import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-component',
  template: `<div>   
             Welcome {{2+2 +name  }} to inline HTML 
             <h2>{{name.length}}</h2>
             <h2 class="text-success">{{name.toUpperCase()}}</h2>
             <h2 [class] ="specialText">Method testing {{methodTest()}}</h2>
             <h2 [class.text-danger]="isTrue"> class.text-danger</h2>
             <h2 [ngClass]="messageClasses"> NGCLASS  multiple class in one</h2>

             </div>

             <input type="text" value="Abhishek">
             <input [id]="myId" type="text" value="summit">
             <input id="{{myId}}" type="text" value="summit">
             <input [disabled]="isDisabled" id="{{myId}}" type="text" value="summit">`;

  styles: [`
          .text-success{
            color:green;
          }
          .text-danger{
            color:red;
          }
          .text-special{
            font-size:italic;
          }
         `]
})



export class BindingComponentComponent implements OnInit {
  
  public name ="AbhishekSingh";
  public myId ="testId";
  public isDisabled="true";
  public specialText="text-special"
  public isTrue="true";
  public isSpecial="true";
  public messageClasses={
         "text-success": this.isTrue;
         "text-danger" : !this.isTrue;
         "text-special": this.isSpecial;
         }
  constructor() { }
  
  methodTest(){
     return "HELLO"+this.name;
  }

  ngOnInit() {
  }

}
