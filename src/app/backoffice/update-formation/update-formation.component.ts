import { FormationService } from 'src/app/Service/formation.service';
import { Component, OnInit ,Input} from '@angular/core';
import { Formation } from 'src/app/model/Formation';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {
    @Input() openModel : boolean =true;
  @Input() formation : Formation ;
  constructor(private FormationService:FormationService) { }

  ngOnInit(): void {
  }
  updateFormation(formation:Formation){
             this.FormationService.updateformation(formation,formation.idFormation).subscribe(data=>{
              console.log(data)
             })
  }
}
