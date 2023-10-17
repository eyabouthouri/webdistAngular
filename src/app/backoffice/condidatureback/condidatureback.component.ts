import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CondidatureService } from 'src/app/Service/condidature.service';
import { Condidature } from 'src/app/model/condidature';

@Component({
  selector: 'app-condidatureback',
  templateUrl: './condidatureback.component.html',
  styleUrls: ['./condidatureback.component.css']
})
export class CondidaturebackComponent implements OnInit {
  nom :any
  prenom:any
  email:any
  tel:any
  pieceJointe:any
  lettreMotivation:any
  listcondid:any

  constructor(private condidatureService: CondidatureService, private cdr: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.condidatureService.getallCondidature().subscribe(data => {
      this.listcondid = data;
      this.cdr.detectChanges();
    });
  }

  download(fileName: string): void {
    this.condidatureService.downloadFile(fileName).subscribe(blob => {
      let link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(link.href);
    });
  }


  delete(c: Condidature) {
    let i = this.listcondid.indexOf(c);
  this.condidatureService.deleteCondidature(c.idCondidature).subscribe(
      ()=>this.listcondid.splice(i, 1)
    )
  }
  
}