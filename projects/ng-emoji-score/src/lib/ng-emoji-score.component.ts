import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgEmojiScoreService} from './ng-emoji-score.service';
import {Emoji} from './emoji.model';
import {Score} from './score.model';

@Component({
  selector: 'emoji-score',
  templateUrl: './ng-emoji-score.component.html',
  styleUrls: ['./ng-emoji-score.component.scss']
})
export class NgEmojiScoreComponent implements OnInit {

  @Input() customEmojiItems: Emoji[];
  @Input() scores: Score[];
  @Input() selectableEmojiCount: number;
  @Input() selectableLimitMessage: string;
  @Input() customClass: string;
  @Output() emojiSelect = new EventEmitter();

  defaultEmojiItems = [];
  scoresError: boolean;
  selectableLimitWarning: boolean;

  constructor(
    public emojiService: NgEmojiScoreService
  ) { }

  ngOnInit() {
    this.setEmojiItems();
    this.selectableEmojiCount = this.selectableEmojiCount || 3;
    this.selectableLimitMessage = this.selectableLimitMessage || 'You can select up to ' + this.selectableEmojiCount + ' emoji.';
  }

  setEmojiItems() {
    this.defaultEmojiItems = this.customEmojiItems || this.emojiService.defaultEmojiItems;
    this.setScores();
  }

  setScores() {
    if (this.scores) {
      this.scoresError = false;

      for (let i = 0; i < this.scores.length; i++) {
        Object.keys(this.scores[i]).forEach((key) => {
          const emojiIndex = this.defaultEmojiItems.findIndex(x => x.label === this.scores[i][key]);
          if (emojiIndex !== -1) {
            this.defaultEmojiItems[emojiIndex]['score'] = this.scores[i]['value'];
            this.defaultEmojiItems[emojiIndex]['selected'] = this.scores[i]['selected'];
            if (this.scores[i]['selected']) {
              this.emojiService.selectedItems.push(this.defaultEmojiItems[emojiIndex]);
            }
          }
        });
      }

      for (let i = 0; i < this.defaultEmojiItems.length; i++) {
        this.defaultEmojiItems[i]['score'] = this.defaultEmojiItems[i]['score'] || 0;
      }
      this.sortEmojiItems();
    } else {
      this.scoresError = true;
      console.error('[scores] is required.');
    }
  }

  selectEmoji(selectedItem: Emoji) {
    const emojiIndex = this.emojiService.selectedItems.indexOf(selectedItem);
    if (emojiIndex === -1) {
      if (this.emojiService.selectedItems.length < this.selectableEmojiCount) {
        this.emojiService.selectedItems.push(selectedItem);
        selectedItem.score++;
        selectedItem.selected = true;
        this.selectableLimitWarning = false;
      } else {
        this.selectableLimitWarning = true;
      }
    } else {
      this.emojiService.selectedItems.splice(emojiIndex, 1);
      selectedItem.score--;
      selectedItem.selected = false;
      this.selectableLimitWarning = false;
    }
    this.emojiSelect.emit(selectedItem);
    this.sortEmojiItems();
  }

  sortEmojiItems() {
    this.defaultEmojiItems.sort((a, b) => {
      return b['score'] - a['score'];
    });
    this.setTotalScore().then(res => {
      for (let i = 0; i < this.defaultEmojiItems.length; i++) {
        this.defaultEmojiItems[i]['scorePercent'] = (100 * this.defaultEmojiItems[i]['score']) / this.emojiService.totalScore;
      }
    }).catch(err => {
      console.error('setTotalScore error.');
    });
  }

  setTotalScore() {
    return new Promise((resolve, reject) => {
      this.emojiService.totalScore = 0;
      for (let i = 0; i < this.defaultEmojiItems.length; i++) {
        this.emojiService.totalScore += this.defaultEmojiItems[i]['score'];
      }
      resolve();
    });
  }

}
