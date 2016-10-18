import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

import { Comment } from './comment.model';

@Injectable()
export class CommentService {
  private filteredComments$: Observable<Array<Comment>>;
  private allComments$: BehaviorSubject<Array<Comment>> = new BehaviorSubject([]);
  private newComment$: Subject<Comment> = new Subject<Comment>();
  private commentsFilter$: Subject<string> = new Subject<string>();

  constructor() {
    this.initAllCommentsStream();
    this.initFilteredCommentsStream();
    this.initLogger();
  }

  public getAllComments$() {
    return this.allComments$.asObservable();
  }

  public getFilteredComments$() {
    return this.filteredComments$;
  }

  public getNewComment$() {
    return this.newComment$.asObservable();;
  }

  private initLogger() {
    this.newComment$.subscribe(
      (comment: Comment) => console.log('New comment', comment.text)
    );
  }

  private initFilteredCommentsStream() {
    let filter$ = this.commentsFilter$
      .startWith('')
      .debounceTime(200);

    this.filteredComments$ = Observable.combineLatest(
      this.allComments$, filter$
    )
      .map((params: [Array<Comment>, string]) => {
        let [comments, filterValue] = params;
        return comments.filter(
          (comment) => comment.text.includes(filterValue)
        );
      });
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

  public filterComments(value: string) {
    this.commentsFilter$.next(value);
  }
}
