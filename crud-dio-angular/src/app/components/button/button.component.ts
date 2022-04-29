import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  textFilho ='Clicou Filho';
  @Input() text:string = 'Clique';
  @Input() type:string = ' btn-default';
  @Output() clickChildren = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  btnClick(){
    console.log(this.textFilho);
    this.clickChildren.emit(this.textFilho);
  }
}
