import { Inscription } from '../../model/Inscription';
import { Component, OnInit ,Input} from '@angular/core';
import { FormationService } from 'src/app/Service/formation.service';
import { Formation } from 'src/app/model/Formation';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private inscriptionservice:FormationService) { }
  @Input() openModel : boolean =true;
  @Input() idFormation : any ;
  inscri:Inscription
  iduser:any= localStorage.getItem('iduser')
  inscriptiontermine:boolean=false
  ngOnInit(): void {
    this.inscri=new Inscription()
    this.inscri.email=localStorage.getItem('email')
    this.inscri.nom=localStorage.getItem('firstname')
    this.inscri.prenom=localStorage.getItem('lastname')
    console.log(this.iduser)
  }
  inscriver(inscription:Inscription){
    console.log(this.idFormation)
     this.inscriptionservice.inscription(this.idFormation,inscription,this.iduser).subscribe(data=>{
      console.log(data)
      this.inscriptiontermine=true
     })
  }


}
