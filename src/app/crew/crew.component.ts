import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  crewStatus: string = ""

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:

  addCrewMember(candidateObj: object){
    if(!this.crew.includes(candidateObj) && this.crew.length <3){
      this.crew.push(candidateObj)
    } else if (this.crew.includes(candidateObj)){
      this.crew.splice(this.crew.indexOf(candidateObj), 1)
    }
  }

crewColorChange(crewObject:object){
  if(this.crew.includes(crewObject)){
    return this.inCrew = true
  } else {
    return this.inCrew =  false
  }
}

crewHeadingChange(){
  if(this.crew.length === 3){
    return this.crewStatus = " Full"
  } else {
    return this.crewStatus = ""
  }
}

}
