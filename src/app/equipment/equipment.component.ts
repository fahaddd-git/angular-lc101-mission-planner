import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipmentItems: string[] = ['Command Module', 'Space Camera', 'Food', 'Oxygen Tanks'];
  equipmentBeingEdited: string = null
  


  constructor() { }



  ngOnInit() {
  }

  addEquipment(thing: string){
    this.equipmentItems.push(thing)
  }
  removeEquipment(thing: string){
    this.equipmentItems.splice(this.equipmentItems.indexOf(thing), 1)
  }

  updateEquipment(equipment: string, item: string){
    let index = this.equipmentItems.indexOf(item);
    this.equipmentItems[index] =  equipment
    
    this.equipmentBeingEdited= null
    
  }

  edit(thing: string){
    this.equipmentBeingEdited = thing;
  }



}
