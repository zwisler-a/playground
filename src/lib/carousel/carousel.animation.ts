import {animate, state, style, transition, trigger} from '@angular/animations';

export let carouselAnimations = [
    trigger('imagePosition', [
      state('left', style({
        transform: 'translate(-100%,0%)'
      })),
      state('center', style({
        })
      ),
      state('right', style({
          transform: 'translate(100%,0%)'
        })
      ),
      transition('left <=> center', animate('0.6s linear')),
      transition('right <=> center', animate('0.6s linear'))
    ]),
    trigger('zoom', [
      state('in', style({
        transform: 'scale(1.1)'
      })),
      transition('* => in', animate('15s linear'))
    ]),
    trigger('text', [
      state('in', style({
        transform: 'translate(0px,0px)',
        opacity: '1'
      })),
      state('out', style({
        transform: 'translate(0px,100px)',
        opacity: '0',
        // display: 'none'
        'z-index':-1
      })),
      transition('in => out', animate('0.7s cubic-bezier(.5,.0,.5,1)')),
      transition('out => in', animate('0.7s cubic-bezier(.5,.0,.5,1)'))
    ])
  ]
;
