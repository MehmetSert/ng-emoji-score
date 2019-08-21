<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://www.mehmetsert.com.tr/assets/img/ng-emoji-score.png">
  <h1 align="center">Angular Emoji Score</h1>
</p>
<p align="center">Yazılarınızı okuyanların, tepkilerini emojilerle anlatmaları için keyifli bir paket.</p>

------------

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
import {NgEmojiScoreModule} from 'ng-emoji-score';

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
-- Ayrıca Emoji modelini dahil ettiğinizden emin olun. `import {Emoji} from 'ng-emoji-score/lib/emoji.model';`
```json
  emojis: Emoji[] = [
    {
      "name": "Çok iyi",
      "label": "cokIyi",
      "icon": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/face-with-tears-of-joy_1f602.png"
    },
    {
      "name": "Yerim",
      "label": "yerim",
      "icon": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/smiling-face-with-heart-shaped-eyes_1f60d.png"
    },
    {
      "name": "Yok artık",
      "label": "yokArtik",
      "icon": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/face-screaming-in-fear_1f631.png"
    },
    {
      "name": "Hoş değil",
      "label": "hosDegil",
      "icon": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/thumbs-down-sign_1f44e.png"
    },
    {
      "name": "Kızgın",
      "label": "kizgin",
      "icon": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojione/211/face-with-look-of-triumph_1f624.png"
    },
  ];
```

**4.  Skorları görüntülemek için dizinin yapısı**
Dizinin yapısının aşağıda gösterilen diziye benzediğinden emin olun;
-- Ayrıca Score modelini dahil ettiğinizden emin olun. `import {Score} from 'ng-emoji-score/lib/score.model';`
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
