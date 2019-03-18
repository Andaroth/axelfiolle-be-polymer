import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

class SplashElement extends PolymerElement {
  static get template () {
    return html`
      <style>
        #landing {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 50vh;
            left: 50vw;                                                             
            background: #000;
            color: #FFF;
            opacity: 1;
            justify-content: space-around;
            transform: translate(-50%,-50%);
        }
        #welcome {
            display: flex;
            flex-direction: row;
            margin: 0 auto;
            text-align: center;
            cursor: pointer;
        }
        #welcome > * {
            font-family: "Times New Roman", serif;
            font-size: 25vw;
        }
        #click-anywhere {
			text-align: center;
			transition: opacity .25s ease-out;
		}
		#click-anywhere.active {
			opacity: 0;
		}
        #welcome.clicked span {transition: .75s cubic-bezier(1, 0, 0.6, 1);}
        #welcome.clicked span.left {transform: translateX(-100vw);}
		#welcome.clicked span.right {transform: translateX(100vw);}
      </style>

      <aside id="landing" on-click="open">
        <div id="welcome">
          <span class="left">[An</span>
          <span class="right">da]</span>
        </div>
        <a id="click-anywhere">Click anywhere</a>
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
    this.root.getElementById('welcome').classList.add('clicked')
    this.root.getElementById('click-anywhere').classList.add('active')
  }
}  

customElements.define('splash-element', SplashElement);