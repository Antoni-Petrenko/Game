(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,,,,,function(e,t,n){e.exports={Field:"Cell_Field__2FUYK",Active:"Cell_Active__2RZ0s",Player:"Cell_Player__mmEoV",AI:"Cell_AI__azOIQ"}},function(e,t,n){e.exports={Form:"PlayerSetup_Form__OFasL",Select:"PlayerSetup_Select__1YIFC",Input:"PlayerSetup_Input__2sqPv",Button:"PlayerSetup_Button__1G-2m"}},,,,,,,,,function(e,t,n){e.exports={GameField:"GameField_GameField__16H08"}},function(e,t,n){e.exports={Message:"Message_Message__1Ec3l"}},function(e,t,n){e.exports={Game:"Game_Game__hO0k3"}},function(e,t,n){e.exports={PlayerItem:"Player_PlayerItem__qUhtM"}},function(e,t,n){e.exports={LeaderBoard:"LeaderBoard_LeaderBoard__8Lr0o"}},function(e,t,n){e.exports={wrapper:"App_wrapper__3mn1Z"}},,,function(e,t,n){e.exports=n(36)},,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"GET_GAME_SETTINGS",(function(){return d})),n.d(a,"GET_LEADER_BOARD",(function(){return E})),n.d(a,"SET_GAME_SETTINGS",(function(){return _})),n.d(a,"SET_PLAYER_NAME",(function(){return m})),n.d(a,"POST_GAME_RESULT",(function(){return A})),n.d(a,"TO_DRAW_FIELD",(function(){return O})),n.d(a,"START_GAME",(function(){return y})),n.d(a,"GENERATE_RANDOM_CELL",(function(){return v})),n.d(a,"MAKE_CHOICE",(function(){return b})),n.d(a,"FINISH_GAME",(function(){return I})),n.d(a,"PLAYER_WIN",(function(){return h})),n.d(a,"AI_WIN",(function(){return N})),n.d(a,"A_DRAW",(function(){return G})),n.d(a,"CONNECTION_ERROR",(function(){return R}));var r={};n.r(r),n.d(r,"AppDefaultState",(function(){return T})),n.d(r,"GameDefaultState",(function(){return g}));var c=n(0),u=n.n(c),l=n(7),i=n.n(l),o=n(1),s=n(4),f=n.n(s),p=n(8),d="GET_GAME_SETTINGS",E="GET_LEADER_BOARD",_="SET_GAME_SETTINGS",m="SET_PLAYER_NAME",A="POST_GAME_RESULT",O="TO_DRAW_FIELD",y="START_GAME",v="GENERATE_RANDOM_CELL",b="MAKE_CHOICE",I="FINISH_GAME",h="PLAYER_WIN",N="AI_WIN",G="A_DRAW",R="CONNECTION_ERROR",T={levels:{},player:"",defaultSettings:{delay:2e3,field:5},winner:"",liaderBoard:[],message:""},g={AIPoints:0,PlayerPoints:0,filledCells:[],field:[],delay:0,gameIsOn:!1,isFirstGame:!0},j=a,S=r,M=j,C=function(e){return{type:M.GET_GAME_SETTINGS,payload:e}},w=function(e){return{type:M.GET_LEADER_BOARD,payload:e}},P=function(e){return{type:M.TO_DRAW_FIELD,payload:e}},D=function(){return{type:M.GENERATE_RANDOM_CELL}},L=function(e){var t=e.AIPoints,n=e.PlayerPoints,a=e.field,r=a.length;return t>.5*r?{type:M.AI_WIN}:n>.5*r?{type:M.PLAYER_WIN}:!!(n+t===a.length&n===t)&&{type:M.A_DRAW}},F=function(){var e=new Date,t=e.getHours()<10?"0"+e.getHours():e.getHours(),n=e.getDate(),a=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),r=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t,":").concat(a,"; ").concat(n," ").concat(r," ").concat(c)},k=function(){return function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://starnavi-frontend-test-task.herokuapp.com/winners");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,t(w(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:M.CONNECTION_ERROR,payload:"Check your internet connection"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},x=function(e,t){return function(n,a){n(function(e,t){return{type:M.MAKE_CHOICE,payload:{cellID:e,whoClicked:t}}}(e,t));var r=a().Game;L(r)?(n(L(r)),n({type:M.FINISH_GAME}),n(function(){var e=Object(p.a)(f.a.mark((function e(t,n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n(),r=a.App,e.next=4,fetch("https://starnavi-frontend-test-task.herokuapp.com/winners",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({winner:r.winner,date:F()})});case 4:e.sent.ok&&t(k()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:M.CONNECTION_ERROR,payload:"Check your internet connection"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}())):n(D())}},B=n(5),W=function(e){var t,n=e.id,a=Object(o.c)((function(e){return e.Game.delay})),r=Object(o.c)((function(e){return e.Game.field[n].isActive})),c=Object(o.c)((function(e){return e.Game.field[n].whoseField})),l=Object(o.b)();r&&(t=setTimeout((function(){l(x(n,"AI"))}),a));var i=[B.Field];r&&i.push(B.Active),"Player"===c?i.push(B.Player):"AI"===c&&i.push(B.AI);return u.a.createElement("div",{className:i.join(" "),onClick:function(){r&&(clearTimeout(t),l(x(n,"Player")))}})},H=n(15),Y=function(){var e=Object(o.c)((function(e){return e.Game.field.length})),t=50*Math.sqrt(e),n={width:t,height:t};return u.a.createElement("div",{className:H.GameField,style:n},Array(e).fill(0).map((function(e,t){return u.a.createElement(W,{key:t,id:t})})))},J=n(16),K=function(){var e=Object(o.c)((function(e){return e.App.message}));return u.a.createElement("div",{className:J.Message},u.a.createElement("p",{style:e.includes("AI")||e.includes("internet")?{color:"#e85a5f"}:null},e))},U=n(12),q=n(6),Z=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.App.levels})),n=Object(o.c)((function(e){return e.Game.isFirstGame})),a=Object(o.c)((function(e){return e.Game.gameIsOn})),r=Object(o.c)((function(e){return e.App.defaultSettings}));Object(c.useEffect)((function(){a&&e(D())}),[a,e]),Object(c.useEffect)((function(){e(P(r))}),[e,r]);var l=Object.keys(t),i=Object(c.useState)(""),s=Object(U.a)(i,2),f=s[0],p=s[1],d=Object(c.useState)(!1),E=Object(U.a)(d,2),_=E[0],m=E[1],A={select:function(n){n.target.value?(m(!0),e(P(t[n.target.value]))):m(!1)},input:function(e){p(e.target.value)},submit:function(t){var n;t.preventDefault(),e((n=f,{type:M.SET_PLAYER_NAME,payload:n})),e({type:M.START_GAME})}};return u.a.createElement("form",{className:q.Form,onSubmit:A.submit},u.a.createElement("select",{className:q.Select,id:"gameMode",onChange:A.select,disabled:a},u.a.createElement("option",{value:""},"Pick game mode"),l.map((function(e,t){return u.a.createElement("option",{key:t,value:e},e.replace("Mode",""))}))),u.a.createElement("input",{className:q.Input,type:"text",placeholder:"Enter your name",value:f,onChange:A.input,required:!0,disabled:a}),u.a.createElement("button",{className:q.Button,disabled:a!==!_},n?"play":"play again"))},z=n(17),Q=function(){var e=Object(o.b)();return Object(c.useEffect)((function(){e(function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://starnavi-frontend-test-task.herokuapp.com/game-settings");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,t(C(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:M.CONNECTION_ERROR,payload:"Check your internet connection"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),u.a.createElement("section",{className:z.Game},u.a.createElement(Z,null),u.a.createElement(K,null),u.a.createElement(Y,null))},V=n(18),X=function(e){var t=e.winner,n=e.date;return u.a.createElement("li",{className:V.PlayerItem},u.a.createElement("span",null,t),u.a.createElement("span",null,n))},$=n(19),ee=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.App.liaderBoard}));return Object(c.useEffect)((function(){e(k())}),[e]),u.a.createElement("section",{className:$.LeaderBoard},u.a.createElement("h2",null,"Leader Board"),u.a.createElement("ul",null,t.reverse().map((function(e,t){return u.a.createElement(X,Object.assign({key:t},e))}))))},te=n(20);var ne=function(){return u.a.createElement("div",{className:te.wrapper},u.a.createElement(Q,null),u.a.createElement(ee,null))},ae=(n(35),n(3)),re=n(21),ce=n(2),ue=j,le=S;var ie=n(22),oe=j,se=S;var fe=Object(ae.c)({App:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le.AppDefaultState,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue.GET_GAME_SETTINGS:return Object(ce.a)({},e,{levels:t.payload});case ue.CONNECTION_ERROR:return Object(ce.a)({},e,{message:t.payload});case ue.GET_LEADER_BOARD:return Object(ce.a)({},e,{liaderBoard:t.payload});case ue.SET_PLAYER_NAME:return Object(ce.a)({},e,{player:t.payload});case ue.PLAYER_WIN:return Object(ce.a)({},e,{message:"".concat(e.player," win!"),winner:e.player});case ue.AI_WIN:return Object(ce.a)({},e,{message:"AI win!",winner:"AI"});case ue.A_DRAW:return Object(ce.a)({},e,{message:"draw! try again",winner:""});case ue.POST_GAME_RESULT:return Object(ce.a)({},e,{winner:""});default:return Object(ce.a)({},e)}},Game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se.GameDefaultState,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.TO_DRAW_FIELD:var n=Array(Math.pow(t.payload.field,2)).fill(0).map((function(e,t){return{id:t,isActive:!1,whoseField:"none"}}));return Object(ce.a)({},e,{field:n,delay:t.payload.delay});case oe.START_GAME:if(!e.isFirstGame){var a=e.field.map((function(e){return e.whoseField="none",e}));return Object(ce.a)({},e,{field:a,gameIsOn:!0})}return Object(ce.a)({},e,{gameIsOn:!0});case oe.GENERATE_RANDOM_CELL:var r=function(e){for(var t=e.field,n=e.filledCells,a=0;a<=t.length;a++){var r=Math.round(Math.random()*(t.length-1));if(!n.includes(r))return r}}(e),c=[].concat(Object(ie.a)(e.filledCells),[r]),u=e.field.map((function(e){return e.id===r&&(e.isActive=!0),e}));return Object(ce.a)({},e,{field:u,filledCells:c});case oe.MAKE_CHOICE:var l=e.field.map((function(e){return e.id===t.payload.cellID&&(e.whoseField=t.payload.whoClicked,e.isActive=!1),e})),i=l.filter((function(e){return"AI"===e.whoseField})).length,o=l.filter((function(e){return"Player"===e.whoseField})).length;return Object(ce.a)({},e,{field:l,AIPoints:i,PlayerPoints:o});case oe.FINISH_GAME:return Object(ce.a)({},e,{filledCells:[],gameIsOn:!1,isFirstGame:!1});default:return Object(ce.a)({},e)}}});var pe=Object(ae.d)(fe,Object(ae.a)(re.a)),de=u.a.createElement(o.a,{store:pe},u.a.createElement(ne,null));console.dir(u.a),i.a.render(de,document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.20ac5071.chunk.js.map