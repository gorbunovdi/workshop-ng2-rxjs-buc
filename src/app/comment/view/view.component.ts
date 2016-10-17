import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comment-view',
  template: require('./view.component.html')
})
export class CommentViewComponent {
  @Input() comment;
}
