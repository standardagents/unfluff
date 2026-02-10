(function(){
const ye=/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,Ce=/https?:\/\/(www\.)?linkedin\.com\/in\/[^\s)]+/g,be=/https?:\/\/(www\.)?(x\.com|twitter\.com)\/[A-Za-z0-9_]+/g,xe=/(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;function z(e){return e.replace(ye,"[email]").replace(Ce,"[profile-url]").replace(be,"[profile-url]").replace(xe,"[phone]")}async function Se(e){const n=new TextEncoder().encode(e),o=await crypto.subtle.digest("SHA-256",n);return Array.from(new Uint8Array(o)).map(r=>r.toString(16).padStart(2,"0")).join("")}const k="unfluff-badge",V="unfluff-summary",$="unfluff-toggle",L="unfluff-original-toggle",re="unfluff-loading-placeholder",A="unfluff-pane",ae="unfluff-thumbnail-row",le="unfluff-thumbnail",b="data-unfluff-hidden";let f=null;function we(e){f=e}const ve={"Engagement Bait":"#cc1016","Humble Brag":"#b24020","Sales Pitch":"#8f5700","Motivational Fluff":"#9d2f72","Self-Promotion":"#c45200",Grift:"#a33a00","Rage Bait":"#d4200c","Clout Chasing":"#b85000","Virtue Signal":"#a82860","How-To":"#0a6b50",Opinion:"#4a6fa5","Case Study":"#2e6e9e",Technical:"#3b5998",Storytelling:"#7c5295",Investigative:"#1a7a5c",Analysis:"#2d6b9e","Life Update":"#0a66c2",Announcement:"#1b6f9a","Event Recap":"#5f3b8f","Job Posting":"#046336","Industry News":"#1f5a3f","Breaking News":"#c45200",Politics:"#4a6fa5",Shitpost:"#7c5295",Commentary:"#3b7a8f",PSA:"#046336"};function Le(e){let t=0;for(let o=0;o<e.length;o++)t=(t<<5)-t+e.charCodeAt(o),t|=0;return`hsl(${Math.abs(t)%360}, 55%, 38%)`}function Ae(e){return ve[e]??Le(e)}let O=!1;function ie(){if(O||!f)return;O=!0;const e=f.tokens,t=document.createElement("style");if(t.textContent=`
    @keyframes unfluff-spin {
      to { transform: rotate(360deg); }
    }

    .${A} {
      background: ${e.skeletonBg};
      border: 1px solid ${e.border};
      border-radius: 8px;
      margin: 8px 0;
      padding: 12px 16px;
      transition: opacity 0.25s ease;
    }

    .${re} {}
    .unfluff-loading-header {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 12px;
      font-size: 12px;
      font-weight: 600;
      color: ${e.textSecondary};
      font-family: ${e.font};
    }
    .unfluff-loading-spinner {
      width: 14px;
      height: 14px;
      border: 2px solid ${e.border};
      border-top-color: ${e.accent};
      border-radius: 50%;
      animation: unfluff-spin 0.8s linear infinite;
      flex-shrink: 0;
    }
    .unfluff-skeleton-bar {
      height: 14px;
      border-radius: 4px;
      background: ${e.border};
      position: relative;
      overflow: hidden;
    }
    .unfluff-skeleton-bar::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255,255,255,0.15) 50%,
        transparent 100%
      );
      animation: unfluff-shimmer 1.5s infinite;
    }
    @keyframes unfluff-shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    .${V} {
      font-family: ${e.font};
    }
    .unfluff-summary-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .unfluff-category-pill {
      display: inline-block;
      font-size: 12px;
      font-weight: 600;
      padding: 2px 10px;
      border-radius: 12px;
      border: 1px solid currentColor;
      line-height: 1.4;
    }
    .unfluff-time-label {
      font-size: 11px;
      color: ${e.textMuted};
    }
    .unfluff-separator {
      border: none;
      border-top: 1px solid ${e.border};
      margin: 8px 0;
    }
    .unfluff-section-label {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: ${e.textMuted};
      margin-bottom: 4px;
    }
    .unfluff-summary-text {
      font-size: 14px;
      line-height: 20px;
      color: ${e.textPrimary};
      margin-bottom: 8px;
    }
    .unfluff-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-bottom: 8px;
    }
    .unfluff-tag {
      font-size: 11px;
      color: ${e.accent};
      background: ${B(e.accent,.08)};
      padding: 1px 8px;
      border-radius: 10px;
      line-height: 1.5;
    }
    .unfluff-attachment-meta {
      font-size: 12px;
      color: ${e.textSecondary};
      margin-bottom: 8px;
    }

    .${$},
    .${L} {
      display: inline-block !important;
      font-size: 12px !important;
      font-weight: 600 !important;
      color: ${e.textSecondary} !important;
      cursor: pointer !important;
      border: 1px solid ${e.textMuted} !important;
      background-color: transparent !important;
      padding: 4px 12px !important;
      border-radius: 14px !important;
      font-family: ${e.font} !important;
      text-decoration: none !important;
      transition: border-color 0.15s, background-color 0.15s, opacity 0.25s ease;
      -webkit-appearance: none !important;
      appearance: none !important;
    }
    .${$}:hover,
    .${L}:hover {
      color: ${e.textPrimary} !important;
      border-color: ${e.textSecondary} !important;
      background-color: ${B(e.textPrimary,.08)} !important;
      text-decoration: none !important;
    }
    .${$}:active,
    .${L}:active {
      background-color: ${B(e.textPrimary,.14)} !important;
    }
    .${L} {
      display: inline-block !important;
      width: fit-content !important;
      margin: 8px 0;
    }

    .${ae} {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: 8px;
    }
    .${le} {
      width: 48px;
      height: 48px;
      border-radius: 4px;
      object-fit: cover;
      flex-shrink: 0;
    }

    .unfluff-card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .unfluff-watermark {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1px;
      opacity: 0.18;
      transition: opacity 0.2s;
      text-decoration: none;
    }
    .unfluff-watermark:hover {
      opacity: 0.45;
    }
    .unfluff-watermark svg {
      width: 110px;
      height: auto;
      color: ${e.textPrimary};
    }
    .unfluff-watermark-url {
      font-size: 7px;
      font-weight: 500;
      letter-spacing: 0.3px;
      color: ${e.textSecondary};
      white-space: nowrap;
      text-decoration: none;
    }
  `,document.head.appendChild(t),f.badgeCss){const n=document.createElement("style");n.textContent=f.badgeCss,document.head.appendChild(n)}}function se(e){return f!=null&&f.badgeAnchorSelector?e.querySelector(f.badgeAnchorSelector):null}function _e(e){if(!f)return null;for(const t of f.textSelectors){const n=e.querySelector(t);if(n)return n}return null}function H(e){if(!f)return;e.classList.add("unfluff-active");const t=[...f.textSelectors,...f.mediaWrapperSelectors,...f.reshareSelectors,...f.mediaItemSelectors],n=f.commentSelectors;for(const o of t)for(const a of e.querySelectorAll(o)){const r=a;r.getAttribute(b)||n.length>0&&r.closest(n.join(", "))||(r.setAttribute(b,"true"),r.style.display="none")}for(const o of e.querySelectorAll("div[aria-labelledby]")){const a=o;a.getAttribute(b)||a.closest(`.${A}, .${V}`)||a.querySelector('[role="link"] [data-testid="User-Name"]')&&(a.setAttribute(b,"true"),a.style.display="none")}}function $e(e){for(const t of e.querySelectorAll("img, video, canvas, iframe"))if(!t.getAttribute(b)&&(t.offsetHeight>0||t.offsetWidth>0))return!0;return!1}function R(e){const t=e;let n=!0;for(;n;){n=!1;const o=e.querySelectorAll(`[${b}]`),a=new Set;for(const r of o)r.parentElement&&r.parentElement!==t&&a.add(r.parentElement);for(const r of a){if(r.getAttribute(b)||r.closest(`.${A}, .${V}`))continue;Array.from(r.children).every(s=>{var u,p;const i=s;return((u=i.getAttribute)==null?void 0:u.call(i,b))==="true"||i.offsetHeight===0&&i.offsetWidth===0||!((p=i.textContent)!=null&&p.trim())&&!$e(i)})&&(r.setAttribute(b,"true"),r.style.display="none",n=!0)}}}function ce(e){e.classList.remove("unfluff-active");for(const t of e.querySelectorAll(`[${b}]`)){const n=t;n.style.display="",n.removeAttribute(b)}if(f!=null&&f.seeMoreSelector)for(const t of e.querySelectorAll(f.seeMoreSelector)){const n=t;n.style.display==="none"&&(n.style.display="")}}function fe(e){if(!f)return null;const t=_e(e);if(t&&t.parentElement)return{parent:t.parentElement,refNode:t.nextSibling};for(const n of f.mediaWrapperSelectors){const o=e.querySelector(n);if(o&&o.parentElement)return{parent:o.parentElement,refNode:o}}for(const n of f.reshareSelectors){const o=e.querySelector(n);if(o&&o.parentElement)return{parent:o.parentElement,refNode:o}}return null}function ke(e){if(!f)return[];const t=[],n=new Set;for(const o of f.imageSelectors)for(const a of e.querySelectorAll(o)){if(t.length>=4)return t;const r=a.getAttribute("src")||a.getAttribute("data-delayed-url");r&&!n.has(r)&&(n.add(r),t.push(r))}return t}function Te(e){var o,a;if(!f)return 0;const t=new Set;for(const r of f.imageSelectors)for(const l of e.querySelectorAll(r)){const s=l.getAttribute("src")||l.getAttribute("data-delayed-url");s&&t.add(s)}let n=t.size;for(const r of f.surplusCountSelectors){const l=e.querySelector(r);if(l){const s=(o=l.textContent)==null?void 0:o.match(/\+(\d+)/);if(s)return n+=parseInt(s[1],10),n}}for(const r of f.mediaWrapperSelectors){const l=e.querySelector(r);if(!l)continue;const s=document.createTreeWalker(l,NodeFilter.SHOW_TEXT);let i;for(;i=s.nextNode();){const u=(a=i.textContent)==null?void 0:a.trim().match(/^\+(\d+)$/);if(u)return n+=parseInt(u[1],10),n}}return n}function W(e){if(ie(),e.querySelector(`.${k}`))return;e.dataset.unfluffStartTime=String(Date.now());const t=se(e);if(t){const o=document.createElement("span");o.className=k,o.dataset.unfluffState="loading",o.style.display="none",t.appendChild(o)}H(e);const n=fe(e);if(n){const o=document.createElement("div");o.className=`${A} ${re}`,o.innerHTML=['<div class="unfluff-loading-header"><span class="unfluff-loading-spinner"></span> Analyzing with Unfluff…</div>','<div class="unfluff-skeleton-bar" style="width:100%;margin-bottom:10px"></div>','<div class="unfluff-skeleton-bar" style="width:100%;margin-bottom:10px"></div>','<div class="unfluff-skeleton-bar" style="width:60%;margin-bottom:12px"></div>'].join("");const a=document.createElement("button");a.className=$,a.textContent="View original",o.appendChild(a),n.parent.insertBefore(o,n.refNode),Ue(e,o,a)}R(e)}function ue(e,t,n,o,a,r,l){ie();for(const C of[`.${k}`,`.${A}`,`.${L}`]){const x=e.querySelector(C);x&&x.remove()}const s=Ae(t),i=parseInt(e.dataset.unfluffStartTime||"0",10),u=i>0?Math.round((Date.now()-i)/1e3):0;e.removeAttribute("data-unfluff-start-time");const p=se(e);if(p){const C=document.createElement("span");C.className=k,C.dataset.unfluffState="scored",C.dataset.unfluffCategory=t,C.style.display="none",p.appendChild(C)}const y=ke(e),S=Te(e);let d;if(f){let C=f.reshareSelectors.some(x=>e.querySelector(x));C||(C=Array.from(e.querySelectorAll("div[aria-labelledby]")).some(x=>x.querySelector('[role="link"] [data-testid="User-Name"]'))),C&&(d=f.name==="twitter"?"Includes quoted tweet":"Includes reshared post")}H(e);const h=Ee(t,s,n,u,o,S,r,y,l,d),g=fe(e);g&&g.parent.insertBefore(h,g.refNode),R(e),h.style.opacity="0",requestAnimationFrame(()=>{h.style.opacity="1"}),Ie(e,h)}function Pe(e){return e.querySelector(`.${k}, .${A}`)!==null}function qe(){for(const e of[`.${k}`,`.${A}`,`.${L}`])for(const t of document.querySelectorAll(e))t.remove();for(const e of document.querySelectorAll(".unfluff-active"))e.classList.remove("unfluff-active");for(const e of document.querySelectorAll(`[${b}]`))e.style.display="",e.removeAttribute(b);O=!1}function Ee(e,t,n,o,a,r,l,s,i,u){const p=document.createElement("div");p.className=A;const y=document.createElement("div");y.className=V;let c="";const S=i?"analyzed (from cache)":o>0?`analyzed in ${o}s`:"analyzed";if(c+='<div class="unfluff-summary-header">',c+=`<span class="unfluff-time-label">${_(S)}</span>`,c+=`<span class="unfluff-category-pill" style="color:${t};border-color:${t}">${_(e)}</span>`,c+="</div>",c+='<hr class="unfluff-separator">',c+='<div class="unfluff-section-label">Summary</div>',c+=`<div class="unfluff-summary-text">${_(a)}</div>`,n.length>0){c+='<div class="unfluff-tags">';for(const d of n)c+=`<span class="unfluff-tag">#${_(d)}</span>`;c+="</div>"}if(r>0){const d=l?`: ${_(l)}`:"",h=`${r} attachment${r>1?"s":""}${d}`;if(s&&s.length>0){c+=`<div class="${ae}">`;for(const g of s)c+=`<img class="${le}" src="${Me(g)}" alt="" />`;c+=`<span class="unfluff-attachment-meta" style="align-self:center;margin-bottom:0">${h}</span>`,c+="</div>"}else c+=`<div class="unfluff-attachment-meta">${h}</div>`}return u&&(c+=`<div class="unfluff-attachment-meta">${_(u)}</div>`),c+='<div class="unfluff-card-footer">',c+=`<button class="${$}">View original</button>`,c+='<a href="https://standardagentbuilder.com" target="_blank" rel="noopener" class="unfluff-watermark" title="Powered by StandardAgents">',c+='<svg viewBox="0 0 793 144" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M133.816 92.912L108.064 59.1926C103.573 53.3071 101.473 45.9366 102.197 38.5662L105.475 5.04591L99.5531 4.46643L96.3116 37.6426C95.8951 41.8077 91.4402 44.2705 87.7097 42.3691L30.3396 13.3943L27.6594 18.7003L84.6855 47.494C87.1845 48.7616 87.0759 52.3473 84.5044 53.452L0.386902 89.6705L2.74111 95.1394L86.1885 59.2107C88.76 58.106 91.4221 60.587 90.4804 63.2309L62.9181 141.119L68.532 143.111L96.384 64.4081C97.5068 61.257 101.672 60.6051 103.7 63.2491L129.107 96.4976L133.834 92.8758L133.816 92.912Z"/><path d="M133.925 90.2137L107.648 7.34577C106.036 2.25707 100.875-0.821493 95.6236 0.192625L32.6396 12.3439C29.9594 12.8691 27.6052 14.4084 26.0659 16.5996C25.5227 17.3602 25.0699 18.2113 24.744 19.1168L0.622457 86.284C-0.916829 90.594 0.459453 95.3749 4.0813 98.1637L59.568 141.137C61.4695 142.604 63.7332 143.346 66.0149 143.346C68.0794 143.346 70.1438 142.731 71.9367 141.517L129.832 102.111C133.707 99.4675 135.355 94.6867 133.943 90.2318L133.925 90.2137ZM116.92 85.9218L47.127 53.9228C44.3744 52.6732 43.9941 48.9246 46.4207 47.1318L94.1748 11.8731C97.4164 9.48267 102.034 10.9495 103.284 14.7706C108.173 29.5477 118.64 62.0538 124.218 79.4568C125.631 83.8755 121.121 87.8595 116.902 85.9399L116.92 85.9218ZM79.1623 15.5674L42.4548 42.6588C40.0825 44.4154 36.6961 43.0572 36.189 40.1598L33.7805 26.3424C33.038 22.0505 35.8449 17.9397 40.1187 17.0886C49.4088 15.2414 65.2544 12.1447 76.6813 9.91728C79.9953 9.26535 81.8787 13.5573 79.1623 15.5674ZM29.1264 34.238L31.716 49.0695C31.9152 50.2104 31.6074 51.3875 30.8649 52.2748L16.5586 69.5873C15.2909 71.1266 12.8462 69.7321 13.5162 67.8488L25.7037 33.9302C26.3195 32.2098 28.8004 32.4271 29.1264 34.2199V34.238ZM12.8824 83.3865L29.5429 63.2309C31.5168 60.8405 35.356 61.5468 36.352 64.4986L56.3084 123.661C57.3225 126.668 53.8093 129.149 51.3102 127.193C41.2234 119.297 24.3999 106.132 14.4036 98.1637C9.84004 94.5418 9.1519 87.8776 12.8643 83.3865H12.8824ZM63.4977 126.305L43.1611 66.0016C42.0564 62.7057 45.4066 59.6815 48.5757 61.1302L117.337 92.6766C121.375 94.5237 121.864 100.083 118.206 102.6C107.358 110.061 88.3255 123.064 76.8262 130.815C71.991 134.074 65.3811 131.829 63.5159 126.305H63.4977Z"/><path d="M224.424 98.7584V95.4627C227.14 95.243 228.398 94.3242 228.398 92.0671C228.398 91.0485 228.179 89.7901 227.6 88.2122L222.147 73.5913H192.665L188.251 84.9364C187.452 86.8539 187.232 88.4518 187.232 89.6902C187.232 92.5265 188.93 94.1044 193.924 95.7024V98.7584H173.291V95.7024C177.265 94.6837 180.321 87.7727 181.68 84.477L199.816 41.2736C203.112 33.5636 205.149 28.0109 208.205 20.7404H212.859C213.877 24.3757 217.513 33.4438 219.33 37.9779L239.184 88.1123C240.423 91.408 243.159 94.8035 247.114 95.4826V98.7783H224.424V98.7584ZM207.626 36.38L194.802 67.7989H219.989L207.626 36.38Z"/><path d="M290.977 50.6812C293.354 53.7372 294.712 57.712 294.712 62.2461C294.712 71.5539 288.021 80.622 275.777 84.0176C274.758 84.2373 272.481 84.6967 269.305 85.5955C267.947 85.9351 266.589 86.3945 265.45 86.8339C263.972 87.513 263.073 88.4119 263.073 89.4505C263.073 91.0284 264.771 91.9472 266.589 92.5065C267.947 92.8461 269.305 93.0658 273.5 93.0658H285.524C295.85 93.0658 301.283 96.5812 301.283 103.832C301.283 114.717 287.102 124.365 268.846 124.365C254.784 124.365 248.772 120.29 248.772 113.479C248.772 108.605 253.985 103.732 262.035 100.896C258.399 100.097 253.306 97.3801 253.306 93.1856C253.306 88.4318 259.658 85.8152 264.411 83.7779C256.362 82.2 250.809 74.1305 250.809 66.5405C250.809 53.7172 261.695 42.9513 274.398 42.9513C277.794 42.9513 281.209 43.8501 284.146 45.3282H302.741V50.6612H290.937L290.977 50.6812ZM284.525 101.375H272.721C265.47 101.375 257.98 105.45 257.98 110.343C257.98 116.136 265.011 118.053 272.84 118.053C282.708 118.053 293.933 115.337 293.933 106.708C293.933 103.312 290.537 101.375 284.525 101.375ZM270.683 49.323C263.872 49.323 259.118 53.5175 259.118 60.5483C259.118 68.8175 264.791 79.0241 273.979 79.0241C282.028 79.0241 286.003 72.7923 286.003 65.9812C286.003 57.2526 279.991 49.303 270.683 49.303V49.323Z"/><path d="M327.049 100.576C313.108 100.576 304.599 90.2495 304.599 74.0307C304.599 59.8493 312.988 43.7503 329.666 43.7503C340.212 43.7503 347.802 51.9196 350.758 60.1888L352.236 60.8679V63.9239L313.907 72.9921C314.925 83.6581 321.157 94.0845 333.521 94.0845C338.175 94.0845 344.986 91.7076 350.758 87.5131L352.336 91.8274C344.746 98.6385 334.2 100.556 327.049 100.556V100.576ZM327.609 48.5241C320.238 48.5241 313.667 56.5735 313.667 68.8175L340.552 61.7867C338.734 54.6361 334.08 48.5241 327.629 48.5241H327.609Z"/><path d="M391.345 98.7583V95.8022L393.722 95.0033C396.219 94.2043 396.678 92.2868 396.678 89.9099V65.6416C396.678 60.4285 396.219 56.5735 393.722 54.2965C392.024 52.7186 389.528 51.9196 386.691 51.9196C383.396 51.9196 380.679 52.7186 377.963 53.7372C375.466 54.636 373.209 55.7746 371.831 56.5735V90.1496C371.831 93.665 372.51 93.8847 375.566 94.4639L380.899 95.3628V98.7583H356.85V95.8022L359.347 95.0033C361.844 94.2043 362.064 92.6264 362.064 89.9099V59.29C362.064 55.7746 361.604 54.5362 359.906 53.2778L357.29 51.3404V49.4229L369.993 42.7316L371.811 43.4107V52.379C374.647 50.3416 384.394 43.7702 391.206 43.7702C399.714 43.7702 406.406 49.4428 406.406 58.1714V90.1496C406.406 93.665 407.205 94.0045 410.141 94.4639L415.694 95.3628V98.7583H391.305H391.345Z"/><path d="M453.824 51.3602H434.209V85.4956C434.209 88.7912 434.669 90.0296 435.448 90.9284C436.686 92.2867 438.623 93.3053 440.781 93.3053C445.774 93.3053 449.749 91.268 452.925 89.5702V94.324C450.089 96.5811 442.379 100.556 437.964 100.556C430.474 100.556 424.023 96.8208 424.023 90.4691C424.023 87.7526 424.482 80.3823 424.482 69.4965V52.259L418.01 50.6811V48.6438C421.306 45.8075 427.418 39.9152 432.072 35.0416H434.789C434.789 35.0416 434.329 42.6316 434.229 45.3681H454.982L453.844 51.3802L453.824 51.3602Z"/><path d="M491.694 98.7583H458.018V95.4626C459.836 95.0032 461.993 94.3241 461.993 94.3241C464.949 93.5251 465.508 92.6263 465.508 86.3944V32.7446C465.508 30.7073 465.289 26.8523 461.534 26.1732L456.88 25.3743V21.739H471.401C475.475 21.739 482.746 21.1797 486.82 21.1797C502.8 21.1797 510.969 27.871 510.969 39.2162C510.969 47.0459 506.315 54.4163 497.706 57.2526V57.5921C510.529 59.8691 516.981 68.5977 516.981 76.8669C516.981 88.8912 508.592 98.7583 491.694 98.7583ZM486.82 26.5128C482.846 26.5128 477.513 26.8523 476.274 26.9722V55.3151H484.883C495.988 55.3151 500.882 51.0007 500.882 40.115C500.882 32.9643 495.889 26.5128 486.82 26.5128ZM484.783 60.4284H476.274V85.8352C476.274 91.9671 477.513 93.0857 483.185 93.0857H488.738C500.423 93.0857 505.756 86.734 505.756 76.9867C505.756 65.4219 498.046 60.4284 484.783 60.4284Z"/><path d="M569.952 101.375L568.374 101.255C567.475 98.7582 566.796 96.0418 566.336 93.0857C560.105 97.2802 551.935 100.456 544.345 100.456C536.755 100.456 530.503 92.6263 530.503 85.8352V57.0328C530.503 51.1405 529.485 50.6812 526.768 48.524L525.63 47.6252V45.3481L540.031 43.3108L540.93 43.8701C540.47 47.725 540.251 53.7372 540.251 56.0142V80.9616C540.251 88.1122 544.905 93.3254 551.356 93.3254C554.871 93.3254 560.324 92.6463 565.997 89.4704V55.2152C565.997 51.9195 565.438 50.4614 562.262 49.4228L558.866 48.2843V45.3281L575.544 44.8688L576.443 44.9886C576.443 44.9886 575.764 53.6173 575.764 56.7932V88.6515C575.764 92.1669 576.563 93.3054 578.94 93.3054C580.857 93.3054 582.336 92.7461 584.952 91.8273V96.2416L569.972 101.335L569.952 101.375Z"/><path d="M588.547 98.7583V95.8022L591.044 95.1231C593.541 94.444 593.761 93.0858 593.761 89.9099V60.768C593.761 57.1328 593.761 55.7746 591.723 53.8571L589.007 51.3603V49.4428L601.71 42.7516L603.967 43.4307C603.967 43.4307 603.508 59.0902 603.508 63.0451V90.1496C603.508 93.665 604.187 93.8847 607.243 94.464L612.576 95.3628V98.7583H588.527H588.547ZM598.634 31.9657C595.578 31.9657 592.402 29.9284 592.402 25.7339C592.402 21.5393 595.578 19.502 598.634 19.502C601.69 19.502 604.866 21.5393 604.866 25.7339C604.866 29.9284 601.69 31.9657 598.634 31.9657Z"/><path d="M616.091 98.7583V95.8022L618.588 95.1231C621.085 94.444 621.305 92.866 621.305 82.2V33.8832C621.305 29.2293 620.845 27.6513 618.588 26.0534L616.091 24.3556V22.538L629.813 14.7083L632.09 15.5072C632.09 15.5072 631.072 22.0786 631.072 25.0348V90.1296C631.072 93.645 631.751 93.8647 634.807 94.444L640.14 95.3428V98.7383H616.091V98.7583Z"/><path d="M684.023 101.934L682.884 101.035L682.205 94.1243C677.671 96.7409 671.319 100.476 664.408 100.476C651.026 100.476 642.757 89.7101 642.757 74.1704C642.757 58.6308 654.561 44.9087 672.138 44.9087C675.534 44.9087 680.188 45.7077 682.225 46.2669V32.6647C682.225 28.3504 681.326 26.9922 679.389 25.8536L676.772 24.3756V22.558L690.494 14.7282L692.771 15.5272C692.771 15.5272 691.972 24.3756 691.972 28.3504V90.9485C691.972 93.4452 692.991 95.0232 695.488 95.0232C695.827 95.0232 696.167 95.0232 696.626 94.9033L701.04 94.2242V98.4187L684.023 101.934ZM682.205 54.7558C678.13 52.5987 674.275 51.1206 668.603 51.1206C658.736 51.1206 652.384 54.7559 652.384 68.8175C652.384 82.8791 657.717 93.3054 669.502 93.3054C673.916 93.3054 678.809 92.067 682.205 90.8087V54.7359V54.7558Z"/><path d="M727.226 100.576C713.284 100.576 704.775 90.2495 704.775 74.0307C704.775 59.8493 713.164 43.7503 729.842 43.7503C740.389 43.7503 747.979 51.9196 750.935 60.1888L752.413 60.8679V63.9239L714.083 72.9921C715.102 83.6581 721.333 94.0845 733.697 94.0845C738.351 94.0845 745.162 91.7076 750.935 87.5131L752.513 91.8274C744.923 98.6385 734.376 100.556 727.226 100.556V100.576ZM727.785 48.5241C720.415 48.5241 713.843 56.5735 713.843 68.8175L740.728 61.7867C738.91 54.6361 734.256 48.5241 727.805 48.5241H727.785Z"/><path d="M790.503 56.7932H790.283C788.805 55.9943 786.548 54.8757 786.548 54.8757C784.511 53.857 782.913 53.2978 781.455 53.2978C779.757 53.2978 778.059 54.0967 776.002 55.6747L772.027 58.7307V90.1496C772.027 93.2056 773.605 93.665 775.762 94.0046L783.932 95.3628V98.7583H757.047V95.8022L759.544 95.1231C762.04 94.444 762.26 92.5065 762.26 89.9099V60.768C762.26 57.1328 762.14 55.435 760.223 53.7372L757.506 51.3603V49.4428L770.21 42.7516L772.027 43.4307V53.6373C773.725 51.9396 781.335 45.9274 781.335 45.9274C784.052 43.6704 785.649 42.7516 786.888 42.7516C788.246 42.7516 789.165 43.8901 790.743 46.4867L792.78 50.0021C792.221 52.0394 791.202 55.0954 790.503 56.8132V56.7932Z"/></svg>',c+='<span class="unfluff-watermark-url">standardagentbuilder.com</span>',c+="</a>",c+="</div>",y.innerHTML=c,p.appendChild(y),p}function Ue(e,t,n){n.addEventListener("click",a=>{a.stopPropagation(),a.preventDefault(),t.style.opacity="0",setTimeout(()=>{t.style.display="none",ce(e);const r=document.createElement("button");r.className=L,r.textContent="Back to loading",r.style.opacity="0",t.parentElement&&t.parentElement.insertBefore(r,t.nextSibling),requestAnimationFrame(()=>{r.style.opacity="1"}),r.addEventListener("click",l=>{l.stopPropagation(),l.preventDefault(),r.style.opacity="0",setTimeout(()=>{r.remove(),H(e),t.style.display="",R(e),t.style.opacity="0",requestAnimationFrame(()=>{t.style.opacity="1";const s=e.getBoundingClientRect(),i=window.scrollY+s.top-80;window.scrollTo({top:i,behavior:"smooth"})})},200)})},200)})}function Ie(e,t){t.querySelector(`.${$}`).addEventListener("click",a=>{a.stopPropagation(),a.preventDefault(),t.style.opacity="0",setTimeout(()=>{t.style.display="none",ce(e);const r=document.createElement("button");r.className=L,r.textContent="View summary",r.style.opacity="0",t.parentElement&&t.parentElement.insertBefore(r,t.nextSibling),requestAnimationFrame(()=>{r.style.opacity="1"}),r.addEventListener("click",l=>{l.stopPropagation(),l.preventDefault(),r.style.opacity="0",setTimeout(()=>{r.remove(),H(e),t.style.display="",R(e),t.style.opacity="0",requestAnimationFrame(()=>{t.style.opacity="1";const s=e.getBoundingClientRect(),i=window.scrollY+s.top-80;window.scrollTo({top:i,behavior:"smooth"})})},200)})},200)})}function _(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function Me(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function B(e,t){const n=e.match(/^#([0-9a-f]{6})$/i);if(n){const a=n[1],r=parseInt(a.slice(0,2),16),l=parseInt(a.slice(2,4),16),s=parseInt(a.slice(4,6),16);return`rgba(${r}, ${l}, ${s}, ${t})`}const o=e.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);return o?`rgba(${o[1]}, ${o[2]}, ${o[3]}, ${t})`:e}const G=new Set;let w=null;const I=new Map,de=new Map;let T=[],U=!1;const P=new Map;let m=null;async function F(e){if(!m)return;if(m.isPromotedPost(e)){e.style.display="none";return}if(Pe(e))return;const t=m.extractPostText(e),n=m.extractReshareText(e),o=m.extractEmbedContext(e),a=m.extractImageUrls(e),r=!!t,l=n.length>0||o.length>0||a.length>0,s=Y(e);if(!r&&!l&&!s)return;let i=m.getPostId(e);if(i||(i=`hash:${await Se((t||"").slice(0,500))}`),G.has(i)){const h=de.get(i);h?ue(e,h.category,h.tags,h.translation,h.attachmentCount,h.attachmentSummary,!0):(I.set(i,e),W(e));return}G.add(i);const u=z(t||""),p=m.extractAuthorName(e),y=p?`[Author: ${p}]
`:"",c=n?`

[QUOTED POST]
${z(n)}`:"",S=y+u+c+(o?`

${o}`:"");I.set(i,e),W(e);const d={id:i,text:S};a.length>0?(d.imageUrls=a,console.log(`[Unfluff] Post ${i}: ${a.length} images ready`),T.push(d),D()):Y(e)?Ne(e,d):(T.push(d),D())}function Y(e){if(!m)return!1;for(const t of m.imageSelectors){const n=t.replace(/\s+img$/,"");if(n!==t&&e.querySelector(n))return!0}for(const t of m.mediaItemSelectors)if(e.querySelector(t))return!0;return!1}function Ne(e,t){const n=()=>{if(!m)return!1;const l=m.extractImageUrls(e);return l.length>0?(t.imageUrls=l,console.log(`[Unfluff] Post ${t.id}: ${l.length} images loaded (observer)`),!0):!1},o=()=>{const l=P.get(t.id);l&&(P.delete(t.id),l.observer.disconnect(),clearTimeout(l.timer),T.push(l.post),D())},a=new MutationObserver(()=>{n()&&o()});a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src"]});const r=setTimeout(()=>{console.log(`[Unfluff] Post ${t.id}: image watch timed out, sending without images`),o()},3e3);P.set(t.id,{post:t,observer:a,timer:r})}function D(){U||(U=!0,requestAnimationFrame(()=>{U=!1,Ve()}))}function Ve(){if(T.length===0)return;const e=T.splice(0),t=e.filter(o=>o.imageUrls&&o.imageUrls.length>0);console.log(`[Unfluff] Sending ${e.length} posts to service worker (${t.length} with images)`);const n={type:"ANALYZE_BATCH",posts:e};chrome.runtime.sendMessage(n,o=>{if(chrome.runtime.lastError){console.error("[Unfluff] Message error:",chrome.runtime.lastError.message);return}if(!o){console.error("[Unfluff] No response from service worker");return}if(o.type==="BATCH_RESULT"){console.log(`[Unfluff] Received ${o.results.length} results`);for(const a of o.results){de.set(a.id,{category:a.category??"",tags:a.tags??[],translation:a.translation??"",attachmentCount:a.attachmentCount??0,attachmentSummary:a.attachmentSummary,cached:a.cached});const r=I.get(a.id);if(!r){console.warn(`[Unfluff] No DOM element for post ${a.id}`);continue}if(!r.isConnected){console.log(`[Unfluff] Element for ${a.id} removed from DOM, result cached for re-appearance`);continue}try{ue(r,a.category??"",a.tags??[],a.translation,a.attachmentCount??0,a.attachmentSummary,a.cached)}catch(l){console.error(`[Unfluff] Failed to render badge for ${a.id}:`,l)}}}else o.type==="BATCH_ERROR"?console.error("[Unfluff] Analysis error:",o.error):console.error("[Unfluff] Unexpected response type:",o)})}function He(){if(!m)return;const e=document.querySelectorAll(m.postSelector);for(const t of e)F(t)}function q(e){m=e,we(e),w&&(w.disconnect(),w=null),He();const t=window!==window.top,n=document.querySelector(m.feedSelector);if(console.log("[Unfluff:observer] startObserver — feedSelector:",m.feedSelector,"| feed found:",!!n,"| isIframe:",t,"| href:",location.href),!n){console.log("[Unfluff:observer] Feed not found, retrying in 1s..."),setTimeout(()=>q(e),1e3);return}w=new MutationObserver(o=>{for(const a of o)for(const r of a.addedNodes){if(!(r instanceof Element))continue;r.matches(m.postSelector)&&F(r);const l=r.querySelectorAll(m.postSelector);for(const s of l)F(s)}}),w.observe(n,{childList:!0,subtree:!0}),console.log("[Unfluff] Observer started, monitoring feed for new posts")}function M(e){w&&(w.disconnect(),w=null),I.clear(),T.length=0,U=!1;for(const n of P.values())n.observer.disconnect(),clearTimeout(n.timer);P.clear(),qe();const t=document.querySelectorAll(e.postSelector);for(const n of t)e.isPromotedPost(n)&&n.style.display==="none"&&(n.style.display="");console.log("[Unfluff] Observer stopped — badges removed, content restored")}const Z="unfluff-cleanup";let v=null;function Re(e){if(document.getElementById(Z))return;const t=document.createElement("style");t.id=Z,t.textContent=e.cleanupCss,document.head.appendChild(t)}function Be(){var e;(e=document.getElementById(Z))==null||e.remove()}function Oe(){const e=document.querySelectorAll('[data-unfluff-hidden-by-cleanup="true"]');for(const n of e)n.style.display="",n.removeAttribute("data-unfluff-hidden-by-cleanup");const t=document.querySelectorAll("[data-unfluff-checked]");for(const n of t)n.removeAttribute("data-unfluff-checked")}function E(e){v&&(v.disconnect(),v=null),Re(e);function t(){e.runCleanup(document)}t();const n=document.querySelector(e.feedSelector);if(!n){setTimeout(()=>E(e),1e3);return}v=new MutationObserver(()=>{requestAnimationFrame(t)}),v.observe(n,{childList:!0,subtree:!0}),console.log("[Unfluff] Cleanup started — hiding sidebar, promoted, and recommended content")}function N(){v&&(v.disconnect(),v=null),Be(),Oe(),console.log("[Unfluff] Cleanup stopped — restored hidden content")}const X="unfluff-toggle-styles";function me(e,t,n){Fe(t);const o=chrome.runtime.getURL("fluff.webp"),a=chrome.runtime.getURL("nofluff.webp"),r=document.createElement("button");r.className="unfluff-toggle-btn",r.type="button",r.setAttribute("aria-label",e?"Unfluff is active — click to disable":"Unfluff is inactive — click to enable");const l=document.createElement("div");l.className=`unfluff-col ${e?"unfluff-col--dim":"unfluff-col--active"}`;const s=document.createElement("img");s.className="unfluff-sheep",s.src=o,s.alt="Fluff",s.width=24,s.height=24;const i=document.createElement("span");i.className=`unfluff-col-label ${e?"":"unfluff-col-label--active"}`,i.textContent="Fluff",l.appendChild(s),l.appendChild(i);const u=document.createElement("div");u.className=`unfluff-pill ${e?"unfluff-pill--on":"unfluff-pill--off"}`;const p=document.createElement("div");p.className=`unfluff-pill-knob ${e?"unfluff-pill-knob--on":"unfluff-pill-knob--off"}`,u.appendChild(p);const y=document.createElement("div");y.className=`unfluff-col ${e?"unfluff-col--active":"unfluff-col--dim"}`;const c=document.createElement("img");c.className="unfluff-sheep",c.src=a,c.alt="No Fluff",c.width=24,c.height=24;const S=document.createElement("span");S.className=`unfluff-col-label ${e?"unfluff-col-label--active":""}`,S.textContent="No Fluff",y.appendChild(c),y.appendChild(S),r.appendChild(l),r.appendChild(u),r.appendChild(y);let d=e;function h(g){l.className=`unfluff-col ${g?"unfluff-col--dim":"unfluff-col--active"}`,i.className=`unfluff-col-label ${g?"":"unfluff-col-label--active"}`,y.className=`unfluff-col ${g?"unfluff-col--active":"unfluff-col--dim"}`,S.className=`unfluff-col-label ${g?"unfluff-col-label--active":""}`,u.className=`unfluff-pill ${g?"unfluff-pill--on":"unfluff-pill--off"}`,p.className=`unfluff-pill-knob ${g?"unfluff-pill-knob--on":"unfluff-pill-knob--off"}`,r.setAttribute("aria-label",g?"Unfluff is active — click to disable":"Unfluff is inactive — click to enable")}return r.addEventListener("click",async()=>{d=!d,await chrome.storage.local.set({enabled:d}),h(d),d?(n.enable(),console.log("[Unfluff] Enabled via toggle")):(n.disable(),console.log("[Unfluff] Disabled via toggle"))}),chrome.storage.onChanged.addListener((g,C)=>{if(C!=="local"||!g.enabled)return;const x=g.enabled.newValue!==!1;x!==d&&(d=x,h(x),x?(n.enable(),console.log("[Unfluff] Enabled via external toggle (popup)")):(n.disable(),console.log("[Unfluff] Disabled via external toggle (popup)")))}),{element:r,updateState(g){d=g,h(g)}}}function Fe(e){if(document.getElementById(X))return;const t=document.createElement("style");t.id=X,t.textContent=`
    .unfluff-toggle-btn {
      display: flex !important;
      flex-direction: row !important;
      align-items: center !important;
      gap: 0 !important;
      background: none !important;
      border: none !important;
      cursor: pointer !important;
      padding: 4px 8px !important;
      height: 52px !important;
      font-family: inherit !important;
      -webkit-appearance: none !important;
      appearance: none !important;
    }
    .unfluff-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      transition: opacity 0.2s ease;
    }
    .unfluff-col--active { opacity: 1; }
    .unfluff-col--dim { opacity: 0.35; }
    .unfluff-sheep {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
    .unfluff-col-label {
      font-size: 10px;
      font-weight: 400;
      line-height: 1;
      white-space: nowrap;
      color: rgba(128, 128, 128, 0.8);
      transition: color 0.2s ease;
    }
    .unfluff-col-label--active {
      color: inherit;
      font-weight: 600;
    }
    .unfluff-pill {
      position: relative;
      width: 28px;
      height: 14px;
      border-radius: 7px;
      margin: 0 6px;
      flex-shrink: 0;
      transition: background-color 0.2s ease;
    }
    .unfluff-pill--off { background-color: rgba(128, 128, 128, 0.3); }
    .unfluff-pill--on { background-color: ${e}; }
    .unfluff-pill-knob {
      position: absolute;
      top: 2px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: white;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
      transition: left 0.2s ease;
    }
    .unfluff-pill-knob--off { left: 2px; }
    .unfluff-pill-knob--on { left: 16px; }
  `,document.head.appendChild(t)}const K="unfluff-nav-toggle",Q=[".feed-shared-update-v2__description .break-words",".feed-shared-text",".update-components-text",'span[dir="ltr"]'],De=[".update-components-actor__name .visually-hidden",".feed-shared-actor__name",".update-components-actor__title .visually-hidden"],Ze=["promoted","gesponsert","sponsorisé","patrocinado"],je=[".feed-shared-update-v2__update-content-wrapper",".update-components-mini-update-v2",".feed-shared-mini-update"],ze=[".feed-shared-image__image",".feed-shared-carousel__image",".update-components-image img","img[data-delayed-url]"],We=[".feed-shared-article__title",".update-components-article__title",".feed-shared-mini-update-v2__title",".artdeco-entity-lockup__title"],Ge=[".feed-shared-article__subtitle",".update-components-article__subtitle",".feed-shared-article__description"],Ye=`
/* Hide right sidebar and remove from grid flow */
.scaffold-layout__aside {
  display: none !important;
}
/* Collapse grid to 2 columns (sidebar + main only) */
.scaffold-layout__row.scaffold-layout__content--has-aside {
  grid-template-columns: 225px 1fr !important;
}
/* Center main feed at its natural width */
.scaffold-layout__row > main {
  max-width: 600px !important;
  margin: 0 auto !important;
}
`,J=/recommended for you|jobs recommended/i,Xe=/grow your business faster|try premium page|advertise on linkedin/i;function Ke(e,t){const n=e.querySelectorAll(t);for(const o of n)if(!o.dataset.unfluffChecked&&(o.dataset.unfluffChecked="true",pe.isPromotedPost(o))){const a=o.closest("[data-id]");a?(a.style.display="none",a.dataset.unfluffHiddenByCleanup="true"):(o.style.display="none",o.dataset.unfluffHiddenByCleanup="true")}}function Qe(e,t){var a;const n=e.querySelectorAll(".update-components-header__text-view");for(const r of n){const l=((a=r.textContent)==null?void 0:a.trim())||"";if(!J.test(l))continue;const s=r.closest(".scaffold-finite-scroll__content");if(!s)continue;let i=r;for(;i&&i.parentElement!==s;)i=i.parentElement;i&&!i.dataset.unfluffChecked&&(i.dataset.unfluffChecked="true",i.style.display="none",i.dataset.unfluffHiddenByCleanup="true")}const o=e.querySelector(".scaffold-finite-scroll__content");if(o)for(const r of o.children){if(r.dataset.unfluffChecked||r.querySelector(t))continue;const l=r.textContent||"";J.test(l)&&(r.dataset.unfluffChecked="true",r.style.display="none",r.dataset.unfluffHiddenByCleanup="true")}}function Je(e){const t=e.querySelector(".scaffold-layout__sidebar");if(t)for(const n of t.querySelectorAll("footer.artdeco-card__actions"))n.dataset.unfluffChecked||(n.dataset.unfluffChecked="true",Xe.test(n.textContent||"")&&(n.style.display="none",n.dataset.unfluffHiddenByCleanup="true"))}const pe={name:"linkedin",hostnames:["linkedin.com"],isFeedPage(){var a;const e=location.pathname.startsWith("/feed");let t=null,n=!1;try{t=((a=window.frameElement)==null?void 0:a.getAttribute("data-testid"))??null,n=t==="interop-iframe"}catch{}const o=e||n;return console.log("[Unfluff:linkedin:isFeedPage]",{pathname:location.pathname,pathMatch:e,frameTestId:t,frameMatch:n,result:o}),o},feedSelector:"main",postSelector:"div.feed-shared-update-v2",extractPostText(e){var t;for(const n of Q){const o=e.querySelector(n);if((t=o==null?void 0:o.textContent)!=null&&t.trim())return o.textContent.trim()}return""},extractAuthorName(e){var t;for(const n of De){const o=e.querySelector(n);if((t=o==null?void 0:o.textContent)!=null&&t.trim())return o.textContent.trim()}return""},extractReshareText(e){var t;for(const n of je){const o=e.querySelector(n);if(!o)continue;const a=[];for(const r of Q)for(const l of o.querySelectorAll(r)){const s=(t=l.textContent)==null?void 0:t.trim();s&&a.push(s)}if(a.length>0)return a.join(`
`)}return""},extractImageUrls(e){const t=[];for(const n of ze)for(const o of e.querySelectorAll(n)){const a=o.getAttribute("src")||o.getAttribute("data-delayed-url");a&&a.startsWith("http")&&!t.includes(a)&&t.push(a)}return t.slice(0,3)},extractEmbedContext(e){var n,o;const t=[];for(const a of We){const r=e.querySelector(a);if((n=r==null?void 0:r.textContent)!=null&&n.trim()){t.push(r.textContent.trim());break}}for(const a of Ge){const r=e.querySelector(a);if((o=r==null?void 0:r.textContent)!=null&&o.trim()){t.push(r.textContent.trim());break}}return t.length===0?"":`[Embedded article: ${t.join(" — ")}]`},getPostId(e){const t=e.getAttribute("data-urn");if(t)return t;const n=e.closest("[data-urn]");if(n){const o=n.getAttribute("data-urn");if(o)return o}return null},isPromotedPost(e){var o;const t=e.querySelectorAll(".update-components-actor__sub-description, .update-components-actor__description, .feed-shared-actor__sub-description");for(const a of t){const r=((o=a.textContent)==null?void 0:o.toLowerCase().trim())||"";if(Ze.some(l=>r.includes(l)))return!0}return!!e.querySelector('a[href*="about/ads"]')},badgeAnchorSelector:".update-components-actor__sub-description",textSelectors:[".feed-shared-update-v2__description",".update-components-text"],mediaWrapperSelectors:[".feed-shared-update-v2__content",".update-components-content"],reshareSelectors:[".feed-shared-update-v2__update-content-wrapper"],mediaItemSelectors:[".feed-shared-image",".update-components-image",".feed-shared-carousel",".feed-shared-article",".update-components-article",".feed-shared-external-video",".update-components-linkedin-video",".update-components-video",".feed-shared-mini-update",".update-components-mini-update-v2",".feed-shared-document",".update-components-document",".feed-shared-poll",".update-components-poll",".feed-shared-celebration",".update-components-celebration"],commentSelectors:[".feed-shared-update-v2__comments-container",".comments-comments-list",".comments-comment-entity"],imageSelectors:[".feed-shared-image__image",".feed-shared-carousel__image",".update-components-image img","img[data-delayed-url]"],surplusCountSelectors:[".feed-shared-image-gallery__surplus-count",".update-components-image__surplus-count",".feed-shared-image__surplus-count"],injectNavToggle(e,t){var p,y;if(document.getElementById(K))return;const n=document.querySelector("nav.global-nav__nav ul.global-nav__primary-items");if(!n){setTimeout(()=>this.injectNavToggle(e,t),1e3);return}const o=n.querySelectorAll(":scope > li.global-nav__primary-item");if(o.length<2)return;const a=o[o.length-1],r=o[o.length-2],l=((p=a.textContent)==null?void 0:p.trim())||"",s=((y=r.textContent)==null?void 0:y.trim())||"";(/for business/i.test(s)||/try for/i.test(l)||a.querySelector(".premium-upsell-link")||r.querySelector(".global-nav__app-launcher-menu"))&&(a.remove(),r.remove());const i=document.createElement("li");i.className="global-nav__primary-item",i.id=K,i.style.cssText="display:flex;align-items:center;justify-content:center;border-left:1px solid rgba(0,0,0,0.08);margin-left:4px;padding-left:4px;";const u=me(e,"#0a66c2",t);i.appendChild(u.element),n.appendChild(i)},cleanupCss:Ye,runCleanup(e){Ke(e,this.postSelector),Qe(e,this.postSelector),Je(e)},tokens:{textPrimary:"rgba(0,0,0,0.9)",textSecondary:"rgba(0,0,0,0.6)",textMuted:"rgba(0,0,0,0.4)",border:"rgba(0,0,0,0.08)",accent:"#0a66c2",skeletonBg:"rgba(0,0,0,0.06)",font:"-apple-system, system-ui, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif"},badgeCss:`
    .unfluff-pane { margin: 8px 16px; background: #f8f8f8 !important; }
    .unfluff-original-toggle { margin: 8px 16px; }
  `,seeMoreSelector:".feed-shared-inline-show-more-text, .feed-shared-inline-show-more-text__see-more-less-toggle"},ee="unfluff-nav-toggle";function te(e){const t=e.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);if(!t)return"lightsOut";const n=+t[1],o=+t[2],a=+t[3];return .299*n+.587*o+.114*a>128?"light":a>n+5?"dim":"lightsOut"}const et=`
/* Hide right sidebar ("What's happening", "Who to follow", etc.) */
[data-testid="sidebarColumn"] {
  display: none !important;
}
/* Let the primary column expand */
[data-testid="primaryColumn"] {
  max-width: 700px !important;
  margin: 0 auto !important;
}
`;function tt(e,t){const n=e.querySelectorAll(t);for(const o of n)o.dataset.unfluffChecked||(o.dataset.unfluffChecked="true",ge.isPromotedPost(o)&&(o.style.display="none",o.dataset.unfluffHiddenByCleanup="true"))}function nt(e){var n,o;const t=e.querySelectorAll('[role="heading"]');for(const a of t){const r=((n=a.textContent)==null?void 0:n.trim())||"";if(!/who to follow|you might like/i.test(r))continue;let l=a;for(;l&&!((o=l.getAttribute("data-testid"))!=null&&o.includes("cellInnerDiv"));)l=l.parentElement;l&&!l.dataset.unfluffChecked&&(l.dataset.unfluffChecked="true",l.style.display="none",l.dataset.unfluffHiddenByCleanup="true")}}const ge={name:"twitter",hostnames:["x.com","twitter.com"],isFeedPage(){return location.pathname==="/home"||location.pathname==="/following"},feedSelector:'[data-testid="primaryColumn"]',postSelector:'article[data-testid="tweet"]',extractPostText(e){var n;const t=e.querySelector('[data-testid="tweetText"]');return((n=t==null?void 0:t.textContent)==null?void 0:n.trim())||""},extractAuthorName(e){var r;const t=e.querySelector('[data-testid="User-Name"]');if(!t)return"";let n="",o="";const a=t.querySelectorAll('a[role="link"]');for(const l of a){const s=l.querySelectorAll("span");for(const i of s){const u=(r=i.textContent)==null?void 0:r.trim();u&&(u.startsWith("@")&&!o?o=u:!n&&u.length>1&&(n=u))}}return n&&o?`${n} (${o})`:o||n},extractReshareText(e){var l,s;const t=e.querySelector('[data-testid="quoteTweet"]');if(!t)return"";const n=t.querySelector('a[role="link"] span'),o=((l=n==null?void 0:n.textContent)==null?void 0:l.trim())||"",a=t.querySelector('[data-testid="tweetText"]'),r=((s=a==null?void 0:a.textContent)==null?void 0:s.trim())||"";return!r&&!o?"":o?`@${o}: ${r}`:r},extractImageUrls(e){const t=[],n=e.querySelectorAll('[data-testid="tweetPhoto"] img');for(const o of n){const a=o.getAttribute("src");if(a&&a.startsWith("http")&&!t.includes(a)&&t.push(a),t.length>=4)break}if(t.length<4){const o=e.querySelectorAll('[data-testid="card.wrapper"] img');for(const a of o){if(t.length>=4)break;const r=a.getAttribute("src");r&&r.startsWith("http")&&!t.includes(r)&&t.push(r)}}return t},extractEmbedContext(e){var a;const t=e.querySelector('[data-testid="card.wrapper"]');if(!t)return"";const n=t.querySelectorAll("span"),o=[];for(const r of n){const l=(a=r.textContent)==null?void 0:a.trim();if(l&&l.length>10&&(o.push(l),o.length>=2))break}return o.length===0?"":`[Embedded link: ${o.join(" — ")}]`},getPostId(e){const t=e.querySelector('a[href*="/status/"]');if(!t)return null;const o=(t.getAttribute("href")||"").match(/\/status\/(\d+)/);return o?`tweet:${o[1]}`:null},isPromotedPost(e){var n;if(e.querySelector('[data-testid="placementTracking"]'))return!0;const t=e.querySelectorAll("span");for(const o of t)if(((n=o.textContent)==null?void 0:n.trim())==="Ad"&&o.closest('[data-testid="tweet"]')===e){const a=o.getBoundingClientRect(),r=e.getBoundingClientRect();if(a.top-r.top<40)return!0}return!1},badgeAnchorSelector:null,textSelectors:['[data-testid="tweetText"]'],mediaWrapperSelectors:['[data-testid="tweetPhoto"]','[data-testid="videoPlayer"]','[data-testid="card.wrapper"]'],reshareSelectors:['[data-testid="quoteTweet"]'],mediaItemSelectors:['[data-testid="tweetPhoto"]','[data-testid="videoPlayer"]','[data-testid="card.wrapper"]','[data-testid="quoteTweet"]','[data-testid="birdwatch-pivot"]'],commentSelectors:[],imageSelectors:['[data-testid="tweetPhoto"] img','[data-testid="card.wrapper"] img'],surplusCountSelectors:[],injectNavToggle(e,t){if(document.getElementById(ee))return;const n=document.querySelector('nav[aria-label="Primary"]');if(!n){setTimeout(()=>this.injectNavToggle(e,t),1e3);return}const o=this.tokens,a=document.createElement("div");a.id=ee,a.style.cssText=`display:flex;align-items:center;padding:4px 12px;margin-top:8px;color:${o.textPrimary};`;const r=me(e,o.accent,t);a.appendChild(r.element);const l=getComputedStyle(document.body).backgroundColor;if(te(l)!=="light")for(const s of a.querySelectorAll(".unfluff-sheep"))s.style.filter="invert(1)";n.appendChild(a)},cleanupCss:et,runCleanup(e){tt(e,this.postSelector),nt(e)},get tokens(){const e=getComputedStyle(document.body).backgroundColor,t=te(e),n="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";return t==="light"?{textPrimary:"rgb(15, 20, 25)",textSecondary:"rgb(83, 100, 113)",textMuted:"rgb(139, 152, 165)",border:"rgb(239, 243, 244)",accent:"#1d9bf0",skeletonBg:"rgb(247, 249, 249)",font:n}:t==="dim"?{textPrimary:"rgb(247, 249, 249)",textSecondary:"rgb(139, 152, 165)",textMuted:"rgb(113, 118, 123)",border:"rgb(56, 68, 77)",accent:"#1d9bf0",skeletonBg:"rgb(30, 39, 50)",font:n}:{textPrimary:"rgb(231, 233, 234)",textSecondary:"rgb(113, 118, 123)",textMuted:"rgb(83, 90, 96)",border:"rgb(47, 51, 54)",accent:"#1d9bf0",skeletonBg:"rgb(22, 24, 28)",font:n}},badgeCss:`
    .unfluff-pane { margin: 8px 0; }
    .unfluff-original-toggle { margin: 8px 0; }
    /* Auto-hide late-loading content (X lazy-loads cards, images, etc.) */
    article[data-testid="tweet"].unfluff-active [data-testid="tweetText"],
    article[data-testid="tweet"].unfluff-active [data-testid="tweetPhoto"],
    article[data-testid="tweet"].unfluff-active [data-testid="videoPlayer"],
    article[data-testid="tweet"].unfluff-active [data-testid="card.wrapper"],
    article[data-testid="tweet"].unfluff-active [data-testid="quoteTweet"],
    article[data-testid="tweet"].unfluff-active [data-testid="birdwatch-pivot"],
    article[data-testid="tweet"].unfluff-active *:has(> [data-testid="quoteTweet"]) {
      display: none !important;
    }
    /* Alt quote rendering: X sometimes wraps quotes in div[aria-labelledby]
       without data-testid="quoteTweet" */
    article[data-testid="tweet"].unfluff-active div[aria-labelledby]:has([role="link"] [data-testid="User-Name"]) {
      display: none !important;
    }
  `},ot=[pe,ge];function j(){const e=location.hostname;for(const t of ot)if(t.hostnames.some(n=>e.includes(n)))return t;return null}function rt(){var o;const e=j();if(console.log("[Unfluff:init] getPlatform() →",(e==null?void 0:e.name)??"null"),!e)return;const t=window!==window.top;let n=null;try{n=((o=window.frameElement)==null?void 0:o.getAttribute("data-testid"))??null}catch{}console.log("[Unfluff:init] isIframe:",t,"| frameElement data-testid:",n,"| location:",location.href),chrome.storage.local.get("enabled",a=>{const r=a.enabled!==!1,l=e.isFeedPage();console.log("[Unfluff:init] enabled:",r,"| isFeedPage:",l),e.injectNavToggle(r,{enable(){E(e),q(e),console.log("[Unfluff] Enabled — analyzing posts")},disable(){M(e),N(),console.log("[Unfluff] Disabled — original feed restored")}}),r&&l?(E(e),q(e),console.log("[Unfluff:init] Starting observer — feed page detected")):console.log("[Unfluff:init] NOT starting observer — enabled:",r,"isFeedPage:",l)})}function he(e){chrome.storage.local.get("enabled",t=>{const n=t.enabled!==!1;e.injectNavToggle(n,{enable(){E(e),q(e),console.log("[Unfluff] Enabled — analyzing posts")},disable(){M(e),N(),console.log("[Unfluff] Disabled — original feed restored")}}),n&&e.isFeedPage()?(E(e),q(e),console.log("[Unfluff] SPA navigation to feed — re-initialized")):(M(e),N(),console.log("[Unfluff] SPA navigation away from feed — stopped observer/cleanup"))})}function at(e){let t=location.href;function n(){const r=location.href;r!==t&&(t=r,console.log("[Unfluff] URL changed:",r),he(e))}const o=history.pushState.bind(history);history.pushState=function(...r){o(...r),n()};const a=history.replaceState.bind(history);history.replaceState=function(...r){a(...r),n()},window.addEventListener("popstate",n)}function ne(){const e=window!==window.top;console.log("[Unfluff:bootstrap] readyState:",document.readyState,"| isIframe:",e,"| href:",location.href);const t=j();console.log("[Unfluff:bootstrap] getPlatform() →",(t==null?void 0:t.name)??"null"),t&&(rt(),at(t))}function lt(){const e=j();if(!e)return;const t=window!==window.top,n=!t&&document.querySelector('iframe[data-testid="interop-iframe"]');if(console.log("[Unfluff:reinjection] isIframe:",t,"| hasInteropIframe:",!!n,"| href:",location.href),n){M(e),N(),console.log("[Unfluff:reinjection] Parent frame: interop-iframe detected, stopped observer — deferring to iframe");return}he(e)}const oe=window!==window.top;window.__unfluff_loaded?(console.log("[Unfluff] Re-injection detected | isIframe:",oe,"| href:",location.href),lt()):(window.__unfluff_loaded=!0,console.log("[Unfluff] Content script loaded | isIframe:",oe,"| readyState:",document.readyState,"| href:",location.href),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ne):ne());

})();