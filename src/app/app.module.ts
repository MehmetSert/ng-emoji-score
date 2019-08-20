import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgEmojiScoreModule} from '../../projects/ng-emoji-score/src/lib/ng-emoji-score.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgEmojiScoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
