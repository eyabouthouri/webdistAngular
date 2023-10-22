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
  ngOnInit(): void {
    this.inscri=new Inscription()
  }
  inscriver(inscription:Inscription){
    console.log(this.idFormation)
     this.inscriptionservice.inscription(this.idFormation,inscription,'1').subscribe(data=>{
      console.log(data)
     })
  }

  
}
