import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from "@angular/animations";

export const sidenavAdnimations: AnimationTriggerMetadata =
  trigger('sideNavState', [
    state('hidden', style({
      width: '0px',
    })),
    state('small', style({
      width: '70px',
    })),
    state('big', style({
      width: '250px'
    })),
    transition('small <=> big', animate('200ms ease-in')),
    transition('hidden <=> small', animate('200ms ease-in')),
    transition('hidden <=> big', animate('200ms ease-in'))
  ]);

export const toggleButtonAnimations: AnimationTriggerMetadata =
  trigger('toggleButtonState', [
    state('small', style({
      transform: 'rotate(180deg)'
    })),
    state('big', style({
      transform: 'rotate(0deg)'
    })),
    state('hidden', style({
      opacity: '0'
    })),
    transition('small <=> big', animate('200ms ease-in')),
    transition('hidden <=> small', animate('200ms ease-in')),
    transition('hidden <=> big', animate('200ms ease-in'))
  ]);
