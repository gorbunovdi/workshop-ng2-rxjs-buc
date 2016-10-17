import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommentModule } from './comment/comment.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CommentModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
