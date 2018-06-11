import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

const animations = [
  trigger('topLineState', [
    state('active',   style({
      transform: 'rotate(135deg)',
      position: 'relative',
      top: '3px'
    })),
    transition('* => active', animate('200ms')),
    transition('active => *', animate('200ms'))
  ]),

  trigger('middleLineState', [
    state('active',   style({
      transform: 'scale(0)',
      'transform-origin': 'right'
    })),
    transition('* => active', animate('80ms')),
    transition('active => *', animate('80ms'))
  ]),

  trigger('bottomLineState', [
    state('active',   style({
      transform: 'rotate(-135deg)',
      position: 'relative',
      top: '-1px'
    })),
    transition('* => active', animate('200ms')),
    transition('active => *', animate('200ms'))
  ]),
]

@Component({
  selector: 'ms-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: animations
})
export class MenuComponent {
  isMenuActive: boolean = false;

  getMenuState() {
    return this.isMenuActive ? 'active' : 'inactive';
  }
}
