System.register(['angular2/core', './mention-utils'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mention_utils_1;
    var MentionList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mention_utils_1_1) {
                mention_utils_1 = mention_utils_1_1;
            }],
        execute: function() {
            MentionList = (function () {
                function MentionList(_element) {
                    this._element = _element;
                    this.items = [];
                    this.activeIndex = 0;
                    this.hidden = false;
                    this.itemClick = new core_1.EventEmitter();
                }
                MentionList.prototype.position = function (nativeParentElement, iframe) {
                    if (iframe === void 0) { iframe = null; }
                    var coords = { top: 0, left: 0 };
                    if (mention_utils_1.isInputOrTextAreaElement(nativeParentElement)) {
                        coords = getCaretCoordinates(nativeParentElement, nativeParentElement.selectionStart);
                        coords.top = nativeParentElement.offsetTop + coords.top + 16;
                        coords.left = nativeParentElement.offsetLeft + coords.left;
                    }
                    else {
                        coords = mention_utils_1.getContentEditableCaretCoords(nativeParentElement, iframe);
                    }
                    this._element.nativeElement.style.position = "absolute";
                    this._element.nativeElement.style.left = coords.left + 'px';
                    this._element.nativeElement.style.top = coords.top + 'px';
                };
                Object.defineProperty(MentionList.prototype, "activeItem", {
                    get: function () {
                        return this.items[this.activeIndex];
                    },
                    enumerable: true,
                    configurable: true
                });
                MentionList.prototype.activateNextItem = function () {
                    this.activeIndex = Math.max(Math.min(this.activeIndex + 1, this.items.length - 1), 0);
                };
                MentionList.prototype.activatePreviousItem = function () {
                    this.activeIndex = Math.max(Math.min(this.activeIndex - 1, this.items.length - 1), 0);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MentionList.prototype, "itemClick", void 0);
                MentionList = __decorate([
                    core_1.Component({
                        selector: 'mention-list',
                        styles: ["\n      .scrollable-menu {\n        display: block;\n        height: auto;\n        max-height: 300px;\n        overflow: auto;\n      }\n    ", "\n      [hidden] {\n        display: none;\n      }\n    "],
                        template: "\n    <ul class=\"dropdown-menu scrollable-menu\" [hidden]=\"hidden\">\n        <li *ngFor=\"#item of items; #i = index\" [class.active]=\"activeIndex==i\">\n            <a class=\"text-primary\" (click)=\"activeIndex=i;itemClick.emit()\">{{item}}</a>\n        </li>\n    </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], MentionList);
                return MentionList;
            }());
            exports_1("MentionList", MentionList);
        }
    }
});
