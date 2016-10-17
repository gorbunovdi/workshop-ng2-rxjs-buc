import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Comment } from '../comment.model';
import { CommentService } from '../comment.service';

@Component({
  selector: 'comment-new',
  template: require('./new.component.html')
})
export class CommentNewComponent implements OnInit {
  private newComment: Comment;

  constructor(
    private commentService: CommentService
  ) {}

  ngOnInit() {
    this.resetNewComment();
  }

  private sendComment(): void {
    this.commentService.addComment(this.newComment);
    this.resetNewComment();
  }

  private resetNewComment(): void {
    this.newComment = this.commentService.createEmptyComment();
  }
}
