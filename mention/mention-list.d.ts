import { ElementRef, EventEmitter } from '@angular/core';
/**
 * Angular 2 Mentions.
 * https://github.com/dmacfarlane/ng2-mentions
 *
 * Copyright (c) 2016 Dan MacFarlane
 */
export declare class MentionList {
    private _element;
    items: any[];
    activeIndex: number;
    hidden: boolean;
    itemClick: EventEmitter<{}>;
    constructor(_element: ElementRef);
    position(nativeParentElement: any, iframe?: any): void;
    activeItem: any;
    activateNextItem(): void;
    activatePreviousItem(): void;
}
