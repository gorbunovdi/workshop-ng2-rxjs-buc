import { Component } from '@angular/core';

import { Comment} from '../comment.model';
import { CommentService } from '../comment.service';

@Component({
  selector: 'latest',
  template: require('./latest.component.html')
})
export class CommentLatestComponent {
  private latestComment: string = '';

  constructor(
    private commentService: CommentService
  ) {
    this.commentService.getNewComment$()
      .subscribe(
        (comment: Comment) => this.latestComment = comment.text
      );
  }
}

