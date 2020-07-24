import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   buttonStatus: boolean = true;
   maxMass: boolean = false;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:

   addItem(equipObj: object){
     this.cargoHold.push(equipObj)
     this.cargoMass += equipObj['mass']    
     if(this.maximumAllowedMass - this.cargoMass > 200 ){
      this.maxMass = false
   } else if (this.maximumAllowedMass - this.cargoMass <=200){
      this.maxMass = true
   }
}

  disableButton(equipObj: object){
    if(this.cargoHold.length === this.maxItems || this.cargoMass + equipObj['mass'] > this.maximumAllowedMass){
      return this.buttonStatus = true
    } else{
      return this.buttonStatus = false
    }
  }

emptyHold(){
  this.cargoHold= []
  this.cargoMass = 0
}


}
   

