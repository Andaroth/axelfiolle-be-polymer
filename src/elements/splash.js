import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

class SplashElement extends PolymerElement {
  static get template () {
    return html`
      <style>
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
        .clickToOpen {text-align: center;}
        #welcome.clicked span {transition: .75s ease-in-out;}
        #welcome.clicked span.left {transform: translateX(-100vw);}
        #welcome.clicked span.right {transform: translateX(100vw);}
      </style>

      <aside id="landing" on-click="open">
        <div id="welcome">
          <span class="left">[An</span>
          <span class="right">da]</span>
        </div>
        <a class="clickToOpen">Click anywhere</a>
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
  }
}  

customElements.define('splash-element', SplashElement);