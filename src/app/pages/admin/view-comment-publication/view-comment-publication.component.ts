import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-view-comment-publication',
  templateUrl: './view-comment-publication.component.html',
  styleUrls: ['./view-comment-publication.component.css']
})
export class ViewCommentPublicationComponent implements OnInit {

  id: any;
  title: any;
  comments = []

  constructor(
    private _route: ActivatedRoute,
    private _comment: CommentService
  ) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.title = this._route.snapshot.params['title'];
    this._comment.getCommentsOfPublication(this.id).subscribe({
      next: (data : any) => {
        console.log(data)
        this.comments = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
