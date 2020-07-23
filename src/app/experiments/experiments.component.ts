import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  plannedExperiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density'];
  experimentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  addExperiment(experiment: string){
    this.plannedExperiments.push(experiment)
  }

  removeExperiment(experiment: string){
    this.plannedExperiments.splice(this.plannedExperiments.indexOf(experiment), 1)
  }

  edit(experiment: string){
    this.experimentBeingEdited = experiment;
  }

  updateExperiments(experiment: string, currentExperiment: string){
    let index = this.plannedExperiments.indexOf(currentExperiment)
    this.plannedExperiments[index] = experiment
    this.experimentBeingEdited=null
  }

 

}
