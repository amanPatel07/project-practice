import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-patient-table-presentation',
  templateUrl: './my-patient-table-presentation.component.html',
  styles: [
  ]
})
export class MyPatientTablePresentationComponent implements OnInit {

  public _patientList:any[];
  @Input() public set patient(list:any[] | null){
    if(list){
      this._patientList = list
    }
  } 

  public get patient():any[]{
    return this._patientList;
  }

  @Output() public getId:EventEmitter<number>;

  public selected:number = 1;
  public viewTotalProfile = 9;
  public viewProfile = [];


  constructor() { 
    this.getId = new EventEmitter();
  }

  ngOnInit(): void {
    this.getId.emit(this.selected);
  }

  public onpatient(id:number){
    this.selected = id;
    this.getId.emit(this.selected);
  }

  public appendItems(){

  }

  public scrollDown(event:any){
    console.log(event);
  }

}
