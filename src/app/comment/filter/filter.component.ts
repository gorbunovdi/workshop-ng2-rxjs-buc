import { Component } from '@angular/core';

import { CommentService } from '../comment.service';

@Component({
  selector: 'filter',
  template: require('./filter.component.html')
})
export class CommentFilterComponent {
  private filterValue: string = '';

  constructor(
    private commentService: CommentService
  ) {}

  private applyFilter(filterValue) {
    this.commentService.filterComments(filterValue);
  }
}

