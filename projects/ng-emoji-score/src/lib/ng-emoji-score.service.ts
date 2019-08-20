import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgEmojiScoreService {

  defaultEmojiItems = [
    { name: 'Çok iyi', label: 'cokIyi', icon: 'https://srv-cdn.onedio.com/store/7213a0b115f88320a222b14c5daa3596729b9ec93f710da3d2f8b5a6004e9aba.gif' },
    { name: 'Yerim', label: 'yerim', icon: 'https://srv-cdn.onedio.com/store/61333d24ca3819629e766cd21fa68c38d73deff54d0003e1107b46884d431b44.gif' },
    { name: 'Helal olsun', label: 'helalOlsun', icon: 'https://srv-cdn.onedio.com/store/d4cadedb61a2db8bc8c5c369028cc4ffa4966c51d2d2c75f8e6167c07e1ba3e1.gif' },
    { name: 'Yok artık', label: 'yokArtik', icon: 'https://srv-cdn.onedio.com/store/1ab646d43efac881b74c9a41fa443ad7d97cdf5ad591a5f14b4178702464eeaa.gif' },
    { name: 'Hoş değil', label: 'hosDegil', icon: 'https://srv-cdn.onedio.com/store/9c889ddd1664e0e9e8fc1c93e8316503acd7c5c94cd4cdab3d3161f4e3a227f1.gif' },
    { name: 'Çok acı', label: 'cokAci', icon: 'https://srv-cdn.onedio.com/store/8fd2ed53959eb901230be656a889da9518a36cd2a78ab38888963c79e26415c5.gif' },
    { name: 'Kızgın', label: 'kizgin', icon: 'https://srv-cdn.onedio.com/store/afa6da55313299c3cd21249bc1c596c5f6fc04de4152c1543c63a648353b99c1.gif' }
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
