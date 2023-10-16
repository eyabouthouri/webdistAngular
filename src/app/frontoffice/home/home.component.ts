import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/Service/formation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private formationservice:FormationService) { }
  listFormation:any[]=[]
  ngOnInit(): void {
    this.formationservice.getall_Formation().subscribe(data=>{
     this.listFormation = data
    })

}
}
