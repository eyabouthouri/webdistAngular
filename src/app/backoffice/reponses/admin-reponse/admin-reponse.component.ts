import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReponseService } from 'src/app/Service/reponse.service';

@Component({
  selector: 'app-admin-reponse',
  templateUrl: './admin-reponse.component.html',
  styleUrls: ['./admin-reponse.component.css']
})
export class AdminReponseComponent implements OnInit {
  reponse: any;
  serverImageUrl: string = 'http://localhost:8088/reclamation-service/uploads/';

  constructor(private route: ActivatedRoute,private reponseService: ReponseService) { }

  ngOnInit(): void {
    const reclamationId = +this.route.snapshot.paramMap.get('id');

    this.reponseService.getReponse(reclamationId).subscribe((response) => {    
      this.reponse = response;
    });

  }


}
