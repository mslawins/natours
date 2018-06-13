import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
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
      transform: 'scale(60)',
    })),
    transition('* => *', animate('600ms cubic-bezier(.8, .01, .55, .72)')),
  ]),

  trigger('menu', [
    state('void', style({
      opacity: '0',
      top: '50%',
      left: '10%',
    })),
    transition('void => active', animate('1000ms 400ms ease-out', keyframes([
      style({
        opacity: '1',
        top: '50%',
        left: '50%',
        position: 'absolute',
        transform: 'translate(-10%, -50%)',
        offset: 0.5}),
      style({
        opacity: '1',
        top: '50%',
        left: '50%',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        offset: 1.0}),
    ]))),
    transition('* => void', animate('400ms ease-in')),
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
