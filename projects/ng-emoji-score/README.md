<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://www.mehmetsert.com.tr/assets/img/ng-emoji-score.png">
  <h1 align="center">Angular Emoji Score</h1>
</p>
<p align="center">An enjoyable package for your readers to explain their reactions with emojis.</p>

------------

## Demo
[Click here](# "Click here") for a live demo.

## Installation
You can use npm to install the package.

###### NPM
```
npm install --save ng-emoji-score
```

## Use
Follow the steps below to add the ng-emoji-score package to your project.

**1.  Import NgEmojiScoreModule**
Import NgEmojiScoreModule in the module you want to use in your application.
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

**2.  Use within HTML**
In your HTML: Use the `<emoji-score>` tag where you want to use your project.
```html
<emoji-score
  	[customEmojiItems]="emojis"
  	[scores]="scores"
  	[selectableEmojiCount]="4"
  	[selectableLimitMessage]="'You can select up to 4 emoji.'"
  	[customClass]="'custom-emoji-score'"
  	(emojiSelect)="selectEmoji($event)"></emoji-score>
```

**3.  Structure of the array to display emojis**
Make sure the structure of the array resembles the array shown below;
-- Also be sure to include the Emoji model.
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

**4.  Structure of the index to display scores**
Make sure the structure of the array resembles the array shown below;
-- Also make sure to include the Score model.
```json
 scores: Score[] = [
    { "label": "cokIyi", "value": 30, "selected": false },
    { "label": "yerim", "value": 49, "selected": true },
    { "label": "yokArtik", "value": 14, "selected": true },
    { "label": "hosDegil", "value": 49, "selected": false },
    { "label": "kizgin", "value": 14, "selected": false }
  ];
```

## Features
| Name | Type | Required | Default | Description |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| customEmojiItems | Emoji  | No | - | For creating your own emojis. |
| scores | Score | **Yes**  | - | Scores previously given to the article. |
| selectableEmojiCount | number  | No | 3 | The maximum number of selectable emoji. |
| selectableLimitMessage | string  | No | You can select up to {{selectableEmojiCount}} emoji. | If you want to select more emoji than "selectableEmojiCount", this message will be displayed. |
| customClass | string  | No | - | It allows you to give your own style class. |

## Events
| Name | Parameters | Description |
| ------------ | ------------ | ------------ | 
| emojiSelect | $event | To specify the method that will run when the emoji is selected. |

## Author
[Mehmet Sert](https://mehmetsert.com.tr "Mehmet Sert")
- [Github/MehmetSert](https://github.com/MehmetSert "Github/MehmetSert")
- [Linkedin/mehmet-sert](https://www.linkedin.com/in/mehmet-sert/ "Linkedin/mehmet-sert")
- [Twitter/mehmetsert_11](https://twitter.com/mehmetsert_11 "Twitter/mehmetsert_11")
- [Instagram/mehmetsert_11](https://www.instagram.com/mehmetsert_11/ "Instagram/mehmetsert_11")
- [Kodumunblogu/mehmet-sert-11](https://kodumunblogu.net/auth/mehmet-sert-11 "Kodumunblogu/mehmet-sert-11")
