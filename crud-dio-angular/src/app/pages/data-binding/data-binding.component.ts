import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Renato Soares';
  imageURL = 'https://picsum.photos/300/300';
  imageDesc = 'Picsum Photos';
  buttonText = 'Segundo botão';
  textRed = false;
  bgColor = 'green';
  widthImage = 300;
  twoWay = '';
  num = 0;
  destroi = false;
  constructor() { }

  ngOnInit(): void {
  }

  clicou(){
    console.log('Clicou');
    this.text = 'Vitor Sousa'
    this.textRed = true;
  }
  cliqueImage(){
    this.text = 'Joana Darc'
  }
  digitou(text:any){
    this.text = text;
  }

  clicouNoFilho(text: any){
    console.log(text);
    console.log('chegou no pai salvar');
  }

  clicouNoFilhoEnviar(text: any){
    console.log(text);
    console.log('chegou no pai enviar');
    this.incrementa();
  }

  destroiComponent(){
    this.destroi = true
  }
  reconstroiCompoent(){
    this.destroi = false
  }
  incrementa(){
    this.num ++;
  }
}
