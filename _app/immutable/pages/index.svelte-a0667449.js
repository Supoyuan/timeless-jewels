import{S as Te,i as je,s as $e,N as K,O as Q,l as I,r as S,a as D,w as z,m as P,n as R,u as g,h as p,c as J,x as F,p as A,b as T,M as d,y as W,P as X,f as C,t as G,d as Ie,B as Y,Q as De,e as q,g as Pe,R as oe,T as re,U as Re,G as Je,v as M,V as Z}from"../chunks/index-0e9e8f4c.js";import{S as x,g as Oe,p as Ve}from"../chunks/stores-dc10ba72.js";import{b as Me}from"../chunks/paths-b9644fda.js";import{d as $,c as Ne}from"../chunks/index-bd6d1d0d.js";import"../chunks/singletons-eca981c1.js";function fe(n,e,a){const l=n.slice();return l[15]=e[a],l}function ue(n,e,a){const l=n.slice();l[18]=e[a],l[21]=a;const i=$.GetStatByIndex(l[15].AlternatePassiveAddition.StatsKeys[l[21]]);return l[19]=i,l}function ce(n,e,a){const l=n.slice();l[18]=e[a],l[21]=a;const i=$.GetStatByIndex(l[4].AlternatePassiveSkill.StatsKeys[l[21]]);return l[19]=i,l}function _e(n){let e,a,l,i,s,t,r,f=n[1]&&Object.keys($.TimelessJewelConquerors[n[0].value]).indexOf(n[1].value)>=0,v,c;function h(u){n[10](u)}let m={items:n[5]};n[1]!==void 0&&(m.value=n[1]),s=new x({props:m}),K.push(()=>Q(s,"value",h)),s.$on("select",n[8]);let o=f&&he(n);return{c(){e=I("div"),a=I("h3"),l=S("Conqueror"),i=D(),z(s.$$.fragment),r=D(),o&&o.c(),v=q(),this.h()},l(u){e=P(u,"DIV",{class:!0});var _=R(e);a=P(_,"H3",{class:!0});var k=R(a);l=g(k,"Conqueror"),k.forEach(p),i=J(_),F(s.$$.fragment,_),_.forEach(p),r=J(u),o&&o.l(u),v=q(),this.h()},h(){A(a,"class","mb-2"),A(e,"class","mt-4")},m(u,_){T(u,e,_),d(e,a),d(a,l),d(e,i),W(s,e,null),T(u,r,_),o&&o.m(u,_),T(u,v,_),c=!0},p(u,_){const k={};_&32&&(k.items=u[5]),!t&&_&2&&(t=!0,k.value=u[1],X(()=>t=!1)),s.$set(k),_&3&&(f=u[1]&&Object.keys($.TimelessJewelConquerors[u[0].value]).indexOf(u[1].value)>=0),f?o?(o.p(u,_),_&3&&C(o,1)):(o=he(u),o.c(),C(o,1),o.m(v.parentNode,v)):o&&(Pe(),G(o,1,1,()=>{o=null}),Ie())},i(u){c||(C(s.$$.fragment,u),C(o),c=!0)},o(u){G(s.$$.fragment,u),G(o),c=!1},d(u){u&&p(e),Y(s),u&&p(r),o&&o.d(u),u&&p(v)}}}function he(n){let e,a,l,i,s,t,r,f,v;function c(o){n[11](o)}let h={items:n[7]};n[2]!==void 0&&(h.value=n[2]),s=new x({props:h}),K.push(()=>Q(s,"value",c)),s.$on("select",n[8]);let m=n[2]&&ve(n);return{c(){e=I("div"),a=I("h3"),l=S("Passive Skill"),i=D(),z(s.$$.fragment),r=D(),m&&m.c(),f=q(),this.h()},l(o){e=P(o,"DIV",{class:!0});var u=R(e);a=P(u,"H3",{class:!0});var _=R(a);l=g(_,"Passive Skill"),_.forEach(p),i=J(u),F(s.$$.fragment,u),u.forEach(p),r=J(o),m&&m.l(o),f=q(),this.h()},h(){A(a,"class","mb-2"),A(e,"class","mt-4")},m(o,u){T(o,e,u),d(e,a),d(a,l),d(e,i),W(s,e,null),T(o,r,u),m&&m.m(o,u),T(o,f,u),v=!0},p(o,u){const _={};!t&&u&4&&(t=!0,_.value=o[2],X(()=>t=!1)),s.$set(_),o[2]?m?m.p(o,u):(m=ve(o),m.c(),m.m(f.parentNode,f)):m&&(m.d(1),m=null)},i(o){v||(C(s.$$.fragment,o),v=!0)},o(o){G(s.$$.fragment,o),v=!1},d(o){o&&p(e),Y(s),o&&p(r),m&&m.d(o),o&&p(f)}}}function ve(n){let e,a,l,i,s,t,r,f,v,c,h,m,o=(n[3]<$.TimelessJewelSeedRanges[n[0].value].Min||n[3]>$.TimelessJewelSeedRanges[n[0].value].Max)&&de(n),u=n[4]&&me(n);return{c(){e=I("div"),a=I("h3"),l=S("Seed"),i=D(),s=I("input"),f=D(),o&&o.c(),v=D(),u&&u.c(),c=q(),this.h()},l(_){e=P(_,"DIV",{class:!0});var k=R(e);a=P(k,"H3",{class:!0});var V=R(a);l=g(V,"Seed"),V.forEach(p),i=J(k),s=P(k,"INPUT",{type:!0,class:!0,min:!0,max:!0}),f=J(k),o&&o.l(k),k.forEach(p),v=J(_),u&&u.l(_),c=q(),this.h()},h(){A(a,"class","mb-2"),A(s,"type","number"),A(s,"class","seed"),A(s,"min",t=$.TimelessJewelSeedRanges[n[0].value].Min),A(s,"max",r=$.TimelessJewelSeedRanges[n[0].value].Max),A(e,"class","mt-4")},m(_,k){T(_,e,k),d(e,a),d(a,l),d(e,i),d(e,s),oe(s,n[3]),d(e,f),o&&o.m(e,null),T(_,v,k),u&&u.m(_,k),T(_,c,k),h||(m=[re(s,"input",n[12]),re(s,"blur",n[8])],h=!0)},p(_,k){k&1&&t!==(t=$.TimelessJewelSeedRanges[_[0].value].Min)&&A(s,"min",t),k&1&&r!==(r=$.TimelessJewelSeedRanges[_[0].value].Max)&&A(s,"max",r),k&8&&Re(s.value)!==_[3]&&oe(s,_[3]),_[3]<$.TimelessJewelSeedRanges[_[0].value].Min||_[3]>$.TimelessJewelSeedRanges[_[0].value].Max?o?o.p(_,k):(o=de(_),o.c(),o.m(e,null)):o&&(o.d(1),o=null),_[4]?u?u.p(_,k):(u=me(_),u.c(),u.m(c.parentNode,c)):u&&(u.d(1),u=null)},d(_){_&&p(e),o&&o.d(),_&&p(v),u&&u.d(_),_&&p(c),h=!1,Je(m)}}}function de(n){let e,a,l=$.TimelessJewelSeedRanges[n[0].value].Min+"",i,s,t=$.TimelessJewelSeedRanges[n[0].value].Max+"",r;return{c(){e=I("div"),a=S("Seed must be between "),i=S(l),s=S(" and "),r=S(t),this.h()},l(f){e=P(f,"DIV",{class:!0});var v=R(e);a=g(v,"Seed must be between "),i=g(v,l),s=g(v," and "),r=g(v,t),v.forEach(p),this.h()},h(){A(e,"class","mt-2")},m(f,v){T(f,e,v),d(e,a),d(e,i),d(e,s),d(e,r)},p(f,v){v&1&&l!==(l=$.TimelessJewelSeedRanges[f[0].value].Min+"")&&M(i,l),v&1&&t!==(t=$.TimelessJewelSeedRanges[f[0].value].Max+"")&&M(r,t)},d(f){f&&p(e)}}}function me(n){var s;let e,a,l=n[4].AlternatePassiveSkill&&pe(n),i="AlternatePassiveAdditionInformations"in n[4]&&((s=n[4].AlternatePassiveAdditionInformations)==null?void 0:s.length)>0&&Se(n);return{c(){l&&l.c(),e=D(),i&&i.c(),a=q()},l(t){l&&l.l(t),e=J(t),i&&i.l(t),a=q()},m(t,r){l&&l.m(t,r),T(t,e,r),i&&i.m(t,r),T(t,a,r)},p(t,r){var f;t[4].AlternatePassiveSkill?l?l.p(t,r):(l=pe(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),"AlternatePassiveAdditionInformations"in t[4]&&((f=t[4].AlternatePassiveAdditionInformations)==null?void 0:f.length)>0?i?i.p(t,r):(i=Se(t),i.c(),i.m(a.parentNode,a)):i&&(i.d(1),i=null)},d(t){l&&l.d(t),t&&p(e),i&&i.d(t),t&&p(a)}}}function pe(n){let e,a,l,i,s,t=n[4].AlternatePassiveSkill.Name+"",r,f,v=n[4].AlternatePassiveSkill.ID+"",c,h,m=n[4].AlternatePassiveSkill+"",o,u,_,k=n[4].StatRolls&&Object.keys(n[4].StatRolls).length>0,V,b=k&&be(n);return{c(){e=I("div"),a=I("h3"),l=S("Alternate Passive Skill"),i=D(),s=I("span"),r=S(t),f=S(" ("),c=S(v),h=S(") ("),o=S(m),u=S(")"),_=D(),b&&b.c(),V=q(),this.h()},l(w){e=P(w,"DIV",{class:!0});var E=R(e);a=P(E,"H3",{});var U=R(a);l=g(U,"Alternate Passive Skill"),U.forEach(p),i=J(E),s=P(E,"SPAN",{});var N=R(s);r=g(N,t),f=g(N," ("),c=g(N,v),h=g(N,") ("),o=g(N,m),u=g(N,")"),N.forEach(p),E.forEach(p),_=J(w),b&&b.l(w),V=q(),this.h()},h(){A(e,"class","mt-4")},m(w,E){T(w,e,E),d(e,a),d(a,l),d(e,i),d(e,s),d(s,r),d(s,f),d(s,c),d(s,h),d(s,o),d(s,u),T(w,_,E),b&&b.m(w,E),T(w,V,E)},p(w,E){E&16&&t!==(t=w[4].AlternatePassiveSkill.Name+"")&&M(r,t),E&16&&v!==(v=w[4].AlternatePassiveSkill.ID+"")&&M(c,v),E&16&&m!==(m=w[4].AlternatePassiveSkill+"")&&M(o,m),E&16&&(k=w[4].StatRolls&&Object.keys(w[4].StatRolls).length>0),k?b?b.p(w,E):(b=be(w),b.c(),b.m(V.parentNode,V)):b&&(b.d(1),b=null)},d(w){w&&p(e),w&&p(_),b&&b.d(w),w&&p(V)}}}function be(n){let e,a=Object.keys(n[4].StatRolls),l=[];for(let i=0;i<a.length;i+=1)l[i]=ke(ce(n,a,i));return{c(){e=I("ol");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=P(i,"OL",{class:!0});var s=R(e);for(let t=0;t<l.length;t+=1)l[t].l(s);s.forEach(p),this.h()},h(){A(e,"class","mt-4 list-decimal pl-8")},m(i,s){T(i,e,s);for(let t=0;t<l.length;t+=1)l[t].m(e,null)},p(i,s){if(s&16){a=Object.keys(i[4].StatRolls);let t;for(t=0;t<a.length;t+=1){const r=ce(i,a,t);l[t]?l[t].p(r,s):(l[t]=ke(r),l[t].c(),l[t].m(e,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=a.length}},d(i){i&&p(e),Z(l,i)}}}function ke(n){let e,a=(n[19].Text||"<no name>")+"",l,i,s=n[19].ID+"",t,r,f=n[4].StatRolls[n[18]]+"",v;return{c(){e=I("li"),l=S(a),i=S(" ("),t=S(s),r=S(") - "),v=S(f)},l(c){e=P(c,"LI",{});var h=R(e);l=g(h,a),i=g(h," ("),t=g(h,s),r=g(h,") - "),v=g(h,f),h.forEach(p)},m(c,h){T(c,e,h),d(e,l),d(e,i),d(e,t),d(e,r),d(e,v)},p(c,h){h&16&&a!==(a=(c[19].Text||"<no name>")+"")&&M(l,a),h&16&&s!==(s=c[19].ID+"")&&M(t,s),h&16&&f!==(f=c[4].StatRolls[c[18]]+"")&&M(v,f)},d(c){c&&p(e)}}}function Se(n){let e,a,l,i,s,t=n[4].AlternatePassiveAdditionInformations,r=[];for(let f=0;f<t.length;f+=1)r[f]=Ae(fe(n,t,f));return{c(){e=I("div"),a=I("h3"),l=S("Additions"),i=D(),s=I("ul");for(let f=0;f<r.length;f+=1)r[f].c();this.h()},l(f){e=P(f,"DIV",{class:!0});var v=R(e);a=P(v,"H3",{});var c=R(a);l=g(c,"Additions"),c.forEach(p),i=J(v),s=P(v,"UL",{class:!0});var h=R(s);for(let m=0;m<r.length;m+=1)r[m].l(h);h.forEach(p),v.forEach(p),this.h()},h(){A(s,"class","list-disc pl-8"),A(e,"class","mt-4")},m(f,v){T(f,e,v),d(e,a),d(a,l),d(e,i),d(e,s);for(let c=0;c<r.length;c+=1)r[c].m(s,null)},p(f,v){if(v&16){t=f[4].AlternatePassiveAdditionInformations;let c;for(c=0;c<t.length;c+=1){const h=fe(f,t,c);r[c]?r[c].p(h,v):(r[c]=Ae(h),r[c].c(),r[c].m(s,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=t.length}},d(f){f&&p(e),Z(r,f)}}}function ge(n){let e,a=Object.keys(n[15].StatRolls),l=[];for(let i=0;i<a.length;i+=1)l[i]=we(ue(n,a,i));return{c(){e=I("ol");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=P(i,"OL",{class:!0});var s=R(e);for(let t=0;t<l.length;t+=1)l[t].l(s);s.forEach(p),this.h()},h(){A(e,"class","list-decimal pl-8")},m(i,s){T(i,e,s);for(let t=0;t<l.length;t+=1)l[t].m(e,null)},p(i,s){if(s&16){a=Object.keys(i[15].StatRolls);let t;for(t=0;t<a.length;t+=1){const r=ue(i,a,t);l[t]?l[t].p(r,s):(l[t]=we(r),l[t].c(),l[t].m(e,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=a.length}},d(i){i&&p(e),Z(l,i)}}}function we(n){let e,a=(n[19].Text||"<no name>")+"",l,i,s=n[19].ID+"",t,r,f=n[15].StatRolls[n[18]]+"",v;return{c(){e=I("li"),l=S(a),i=S(" ("),t=S(s),r=S(") - "),v=S(f)},l(c){e=P(c,"LI",{});var h=R(e);l=g(h,a),i=g(h," ("),t=g(h,s),r=g(h,") - "),v=g(h,f),h.forEach(p)},m(c,h){T(c,e,h),d(e,l),d(e,i),d(e,t),d(e,r),d(e,v)},p(c,h){h&16&&a!==(a=(c[19].Text||"<no name>")+"")&&M(l,a),h&16&&s!==(s=c[19].ID+"")&&M(t,s),h&16&&f!==(f=c[15].StatRolls[c[18]]+"")&&M(v,f)},d(c){c&&p(e)}}}function Ae(n){let e,a,l=n[15].AlternatePassiveAddition.ID+"",i,s,t=n[15].AlternatePassiveAddition.Index+"",r,f,v,c=n[15].StatRolls&&Object.keys(n[15].StatRolls).length>0,h,m=c&&ge(n);return{c(){e=I("li"),a=I("span"),i=S(l),s=S(" ("),r=S(t),f=S(")"),v=D(),m&&m.c(),h=D(),this.h()},l(o){e=P(o,"LI",{class:!0});var u=R(e);a=P(u,"SPAN",{});var _=R(a);i=g(_,l),s=g(_," ("),r=g(_,t),f=g(_,")"),_.forEach(p),v=J(u),m&&m.l(u),h=J(u),u.forEach(p),this.h()},h(){A(e,"class","mt-4")},m(o,u){T(o,e,u),d(e,a),d(a,i),d(a,s),d(a,r),d(a,f),d(e,v),m&&m.m(e,null),d(e,h)},p(o,u){u&16&&l!==(l=o[15].AlternatePassiveAddition.ID+"")&&M(i,l),u&16&&t!==(t=o[15].AlternatePassiveAddition.Index+"")&&M(r,t),u&16&&(c=o[15].StatRolls&&Object.keys(o[15].StatRolls).length>0),c?m?m.p(o,u):(m=ge(o),m.c(),m.m(e,h)):m&&(m.d(1),m=null)},d(o){o&&p(e),m&&m.d()}}}function qe(n){let e,a,l,i,s,t,r,f,v,c,h,m,o,u,_,k,V,b,w,E,U,N;function Ee(O){n[9](O)}let ee={items:n[6]};n[0]!==void 0&&(ee.value=n[0]),_=new x({props:ee}),K.push(()=>Q(_,"value",Ee)),_.$on("select",n[8]);let j=n[0]&&_e(n);return{c(){e=I("div"),a=I("div"),l=I("div"),i=I("h1"),s=S("Timeless Calculator"),t=D(),r=I("a"),f=I("h2"),v=S("Skill Tree View"),c=D(),h=I("div"),m=I("h3"),o=S("Timeless Jewel"),u=D(),z(_.$$.fragment),V=D(),j&&j.c(),b=D(),w=I("div"),E=I("a"),U=S("Source (Github)"),this.h()},l(O){e=P(O,"DIV",{class:!0});var H=R(e);a=P(H,"DIV",{class:!0});var L=R(a);l=P(L,"DIV",{});var y=R(l);i=P(y,"H1",{class:!0});var le=R(i);s=g(le,"Timeless Calculator"),le.forEach(p),t=J(y),r=P(y,"A",{href:!0});var te=R(r);f=P(te,"H2",{class:!0});var se=R(f);v=g(se,"Skill Tree View"),se.forEach(p),te.forEach(p),c=J(y),h=P(y,"DIV",{class:!0});var B=R(h);m=P(B,"H3",{class:!0});var ie=R(m);o=g(ie,"Timeless Jewel"),ie.forEach(p),u=J(B),F(_.$$.fragment,B),V=J(B),j&&j.l(B),B.forEach(p),y.forEach(p),b=J(L),w=P(L,"DIV",{class:!0});var ae=R(w);E=P(ae,"A",{href:!0,target:!0,rel:!0});var ne=R(E);U=g(ne,"Source (Github)"),ne.forEach(p),ae.forEach(p),L.forEach(p),H.forEach(p),this.h()},h(){A(i,"class","text-white mb-10 text-center"),A(f,"class","text-white mb-10 text-center underline text-orange-500"),A(r,"href",Me+"/tree"),A(m,"class","mb-2"),A(h,"class","themed"),A(E,"href","https://github.com/Vilsol/timeless-jewels"),A(E,"target","_blank"),A(E,"rel","noopener"),A(w,"class","text-right text-orange-500"),A(a,"class","flex flex-col justify-between w-1/3"),A(e,"class","py-10 flex flex-row justify-center w-screen h-screen")},m(O,H){T(O,e,H),d(e,a),d(a,l),d(l,i),d(i,s),d(l,t),d(l,r),d(r,f),d(f,v),d(l,c),d(l,h),d(h,m),d(m,o),d(h,u),W(_,h,null),d(h,V),j&&j.m(h,null),d(a,b),d(a,w),d(w,E),d(E,U),N=!0},p(O,[H]){const L={};!k&&H&1&&(k=!0,L.value=O[0],X(()=>k=!1)),_.$set(L),O[0]?j?(j.p(O,H),H&1&&C(j,1)):(j=_e(O),j.c(),C(j,1),j.m(h,null)):j&&(Pe(),G(j,1,1,()=>{j=null}),Ie())},i(O){N||(C(_.$$.fragment,O),C(j),N=!0)},o(O){G(_.$$.fragment,O),G(j),N=!1},d(O){O&&p(e),Y(_),j&&j.d()}}}function Ce(n,e,a){let l,i;De(n,Ve,b=>a(13,i=b));const s=i.url.searchParams,t=Object.keys($.TimelessJewels).map(b=>({value:parseInt(b),label:$.TimelessJewels[b]}));let r=s.has("jewel")?t.find(b=>b.value==s.get("jewel")):void 0,f=s.has("conqueror")?{value:s.get("conqueror"),label:s.get("conqueror")}:void 0;const v=Object.values($.PassiveSkills).map(b=>({value:b.Index,label:b.Name+" ("+b.ID+")"}));let c=s.has("passive_skill")?v.find(b=>b.value==s.get("passive_skill")):void 0,h=s.has("seed")?s.get("seed"):0,m;const o=()=>{{const b={};r&&(b.jewel=r.value),f&&(b.conqueror=f.value),c&&(b.passive_skill=c.value),h&&(b.seed=h);const w=Object.keys(b).map(E=>E+"="+encodeURIComponent(b[E])).join("&");Oe(i.url.pathname+"?"+w)}};function u(b){r=b,a(0,r)}function _(b){f=b,a(1,f)}function k(b){c=b,a(2,c)}function V(){h=Re(this.value),a(3,h)}return n.$$.update=()=>{n.$$.dirty&1&&a(5,l=r?Object.keys($.TimelessJewelConquerors[r.value]).map(b=>({value:b,label:b})):[]),n.$$.dirty&15&&c&&h&&r&&f&&a(4,m=Ne.Calculate(c.value,typeof h=="string"?parseInt(h):h,r.value,f.value))},[r,f,c,h,m,l,t,v,o,u,_,k,V]}class Be extends Te{constructor(e){super(),je(this,e,Ce,qe,$e,{})}}export{Be as default};
