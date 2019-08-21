import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgEmojiScoreService {

  defaultEmojiItems = [
    { name: 'Çok iyi', label: 'cokIyi', icon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/face-with-tears-of-joy_1f602.png' },
    { name: 'Yerim', label: 'yerim', icon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/smiling-face-with-heart-shaped-eyes_1f60d.png' },
    { name: 'Helal olsun', label: 'helalOlsun', icon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/clapping-hands-sign_1f44f.png' },
    { name: 'Yok artık', label: 'yokArtik', icon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/face-screaming-in-fear_1f631.png' },
    { name: 'Hoş değil', label: 'hosDegil', icon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/thumbs-down-sign_1f44e.png' },
    { name: 'Çok acı', label: 'cokAci', icon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/face-with-pleading-eyes_1f97a.png' },
    { name: 'Kızgın', label: 'kizgin', icon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/face-with-look-of-triumph_1f624.png' }
  ];
  selectedItems = [];
  totalScore: number;

  constructor() { }

  decrease(selectedEmoji) {
    const selectedEmojiIndex = this.selectedItems.indexOf(selectedEmoji);
    if (selectedEmojiIndex !== -1) {
      this.selectedItems.splice(selectedEmojiIndex, 1);
      selectedEmoji.score--;
      selectedEmoji.selected = false;
    } else {
      console.warn('Gönderdiğiniz emoji seçililer arasında bulunmamaktadır.');
    }
  }

}
