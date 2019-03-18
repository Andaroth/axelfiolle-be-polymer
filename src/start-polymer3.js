import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

import './elements/splash.js';
import './pages/main.js';

class AndarothWebsite extends PolymerElement {
	static get template () {
		return html`
			<splash-element on-click="open"></splash-element>

			<main-page show-website="[[showWebsite]]"></main-page>
		`;
	}
  
	static get properties () {
    	return {
			showWebsite: {
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
		this.set('showWebsite',true)
	}
}  

// Register the element with the browser.
customElements.define('andaroth-website', AndarothWebsite);
