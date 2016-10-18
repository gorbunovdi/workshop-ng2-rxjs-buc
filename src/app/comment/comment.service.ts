import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

import { Comment } from './comment.model';

@Injectable()
export class CommentService {
  private allComments$: BehaviorSubject<Array<Comment>> = new BehaviorSubject([]);
  private newComment$: Subject<Comment> = new Subject<Comment>();

  constructor() {
    this.initAllCommentsStream();
  }

  public getAllComments$() {
    return this.allComments$.asObservable();
  }

  private initAllCommentsStream() {
    this.newComment$
      .scan((accumulatedComments: Array<Comment>, newComment: Comment) => {
        return [newComment, ...accumulatedComments];
      }, [])
      .subscribe(this.allComments$);
  }

  public addComment(comment: Comment): void {
    this.newComment$.next(comment);
  }
}
