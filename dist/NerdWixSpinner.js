/*
 * NerdWixSpinner is simple library for displaying a loading spinner. It makes use
 * of the whole page to display the spinner. The spinner is pure CSS, SVG, and JavaScript.
 * Copyright © 2022 App Nerds LLC
 */
class NerdWixSpinner extends HTMLElement{constructor(){super(),this._id="nerd-wix-spinner-"+(new Date).getTime(),this._el=null,this._css=null}static get observedAttributes(){return["show"]}attributeChangedCallback(e,t,s){"show"===e&&("true"===s?this._createEl():this._destroyEl())}connectedCallback(){this._injectCSS()}_createEl(){this._el=document.createElement("div"),this._el.id=this._id,this._el.classList.add("nerdspinner"),this._el.innerHTML=`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" />
      </svg>
    `,document.body.appendChild(this._el)}_destroyEl(){this._el.remove()}_injectCSS(){this._css=document.createElement("style"),this._css.id="nerd-wix-spinner-css",this._css.innerHTML=`.nerdspinner {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(149, 149, 149, 0.5);
	z-index: 2147483647;
}

.nerdspinner svg {
  animation: 2s linear infinite nerdspinner-svg-animation;
  max-width: 100px;
  z-index: 2147483647;
  left: 50%;
  top: 45%;
  position: absolute;
}

@keyframes nerdspinner-svg-animation {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
}

.nerdspinner circle {
  animation: 1.4s ease-in-out infinite both nerdspinner-circle-animation;
  display: block;
  fill: transparent;
  stroke: #2f3d4c;
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 280;
  stroke-width: 10px;
  transform-origin: 50% 50%;
  z-index: 100;
}

@keyframes nerdspinner-circle-animation {
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }
  
  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }
  
  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
}`,this.appendChild(this._css)}}customElements.define("nerd-wix-spinner",NerdWixSpinner);
/* v1.0.0 */
