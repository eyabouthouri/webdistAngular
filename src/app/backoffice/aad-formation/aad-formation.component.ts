import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormationService } from 'src/app/Service/formation.service';
import { Formation } from 'src/app/model/Formation';

@Component({
  selector: 'app-aad-formation',
  templateUrl: './aad-formation.component.html',
  styleUrls: ['./aad-formation.component.css']
})
export class AadFormationComponent implements OnInit {

  constructor(private formationservice:FormationService ,private route:Router) { }
  formation:Formation
  selectedFile: File | null = null;

  ngOnInit(): void {
    this.formation=new Formation()
  }
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
  addformation(formation:Formation){

    console.log(formation)
    this.formationservice.addformation(formation,this.selectedFile).subscribe(data=>{
      console.log(data)
      this.route.navigate(['/backoffice/back'])

    })
  }

}
