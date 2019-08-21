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
      icon: 'https://srv-cdn.onedio.com/store/7213a0b115f88320a222b14c5daa3596729b9ec93f710da3d2f8b5a6004e9aba.gif'
    },
    {
      name: 'Yerim',
      label: 'yerim',
      icon: 'https://srv-cdn.onedio.com/store/61333d24ca3819629e766cd21fa68c38d73deff54d0003e1107b46884d431b44.gif'
    },
    {
      name: 'Yok artık',
      label: 'yokArtik',
      icon: 'https://srv-cdn.onedio.com/store/1ab646d43efac881b74c9a41fa443ad7d97cdf5ad591a5f14b4178702464eeaa.gif'
    },
    {
      name: 'Hoş değil',
      label: 'hosDegil',
      icon: 'https://srv-cdn.onedio.com/store/9c889ddd1664e0e9e8fc1c93e8316503acd7c5c94cd4cdab3d3161f4e3a227f1.gif'
    },
    {
      name: 'Kızgın',
      label: 'kizgin',
      icon: 'https://srv-cdn.onedio.com/store/afa6da55313299c3cd21249bc1c596c5f6fc04de4152c1543c63a648353b99c1.gif'
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
