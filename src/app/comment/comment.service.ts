import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Comment } from './comment.model';

@Injectable()
export class CommentService {
  private comments$: BehaviorSubject<Array<Comment>> = new BehaviorSubject([]);

  public getComments$(): Observable<Array<Comment>> {
    return this.comments$.asObservable();
  }

  public addComment(comment: Comment): void {
    this.comments$.take(1).subscribe(
      (comments: Array<Comment>) => this.comments$.next([comment, ...comments])
    );
  }

  public createEmptyComment(): Comment {
    return {text: ''};
  }
}
