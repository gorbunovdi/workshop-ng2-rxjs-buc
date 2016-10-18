import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommentService } from './comment.service';
import { CommentComponent } from './comment.component';
import { CommentNewComponent } from './new/new.component';
import { CommentViewComponent } from './view/view.component';
import { CommentCounterComponent } from './counter/counter.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    CommentComponent,
    CommentNewComponent,
    CommentViewComponent,
    CommentCounterComponent
  ],
  providers: [
    CommentService
  ],
  exports: [
    CommentComponent
  ]
})
export class CommentModule {}
