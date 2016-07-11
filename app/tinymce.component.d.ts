import { ElementRef, NgZone } from '@angular/core';
import { Mention } from '../mention/mention';
/**
 * Angular 2 Mentions.
 * https://github.com/dmacfarlane/ng2-mentions
 *
 * Example usage with TinyMCE.
 */
export declare class TinyMCE {
    private _elementRef;
    private _zone;
    htmlContent: any;
    mention: Mention;
    protected items: string[];
    constructor(_elementRef: ElementRef, _zone: NgZone);
    ngAfterViewInit(): void;
    tinySetup(ed: any): void;
}
