import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommentService } from './comment.service';
import { CommentComponent } from './comment.component';
import { CommentNewComponent } from './new/new.component';
import { CommentViewComponent } from './view/view.component';
import { CommentCounterComponent } from './counter/counter.component';
import { CommentFilterComponent } from './filter/filter.component';
import { CommentLatestComponent } from './latest/latest.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    CommentComponent,
    CommentNewComponent,
    CommentViewComponent,
    CommentCounterComponent,
    CommentFilterComponent,
    CommentLatestComponent,
  ],
  providers: [
    CommentService
  ],
  exports: [
    CommentComponent
  ]
})
export class CommentModule {}
