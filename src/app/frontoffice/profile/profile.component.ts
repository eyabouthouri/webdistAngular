import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName: string | null;
  welcometext:string | null;
  update:boolean;
  resumeid:string | null;
  data = {
    name: '',
    email: '',
    professionTitle: '',
    location: '',
    web: '',
    preHour: 0,
    age: 0,
    userId:'',
    resumePdf: null

    // Add more fields as needed
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.update=false;
    this.userName = localStorage.getItem('username');
    this.data.userId=localStorage.getItem('iduser');
    this.http.get('http://localhost:8081/resume-service/api/freelancer-resumes/'+localStorage.getItem('iduser')).subscribe((response) => {
    // Handle the response here
    if (response===null)
    {this.welcometext ="vous n'avez pas encore rempli votre CV, veuillez remplir votre CV pour avoir plus de chances d'être embauché"}
    else
    {this.welcometext ="assurez-vous que votre CV est toujours à jour";
    this.update=true;
    this.resumeid=response['id'];
    this.data = {
      name: response['name'],
      email: response['email'],
      professionTitle: response['professionTitle'],
      location: response['location'],
      web: response['web'],
      preHour: response['preHour'],
      age: response['age'],
      userId: response['userId'],
      resumePdf: response['resumePdf']
  
      // Add more fields as needed
    };
  
  }

  }, (error) => {
    // Handle any errors here
    console.error(error);
  });
    
  }

  onSubmit() {
    if(this.update===false)
    {
      this.http.post('http://localhost:8081/resume-service/api/freelancer-resumes', this.data)
      .subscribe(response => {
        // Handle the response as needed
        console.log('Resume submitted:', response);
        alert("Resume ajouté avec success")
      });
    }
    else if(this.update===true)
    {
      this.http.put('http://localhost:8081/resume-service/api/freelancer-resumes/'+this.resumeid, this.data)
      .subscribe(response => {
        // Handle the response as needed
        console.log('Resume updated:', response);
        alert("Resume mis a jour avec success")
      });
    }
   
  }

}
