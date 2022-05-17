import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

export interface LifecycleEvent{
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-lyfecycle-child',
  templateUrl: './lyfecycle-child.component.html',
  styleUrls: ['./lyfecycle-child.component.css']
})
export class LyfecycleChildComponent implements OnInit, OnChanges, OnDestroy {

  @Input() name!:string;
  @Input() age!:number;
  @Input() food!:string;

  public events: LifecycleEvent[]=[];
  nextEventId: number =0;
  colors: string[] = ["accent", "warn", "primary"] ;
  
  constructor() {
    console.log(this.name + " - constructor ");
    this.newEvent("constructor");
   }

  ngOnInit(): void {
    console.log(this.name + " - ngOnInit ");
    this.newEvent("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.name + " - ngOnChanges ");
    this.newEvent("ngOnChanges");
  }

  ngAfterContentInit(){
    console.log(this.name + " - ngAfterContentInit ");
    this.newEvent("ngAfterContentInit");
  }

  ngAfterViewInit(){
    console.log(this.name + " - ngAfterViewInit ");
    this.newEvent("ngAfterViewInit");
  }

  ngOnDestroy(): void {
    console.log(this.name + " - ngOnDestroy ");
    this.newEvent("ngOnDestroy");
  }

  newEvent(name: string){
    let id= this.nextEventId++;
    this.events.push({id: id, color: this.colors[id%this.colors.length] , name: name});
    setTimeout(()=>{
      let idx = this.events.findIndex((e) => e.id=id);
      if (idx ==0)
        this.events.splice(idx, 1);
    }, 3000 + this.events.length)
  }
}
