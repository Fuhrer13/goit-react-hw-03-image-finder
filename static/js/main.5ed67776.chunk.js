(this["webpackJsonphomework03.2"]=this["webpackJsonphomework03.2"]||[]).push([[0],{2:function(e,t,a){e.exports={App:"App_App__Marhn",Searchbar:"App_Searchbar__2LGS0",SearchForm:"App_SearchForm__3GMBf","SearchForm-button":"App_SearchForm-button__2Ueqe","SearchForm-button-label":"App_SearchForm-button-label__3vnqk","SearchForm-input":"App_SearchForm-input__24qBc",ImageGallery:"App_ImageGallery__1ze2R",ImageGalleryItem:"App_ImageGalleryItem__3NHMV","ImageGalleryItem-image":"App_ImageGalleryItem-image__2ZZ9d",Overlay:"App_Overlay__31JdM",Modal:"App_Modal__1Dsr3",Button:"App_Button__hdpez"}},26:function(e,t,a){e.exports=a(71)},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),l=a(10),u=a.n(l),m=a(22),i=a(11),s=a(6),p=a(7),g=a(9),h=a(8),f=a(2),y=a.n(f),b=function(e){var t=e.onClick;return r.a.createElement("button",{type:"button",className:y.a.Button,onClick:t},"Load more")},d=a(25),_=a(1),v=function(e){var t=e.src;return r.a.createElement("div",{className:y.a.Overlay},r.a.createElement("div",{className:y.a.Modal},r.a.createElement("img",{src:t,alt:""})))};v.propType={src:a.n(_).a.string.isRequired};var S=v,E=function(e){var t=e.webformatURL,a=e.largeImageURL,o=Object(n.useState)(!1),c=Object(d.a)(o,2),l=c[0],u=c[1];return r.a.createElement("li",{className:y.a.ImageGalleryItem,onClick:function(){u(!l)}},l&&r.a.createElement(S,{src:a}),r.a.createElement("img",{src:t,alt:"",className:y.a.ImageGalleryItemImage}))},I=function(e){var t=e.images,a=e.toggleModal;return r.a.createElement("div",null,r.a.createElement("ul",{className:y.a.ImageGallery},t.map((function(e){return r.a.createElement(E,Object.assign({},e,{key:e.id,toggleModal:a}))}))))},F=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){var a=t.target.value;e.setState({query:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.onChangeQuery(e.state.query)},e.reset=function(){e.setState({query:""})},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:y.a.Searchbar},r.a.createElement("form",{className:y.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:y.a["SearchForm-button"]},r.a.createElement("span",{className:y.a["SearchForm-button-label"]},"Search")),r.a.createElement("input",{className:y.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,value:e}))))}}]),a}(n.Component),O=a(23),A=a.n(O),k=(a(53),function(){return r.a.createElement(A.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}),q=a(24),j=a.n(q),w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="15801135-59eedb575c96309a6a89f9f3e";return j.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},C=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1,error:null,query:"",page:1},e.getImages=function(){var t=e.state,a=t.query,n=t.page;e.setState({loading:!0}),w(a,n).then((function(t){return e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.scrollPage=Object(m.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState((function(e){return{page:e.page+1}})),t.next=3,e.getImages();case 3:case"end":return t.stop()}}),t)}))),e.onSubmitForm=function(t){e.setState({query:t,page:1,images:[]})},e}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.query,r=a.page;n!==t.query&&this.getImages(),r>12&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{onChangeQuery:this.onSubmitForm}),t.length>0&&r.a.createElement(I,{images:t}),a&&r.a.createElement(k,null),t.length>0&&!a&&r.a.createElement(b,{onClick:this.scrollPage}))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.5ed67776.chunk.js.map