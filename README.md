<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://www.mehmetsert.com.tr/assets/img/ng-emoji-score.png">
  <h1 align="center">Angular Emoji Score</h1>
  Yazılarınızı okuyanların tepkilerini emojilerle almak isteyenler için keyifli bir paket.
</p>

<br>

## Demo
Canlı demo için [buraya tıklayın](https://mehmetsert.com.tr "buraya tıklayın").

## Kurulum
Paketi yüklemek için npm'i kullanabilirsiniz.

###### NPM
```
npm install --save ng-emoji-score
```

## Kullanım
Projenize ng-emoji-score paketini eklemek için aşağıdaki adımları izleyin.

**1.  NgEmojiScoreModule'yi import edin.**
NgEmojiScoreModule'yi uygulamanızda kullanmak istediğiniz modülde içe aktarın.
```javascript
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

```

**2.  HTML içinde kullanın**
HTML'inizde: Projenizin kullanmak istediğiniz yerinde `<emoji-score>` etiketini kullanın.
```html
<emoji-score
  	[customEmojiItems]="emojis"
  	[scores]="scores"
  	[selectableEmojiCount]="4"
  	[selectableLimitMessage]="'En fazla 4 emoji seçebilirsiniz.'"
  	[customClass]="'custom-emoji-score'"
  	(emojiSelect)="selectEmoji($event)"></emoji-score>
```

**3.  Emojileri görüntülemek için dizinin yapısı**
Dizinin yapısının aşağıda gösterilen diziye benzediğinden emin olun;
-- Ayrıca Emoji modelini dahil ettiğinizden emin olun.
```json
  emojis: Emoji[] = [
    {
      "name": "Çok iyi",
      "label": "cokIyi",
      "icon": "https://srv-cdn.onedio.com/store/7213a0b115f88320a222b14c5daa3596729b9ec93f710da3d2f8b5a6004e9aba.gif"
    },
    {
      "name": "Yerim",
      "label": "yerim",
      "icon": "https://srv-cdn.onedio.com/store/61333d24ca3819629e766cd21fa68c38d73deff54d0003e1107b46884d431b44.gif"
    },
    {
      "name": "Yok artık",
      "label": "yokArtik",
      "icon": "https://srv-cdn.onedio.com/store/1ab646d43efac881b74c9a41fa443ad7d97cdf5ad591a5f14b4178702464eeaa.gif"
    },
    {
      "name": "Hoş değil",
      "label": "hosDegil",
      "icon": "https://srv-cdn.onedio.com/store/9c889ddd1664e0e9e8fc1c93e8316503acd7c5c94cd4cdab3d3161f4e3a227f1.gif"
    },
    {
      "name": "Kızgın",
      "label": "kizgin",
      "icon": "https://srv-cdn.onedio.com/store/afa6da55313299c3cd21249bc1c596c5f6fc04de4152c1543c63a648353b99c1.gif"
    },
  ];
```

**4.  Skorları görüntülemek için dizinin yapısı**
Dizinin yapısının aşağıda gösterilen diziye benzediğinden emin olun;
-- Ayrıca Score modelini dahil ettiğinizden emin olun.
```json
 scores: Score[] = [
    { "label": "cokIyi", "value": 30, "selected": false },
    { "label": "yerim", "value": 49, "selected": true },
    { "label": "yokArtik", "value": 14, "selected": true },
    { "label": "hosDegil", "value": 49, "selected": false },
    { "label": "kizgin", "value": 14, "selected": false }
  ];
```

## Özellikler
| İsim | Tip | Zorunlu | Varsayılan | Açıklama |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| customEmojiItems | Emoji  | Hayır | - | Kendi emojilerinizi oluşturmanız içindir. |
| scores | Score | **Evet**  | - | Yazıya daha önceden verilen skorlardır. |
| selectableEmojiCount | number  | Hayır | 3 | En fazla seçilebilir emoji sayısıdır. |
| selectableLimitMessage | string  | Hayır | You can select up to {{selectableEmojiCount}} emoji. | selectableEmojiCount değerinden fazla emoji seçilmek istendiğinde ekranda çıkacak olan uyarı mesajıdır. |
| customClass | string  | Hayır | - | Kendi stil class'ınızı vermenize yarar. |

## Olaylar
| İsim | Parametreler | Description |
| ------------ | ------------ | ------------ | 
| emojiSelect | $event | Emoji seçildiği zaman çalışacak olan methodu belirtmek için. |

## Paylaşan
[Mehmet Sert](https://mehmetsert.com.tr "Mehmet Sert")
- [Github/MehmetSert](https://github.com/MehmetSert "Github/MehmetSert")
- [Linkedin/mehmet-sert](https://www.linkedin.com/in/mehmet-sert/ "Linkedin/mehmet-sert")
- [Twitter/mehmetsert_11](https://twitter.com/mehmetsert_11 "Twitter/mehmetsert_11")
- [Instagram/mehmetsert_11](https://www.instagram.com/mehmetsert_11/ "Instagram/mehmetsert_11")
- [Kodumunblogu/mehmet-sert-11](https://kodumunblogu.net/auth/mehmet-sert-11 "Kodumunblogu/mehmet-sert-11")
