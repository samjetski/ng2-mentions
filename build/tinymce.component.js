System.register(['angular2/core', './mention/mention', './common-names'], function(exports_1, context_1) {
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
    var core_1, core_2, core_3, mention_1, common_names_1;
    var TinyMCE;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            },
            function (mention_1_1) {
                mention_1 = mention_1_1;
            },
            function (common_names_1_1) {
                common_names_1 = common_names_1_1;
            }],
        execute: function() {
            TinyMCE = (function () {
                function TinyMCE(_elementRef) {
                    this._elementRef = _elementRef;
                    this.items = common_names_1.COMMON_NAMES;
                    this.zone = new core_1.NgZone({ enableLongStackTrace: false });
                }
                TinyMCE.prototype.ngAfterViewInit = function () {
                    tinymce.init({
                        mode: 'exact',
                        height: 100,
                        theme: 'modern',
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table contextmenu paste code'
                        ],
                        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                        elements: "tmce",
                        setup: this.tinySetup.bind(this)
                    });
                };
                TinyMCE.prototype.tinySetup = function (ed) {
                    var comp = this;
                    var mention = this.mention;
                    ed.on('keydown', function (e) {
                        var frame = window.frames[ed.iframeElement.id];
                        var contentEditable = frame.contentDocument.getElementById('tinymce');
                        comp.zone.run(function () {
                            comp.mention.keyHandler(e, contentEditable);
                        });
                    });
                    ed.on('init', function (args) {
                        mention.setIframe(ed.iframeElement);
                    });
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Object)
                ], TinyMCE.prototype, "htmlContent", void 0);
                __decorate([
                    core_3.ViewChild('mention'), 
                    __metadata('design:type', Object)
                ], TinyMCE.prototype, "mention", void 0);
                TinyMCE = __decorate([
                    core_1.Component({
                        selector: 'tinymce',
                        template: "\n    <div class=\"form-group\">\n      <div [mention]=\"items\" #mention></div>\n      <div>\n        <textarea class=\"hidden\" cols=\"60\" rows=\"4\" id=\"tmce\">{{htmlContent}}</textarea>\n      </div>\n    </div>",
                        directives: [mention_1.Mention]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], TinyMCE);
                return TinyMCE;
            }());
            exports_1("TinyMCE", TinyMCE);
        }
    }
});
