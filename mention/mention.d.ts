import { ElementRef } from "@angular/core";
import { DynamicComponentLoader, ViewContainerRef } from "@angular/core";
import { MentionList } from './mention-list';
/**
 * Angular 2 Mentions.
 * https://github.com/dmacfarlane/ng2-mentions
 *
 * Copyright (c) 2016 Dan MacFarlane
 */
export declare class Mention {
    private _element;
    private _dcl;
    private _viewContainerRef;
    items: string[];
    startPos: number;
    startNode: any;
    searchList: MentionList;
    escapePressed: boolean;
    iframe: any;
    constructor(_element: ElementRef, _dcl: DynamicComponentLoader, _viewContainerRef: ViewContainerRef);
    mention: string[];
    setIframe(iframe: any): void;
    stopEvent(event: any): void;
    keyHandler(event: any, nativeElement?: any): boolean;
    showSearchList(nativeElement: any): void;
}
