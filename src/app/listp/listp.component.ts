import { Component, OnInit } from '@angular/core';
import { ListpService } from '../listp.service';

@Component({
  selector: 'participants',
  templateUrl: './listp.component.html',
  styleUrls: ['./listp.component.css']
})
export class ListpComponent implements OnInit {

  constructor(service: ListpService) { 
    this.all = service.getParticipants();

    this.male = [];
    this.all.forEach((value:any,index:any)=>{
      if(value.gender=='male') this.male.push(value);
    });
    this.female = [];
    this.all.forEach((value:any,index:any)=>{
      if(value.gender=='female') this.female.push(value);
    });
    this.participants = service.getParticipants();
  }

  ngOnInit(): void {
  }

  title = 'List of Participants'
  participants:any;
  female:any;
  male:any;
  all:any;


  Female(){
    this.participants = this.female;
  }
  Male(){
    this.participants = this.male;
  }
  All(){
    this.participants = this.all;
  }
}
