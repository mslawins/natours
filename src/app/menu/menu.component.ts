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
    transition('* => *', animate('200ms')),
  ]),

  trigger('middleLineState', [
    state('active',   style({
      transform: 'scale(0)',
      'transform-origin': 'right'
    })),
    transition('* => *', animate('80ms')),
  ]),

  trigger('bottomLineState', [
    state('active',   style({
      transform: 'rotate(-135deg)',
      position: 'relative',
      top: '-1px'
    })),
    transition('* => *', animate('200ms')),
  ]),

  trigger('menuContainer', [
    state('active', style({
      transform: 'scale(50)',
    })),
    transition('* => *', animate('600ms cubic-bezier(.8, .01, .55, .72)')),
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
