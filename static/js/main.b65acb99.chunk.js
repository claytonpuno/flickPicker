(this["webpackJsonpproject-five"]=this["webpackJsonpproject-five"]||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/errorPoster.74bddd9e.jpg"},26:function(e,t,a){e.exports=a(52)},31:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(22),l=a.n(i),s=(a(31),a(25)),o=a(2),c=a(3),m=a(5),u=a(4),h=a(8),d=a.n(h);a(33);d.a.initializeApp({apiKey:"AIzaSyA-eCHfzwyAex3Xg2UQ9h1TShEfhFf5KWg",authDomain:"project-five-f9920.firebaseapp.com",databaseURL:"https://project-five-f9920.firebaseio.com",projectId:"project-five-f9920",storageBucket:"project-five-f9920.appspot.com",messagingSenderId:"336671408502",appId:"1:336671408502:web:13088098ed306641d97a57"});var f=d.a;var p=function(e){var t=e.filmList,a=t.filmName,n=t.filmId;return r.a.createElement("li",{className:"flickListItem",id:n},r.a.createElement("h3",null,a.filmName),r.a.createElement("img",{src:a.filmImg,alt:"A Poster for "+a.filmName}),r.a.createElement("button",{onClick:function(){f.database().ref(e.filmList.filmId).remove()}},"Remove"))},v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleFormChange=function(t){e.setState({userInput:t.target.value})},e.waitForOnSubmit=function(t){e.props.handleFormSubmit(t,e.state.userInput),e.setState({userInput:""}),e.props.handleHeaderActive()},e.state={userInput:""},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.waitForOnSubmit},r.a.createElement("input",{type:"text",value:this.state.userInput,onChange:this.handleFormChange,placeholder:"Enter film name",className:"formInput"}),r.a.createElement("button",{className:"formButton",type:"submit","aria-label":"Search"}," Search "))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleShowHelp=function(){e.setState({active:!e.state.active})},e.state={active:!1},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"helpBox"},r.a.createElement("button",{className:"showHelp",onClick:this.handleShowHelp,"aria-label":"Show help box"},"Instructions"),this.state.active?r.a.createElement("div",{className:"helpContents"},r.a.createElement("p",null,"Need helping picking a movie?"),r.a.createElement("p",null,"Find flicks you're interested in watching using the search bar below. Click \"Add Flick\" to add that movie to your FlickList. View your current FlickList by clicking the film strip button in the top right corner. Hit randomize and we'll make the choice for you.")):null)}}]),a}(n.Component),E=a(23),g=a.n(E),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).waitAddToUserList=function(t){e.props.addToUserList(t,t.target.value,t.target.id,t.target.attributes.data.value),e.added(t.target.id)},e.added=function(e){document.getElementById(e).innerHTML="Added"},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.error?r.a.createElement("li",{className:"error"},r.a.createElement("p",null,"Sorry, there are no movies with that name available.")," ",r.a.createElement("p",null,"Please try again.")," "):null,this.props.queryList.map((function(t){return r.a.createElement("li",{key:t.id,className:"queryItem"},r.a.createElement("div",{className:"imgContainer"},r.a.createElement("img",{src:null===t.poster_path?g.a:"https://image.tmdb.org/t/p/w500"+t.poster_path,alt:"Poster for "+t.title})),r.a.createElement("div",{className:"queryContent"},r.a.createElement("h3",null,t.title),r.a.createElement("div",{className:"overviewBox"},r.a.createElement("p",null,t.overview)),r.a.createElement("button",{onClick:e.waitAddToUserList,value:t.title,id:t.id,data:"https://image.tmdb.org/t/p/w500"+t.poster_path,className:"addFlick"},"Add Fick")))})))}}]),a}(n.Component),y=a(24),k=a.n(y),C=(a(51),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).axiosCall=function(t){k()({url:"https://api.themoviedb.org/3/search/movie",method:"GET",responseType:"json",params:{api_key:"4f70306aa4e939e1535c12686b6403c7",query:t,include_adult:"false"}}).then((function(t){0!==t.data.results.length?e.setState({queryList:t.data.results,error:!1}):e.setState({queryList:[],error:!0})}))},e.handleChange=function(t){e.setState({userInput:t.target.value})},e.handleFormSubmit=function(t,a){t.preventDefault(),""!==a&&(e.axiosCall(a),e.setState({randomChoice:""}))},e.handleAddToUserList=function(t,a,n,r){t.preventDefault(),f.database().ref().push({filmName:a,filmId:n,filmImg:r}),e.setState({userInput:""})},e.handleShowList=function(){e.setState({active:!e.state.active})},e.handleRandomize=function(){var t=Object(s.a)(e.state.filmList),a=Math.floor(Math.random()*t.length);e.setState({randomChoice:t[a].filmName.filmName,queryList:[]})},e.handleHeaderActive=function(){e.setState({headerActive:!0})},e.state={filmList:[],queryList:[],userInput:"",active:!1,headerActive:!1,error:!1,randomChoice:"",duplicate:null},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.database().ref().on("value",(function(t){var a=[],n=t.val();for(var r in n)a.push({filmName:n[r],filmId:r});e.setState({filmList:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"wrapper flexCol relative"},r.a.createElement("header",null,r.a.createElement("div",{className:this.state.headerActive?"headerUp flexCol":"headerDown flexCol"},r.a.createElement("h1",null,"FlickPicker"),r.a.createElement("button",{onClick:this.handleShowList,className:"hamburger","aria-label":"Open your film list menu"},r.a.createElement("i",{className:"fas fa-film"}),r.a.createElement("span",null,this.state.filmList.length)),r.a.createElement(b,null),r.a.createElement(v,{wow:this.wow,handleFormSubmit:this.handleFormSubmit,handleChange:this.handleChange,handleHeaderActive:this.handleHeaderActive})),r.a.createElement("aside",{className:this.state.active?"showList":null},r.a.createElement("div",{className:"menuTop"},r.a.createElement("h2",null,"Your FlickList")),r.a.createElement("ul",{className:"userList"},r.a.createElement("li",null),this.state.filmList.map((function(e){return r.a.createElement(p,{filmList:e,key:e.filmId})}))),r.a.createElement("button",{onClick:this.handleRandomize,className:this.state.active?"showList randomize":"randomize","aria-label":"Randomize your film list"},"Randomize"))),r.a.createElement("main",null,this.state.headerActive?r.a.createElement("ul",{className:"queryList"},r.a.createElement(w,{queryList:this.state.queryList,error:this.state.error,addToUserList:this.handleAddToUserList})):null,""!==this.state.randomChoice?r.a.createElement("div",{className:"randomChoice"},r.a.createElement("p",null,"You should watch"),r.a.createElement("h4",null,this.state.randomChoice),r.a.createElement("button",{"aria-label":"Close random choice",onClick:function(){return e.setState({randomChoice:""})}},"Thanks!")):null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.b65acb99.chunk.js.map