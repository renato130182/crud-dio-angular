import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cicle',
  templateUrl: './life-cicle.component.html',
  styleUrls: ['./life-cicle.component.css']
})
export class LifeCicleComponent implements 
OnInit,OnChanges,DoCheck,AfterContentInit, AfterContentChecked,AfterViewChecked,OnDestroy,AfterViewInit{
  @Input() num:number = 10;
  constructor() { 
    console.log('Construtor')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges',changes)
  }
  ngOnInit(): void {
    console.log('ngOnInit')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')    
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

}
