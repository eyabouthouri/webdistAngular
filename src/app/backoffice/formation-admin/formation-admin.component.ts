import { Formation } from './../../model/Formation';
import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/Service/formation.service';

@Component({
  selector: 'app-formation-admin',
  templateUrl: './formation-admin.component.html',
  styleUrls: ['./formation-admin.component.css']
})
export class FormationAdminComponent implements OnInit {

  constructor(private formationservice:FormationService) { }
  listFormation:any[]=[]
  formation:Formation
  addModal?:boolean=false;

  ngOnInit(): void {
    this.formationservice.getall_Formation().subscribe(data=>{
     this.listFormation = data
     console.log(data)
    })


}
openModal(formation:any){
  this.addModal=true;
   this.formation=formation
  console.log(this.addModal)
 }
  delete(formation:Formation)
  {
    let i = this.listFormation.indexOf(formation);

    this.formationservice.deleteFormation(formation.idFormation).subscribe(
      ()=>this.listFormation.splice(i,1)
    )
  }
}
