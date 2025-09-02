import{f as v,g as C,j as E}from"./chunk-EHBA3ZHD.js";import{Gb as x,Ib as N,Kb as u,Qa as s,Vb as _,Yb as l,Zb as h,_b as A,ab as f,ea as m,fa as g,fb as c,wb as d,xb as r,yb as a}from"./chunk-L2DJVYJE.js";function S(i,e){i&1&&(r(0,"div"),l(1,"\u2728"),a())}function y(i,e){if(i&1){let t=x();r(0,"div",5)(1,"div",6),N("mouseenter",function(){let o=m(t).$implicit,p=u(2);return g(p.onMouseEnter(o))}),l(2),c(3,S,2,0,"div",7),a()()}if(i&2){let t=e.$implicit,n=e.index,o=u().index,p=u();_("left",o*76-75,"px")("top",n*92+46*(1-o%2)-96,"px"),s(2),A(" ",p.getCellName(t)," "),s(),d("ngIf",p.detectWorld(t)!="")}}function L(i,e){if(i&1&&(r(0,"div"),c(1,y,4,6,"div",4),a()),i&2){let t=e.$implicit;s(),d("ngForOf",t)}}var b=class i{planet_name="TEST";rows=10;cols=12;grid=Array.from({length:this.rows},(e,t)=>Array.from({length:this.cols},(n,o)=>`${t.toString().padStart(2,"0")}${o.toString().padStart(2,"0")}`));getCellName(e){return e.startsWith("00")||e.startsWith("09")||e.endsWith("11")||e.endsWith("00")?"":e}onMouseEnter(e){this.sectorText.split(`
`).forEach((n,o)=>{n.includes(e)&&(this.planet_name=n)})}detectWorld(e){var t="";return this.sectorText.split(`
`).forEach((o,p)=>{o.includes(e)&&(t=o.substring(0,13))}),t}sectorText=`Ranther       0101 D667530-7   Ag, Ga, Ni       A  621 Na 
Buru          0102 C325752-8 S                     631 Na 
Hadar         0106 E558354-8   Lo                  210 Na 
Luyten's Star 0107 C4668A8-7   Ga, Ri           A  710 Na 
Sharmun       0201 D88398A-5   Hi, Lt           A  401 Na 
Vortania      0203 D221465-7   Ni, Po              321 Na 
Dopere        0206 C451ADF-4   Lt, Po           A  332 Na 
Eldrax        0207 X6B4378-7   Lo               A  210 Na 
Magor         0301 E5A0478-7   Ni               A  111 Na 
Larissa       0302 D799668-6   Ni                  503 Na 
Ariel         0305 C456A76-9                    A  910 Na 
Pynchan       0308 B433521-7 S Ni, Po              212 Na 
Barnard       0404 X558454-0   Ga, Lt, Ni          411 Na 
Hamal         0406 C667420-7   Ga, Ni           A  211 Na 
Neri          0407 E645544-5   Ag, Lt, Ni          311 Na 
Alef          0408 D8A5440-7   Ni               A  413 Na 
Independance  0502 A765A87-C N                     801 Na 
Prometheus    0506 X247000-5   Ba, Lt           A  012 Na 
Pipitea       0507 E6897BB-5   Ga, Lt, Ri       A  900 Na 
Yed Prior     0510 X431253-7   Lo, Po              421 Na 
Boinayel      0601 C404A95-7   Ic, Va              524 Na 
Caldara       0602 D428330-7   Lo               A  511 Na 
Haik          0704 D655664-6   Ag, Ga, Ni          212 Na 
Proteus       0705 C476313-A   Lo                  712 Na 
Yanyan        0706 XA98365-5   Lo, Lt              924 Na 
Achernar      0707 X532543-7 P Ni, Po              912 Na 
Mythara       0709 E554400-8   Ga, Ni           A  211 Na 
Kereru        0710 X427211-7   Lo                  204 Na 
Cruinlagh     0801 C466ABB-A S                  A  313 Na 
Lacipyt       0803 C645468-7 G Ni                  824 Na 
Pirx          0805 E000347-7   As, Lo, Va          420 Na 
Iolaus        0808 EAA9365-7   Lo               A  514 Na 
Victoriapeak  0809 X626367-7   Lo                  220 Na 
Tethys        0810 X77A561-5   Lt, Ni              423 Na `;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["app-subsector-explorer"]],decls:12,vars:2,consts:[[1,"flex-container"],[1,"flex-item"],[1,"hexcontainer"],[4,"ngFor","ngForOf"],["class","col",3,"left","top",4,"ngFor","ngForOf"],[1,"col"],[1,"x-hexagon","positioned-div",3,"mouseenter"],[4,"ngIf"]],template:function(t,n){t&1&&(r(0,"section")(1,"article")(2,"h2"),l(3,"Subsector Explorer"),a(),r(4,"p"),l(5,' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." '),a()()(),r(6,"div",0)(7,"div",1)(8,"div",2),c(9,L,2,1,"div",3),a()(),r(10,"div",1),l(11),a()()),t&2&&(s(9),d("ngForOf",n.grid),s(2),h(n.planet_name))},dependencies:[E,v,C],styles:[".hexcontainer[_ngcontent-%COMP%]{background-color:#0f0;position:relative;width:634px;height:966px;overflow:hidden}.col[_ngcontent-%COMP%]{position:absolute;width:100%;-moz-transition:all .3s ease;-o-transition:all .3s ease;-webkit-transition:all .3s ease;transition:all .3s ease}.positioned-div[_ngcontent-%COMP%]{position:absolute;width:100px;height:100px;background-color:#000;color:#fff;text-align:center;line-height:40px;font-size:12px}.x-hexagon[_ngcontent-%COMP%]{-webkit-clip-path:polygon(25% 5%,75% 5%,100% 50%,75% 95%,25% 95%,0% 50%);-moz-clip-path:polygon(25% 5%,75% 5%,100% 50%,75% 95%,25% 95%,0% 50%);-o-clip-path:polygon(25% 5%,75% 5%,100% 50%,75% 95%,25% 95%,0% 50%);clip-path:polygon(25% 5%,75% 5%,100% 50%,75% 95%,25% 95%,0% 50%)}.flex-container[_ngcontent-%COMP%]{display:flex}.flex-item[_ngcontent-%COMP%]{flex:1;border:1px solid #ccc;padding:10px}"]})};export{b as SubsectorExplorerComponent};
