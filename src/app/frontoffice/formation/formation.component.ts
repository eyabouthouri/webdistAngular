import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/Service/formation.service';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {


  constructor(private formationservice:FormationService) { }
  listFormation:any[]=[]
  idFormation:any
  addModal?:boolean=false;

  ngOnInit(): void {
    this.formationservice.getall_Formation().subscribe(data=>{
     this.listFormation = data
     console.log(data)
    })


}
openModal(id:any){
  this.addModal=true;
   this.idFormation=id
  console.log(this.addModal)
 }
}
