import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-load-publication',
  templateUrl: './load-publication.component.html',
  styleUrls: ['./load-publication.component.css']
})
export class LoadPublicationComponent implements OnInit {

  id: any;
  publications: any;

  constructor(
    private _route: ActivatedRoute,
    private _publication: PublicationService,
  ) 
  {}

  ngOnInit(): void {

    this._route.params.subscribe((params) => {
      this.id = params['id'];
      if(this.id == 0) {
        console.log("Charge all publications");
        this._publication.getActivePublications().subscribe({
          next: (data) => {
            this.publications = data;
            console.log(this.publications);
          },
          error: (err) => {
            console.log(err);
            alert("Error loading publications");
          } 
        });
      } else {
        //console.log("Charge publication by category");
  
        this._publication.getActivePublicationsOfCategory(this.id).subscribe({
          next: (data: any) => {
            this.publications = data;
            console.log(this.publications);
          },
          error: (err: any) => {
            console.log(err);
            alert("Error loading publications");
          }
      });
      
    }
    });
    
    

}

}