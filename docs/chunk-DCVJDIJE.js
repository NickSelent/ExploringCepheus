import{c as W}from"./chunk-AAJIKNL7.js";import{h as F,i as M}from"./chunk-6T2JIZX5.js";import{a as b,c as C}from"./chunk-YBRGEWEM.js";import{b as d,f as c,g as f,h as g,j as v,k as w,l as y,m as G,n as h}from"./chunk-YSRWDOZ3.js";import"./chunk-UO4RCVKQ.js";import"./chunk-5OFRWK4J.js";import"./chunk-WF6I2U42.js";import{Cb as s,Db as r,Eb as n,Fb as u,Ob as m,Va as l,cc as a,fb as p}from"./chunk-JYIFF6EO.js";var D=class i{worldFormGroup;output;constructor(){this.worldFormGroup=new g({output:new v("")}),this.output=""}world(){console.clear();let t=new W;t.createWorld();let o=this.worldFormGroup.get("output"),e="";e+=`-----------------------------------------------------------------------------------------------
`,e+=t.universalWorldProfile,e+=`
-----------------------------------------------------------------------------------------------
`,e+="name: "+t.name+`
`,e+="size: "+t.size+`
`,e+="surface gravity: "+t.surfaceGravity+`
`,e+="gravity type: "+t.gravityType+`
`,e+="atmosphere: "+t.atmosphere+`
`,e+="pressure: "+t.pressure+`
`,e+="survival gear required: "+t.survivalGearRequired+`
`,e+="hydrographic: "+t.hydrographic+`
`,e+="world type: "+t.worldType+`
`,e+="population: "+t.population+`
`,e+="population range: "+t.populationRange+`
`,e+="population est.: "+t.populationEstimate+`
`,e+="primary star port: "+t.primaryStarport+`
`,e+="service level: "+t.starportServiceLevel+`
`,e+="best fuel: "+t.starportBestFuel+`
`,e+="annual maintenance: "+t.starportAnnualMaintenance+`
`,e+="shipyard capacity: "+t.starportShipyardCapacity+`
`,e+="possible bases: "+t.starportPossibleBases+`
`,e+="government: "+t.government+`
`,e+="law level: "+t.lawLevel+`
`,e+="not allowed: "+t.notAllowed+`
`,e+="tech level: "+t.technologyLevel+`
`,e+="trade code: "+t.tradeCode[0]+" ("+t.tradeCode[1]+`)
`,e+="planetoid belts: "+t.planetoidBelts+`
`,e+="gas giants: "+t.gasGiants+`
`,e+=`bases: <TODO>
`,e+=`travel zones: <TODO>
`,e+=`polities & world allegiance: <TODO>
`,o?.setValue(e)}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["world-generator"]],decls:9,vars:1,consts:[[3,"formGroup"],["matInput","","formControlName","output","rows","40",2,"width","700px"],["matButton","tonal",3,"click"]],template:function(o,e){o&1&&(r(0,"main")(1,"h1"),a(2,"World Generator"),n(),r(3,"form",0),u(4,"textarea",1)(5,"br")(6,"br"),r(7,"button",2),m("click",function(){return e.world()}),a(8,"Generate"),n()()()),o&2&&(l(3),s("formGroup",e.worldFormGroup))},dependencies:[h,w,d,c,f,y,G,C,b,M,F],encapsulation:2})};export{D as WorldGenerator};
