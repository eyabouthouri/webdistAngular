import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CondidatureService } from 'src/app/service/condidature.service';
import { Condidature } from 'src/app/service/model/condidature';

@Component({
  selector: 'app-add-condidature',
  templateUrl: './add-condidature.component.html',
  styleUrls: ['./add-condidature.component.css']
})
export class AddCondidatureComponent implements OnInit {
  public condidature:Condidature 
  public action: string;

  public projetId: number;

  form: FormGroup;
   
  constructor(private condidatureService:CondidatureService,
    private route: Router, private currentRoute:ActivatedRoute, private fb : FormBuilder) { }
  
    ngOnInit(): void {
      this.projetId = +this.currentRoute.snapshot.paramMap.get('id');
      console.log("Récupéré projetId:", this.projetId);
      
      this.action = 'Add new';
      this.condidature = new Condidature();
 
    }


    SaveCondid() {  
      this.condidatureService.addCondidatureToProjet(this.projetId, this.condidature).subscribe(
        () => {
          this.route.navigate(['projet/listprojet']);
        },
        error => {
          console.error('Error:', error);
        },
        () => {
          console.log('Complete');
        }
      );
    }

}
