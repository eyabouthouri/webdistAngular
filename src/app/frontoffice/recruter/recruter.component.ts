import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.css']
})
export class RecruterComponent implements OnInit {
  items: any[] = [];
  searchTerm: string = '';
  minPreHour: number = 0;
  maxPreHour: number = 100;
  filteredItems: any[] = []; // Define a filteredItems property

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems() {
    const apiUrl = 'http://localhost:8081/resume-service/api/freelancer-resumes';

    this.http.get(apiUrl).subscribe(
      (data: any[]) => {
        this.items = data;
        // Initialize filteredItems with all items
        this.filteredItems = [...this.items];
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  applyFilter() {
    // Filter the items based on filter criteria (e.g., name, minPreHour, maxPreHour)
    this.filteredItems = this.items.filter((item) => {
      const preHour = parseFloat(item.preHour);
      return (
        preHour >= this.minPreHour &&
        preHour <= this.maxPreHour &&
        (item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.professionTitle.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    });
  }

  
  
  downloadPdf() {
    const min = 10000000; // Minimum 8-digit number
    const max = 99999999; // Maximum 8-digit number
  
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/images/a12ze25tf56ttf.pdf.pdf'); // Replace with the path to your PDF file
    
    link.setAttribute('download', randomNum.toString()+'.pdf'); // Set the desired file name
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  isModalOpen = false;

  openContactModal() {
    this.isModalOpen = true;
  }

  closeContactModal() {
    this.isModalOpen = false;
  }

  submitForm() {
   alert("email sent");
    this.closeContactModal(); // Close the modal after submission if needed
  }

}
