(this["webpackJsonphomework03.2"]=this["webpackJsonphomework03.2"]||[]).push([[0],{2:function(e,a,t){e.exports={App:"App_App__Marhn",Searchbar:"App_Searchbar__2LGS0",SearchForm:"App_SearchForm__3GMBf","SearchForm-button":"App_SearchForm-button__2Ueqe","SearchForm-button-label":"App_SearchForm-button-label__3vnqk","SearchForm-input":"App_SearchForm-input__24qBc",ImageGallery:"App_ImageGallery__1ze2R",ImageGalleryItem:"App_ImageGalleryItem__3NHMV","ImageGalleryItem-image":"App_ImageGalleryItem-image__2ZZ9d",Overlay:"App_Overlay__31JdM",Modal:"App_Modal__1Dsr3",Button:"App_Button__hdpez"}},26:function(e,a,t){e.exports=t(71)},71:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(21),c=t.n(o),l=t(10),m=t.n(l),u=t(22),i=t(11),s=t(6),p=t(7),g=t(9),h=t(8),f=t(2),b=t.n(f),d=function(e){var a=e.onClick;return n.a.createElement("button",{type:"button",className:b.a.Button,onClick:a},"Load more")},y=t(25),_=t(1),v=function(e){var a=e.src;return n.a.createElement("div",{className:b.a.Overlay},n.a.createElement("div",{className:b.a.Modal},n.a.createElement("img",{src:a,alt:""})))};v.propType={src:t.n(_).a.string.isRequired};var S=v,E=function(e){var a=e.webformatURL,t=e.largeImageURL,o=Object(r.useState)(!1),c=Object(y.a)(o,2),l=c[0],m=c[1];return n.a.createElement("li",{className:b.a.ImageGalleryItem,onClick:function(){m(!l)}},l&&n.a.createElement(S,{src:t}),n.a.createElement("img",{src:a,alt:"",className:b.a.ImageGalleryItemImage}))},I=function(e){var a=e.images,t=e.toggleModal;return n.a.createElement("div",null,n.a.createElement("ul",{className:b.a.ImageGallery},a.map((function(e){var a=e.id,r=e.webformatURL,o=e.largeImageURL;return n.a.createElement(E,{webformatURL:r,largeImageURL:o,key:a,toggleModal:t})}))))},F=function(e){Object(g.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={query:""},e.handleChange=function(a){var t=a.target.value;e.setState({query:t})},e.handleSubmit=function(a){a.preventDefault(),e.props.onChangeQuery(e.state.query),e.reset()},e.reset=function(){e.setState({query:""})},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this.state.query;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{className:b.a.Searchbar},n.a.createElement("form",{className:b.a.SearchForm,onSubmit:this.handleSubmit},n.a.createElement("button",{type:"submit",className:b.a["SearchForm-button"]},n.a.createElement("span",{className:b.a["SearchForm-button-label"]},"Search")),n.a.createElement("input",{className:b.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,value:e}))))}}]),t}(r.Component),A=t(23),O=t.n(A),k=(t(53),function(){return n.a.createElement(O.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}),q=t(24),w=t.n(q),j=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t="15801135-59eedb575c96309a6a89f9f3e";return w.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(a,"&key=").concat(t,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},C=function(e){Object(g.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={images:[],loading:!1,error:null,query:"",page:1,value:""},e.getImages=function(){var a=e.state,t=a.query,r=a.page;e.setState({loading:!0}),j(t,r).then((function(a){return e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(a)),page:e.page+1}}))})).catch((function(a){return e.setState({error:a})})).finally((function(){e.setState({loading:!1})}))},e.scrollPage=Object(u.a)(m.a.mark((function a(){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getImages();case 2:case"end":return a.stop()}}),a)}))),e.onSubmitForm=function(a){e.setState({query:a,page:1,images:[]})},e}return Object(p.a)(t,[{key:"componentDidUpdate",value:function(e,a){var t=this.state,r=t.query,n=t.page;r!==a.query&&this.getImages(),n>12&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.loading,r=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(F,{onChangeQuery:this.onSubmitForm}),a.length>0&&n.a.createElement(I,{images:a}),t&&n.a.createElement(k,null),r&&n.a.createElement("h1",null,"Something bad happend"),a.length>0&&!t&&n.a.createElement(d,{onClick:this.scrollPage}))}}]),t}(r.Component);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.c00d474b.chunk.js.map