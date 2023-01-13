import { Component } from '@angular/core';
import { shuffle } from '../utils/shuffle-array';

@Component({
  selector: 'oct-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public bgs = shuffle([
    'fable-1.png',
    'fable-2.png',
    'fable-3.png',
    'hl2-1.png',
    'hl3.jpg',
    'hl3-1.png',
    'hl3-2.png',
    'hl3-3.png',
    'hl3-4.png',
    'hlb-1.png',
    'sg-1.png',
    'fable-1.png',
    'fable-2.png',
    'fable-3.png',
    'hl2-1.png',
    'hl3.jpg',
    'hl3-1.png',
    'hl3-2.png',
    'hl3-3.png',
    'hl3-4.png',
    'hlb-1.png',
    'sg-1.png',
    'fable-1.png',
    'fable-2.png',
    'fable-3.png',
    'hl2-1.png',
    'hl3.jpg',
    'hl3-1.png',
    'hl3-2.png',
    'hl3-3.png',
    'hl3-4.png',
    'hlb-1.png',
    'sg-1.png',
  ]);
}
