import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

import './elements/welcome-screen.js';
import './elements/website-main.js';

class AndarothWebsite extends PolymerElement {
	static get template () {
		return html`
			<welcome-screen on-power="boot" active="[[powerOn]]"></welcome-screen>
			<website-main on-loaded="boot" active="[[powerOn]]"></main-page>
		`;
	}
  
	static get properties () {
    	return {
			powerOn: {
				type: Boolean,
				value: false
      		}
    	};
	}

	boot() {
		console.log('welcome visitor :)')
		this.set('powerOn',true)
	}
}  

customElements.define('andaroth-website', AndarothWebsite);
