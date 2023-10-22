import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReponseService } from 'src/app/Service/reponse.service';
import { Reponse } from 'src/app/model/reponse';

@Component({
  selector: 'app-show-reponse',
  templateUrl: './show-reponse.component.html',
  styleUrls: ['./show-reponse.component.css']
})
export class ShowReponseComponent implements OnInit {
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
