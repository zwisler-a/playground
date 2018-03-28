import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from "@angular/animations";

export const navItemListState: AnimationTriggerMetadata =
  trigger('navItemListState', [
    state('hidden', style({
      height: '0px',
    })),
    state('visible', style({
      height: '100%',
    })),
    transition('hidden <=> visible', animate('200ms ease-in-out'))
  ]);
