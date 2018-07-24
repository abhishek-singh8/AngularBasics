import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-component',
  template: `<div>   
             Welcome {{2+2 +name  }} to inline HTML 
             <h2>{{name.length}}</h2>
             <h2>{{name.toUpperCase()}}</h2>
             <h2>Method testing {{methodTest()}}</h2>
             </div>`,
             
  styleUrls: ['./binding-component.component.css']
})



export class BindingComponentComponent implements OnInit {
  
  public name ="AbhishekSingh";
  constructor() { }
  
  methodTest(){
     return "HELLO"+this.name;
  }

  ngOnInit() {
  }

}
