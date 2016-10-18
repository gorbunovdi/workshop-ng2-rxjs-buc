import { Component, OnInit } from '@angular/core';

import { CommentService } from '../comment.service';
import { Comment} from '../comment.model';

@Component({
  selector: 'counter',
  template: require('./counter.component.html')
})
export class CommentCounterComponent implements OnInit {
  private allCounter: number = 0;

  constructor(
    private commentService: CommentService
  ) {}

  ngOnInit() {
    this.commentService.getAllComments$()
      .subscribe(
        (comments: Array<Comment>) => this.allCounter = comments.length
      );
  }
}
