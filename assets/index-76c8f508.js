import{r as p,i as x,j as t,a as h,m as v,aK as f,B as j,T as _,aY as y,l as I,aD as g,aE as B,aZ as S,ah as D,a_ as L}from"./index-e4339af6.js";import{L as A}from"./ListItemIcon-51767d40.js";import"./listItemIconClasses-95e4eeff.js";var c={},C=x;Object.defineProperty(c,"__esModule",{value:!0});var n=c.default=void 0,w=C(p()),E=t,R=(0,w.default)((0,E.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");n=c.default=R;var d={},T=x;Object.defineProperty(d,"__esModule",{value:!0});var i=d.default=void 0,$=T(p()),b=t,q=(0,$.default)((0,b.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");i=d.default=q;const U=()=>{const[s,o]=h.useState(null),e=m=>{o(m.currentTarget)},r=()=>{o(null)},a=!!s,l=a?"simple-popover":void 0,u=v(f);return t.jsxs(t.Fragment,{children:[t.jsxs(j,{sx:{textTransform:"none",minWidth:"250px",justifyContent:"flex-start"},onClick:e,children:["Сортировка по:",t.jsx(_,{sx:{ml:1,borderBottom:"1px dashed"},children:u.title}),u.sortBy==="asc"?t.jsx(i,{}):t.jsx(n,{})]}),t.jsx(y,{id:l,open:a,anchorEl:s,onClose:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:t.jsx(k,{})})]})},P=[{id:2,title:"алфавиту",sortBy:"desc",Icon:n},{id:3,title:"алфавиту",sortBy:"asc",Icon:i},{id:0,title:"цене",sortBy:"desc",Icon:n},{id:1,title:"цене",sortBy:"asc",Icon:i}],k=()=>{const s=I(),o=(e,r)=>{s(L({title:e,sortBy:r}))};return t.jsx(g,{children:P.map(({title:e,sortBy:r,Icon:a,id:l})=>t.jsx(B,{children:t.jsxs(S,{onClick:()=>o(e,r),children:[t.jsx(A,{children:t.jsx(a,{})}),t.jsx(D,{primary:e})]})},l))})};export{U as default};