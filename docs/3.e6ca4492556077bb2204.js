(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{ResS:function(n,l,t){"use strict";t.d(l,"a",function(){return b}),t.d(l,"c",function(){return d}),t.d(l,"b",function(){return h}),t.d(l,"d",function(){return g}),t.d(l,"e",function(){return f});var e=t("LoAr"),o=(t("qpXW"),t("D57K")),i=t("abkR"),a=t("rh80"),r=t("fQLH"),c=t("LR82"),u=t("iUUs"),s=t("U3QC"),b=new e.p("lightboxConfig"),d=function(){function n(n,l,t,e){this._document=n,this._focusTrapFactory=l,this._elementRef=t,this.sanitizer=e,this.state="enter",this._savePreviouslyFocusedElement()}return n.prototype.onAnimationDone=function(n){"enter"===n.toState?this._trapFocus():(this.overlayRef.dispose(),this._restoreFocus())},n.prototype._trapFocus=function(){this._focusTrap||(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement)),this._focusTrap.focusInitialElementWhenReady()},n.prototype._savePreviouslyFocusedElement=function(){var n=this;this._document&&(this._elementFocusedBeforeDialogWasOpened=this._document.activeElement,this._elementRef.nativeElement.focus&&Promise.resolve().then(function(){return n._elementRef.nativeElement.focus()}))},n.prototype._restoreFocus=function(){var n=this._elementFocusedBeforeDialogWasOpened;n&&"function"==typeof n.focus&&n.focus(),this._focusTrap&&this._focusTrap.destroy()},n}(),p={backdropClass:"g-backdrop",panelClass:"g-overlay",hasBackdrop:!0,keyboardShortcuts:!0,role:"lightbox",closeIcon:'<?xml version="1.0" encoding="UTF-8"?>\n<svg width="512px" height="512px" enable-background="new 0 0 47.971 47.971" version="1.1" viewBox="0 0 47.971 47.971" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n\t<path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" fill="#fff"/>\n</svg>\n'},h=function(){function n(n,l,t){this._gallery=l,this._overlay=t,this.opened=new r.a,this.closed=new r.a,this._config=n?Object(o.a)({},p,n):p}return n.prototype.setConfig=function(n){this._config=Object(o.a)({},this._config,n)},n.prototype.open=function(n,l,t){var e=this;void 0===n&&(n=0),void 0===l&&(l="lightbox");var r=t?Object(o.a)({},this._config,t):this._config,c={backdropClass:r.backdropClass,panelClass:r.panelClass,hasBackdrop:r.hasBackdrop,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:this._overlay.scrollStrategies.block(),disposeOnNavigation:!0},u=this._gallery.ref(l);u.set(n),this._overlayRef=this._overlay.create(c),this._overlayRef.attachments().subscribe(function(){return e.opened.next(l)}),this._overlayRef.detachments().subscribe(function(){return e.closed.next(l)});var s=new i.d(d),b=this._overlayRef.attach(s);b.instance.id=l,b.instance.overlayRef=this._overlayRef,b.instance.closeIcon=this._config.closeIcon,b.instance.role=this._config.role,b.instance.ariaLabel=this._config.ariaLabel,b.instance.ariaLabelledBy=this._config.ariaLabelledBy,b.instance.ariaDescribedBy=this._config.ariaDescribedBy,r.hasBackdrop&&this._overlayRef.backdropClick().subscribe(function(){return e.close()}),r.keyboardShortcuts&&this._overlayRef.keydownEvents().subscribe(function(n){switch(n.keyCode){case a.i:u.prev();break;case a.k:u.next();break;case a.g:e.close()}})},n.prototype.close=function(){this._overlayRef.hasAttached()&&this._overlayRef.detach()},n}(),f=function(){function n(n,l,t){this._lightbox=n,this._el=l,this._renderer=t,this.clickEvent=c.a.EMPTY,this.index=0,this.id="root"}return n.prototype.ngOnInit=function(){var n=this;this._renderer.setStyle(this._el.nativeElement,"cursor","pointer"),this.clickEvent=Object(u.a)(this._el.nativeElement,"click").pipe(Object(s.a)(function(){return n._lightbox.open(n.index,n.id)})).subscribe()},n.prototype.ngOnDestroy=function(){this.clickEvent.unsubscribe()},n}(),g=function(){function n(){}return n.withConfig=function(l){return{ngModule:n,providers:[{provide:b,useValue:l}]}},n}()},TeY9:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var e=t("LiEJ"),o=t("pN2L"),i=t("Jg5f"),a=t("G2Mx"),r=t("pday"),c=t("/gsZ"),u=function(){return(u=Object.assign||function(n){for(var l,t=1,e=arguments.length;t<e;t++)for(var o in l=arguments[t])Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o]);return n}).apply(this,arguments)},s=function(){function n(n,l){this.cd=n,this.platform=l,this.state$=new e.a({copied:!1,height:"100%"}),this.trackY=!0,this.trackX=!1}return n.prototype.ngAfterViewInit=function(){this.updateHeight()},n.prototype.updateHeight=function(){this.updateState(!this.height&&this.codeEl?{height:this.codeEl.nativeElement.offsetHeight+"px"}:{height:this.height+"px"}),this.scrollable.update()},n.prototype.updateState=function(n){this.state$.next(u({},this.state$.value,n)),this.cd.detectChanges()},n.prototype.copy=function(){var n=this;Object(o.a)(this.code).pipe(Object(i.a)(function(l){var t=document.createElement("textarea");if(t.value=l,document.body.appendChild(t),n.platform.IOS){var e=document.createRange();e.selectNodeContents(t);var o=window.getSelection();o.removeAllRanges(),o.addRange(e),t.readOnly=!0,t.setSelectionRange(0,999999)}else t.select();document.execCommand("copy"),document.body.removeChild(t),n.updateState({copied:!0})}),Object(a.a)(1),Object(r.a)(3500),Object(c.a)(function(){return n.updateState({copied:!1})})).subscribe()},n}()},WAtv:function(n,l,t){"use strict";t.d(l,"a",function(){return p});var e=t("LoAr"),o=t("ResS"),i=(t("eXL1"),t("WT9V")),a=(t("C7Lb"),t("GiBk"),t("wwR/")),r=(t("y7gG"),t("abkR"),t("WV+C"),t("IvSS"),t("0xYh")),c=t("/q0v"),u=t("SeAg"),s=e.pb({encapsulation:0,styles:[".cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-container[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane[_ngcontent-%COMP%]{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}}.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}  lightbox{position:relative;display:block;width:1100px;height:800px;max-width:94vw;max-height:90vh;border-radius:4px;overflow:hidden;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}  lightbox:focus{outline:0}  lightbox gallery{overflow:hidden;margin:0;display:block;width:100%;height:100%}  .g-backdrop{background-color:rgba(0,0,0,.32)}  .fullscreen{width:100%}  .fullscreen   lightbox{max-width:unset;max-height:unset;position:fixed;top:0;left:0;bottom:0;right:0;height:100%;width:100%;border-radius:0}  .g-overlay{margin:auto}@media only screen and (max-width:480px){  .g-overlay{width:100%}  .g-overlay   lightbox{max-width:unset;max-height:unset;position:fixed;top:0;left:0;bottom:0;right:0;height:100%;width:100%;border-radius:0}}  .g-btn-close{position:absolute;right:.9em;top:.9em;z-index:60;cursor:pointer;width:20px;height:20px}@media only screen and (max-width:480px){  .g-btn-close{right:.7em;top:.7em}}"],data:{animation:[{type:7,name:"lightbox",definitions:[{type:0,name:"void, exit",styles:{type:6,styles:{opacity:0,transform:"scale(0.7)"},offset:null},options:void 0},{type:0,name:"enter",styles:{type:6,styles:{transform:"none"},offset:null},options:void 0},{type:1,expr:"* => enter",animation:{type:4,styles:{type:6,styles:{transform:"none",opacity:1},offset:null},timings:"150ms cubic-bezier(0, 0, 0.2, 1)"},options:null},{type:1,expr:"* => void, * => exit",animation:{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"75ms cubic-bezier(0.4, 0.0, 0.2, 1)"},options:null}],options:{}}]}});function b(n){return e.Kb(2,[(n()(),e.rb(0,0,null,null,2,"gallery",[],null,null,null,c.b,c.a)),e.qb(1,770048,null,0,a.c,[a.b],{id:[0,"id"],destroyRef:[1,"destroyRef"],skipInitConfig:[2,"skipInitConfig"]},null),(n()(),e.rb(2,0,null,0,0,"i",[["aria-label","Close"],["class","g-btn-close"]],[[8,"innerHTML",1]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.overlayRef.detach()&&e),e},null,null))],function(n,l){n(l,1,0,l.component.id,!1,!0)},function(n,l){var t=l.component;n(l,2,0,t.sanitizer.bypassSecurityTrustHtml(t.closeIcon))})}function d(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,1,"lightbox",[["aria-modal","true"],["tabindex","-1"]],[[1,"id",0],[1,"role",0],[1,"aria-labelledby",0],[1,"aria-label",0],[1,"aria-describedby",0],[40,"@lightbox",0]],[["component","@lightbox.done"]],function(n,l,t){var o=!0;return"component:@lightbox.done"===l&&(o=!1!==e.Bb(n,1).onAnimationDone(t)&&o),o},b,s)),e.qb(1,49152,null,0,o.c,[[2,i.d],r.f,e.k,u.c],null,null)],null,function(n,l){n(l,0,0,"lightbox-"+e.Bb(l,1).id,e.Bb(l,1).role,e.Bb(l,1).ariaLabel?null:e.Bb(l,1).ariaLabelledBy,e.Bb(l,1).ariaLabel,e.Bb(l,1).ariaDescribedBy||null,e.Bb(l,1).state)})}var p=e.nb("lightbox",o.c,d,{},{},[])},WjFU:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},YzpY:function(n,l,t){"use strict";var e=t("LoAr"),o=t("AFqu"),i=t("WT9V"),a=t("Hc9t"),r=t("rXXt"),c=t("//aV"),u=t("y7gG"),s=t("U+go"),b=t("JZJv"),d=t("Gien"),p=t("GcYS"),h=t("WV+C"),f=t("0xYh"),g=t("Z5FQ");t("TeY9"),t.d(l,"a",function(){return m}),t.d(l,"b",function(){return C});var m=e.pb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;min-width:100%;margin-top:2em;margin-bottom:3em;border:2px solid #2196f3;overflow:hidden;border-radius:.5em;box-shadow:0 3px 10px rgba(0,0,0,.1)}[_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .code-scrollbar-thumb{border-radius:4px;opacity:.7}[_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .code-scrollbar-thumb:active{opacity:1}[_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .ng-scrollbar-vertical{width:6px}[_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .ng-scrollbar-vertical:active, [_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .ng-scrollbar-vertical:hover{width:10px}[_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .ng-scrollbar-horizontal{height:6px}[_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .ng-scrollbar-horizontal:active, [_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .ng-scrollbar-horizontal:hover{height:10px}[_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .code-scrollbar{transition:all .1s ease}pre[_ngcontent-%COMP%]{min-height:100%;min-width:100%;margin:0;display:inline-flex;word-wrap:normal;min-height:100%}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background-color:#e3f2fd;display:inline-block;height:100%;padding:1.7em 2em!important;border-radius:0;flex:1;margin:0;box-shadow:none;overflow:hidden;border:none;min-height:100%}button[_ngcontent-%COMP%]{position:absolute;right:1em;top:1em}.copy-message[_ngcontent-%COMP%]{color:#2196f3;background-color:#e3f2fd;position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;font-weight:700;border-radius:.2em}span[_ngcontent-%COMP%]{margin-left:10px}"]],data:{}});function y(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,3,"pre",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,["        "])),(n()(),e.rb(2,0,[[1,0],["codeEL",1]],null,0,"code",[["class","hljs"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.Ib(-1,null,["\n      "]))],null,function(n,l){n(l,2,0,l.component.code)})}function v(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,4,"pre",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,["          "])),(n()(),e.rb(2,0,[[1,0],["codeEL",1]],null,1,"code",[],[[2,"hljs",null],[8,"innerHTML",1]],null,null,null,null)),e.qb(3,540672,null,0,o.b,[o.c,e.z],{code:[0,"code"]},null),(n()(),e.Ib(-1,null,["\n        "]))],function(n,l){n(l,3,0,l.component.code)},function(n,l){n(l,2,0,!0,e.Bb(l,3).highlightedCode)})}function x(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,3,null,null,null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,y)),e.qb(2,16384,null,0,i.k,[e.Q,e.N],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),e.ib(0,[["enabled",2]],null,0,null,v))],function(n,l){n(l,2,0,l.component.disabled,e.Bb(l,3))},null)}function _(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,5,"div",[["class","hljs copy-message"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,a.b,a.a)),e.qb(2,9158656,null,0,r.b,[e.k,r.d,[8,null],[2,r.a]],null,null),(n()(),e.Ib(-1,0,["done"])),(n()(),e.rb(4,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,["Copied!"]))],function(n,l){n(l,2,0)},function(n,l){n(l,1,0,e.Bb(l,2).inline)})}function k(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,6,null,null,null,null,null,null,null)),(n()(),e.rb(1,0,null,null,5,"ng-scrollbar",[["barClass","code-scrollbar"],["thumbClass","code-scrollbar-thumb"]],[[4,"height",null],[2,"ng-scrollbar-auto-hide",null]],[[null,"cdkObserveContent"]],function(n,l,t){var e=!0;return"cdkObserveContent"===l&&(e=!1!==n.component.updateHeight()&&e),e},c.b,c.a)),e.qb(2,1196032,null,0,u.a,[u.b,e.k,e.z],null,{event:"cdkObserveContent"}),e.qb(3,4374528,[[2,4]],0,s.a,[b.a],{trackX:[0,"trackX"],trackY:[1,"trackY"],barClass:[2,"barClass"],thumbClass:[3,"thumbClass"],overlay:[4,"overlay"],disableOnBreakpoints:[5,"disableOnBreakpoints"],disableScrollbars:[6,"disableScrollbars"]},null),(n()(),e.ib(16777216,null,0,1,null,x)),e.qb(5,16384,null,0,i.k,[e.Q,e.N],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),e.ib(0,[["copiedMessage",2]],0,0,null,_))],function(n,l){var t=l.component;n(l,3,0,t.trackX,t.trackY,"code-scrollbar","code-scrollbar-thumb",!0,!1,t.disabled),n(l,5,0,!l.context.$implicit.copied,e.Bb(l,6))},function(n,l){n(l,1,0,l.context.$implicit.height,e.Bb(l,3).autoHideClass)})}function C(n){return e.Kb(2,[e.Gb(671088640,1,{codeEl:0}),e.Gb(671088640,2,{scrollable:0}),(n()(),e.ib(16777216,null,null,2,null,k)),e.qb(3,16384,null,0,i.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),e.Db(131072,i.b,[e.h]),(n()(),e.rb(5,0,null,null,4,"button",[["color","accent"],["mat-icon-button",""],["matTooltip","Copy code"],["matTooltipClass","copy-tooltip"],["matTooltipPosition","before"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.copy()&&e),e},d.d,d.b)),e.qb(6,180224,null,0,p.b,[e.k,h.a,f.e,[2,g.a]],{color:[0,"color"]},null),(n()(),e.rb(7,0,null,0,2,"mat-icon",[["aria-label","Copy code"],["class","md-24 mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,a.b,a.a)),e.qb(8,9158656,null,0,r.b,[e.k,r.d,[8,null],[2,r.a]],null,null),(n()(),e.Ib(-1,0,["content_paste"]))],function(n,l){var t=l.component;n(l,3,0,e.Jb(l,3,0,e.Bb(l,4).transform(t.state$))),n(l,6,0,"accent"),n(l,8,0)},function(n,l){n(l,5,0,e.Bb(l,6).disabled||null,"NoopAnimations"===e.Bb(l,6)._animationMode),n(l,7,0,e.Bb(l,8).inline)})}},bcGG:function(n,l,t){"use strict";var e=t("LoAr"),o=t("Hc9t"),i=t("rXXt");t("WjFU"),t.d(l,"a",function(){return a}),t.d(l,"b",function(){return r});var a=e.pb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.info[_nghost-%COMP%]   section[_ngcontent-%COMP%]{border:2px solid #2196f3;background-color:#e3f2fd}.info[_nghost-%COMP%]   .note-icon[_ngcontent-%COMP%]{background-color:#2196f3}.note-icon[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;width:80px;padding-top:20px;display:flex;justify-content:center;background-color:#ffb300}mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:36px;width:36px;height:36px;line-height:36px}.note-content[_ngcontent-%COMP%]{margin-left:80px;padding:0 1em}section[_ngcontent-%COMP%]{min-height:80px;position:relative;border:2px solid #ffb300;margin:4em 0;display:flex;align-items:center;background-color:#ffecb3;border-radius:.5em;box-shadow:0 3px 10px rgba(0,0,0,.1);overflow:hidden}"]],data:{}});function r(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,6,"section",[],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,3,"span",[["class","note-icon"]],null,null,null,null,null)),(n()(),e.rb(2,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,o.b,o.a)),e.qb(3,9158656,null,0,i.b,[e.k,i.d,[8,null],[2,i.a]],null,null),(n()(),e.Ib(-1,0,["error_outline"])),(n()(),e.rb(5,0,null,null,1,"div",[["class","note-content"]],null,null,null,null,null)),e.Ab(null,0)],function(n,l){n(l,3,0)},function(n,l){n(l,2,0,e.Bb(l,3).inline)})}},"fDe+":function(n,l,t){"use strict";var e=t("LoAr"),o=t("UelK"),i=t("SPdK"),a=t("Gien"),r=t("GcYS"),c=t("WV+C"),u=t("0xYh"),s=t("Z5FQ"),b=t("iwai"),d=t("FOLC"),p=t("SeAg");t("jQpT"),t.d(l,"a",function(){return h}),t.d(l,"b",function(){return f});var h=e.pb({encapsulation:0,styles:[['[_nghost-%COMP%]{box-shadow:inset 0 3px 8px 0 rgba(0,0,0,.08);background-color:#2196f3;display:flex;flex-direction:column;color:#fff;padding:3em 2em;font-size:.9em;font-family:Roboto,"Helvetica Neue",sans-serif}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{margin-right:.5em}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:400;color:#fff;text-align:center;margin-top:0;margin-bottom:1.5em}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]:last-child{margin-bottom:0}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{color:#fff176;text-decoration:underline}.icon[_ngcontent-%COMP%]{background:#fff;margin:5px}fa-icon[_ngcontent-%COMP%]{margin:0 .3em}.twitter[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#00b0e8}.github[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#000}']],data:{}});function f(n){return e.Kb(2,[(n()(),e.rb(0,0,null,null,28,"div",[["fxLayout","column"],["fxLayoutAlign","center center"]],null,null,null,null,null)),e.qb(1,737280,null,0,o.d,[i.h,e.k,i.l],{layout:[0,"layout"]},null),e.qb(2,737280,null,0,o.c,[i.h,e.k,[6,o.d],i.l],{align:[0,"align"]},null),(n()(),e.rb(3,0,null,null,2,"h3",[],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,1,"a",[["href","https://www.patreon.com/bePatron?u=5594898"]],null,null,null,null,null)),(n()(),e.rb(5,0,null,null,0,"img",[["alt","npm"],["data-canonical-src","https://c5.patreon.com/external/logo/become_a_patron_button.png"],["src","https://camo.githubusercontent.com/3d9b27bdf72d7e5407fbad6f9240f6cadc98a7a5/68747470733a2f2f63352e70617472656f6e2e636f6d2f65787465726e616c2f6c6f676f2f6265636f6d655f615f706174726f6e5f627574746f6e2e706e67"],["style","max-width:100%;"]],null,null,null,null,null)),(n()(),e.rb(6,0,null,null,4,"h3",[],null,null,null,null,null)),(n()(),e.rb(7,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,["Images from "])),(n()(),e.rb(9,0,null,null,1,"a",[["href","https://pixabay.com/"]],null,null,null,null,null)),(n()(),e.Ib(-1,null,["Pixabay"])),(n()(),e.rb(11,0,null,null,5,"h3",[["fxLayout",""],["fxLayoutAlign","center center"]],null,null,null,null,null)),e.qb(12,737280,null,0,o.d,[i.h,e.k,i.l],{layout:[0,"layout"]},null),e.qb(13,737280,null,0,o.c,[i.h,e.k,[6,o.d],i.l],{align:[0,"align"]},null),(n()(),e.rb(14,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,["\xa9 2018 Angular Gallery"])),(n()(),e.rb(16,0,null,null,0,"iframe",[["frameborder","0"],["height","20px"],["scrolling","0"],["src","https://ghbtns.com/github-btn.html?user=murhafsousli&repo=ngx-gallery&type=star&count=true"],["width","85px"]],null,null,null,null,null)),(n()(),e.rb(17,0,null,null,11,"h3",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,["Created by Murhaf Sousli "])),(n()(),e.rb(19,0,null,null,4,"a",[["class","icon twitter"],["href","https://twitter.com/MurhafSousli"],["mat-icon-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Bb(n,20)._haltDisabledEvents(t)&&o),o},a.c,a.a)),e.qb(20,180224,null,0,r.a,[c.a,u.e,e.k,[2,s.a]],null,null),(n()(),e.rb(21,0,null,0,2,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),e.qb(22,573440,null,0,d.a,[p.c,d.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),e.Cb(23,2),(n()(),e.rb(24,0,null,null,4,"a",[["class","icon github"],["href","https://github.com/MurhafSousli"],["mat-icon-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Bb(n,25)._haltDisabledEvents(t)&&o),o},a.c,a.a)),e.qb(25,180224,null,0,r.a,[c.a,u.e,e.k,[2,s.a]],null,null),(n()(),e.rb(26,0,null,0,2,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),e.qb(27,573440,null,0,d.a,[p.c,d.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),e.Cb(28,2)],function(n,l){n(l,1,0,"column"),n(l,2,0,"center center"),n(l,12,0,""),n(l,13,0,"center center");var t=n(l,23,0,"fab","twitter");n(l,22,0,t,"lg");var e=n(l,28,0,"fab","github");n(l,27,0,e,"lg")},function(n,l){n(l,19,0,e.Bb(l,20).disabled?-1:e.Bb(l,20).tabIndex||0,e.Bb(l,20).disabled||null,e.Bb(l,20).disabled.toString(),"NoopAnimations"===e.Bb(l,20)._animationMode),n(l,21,0,e.Bb(l,22).renderedIconHTML),n(l,24,0,e.Bb(l,25).disabled?-1:e.Bb(l,25).tabIndex||0,e.Bb(l,25).disabled||null,e.Bb(l,25).disabled.toString(),"NoopAnimations"===e.Bb(l,25)._animationMode),n(l,26,0,e.Bb(l,27).renderedIconHTML)})}},jQpT:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()}}]);