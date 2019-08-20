import { NgModule } from '@angular/core';
import { NgEmojiScoreComponent } from './ng-emoji-score.component';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [NgEmojiScoreComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgEmojiScoreComponent]
})
export class NgEmojiScoreModule { }
