import{m as i,as as p,aI as g,aJ as x,aK as I,aL as C,j as u,aM as m}from"./index-e4339af6.js";import{C as y}from"./index-c8c628a7.js";const S=(r,s,o,a,n)=>{let t=r.filter(e=>e.categoryId===o&&e.subCategoryId===s);t.length===0&&(t=r.filter(e=>e.categoryId===o)),t.length===0&&(t=r.filter(e=>e.subCategoryId===s));function c(e,l){return e.title.localeCompare(l.title,"ru")}return a.title==="алфавиту"?t=t.sort(c):t=t.sort((e,l)=>e.price-l.price),a.sortBy==="desc"&&(t=t.reverse()),n!==null&&n!==""&&(t=r.filter(e=>e.title.toLowerCase().includes(n.toLowerCase()))),t},A=()=>{const r=i(p),s=i(g),o=i(x),a=i(I),n=i(C),t=S(r,String(o==null?void 0:o.id),String(s==null?void 0:s.id),a,n);return u.jsx(m,{container:!0,sx:{mt:3,pl:{xs:0,md:5},ml:{xs:0},gap:2,justifyContent:{xs:"center",md:"flex-start"}},children:t.map(({id:c,title:e,price:l,pack:f,subCategoryId:d})=>u.jsx(m,{item:!0,children:u.jsx(y,{id:c,title:e,price:l,pack:f,activeSubCategory:String(d)})},c))})};export{A as default};
