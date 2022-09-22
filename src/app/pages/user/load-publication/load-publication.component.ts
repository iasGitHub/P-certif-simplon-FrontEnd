import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationService } from 'src/app/services/publication.service';
import { CategoryService } from 'src/app/services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-load-publication',
  templateUrl: './load-publication.component.html',
  styleUrls: ['./load-publication.component.css']
})
export class LoadPublicationComponent implements OnInit {

  id: any;
  publications: any = [];
  categories: any;

  constructor(
    private _route: ActivatedRoute,
    private _publication: PublicationService,
    private _cat: CategoryService,
    private _snack: MatSnackBar
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
    
    this._cat.categories().subscribe({
      next: (data) => {
        this.categories = data;
    },
    error: (error) => {
      console.log(error);
      this._snack.open("Error loading categories", "OK", {
        duration: 3000
      });
    }
  });
    
}

searchText: string = '';

onSearchTextEntered(searchValue: string) {
  this.searchText = searchValue;
  //console.log(this.searchText);
}

}