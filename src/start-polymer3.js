import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

import './elements/splash.js';
import './pages/main.js';

class AndarothWebsite extends PolymerElement {
  static get template () {
    return html`
      <style>
        h1 {
          cursor: pointer;
        }
        div.status {
          color: red;
        }
        div.status.is-open-true {
          color: green;
        }
      </style>

      <splash-element></splash-element>

      <main-page is-loaded="[[loadComplete]]"></main-page>
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

  constructor() {
    super();
  }

  ready(){
    super.ready();
  }

  open() {
    this.set('loadComplete',true)
  }
}  

// Register the element with the browser.
customElements.define('andaroth-website', AndarothWebsite);
