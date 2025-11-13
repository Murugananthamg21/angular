import { animate, state, style, transition, trigger } from "@angular/animations";

export const fadeIn = trigger('fadeIn', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-out', style({ opacity: 1 }))
    ],),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('400ms ease-out', style({ opacity: 0 }))
    ],)
]);

export const slideToggle = trigger('slideToggle', [
    state('open', style({ height: '*', opacity: 1, transform: 'translateX(0)' })),
    state('closed', style({ height: '0px', opacity: 0, transform: 'translateX(-10px)' })),
    transition('closed => open', [
        style({ height: '0px', opacity: 0 }),
        animate('300ms ease-out')
    ]),
    transition('open => closed', [
        animate('200ms ease-in', style({ height: '0px', opacity: 0 }))
    ])
]);

export const FILTER_SLIDE = trigger("filter_slide", [
    transition(":enter", [
        style({
            transform: 'translateY(-150%)'
        }),
        animate('400ms ease-in', style({ transform: 'translateY(0)' }))
    ]),
    transition(":leave", [
        animate('400ms ease-out', style({ transform: 'translateX(-150%)', opacity: 0 }))
    ])
])

export const SideBarSlide = trigger("SideBarSlide", [
    transition(":enter", [
        style({
            transform: 'translateX(-150%)'
        }),
        animate('500ms ease-out', style({ transform: 'translateX(0)' }))
    ]),
    transition(":leave", [
        animate('300ms ease-out', style({ transform: 'translateX(-150%)', opacity: 0 }))
    ])
])


export const hoverIn = trigger('hoverIn', [
    state('normal', style({ opacity: 1 })),
    state('hover', style({ opacity: 0.5 })),
    transition('normal => hover', [
        animate('300ms ease-out')
    ]),
    transition('hover => normal', [
        animate('300ms ease-in')
    ])
]);
