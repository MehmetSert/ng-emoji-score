import {Component, OnInit} from '@angular/core';
import {NgEmojiScoreService} from '../../projects/ng-emoji-score/src/lib/ng-emoji-score.service';
import {Emoji} from '../../projects/ng-emoji-score/src/lib/emoji.model';
import {Score} from '../../projects/ng-emoji-score/src/lib/score.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  emojis: Emoji[] = [
    {
      name: 'Çok iyi',
      label: 'cokIyi',
      icon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/face-with-tears-of-joy_1f602.png'
    },
    {
      name: 'Yerim',
      label: 'yerim',
      icon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/smiling-face-with-heart-shaped-eyes_1f60d.png'
    },
    {
      name: 'Yok artık',
      label: 'yokArtik',
      icon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/face-screaming-in-fear_1f631.png'
    },
    {
      name: 'Hoş değil',
      label: 'hosDegil',
      icon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/thumbs-down-sign_1f44e.png'
    },
    {
      name: 'Kızgın',
      label: 'kizgin',
      icon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/face-with-look-of-triumph_1f624.png'
    },
  ];
  scores: Score[] = [
    { label: 'cokIyi', value: 30, selected: false },
    { label: 'yerim', value: 49, selected: true },
    { label: 'yokArtik', value: 14, selected: true },
    { label: 'hosDegil', value: 49, selected: false },
    { label: 'kizgin', value: 14, selected: false }
  ];

  constructor(
    private emojiService: NgEmojiScoreService
  ) { }

  ngOnInit() {
  }

  selectEmoji(event: Emoji) {
    console.log(event);
   /* setTimeout(() => {
      this.emojiService.decrease(event);
    }, 1000);*/
  }
}
