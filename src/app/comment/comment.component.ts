import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Comment } from './comment.model';
import { CommentService } from './comment.service';

@Component({
  selector: 'comments',
  template: require('./comment.component.html')
})
export class CommentComponent {
  private comments$: Observable<Array<Comment>>;

  constructor(
    private commentService: CommentService
  ) {
    this.comments$ = this.commentService.getFilteredComments$();
  }
}
