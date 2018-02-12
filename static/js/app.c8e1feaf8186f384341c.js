webpackJsonp([1],{"7kpo":function(e,t){},CPHR:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),r={name:"course-component",props:["name","type","row","col","len"],computed:{overlayStyle:function(){return{left:(60*parseInt(this.col)).toString()+"px",top:(15*parseInt(this.row)-8).toString()+"px",height:(15*parseInt(this.len)-1).toString()+"px",width:"59px",fontSize:"8px",backgroundColor:"#ADD8E6",position:"absolute"}}}},o={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{style:e.overlayStyle},[e._v("\n  "+e._s(e.name)+" ("+e._s(e.type)+")\n")])},staticRenderFns:[]},a=s("VU/8")(r,o,!1,null,null,null).exports,i=s("PJh5"),u=s.n(i),c=["8:00","","9:00","","10:00","","11:00","","12:00","","1:00","","2:00","","3:00","","4:00","","5:00","","6:00","","7:00","","8:00","","9:00",""],l={name:"schedule-component",props:["term","sun","mon","tue","wed","thu","fri","sat"],data:function(){return{times:c}},methods:{timeBetween:function(e,t){var s=u()(e.toString(),"HH:mm");return u()(t.toString(),"HH:mm").diff(s,"minutes")/30},timeFromStart:function(e){return this.timeBetween("08:00",e)+1}},components:{CourseComponent:a}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"schedule"},[e._l(e.mon,function(t){return s("course-component",{key:t.id,attrs:{name:t.name,type:t.type,row:e.timeFromStart(t.start),col:1,len:e.timeBetween(t.start,t.end)}})}),e._v(" "),e._l(e.tue,function(t){return s("course-component",{key:t.id,attrs:{name:t.name,type:t.type,row:e.timeFromStart(t.start),col:2,len:e.timeBetween(t.start,t.end)}})}),e._v(" "),e._l(e.wed,function(t){return s("course-component",{key:t.id,attrs:{name:t.name,type:t.type,row:e.timeFromStart(t.start),col:3,len:e.timeBetween(t.start,t.end)}})}),e._v(" "),e._l(e.thu,function(t){return s("course-component",{key:t.id,attrs:{name:t.name,type:t.type,row:e.timeFromStart(t.start),col:4,len:e.timeBetween(t.start,t.end)}})}),e._v(" "),e._l(e.fri,function(t){return s("course-component",{key:t.id,attrs:{name:t.name,type:t.type,row:e.timeFromStart(t.start),col:5,len:e.timeBetween(t.start,t.end)}})}),e._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"day term"},[e._v("Term "+e._s(e.term))]),e._v(" "),e._l(e.times,function(t){return s("div",{key:t.id,staticClass:"day"},[e._v(e._s(t))])})],2),e._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"day"},[e._v("MON")]),e._v(" "),e._l(e.times,function(e){return s("div",{key:e.id,staticClass:"day"})})],2),e._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"day"},[e._v("TUE")]),e._v(" "),e._l(e.times,function(e){return s("div",{key:e.id,staticClass:"day"})})],2),e._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"day"},[e._v("WED")]),e._v(" "),e._l(e.times,function(e){return s("div",{key:e.id,staticClass:"day"})})],2),e._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"day"},[e._v("THU")]),e._v(" "),e._l(e.times,function(e){return s("div",{key:e.id,staticClass:"day"})})],2),e._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"day"},[e._v("FRI")]),e._v(" "),e._l(e.times,function(e){return s("div",{key:e.id,staticClass:"day"})})],2)],2)},staticRenderFns:[]};var m=s("VU/8")(l,d,!1,function(e){s("7kpo")},"data-v-0dbbc097",null).exports,h=s("HpzI"),j={BASE:"https://sheltered-taiga-32349.herokuapp.com",SCHEDULES_API:"/schedules",AUTOCOMPLETE_API:"/autocomplete",schedules:[],courses:[],dayStrToIndex:function(e){switch(e){case"Sun":return 0;case"Mon":return 1;case"Tue":return 2;case"Wed":return 3;case"Thu":return 4;case"Fri":return 5;case"Sat":return 6;default:throw Error(e+" is not a valid day!")}},intTimeToStr:function(e){var t=e.toString(),s=t.length-2;return u()({hours:parseInt(t.substring(0,s)),minutes:parseInt(t.substring(s))}).format("HH:mm")},formatSchedule:function(e){for(var t=[[[],[],[],[],[],[],[]],[[],[],[],[],[],[],[]]],s=e.courses,n=0;n<s.length;n++)for(var r=s[n].name,o=s[n].sessions,a=0;a<o.length;a++){var i=o[a],u={name:r,type:i.activity,start:this.intTimeToStr(i.start),end:this.intTimeToStr(i.end)};switch(i.term){case"1":t[0][this.dayStrToIndex(i.day)].push(u);break;case"2":t[1][this.dayStrToIndex(i.day)].push(u);break;case"1-2":t[0][this.dayStrToIndex(i.day)].push(u),t[1][this.dayStrToIndex(i.day)].push(u);break;default:throw Error(i.term+" not recognized!")}}return t},create:function(e,t){var s=e.join(",");this.schedules=[],fetch(this.BASE+this.SCHEDULES_API+"?courses="+s,{method:"GET"}).then(function(e){return e.json()}).then(function(e){var s=e.body;j.schedules=s.map(function(e){return j.formatSchedule(e)}),t.call()})},autocomplete:function(e,t){fetch(this.BASE+this.AUTOCOMPLETE_API+"?text="+e,{method:"GET"}).then(function(e){return e.json()}).then(function(e){j.courses=e.body,t.call()})}},p=[],v={name:"App",components:{ScheduleComponent:m,Autocomplete:s.n(h).a},data:function(){return{MAX_INPUT_COURSES:20,SCHEDULES_PER_PAGE:100,courseInput:"Hello",inputCourses:p,autocompleteItems:[],loading:!1,schedules:[]}},methods:{addCourse:function(e){this.inputCourses.length!==this.MAX_INPUT_COURSES&&(this.inputCourses.map(function(e){return e.name}).includes(e)||(this.inputCourses.push({name:e}),this.generateSchedule()))},removeCourseByIndex:function(e){this.inputCourses.splice(e,1),this.generateSchedule()},getAutocomplete:function(e){var t=this;j.autocomplete(e,function(){t.autocompleteItems=j.courses.sort()})},checkAutocomplete:function(e){e||(this.autocompleteItems=[])},generateSchedule:function(){if(0!==this.inputCourses.length){this.loading=!0;var e=this.inputCourses.map(function(e){return e.name.toUpperCase()});this.schedules=[];var t=this;j.create(e,function(){t.schedules=j.schedules,t.loading=!1})}else this.schedules=[]}}},f={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("h1",[e._v("UBC Course Schedule Creator")]),e._v(" "),s("div",[s("u",[e._v("Selected Courses")]),e._v(" "),e._l(e.inputCourses,function(t,n){return s("div",{key:t.id},[e._v("\n      "+e._s(t.name)+"\n      "),s("button",{staticClass:"remove-course-button",on:{click:function(t){e.removeCourseByIndex(n)}}},[e._v("X")])])}),e._v(" "),s("h4",[e._v("Enter your courses here (e.g. CPSC 110)")]),e._v(" "),s("autocomplete",{attrs:{"min-len":1,items:e.autocompleteItems.slice(0,7),"auto-select-one-item":!1},on:{"update-items":e.getAutocomplete,input:e.checkAutocomplete,"item-selected":e.addCourse}})],2),e._v(" "),e.loading?s("div",[e._v("Loading...")]):e._e(),e._v(" "),s("div",[e.schedules.length>0?s("h4",[e._v("\n      Created "+e._s(e.schedules.length)+" Schedules\n    ")]):e._e(),e._v(" "),e._l(e.schedules.slice(0,100),function(t,n){return s("div",{key:t.id},[s("h3",[e._v("Schedule "+e._s(n+1))]),e._v(" "),s("schedule-component",{attrs:{term:1,sun:t[0][0],mon:t[0][1],tue:t[0][2],wed:t[0][3],thu:t[0][4],fri:t[0][5],sat:t[0][6]}}),e._v(" "),s("schedule-component",{attrs:{term:2,sun:t[1][0],mon:t[1][1],tue:t[1][2],wed:t[1][3],thu:t[1][4],fri:t[1][5],sat:t[1][6]}})],1)}),e._v(" "),e.schedules.length>e.SCHEDULES_PER_PAGE?s("p",[e._v("Only showing first "+e._s(e.SCHEDULES_PER_PAGE)+" schedules...")]):e._e()],2)])},staticRenderFns:[]};var y=s("VU/8")(v,f,!1,function(e){s("CPHR")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:y},template:"<App/>"})},uslO:function(e,t,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(e){return s(o(e))}function o(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.c8e1feaf8186f384341c.js.map