import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as I,a as L}from"./index-DBSB4Jwm.js";import{r as i,i as U}from"./iframe-BRm_1KQT.js";import"./index-DPKxkhMC.js";import{c as K}from"./index-psZhPCVI.js";import"./index-DdAMQRwh.js";import"./index-B90NvwHe.js";import"./index-Dta8onDd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-WJvPZ8fY.js";function W(e,a=[]){let s=[];function c(r,d){const n=i.createContext(d);n.displayName=r+"Context";const l=s.length;s=[...s,d];const v=o=>{const{scope:m,children:f,...x}=o,h=m?.[e]?.[l]||n,S=i.useMemo(()=>x,Object.values(x));return t.jsx(h.Provider,{value:S,children:f})};v.displayName=r+"Provider";function b(o,m){const f=m?.[e]?.[l]||n,x=i.useContext(f);if(x)return x;if(d!==void 0)return d;throw new Error(`\`${o}\` must be used within \`${r}\``)}return[v,b]}const u=()=>{const r=s.map(d=>i.createContext(d));return function(n){const l=n?.[e]||r;return i.useMemo(()=>({[`__scope${e}`]:{...n,[e]:l}}),[n,l])}};return u.scopeName=e,[c,J(u,...a)]}function J(...e){const a=e[0];if(e.length===1)return a;const s=()=>{const c=e.map(u=>({useScope:u(),scopeName:u.scopeName}));return function(r){const d=c.reduce((n,{useScope:l,scopeName:v})=>{const o=l(r)[`__scope${v}`];return{...n,...o}},{});return i.useMemo(()=>({[`__scope${a.scopeName}`]:d}),[d])}};return s.scopeName=a.scopeName,s}function Q(e){const a=i.useRef(e);return i.useEffect(()=>{a.current=e}),i.useMemo(()=>(...s)=>a.current?.(...s),[])}var C=globalThis?.document?i.useLayoutEffect:()=>{},X=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],M=X.reduce((e,a)=>{const s=K(`Primitive.${a}`),c=i.forwardRef((u,r)=>{const{asChild:d,...n}=u,l=d?s:a;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(l,{...n,ref:r})});return c.displayName=`Primitive.${a}`,{...e,[a]:c}},{}),_={exports:{}},F={};var R;function Y(){if(R)return F;R=1;var e=U();function a(o,m){return o===m&&(o!==0||1/o===1/m)||o!==o&&m!==m}var s=typeof Object.is=="function"?Object.is:a,c=e.useState,u=e.useEffect,r=e.useLayoutEffect,d=e.useDebugValue;function n(o,m){var f=m(),x=c({inst:{value:f,getSnapshot:m}}),h=x[0].inst,S=x[1];return r(function(){h.value=f,h.getSnapshot=m,l(h)&&S({inst:h})},[o,f,m]),u(function(){return l(h)&&S({inst:h}),o(function(){l(h)&&S({inst:h})})},[o]),d(f),f}function l(o){var m=o.getSnapshot;o=o.value;try{var f=m();return!s(o,f)}catch{return!0}}function v(o,m){return m()}var b=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?v:n;return F.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:b,F}var z;function Z(){return z||(z=1,_.exports=Y()),_.exports}var ee=Z();function ae(){return ee.useSyncExternalStore(te,()=>!0,()=>!1)}function te(){return()=>{}}var N="Avatar",[re]=W(N),[se,$]=re(N),P=i.forwardRef((e,a)=>{const{__scopeAvatar:s,...c}=e,[u,r]=i.useState("idle");return t.jsx(se,{scope:s,imageLoadingStatus:u,onImageLoadingStatusChange:r,children:t.jsx(M.span,{...c,ref:a})})});P.displayName=N;var T="AvatarImage",V=i.forwardRef((e,a)=>{const{__scopeAvatar:s,src:c,onLoadingStatusChange:u=()=>{},...r}=e,d=$(T,s),n=ne(c,r),l=Q(v=>{u(v),d.onImageLoadingStatusChange(v)});return C(()=>{n!=="idle"&&l(n)},[n,l]),n==="loaded"?t.jsx(M.img,{...r,ref:a,src:c}):null});V.displayName=T;var q="AvatarFallback",D=i.forwardRef((e,a)=>{const{__scopeAvatar:s,delayMs:c,...u}=e,r=$(q,s),[d,n]=i.useState(c===void 0);return i.useEffect(()=>{if(c!==void 0){const l=window.setTimeout(()=>n(!0),c);return()=>window.clearTimeout(l)}},[c]),d&&r.imageLoadingStatus!=="loaded"?t.jsx(M.span,{...u,ref:a}):null});D.displayName=q;function G(e,a){return e?a?(e.src!==a&&(e.src=a),e.complete&&e.naturalWidth>0?"loaded":"loading"):"error":"idle"}function ne(e,{referrerPolicy:a,crossOrigin:s}){const c=ae(),u=i.useRef(null),r=c?(u.current||(u.current=new window.Image),u.current):null,[d,n]=i.useState(()=>G(r,e));return C(()=>{n(G(r,e))},[r,e]),C(()=>{const l=o=>()=>{n(o)};if(!r)return;const v=l("loaded"),b=l("error");return r.addEventListener("load",v),r.addEventListener("error",b),a&&(r.referrerPolicy=a),typeof s=="string"&&(r.crossOrigin=s),()=>{r.removeEventListener("load",v),r.removeEventListener("error",b)}},[r,s,a]),d}var B=P,O=V,H=D;const oe=I("relative flex shrink-0 overflow-hidden rounded-full",{defaultVariants:{size:"base"},variants:{size:{base:"size-10",lg:"size-12",sm:"size-8"}}}),ce=I("aspect-square h-full w-full"),ie=I("flex h-full w-full items-center justify-center rounded-full bg-muted"),p=i.forwardRef(({className:e,size:a,...s},c)=>t.jsx(B,{className:L(oe({className:e,size:a})),ref:c,...s}));p.displayName=B.displayName;const A=i.forwardRef(({className:e,...a},s)=>t.jsx(O,{className:L(ce({className:e})),ref:s,...a}));A.displayName=O.displayName;const g=i.forwardRef(({className:e,...a},s)=>t.jsx(H,{className:L(ie({className:e})),ref:s,...a}));g.displayName=H.displayName;p.__docgenInfo={description:"",methods:[]};g.__docgenInfo={description:"",methods:[]};A.__docgenInfo={description:"",methods:[]};const Ae={args:{size:"base"},argTypes:{size:{control:"select",options:["sm","base","lg"]}},component:p,tags:["autodocs"],title:"Components/Avatar"},j={render:e=>t.jsxs(p,{...e,children:[t.jsx(A,{alt:"@gabrielmelo",src:"https://avatars.githubusercontent.com/u/4544108"}),t.jsx(g,{children:"GM"})]})},y={args:{size:"sm"},render:e=>t.jsxs(p,{...e,children:[t.jsx(A,{alt:"@gabrielmelo",src:"https://avatars.githubusercontent.com/u/4544108"}),t.jsx(g,{children:"GM"})]})},E={args:{size:"lg"},render:e=>t.jsxs(p,{...e,children:[t.jsx(A,{alt:"@gabrielmelo",src:"https://avatars.githubusercontent.com/u/4544108"}),t.jsx(g,{children:"GM"})]})},k={render:()=>t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs(p,{size:"sm",children:[t.jsx(A,{alt:"@gabrielmelo",src:"https://avatars.githubusercontent.com/u/4544108"}),t.jsx(g,{children:"GM"})]}),t.jsxs(p,{size:"base",children:[t.jsx(A,{alt:"@gabrielmelo",src:"https://avatars.githubusercontent.com/u/4544108"}),t.jsx(g,{children:"GM"})]}),t.jsxs(p,{size:"lg",children:[t.jsx(A,{alt:"@gabrielmelo",src:"https://avatars.githubusercontent.com/u/4544108"}),t.jsx(g,{children:"GM"})]})]})},w={render:e=>t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(p,{...e,children:t.jsx(g,{children:"GM"})}),t.jsx(p,{...e,children:t.jsx(g,{children:"AB"})}),t.jsx(p,{...e,children:t.jsx(g,{children:"TC"})})]})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <Avatar {...args}>
            <AvatarImage alt="@gabrielmelo" src="https://avatars.githubusercontent.com/u/4544108" />
            <AvatarFallback>GM</AvatarFallback>
        </Avatar>
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: args => <Avatar {...args}>
            <AvatarImage alt="@gabrielmelo" src="https://avatars.githubusercontent.com/u/4544108" />
            <AvatarFallback>GM</AvatarFallback>
        </Avatar>
}`,...y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  render: args => <Avatar {...args}>
            <AvatarImage alt="@gabrielmelo" src="https://avatars.githubusercontent.com/u/4544108" />
            <AvatarFallback>GM</AvatarFallback>
        </Avatar>
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
            <Avatar size="sm">
                <AvatarImage alt="@gabrielmelo" src="https://avatars.githubusercontent.com/u/4544108" />
                <AvatarFallback>GM</AvatarFallback>
            </Avatar>
            <Avatar size="base">
                <AvatarImage alt="@gabrielmelo" src="https://avatars.githubusercontent.com/u/4544108" />
                <AvatarFallback>GM</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
                <AvatarImage alt="@gabrielmelo" src="https://avatars.githubusercontent.com/u/4544108" />
                <AvatarFallback>GM</AvatarFallback>
            </Avatar>
        </div>
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">
            <Avatar {...args}>
                <AvatarFallback>GM</AvatarFallback>
            </Avatar>
            <Avatar {...args}>
                <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar {...args}>
                <AvatarFallback>TC</AvatarFallback>
            </Avatar>
        </div>
}`,...w.parameters?.docs?.source}}};const be=["Default","Small","Large","AllSizes","Fallback"];export{k as AllSizes,j as Default,w as Fallback,E as Large,y as Small,be as __namedExportsOrder,Ae as default};
