import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/Service/reclamation.service';
import { Categorie } from 'src/app/model/categorie.enum';
import { Evaluation } from 'src/app/model/evaluation.enum';

@Component({
  selector: 'app-reclamations-non-traitees',
  templateUrl: './reclamations-non-traitees.component.html',
  styleUrls: ['./reclamations-non-traitees.component.css']
})
export class ReclamationsNonTraiteesComponent implements OnInit {
  selectedCategorie: string = '';
  selectedEvaluation: string = '';
  public categories = Object.values(Categorie);
  
  reclamations : any[];
  serverImageUrl: string = 'http://localhost:8088/reclamation-service/uploads/';

  constructor(private reclamationService:ReclamationService) { }

  ngOnInit(): void {
    this.reclamationService.getReclamationsNonTraitees().subscribe((data: any[]) => {
      this.reclamations = data;
    });

  }
  showAll(){
    
    this.reclamationService.getReclamationsNonTraitees().subscribe(
      (a) => {
        this.reclamations = a;
      },
      (error) => {
      }
    )
  }

  filter() {
    
      // Filter based on selected "evaluation" and "categorie"
      this.reclamationService.filter(this.selectedEvaluation, this.selectedCategorie).subscribe(
        (filteredReclamations) => {
          this.reclamations = filteredReclamations;
        },
        (error) => {
          // Handle errors if necessary
        }
      );
    }



}
