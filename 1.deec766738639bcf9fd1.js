(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{607:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n(0),r=n.n(i),o=n(12),s=n.n(o);const a=({onClick:e,name:t="x"})=>r.a.createElement(s.a,{onClick:e,name:t,style:{position:"absolute",right:"10px",top:"10px",fontSize:"1.5rem",cursor:"pointer",zIndex:999}})},713:function(e,t,n){"use strict";n.r(t),n.d(t,"MarkdownEditor",function(){return b});var i=n(0),r=n.n(i),o=n(646),s=n.n(o),a=n(6),d=n(8),c=n(4),l=n(255),p=n.n(l),u=n(150),h=n(607),m=n(32),g=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function s(e){try{d(i.next(e))}catch(e){o(e)}}function a(e){try{d(i.throw(e))}catch(e){o(e)}}function d(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,a)}d((i=i.apply(e,t||[])).next())})};let b=class extends r.a.Component{constructor(e){super(e),this.textArea=null,this.mde=null,this.isEditorLoaded=!1,this.converter=new s.a.Converter,this.editable=new u.a(this)}get visitState(){return this.props.store.visitState}get item(){return this.props.note}get htmlContent(){return this.converter.makeHtml(this.item.content)}get codemirror(){return this.mde&&this.mde.codemirror}get content(){return this.codemirror&&this.codemirror.getValue()}render(){return this.editable.isEditing?r.a.createElement("div",{style:{background:"white",position:"relative"},className:"non-draggable"},this.isEditorLoaded?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{name:"check",onClick:()=>this.editable.disableEditing()}),r.a.createElement("textarea",{ref:this.registerTextArea})):r.a.createElement("div",{ref:this.registerLoader},"Loading ...")):r.a.createElement(p.a,{onDoubleClick:this.editable.enableEditing,style:{overflow:"hidden",padding:"10px",minHeight:"45px",cursor:"pointer"}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.htmlContent}}))}registerLoader(e){return f(this,void 0,void 0,function*(){e&&(yield Promise.all([n.e(7),n.e(8),n.e(9)]).then(n.t.bind(null,617,7)),this.isEditorLoaded=!0)})}registerTextArea(e){this.textArea=e,e?this.setupEditor():this.disposeMDESync&&this.disposeMDESync()}setupEditor(){return f(this,void 0,void 0,function*(){yield n.e(13).then(n.t.bind(null,634,7)),yield n.e(12).then(n.t.bind(null,632,7));const e=(yield Promise.all([n.e(7),n.e(8),n.e(9)]).then(n.t.bind(null,617,7))).default;this.mde=new e({element:this.textArea,initialValue:this.item.content}),this.codemirror.on("change",()=>{this.item.setContent(this.content)}),this.disposeMDESync=Object(c.g)(()=>{this.content!==this.item.content&&this.codemirror.setValue(this.item.content)})})}};g([c.u,y("design:type",Object)],b.prototype,"isEditorLoaded",void 0),g([c.h,y("design:type",Object),y("design:paramtypes",[])],b.prototype,"visitState",null),g([c.h,y("design:type",Object),y("design:paramtypes",[])],b.prototype,"item",null),g([c.h,y("design:type",Object),y("design:paramtypes",[])],b.prototype,"htmlContent",null),g([a.a,y("design:type",Function),y("design:paramtypes",[Object]),y("design:returntype",Promise)],b.prototype,"registerLoader",null),g([a.a,y("design:type",Function),y("design:paramtypes",[Object]),y("design:returntype",void 0)],b.prototype,"registerTextArea",null),g([a.a,y("design:type",Function),y("design:paramtypes",[]),y("design:returntype",Promise)],b.prototype,"setupEditor",null),b=g([m.b,d.d,y("design:paramtypes",[Object])],b)}}]);