import{j as a,S as p,aN as u,aO as j,aP as S,a as d,l as C,m as I,aQ as w,aR as f,aS as y,aT as R,aq as i,T as c,aU as T,B as U,aV as v}from"./index-e4339af6.js";const A=()=>a.jsx(p,{variant:"rectangular",animation:"wave",width:"100%",height:"140px"}),b=async e=>{const t=u(),r=j(t,`ItemsImages/${e}.webp`);try{return await S(r)}catch(s){console.log(s)}},E=({id:e,title:t,pack:r,price:s,activeSubCategory:x})=>{const[n,l]=d.useState(null),g=C(),o=I(w),h=()=>{e&&g(v({id:e,title:t,pack:r,price:s,count:1,image:String(n),userId:String(o)}))};return d.useEffect(()=>{b(x).then(m=>{l(String(m))})},[]),a.jsxs(f,{sx:{width:{xs:"250px",md:"350px"}},children:[n?a.jsx(y,{component:"img",alt:t,height:"140",image:String(n)}):a.jsx(A,{}),a.jsxs(R,{children:[a.jsx(i,{title:t,children:a.jsx(c,{gutterBottom:!0,variant:"h5",component:"div",noWrap:!0,sx:{fontSize:{xs:"11px",md:"1rem"}},children:t})}),a.jsxs(c,{variant:"body2",color:"text.secondary",children:["Цена:"," ",`${s.toFixed(2)}р`,a.jsx("br",{}),"Тип упаковки:"," ",r]})]}),a.jsx(T,{children:a.jsx(i,{title:!o&&"Чтобы пользоваться корзиной необходимо войти",children:a.jsx(U,{size:"large",sx:{width:"100%"},onClick:h,children:"Добавить в корзину"})})})]})};export{E as C};
