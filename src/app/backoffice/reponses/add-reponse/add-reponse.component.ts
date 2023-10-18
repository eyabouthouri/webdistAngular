import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReponseService } from 'src/app/Service/reponse.service';
import { Reponse } from 'src/app/model/reponse';

@Component({
  selector: 'app-add-reponse',
  templateUrl: './add-reponse.component.html',
  styleUrls: ['./add-reponse.component.css']
})
export class AddReponseComponent implements OnInit {

  reponse: Reponse = new Reponse();
  selectedFile: File;
  selectedFileName: string;
  public idReclamation: number;

  constructor(private reponseService: ReponseService,private route: Router, private currentRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.idReclamation = Number(this.currentRoute.snapshot.paramMap.get('id'));

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

  saveReponse() {
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('pieceJointe', this.selectedFile, this.selectedFileName);
    }
    
    formData.append('reponse', JSON.stringify(this.reponse));
    console.log("bbbbbbbbbbbbbbbb",this.idReclamation)
    console.log("aaaaaaaaaaaaa",this.idReclamation, this.reponse)
    this.reponseService.addReponse(this.idReclamation,formData).subscribe(
      () => {
        this.route.navigate(['backoffice/adminrec']);
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
