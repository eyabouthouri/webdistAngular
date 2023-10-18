import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/model/reclamation';
import { ReclamationService } from 'src/app/Service/reclamation.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {

  reclamation: Reclamation = new Reclamation();
  selectedFile: File;
  selectedFileName: string;

  constructor(private reclamationServcie: ReclamationService,private route: Router) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.selectedFileName = this.selectedFile ? this.selectedFile.name : '';
  }
    
  onUpload() {
    if (!this.selectedFile) {
      console.log('No file selected.');
      return;
    }
  }

  saveReclamation() {
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('pieceJointe', this.selectedFile, this.selectedFileName);
    }
    
    formData.append('reclamation', JSON.stringify(this.reclamation));

    this.reclamationServcie.addReclamation(formData).subscribe(
      () => {
        this.route.navigate(['reclamations/listreclamations']);
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        console.log('Complete');
      }
    );
  }
  
}
