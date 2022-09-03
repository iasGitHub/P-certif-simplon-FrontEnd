import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  id: any;
  user :any;
  publications: any;

  constructor(private _route: ActivatedRoute,private _publication: PublicationService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this._publication.getPublication(this.id).subscribe({
      next: (data) => {
        this.publications = data;
        // console.log(this.publications);
      },
      error: (err) => {
        console.log(err);
        alert("Error loading publications data");
      } 
    });
  }

}
