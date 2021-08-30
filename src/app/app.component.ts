import {Component} from '@angular/core';
import {lorem} from 'faker'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = ''

  onInput(value: string) {
    this.enteredText = value;
  }

  compare(letter: string, enteredTextElement: string) {
    if (!enteredTextElement) return 'pending'
    return letter===enteredTextElement ? 'correct': 'incorrect'
  }
}
