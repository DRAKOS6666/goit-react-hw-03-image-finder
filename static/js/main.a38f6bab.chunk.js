(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),o=n.n(r),s=n(7),c=n.n(s),i=n(3),l=n(4),u=n(6),h=n(5),d=n(8),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchText:""},e.handleChange=function(t){e.setState({searchText:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""===e.state.searchText&&d.b.error("Please enter search query!",{position:"top-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.props.onSubmit(e.state.searchText),e.setState({searchText:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("header",{className:"Searchbar",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(a.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(a.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(a.jsx)("input",{value:this.state.searchText,onChange:this.handleChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(r.Component),p=n(10),m=n(12),b=n.n(m);var j=function(e){var t=e.loadMore;return Object(a.jsx)("button",{type:"button",onClick:t,className:"Button",children:"Load More"})},O=document.querySelector("#modal-root"),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleCloseClick=function(t){t.target===t.currentTarget&&e.props.closeModal()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(s.createPortal)(Object(a.jsx)("div",{className:"Overlay",onClick:this.handleCloseClick,children:Object(a.jsx)("div",{className:"Modal",children:this.props.children})}),O)}}]),n}(r.Component);var v=function(e){var t=e.item,n=e.openModal;return Object(a.jsx)("li",{className:"ImageGalleryItem",children:Object(a.jsx)("img",{id:t.id,onClick:function(){return n(t.id)},className:"ImageGalleryItem-image",src:t.webformatURL,alt:t.tags})})};function y(e,t){return fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=",12,"&key=17903714-8f5ebcdc0900c0123ad2db8f4")).then((function(e){return e.json()}))}n(11),n(39),n(40);var x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],isLoading:!1,currentPage:1,isModal:!1,modalItem:null},e.getImages=function(){var t=e.props.query;e.setState({isLoading:!0}),y(t,e.state.currentPage).then((function(t){t.hits.forEach((function(e){return console.log(e.id)})),t.hits.length>0?e.setState((function(e){return{images:[].concat(Object(p.a)(e.images),Object(p.a)(t.hits)),isLoading:!1}})):d.b.warn("Nothing found, try another query",{position:"top-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).catch((function(e){d.b.error("Error, Something went wrong, try again",{position:"top-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),console.log(e)}))},e.loadMore=function(){e.setState((function(e){return{currentPage:e.currentPage+1}}))},e.openModal=function(t){var n=e.state.images.find((function(e){return e.id===t}));e.setState({isModal:!0,modalItem:n})},e.closeModal=function(){e.setState({isModal:!1})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({isLoading:!1}),""!==this.props.query&&this.getImages()}},{key:"componentDidUpdate",value:function(e,t){this.props.query!==e.query&&(this.setState({images:[],currentPage:1}),this.getImages()),this.state.currentPage>t.currentPage&&this.getImages(),this.state.images.length>t.images.length&&d.b.success("Success!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state,n=t.images,r=t.isLoading,o=t.isModal,s=t.modalItem;return Object(a.jsxs)(a.Fragment,{children:[n.length>0&&Object(a.jsx)("ul",{className:"ImageGallery",children:n.map((function(t){return Object(a.jsx)(v,{item:t,openModal:e.openModal},t.id)}))}),n.length>0?Object(a.jsx)("div",{className:"loadMoreContainer",children:r?Object(a.jsx)(b.a,{type:"TailSpin",color:"#00BFFF",height:40,width:40,timeout:4e3}):Object(a.jsx)(j,{loadMore:this.loadMore})}):null,o&&Object(a.jsx)(f,{closeModal:this.closeModal,children:Object(a.jsx)("img",{src:s.largeImageURL,alt:s.tags})})]})}}]),n}(r.Component),S=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isError:!1},e}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({isError:!0})}},{key:"render",value:function(){return this.state.isError?Object(a.jsx)("h1",{children:"Something went wrong, please try again later :("}):this.props.children}}]),n}(r.Component),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.setQuery=function(t){e.setState({query:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.query;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(S,{children:Object(a.jsx)(g,{onSubmit:this.setQuery})}),Object(a.jsx)(S,{children:e&&Object(a.jsx)(x,{query:e})})]})}}]),n}(r.Component);n(41);c.a.render(Object(a.jsxs)(o.a.StrictMode,{children:[Object(a.jsx)(d.a,{position:"bottom-center",autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(a.jsx)(C,{className:"App"}),Object(a.jsx)(d.a,{})]}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a38f6bab.chunk.js.map