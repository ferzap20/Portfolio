import{j as e,L as d}from"./index-Wex6rIEU.js";function m({slug:a,title:s,year:r,role:i,blurb:t,tools:l,hero:o}){return e.jsxs(d,{to:`/case/${a}`,className:"card",children:[e.jsx("img",{src:o,alt:s,className:"card-image",loading:"lazy"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{style:{marginBottom:"var(--space-sm)"},children:[e.jsx("h3",{style:{fontSize:"var(--font-size-xl)",fontWeight:600,marginBottom:"var(--space-xs)",color:"var(--color-text)"},children:s}),e.jsxs("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-text-secondary)",marginBottom:"var(--space-xs)"},children:[r," · ",i]})]}),e.jsx("p",{style:{fontSize:"var(--font-size-base)",color:"var(--color-text-secondary)",lineHeight:"var(--line-height-normal)",marginBottom:"var(--space-md)"},children:t}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-xs)"},children:l.slice(0,3).map((n,c)=>e.jsx("span",{style:{backgroundColor:"var(--color-accent)",color:"#fff",padding:"6px 14px",borderRadius:"9999px",fontSize:"var(--font-size-sm)",fontWeight:500,display:"inline-block",lineHeight:1,letterSpacing:"0.2px"},children:n},c))})]})]})}function x({cases:a}){return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"var(--space-lg)"},className:"case-list",children:[e.jsx("style",{children:`
        /* Tablet: 2 columns */
        @media (min-width: 768px) {
          .case-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        /* Desktop: 3 columns in one horizontal line */
        @media (min-width: 1024px) {
          .case-list {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}),a.map(s=>e.jsx(m,{...s},s.slug))]})}export{x as C};
