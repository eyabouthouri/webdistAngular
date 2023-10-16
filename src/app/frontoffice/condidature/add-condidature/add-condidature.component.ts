import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CondidatureService } from 'src/app/Service/condidature.service';
import { Condidature } from 'src/app/model/condidature';

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


    selectedFile: File = null;

    onFileChange(event): void {
      if(event.target.files && event.target.files[0]) {
        this.selectedFile = <File>event.target.files[0];
        
        const reader = new FileReader();
        reader.onload = (e) => {
          // Assert that e.target.result is a string
          const resultString: string = e.target.result as string;
          const base64Data = resultString.split(',')[1];
          this.condidature.cvBase64 = base64Data;
        }
        reader.readAsDataURL(this.selectedFile);
      }
    }
    
    uploadFile(): void {
      if(!this.selectedFile) {
        console.error("No file selected!");
        return;
      }
  
      // À partir d'ici, vous pouvez envoyer le fichier `this.selectedFile` à votre serveur
      // Utilisez HttpClient pour effectuer la requête POST avec le fichier
    }
  
  
  
  
  
    SaveCondid() {  
      if (!this.condidature.cvBase64) {
          console.error("No CV uploaded!");
          return;
      }

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