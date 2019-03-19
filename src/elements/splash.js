import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

class SplashElement extends PolymerElement {
  static get template () {
    return html`
      <style>
        #splash {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 50vh;
            left: 50vw;
            color: #FFF;
            opacity: 1;
            justify-content: space-around;
			transform: translate(-50%,-50%);
			transition: opacity .7s ease-out;
		}
        #welcome {
            display: flex;
            flex-direction: row;
            margin: 0 auto;
			cursor: pointer;
			
			text-align: center;
			font-family: "Times New Roman", serif;
            font-size: 25vw;
        }
        #click-anywhere {
			text-align: center;
			transition: opacity .25s ease-out;
		}

        #welcome.clicked-true span {transition: .75s cubic-bezier(1, 0, 0.6, 1);}
        #welcome.clicked-true span.left {transform: translateX(-100vw);}
		#welcome.clicked-true span.right {transform: translateX(100vw);}

		#landing.nopacity-true,
		#click-anywhere.nopacity-true {opacity: 0;}
      </style>

      <aside id="splash" class$="nopacity-[[loadComplete]]" on-click="open">
        <div id="welcome" class$="clicked-[[loadComplete]]">
          <span class="left">[An</span>
          <span class="right">da]</span>
        </div>
        <span id="click-anywhere" class$="nopacity-[[loadComplete]]">Click anywhere</span>
      </aside>
    `;
  }
  
	static get properties () {
		return {
			loadComplete: {
				type: Boolean,
				value: false
			}
    	};
	}

	open() {
		this.set('loadComplete',true)
		this.dispatchEvent(new CustomEvent('splash-skip',{detail:{},bubbles:true,composed:true}))
	}
}

customElements.define('splash-element', SplashElement);