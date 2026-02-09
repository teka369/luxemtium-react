import{r as s,u as p,j as e,L as r}from"./index-D0-Ya0q5.js";const x=()=>{const[a,n]=s.useState(!1),l=p(),i=()=>n(!a);s.useEffect(()=>{n(!1)},[l]),s.useEffect(()=>(a?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[a]);const d=[{name:"Inicio",href:"/",icon:"🏠"},{name:"Nosotros",href:"/nosotros",icon:"👥"},{name:"Servicios",href:"/servicios",icon:"⚡"},{name:"Proyectos",href:"/portafolio",icon:"💼"}],o=t=>l.pathname===t;return e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"flex flex-col gap-[5px] cursor-pointer z-[100001] md:hidden group p-2 relative",onClick:i,"aria-label":"Toggle menu",children:[e.jsx("span",{className:`absolute inset-0 bg-brand/30 rounded-lg blur-lg transition-opacity duration-300 ${a?"opacity-100":"opacity-0 group-hover:opacity-50"}`}),e.jsx("span",{className:`w-[28px] h-[3px] bg-gradient-to-r from-white to-brand rounded-full transition-all duration-300 relative ${a?"translate-y-[8px] rotate-45":"group-hover:w-[32px]"}`}),e.jsx("span",{className:`w-[28px] h-[3px] bg-gradient-to-r from-white to-brand rounded-full transition-all duration-300 relative ${a?"opacity-0 scale-0":"group-hover:w-[24px]"}`}),e.jsx("span",{className:`w-[28px] h-[3px] bg-gradient-to-r from-white to-brand rounded-full transition-all duration-300 relative ${a?"-translate-y-[8px] -rotate-45":"group-hover:w-[32px]"}`})]}),e.jsx("div",{className:`
          fixed inset-0 bg-black backdrop-blur-xl z-[99998] transition-opacity duration-500 md:hidden
          ${a?"opacity-100":"opacity-0 pointer-events-none"}
        `,onClick:()=>n(!1)}),e.jsxs("nav",{className:`
        fixed top-0 right-0 w-full h-screen 
        bg-black
        flex flex-col items-center justify-center 
        transition-all duration-500 ease-out z-[99999]
        md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:transition-none md:translate-x-0
        ${a?"translate-x-0":"translate-x-full"}
      `,children:[e.jsxs("div",{className:"absolute inset-0 opacity-10 md:hidden",children:[e.jsx("div",{className:"absolute top-20 left-10 w-64 h-64 bg-brand rounded-full blur-[100px] animate-pulse"}),e.jsx("div",{className:"absolute bottom-20 right-10 w-64 h-64 bg-brand rounded-full blur-[100px] animate-pulse animation-delay-2000"})]}),e.jsx("div",{className:"relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-1 pt-20 md:pt-0",children:d.map((t,c)=>e.jsx(r,{to:t.href,className:`
                group relative
                text-white text-3xl md:text-[17px] 
                font-semibold px-8 py-4 md:px-4 md:py-2
                transition-all duration-300
                ${o(t.href)?"text-brand":"hover:text-brand"}
              `,style:{animationDelay:`${c*100}ms`,animation:a?"slideInRight 0.5s ease-out forwards":"none"},children:e.jsxs("div",{className:"flex items-center md:block",children:[e.jsx("span",{className:"inline md:hidden mr-4 text-3xl group-hover:scale-125 transition-transform duration-300 inline-block",children:t.icon}),e.jsxs("span",{className:"relative",children:[t.name,e.jsx("span",{className:`
                    absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-brand to-transparent rounded-full
                    transition-all duration-300
                    ${o(t.href)?"w-full":"w-0 group-hover:w-full"}
                  `}),e.jsx("span",{className:"absolute inset-0 bg-brand/0 group-hover:bg-brand/10 blur-xl transition-all duration-300 rounded-lg"})]}),o(t.href)&&e.jsx("span",{className:"hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-1.5 h-1.5 bg-brand rounded-full animate-pulse"})]})},t.name))}),e.jsxs(r,{to:"/contacto",className:`
            relative overflow-hidden mt-12 md:hidden
            bg-gradient-to-r from-brand to-[#ff9500]
            px-10 py-5 rounded-2xl
            text-white font-bold text-xl
            shadow-[0_0_30px_rgba(255,140,0,0.4)]
            hover:shadow-[0_0_50px_rgba(255,140,0,0.6)]
            hover:scale-105
            transition-all duration-300
            group w-16px
            z-10
          `,style:{animationDelay:"400ms",animation:a?"slideInRight 0.5s ease-out forwards":"none"},children:[e.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"}),e.jsxs("span",{className:"relative z-10 flex items-center gap-2",children:["Contacto",e.jsx("svg",{className:"w-6 h-6 group-hover:translate-x-1 transition-transform duration-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})]})]}),e.jsx("style",{children:`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `})]})},m=()=>e.jsxs("header",{className:`
        sticky top-0
        flex justify-between items-center 
        px-6 py-4 md:px-[100px]
        bg-gradient-to-b from-[#111] to-[#0a0a0a]
        border-b border-[rgba(255,140,0,0.3)]
        z-[99999]
        animate-slide-down
        shadow-[0_4px_20px_rgba(255,140,0,0.1)]
      `,children:[e.jsxs(r,{to:"/",className:"flex items-center gap-3 md:gap-4 group relative z-[100000]",children:[e.jsx("div",{className:"absolute -inset-2 bg-gradient-to-r from-brand/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:"logo.png",alt:"Logo Luxentium",className:"w-[100px] md:w-[130px] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative z-10 drop-shadow-[0_0_15px_rgba(255,140,0,0.5)]"}),e.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-brand/0 group-hover:border-brand/50 scale-110 group-hover:scale-125 transition-all duration-500"})]}),e.jsxs("h1",{className:"text-white text-[20px] md:text-[28px] tracking-[2px] md:tracking-[3px] font-bold relative",children:[e.jsx("span",{className:"inline-block transition-all duration-300 group-hover:tracking-[4px]",children:"LUX"}),e.jsxs("span",{className:"text-brand inline-block transition-all duration-300 group-hover:tracking-[4px] relative",children:["ENTIUM",e.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brand to-transparent group-hover:w-full transition-all duration-500"})]}),e.jsx("span",{className:"absolute -top-1 -right-1 w-2 h-2 bg-brand rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"})]})]}),e.jsx(x,{}),e.jsx("div",{className:"hidden md:block relative z-[100000]",children:e.jsxs(r,{to:"/contacto",className:`
            relative overflow-hidden
            bg-gradient-to-r from-brand to-[#ff9500]
            px-8 py-3.5 rounded-xl
            text-white font-bold text-[17px]
            transition-all duration-300
            hover:shadow-[0_0_30px_rgba(255,140,0,0.6)]
            hover:scale-105
            group
            inline-block
          `,children:[e.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"}),e.jsxs("span",{className:"relative z-10 flex items-center gap-2",children:["Contacto",e.jsx("svg",{className:"w-5 h-5 transition-transform duration-300 group-hover:translate-x-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]}),e.jsx("span",{className:"absolute inset-0 rounded-xl border-2 border-white/0 group-hover:border-white/40 transition-all duration-300"})]})})]});export{m as default};
