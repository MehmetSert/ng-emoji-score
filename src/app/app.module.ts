import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Import the module */
import {NgEmojiScoreModule} from '../../projects/ng-emoji-score/src/lib/ng-emoji-score.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgEmojiScoreModule // Import here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
