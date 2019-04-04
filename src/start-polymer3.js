import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

// import '../node_modules/analytics-element/analytics-element.html';

import './elements/welcome-screen.js';
import './elements/website-main.js';

class AndarothWebsite extends PolymerElement {
	static get template () {
		return html`
            <welcome-screen id="splash-screen"
                on-power="boot" 
                skip="[[skipCookie]]"
            ></welcome-screen>
            <website-main 
                on-loaded="boot" 
                opened="[[powerOn]]"
            ></main-page>
            <!--	<element-analytics id="UA-70463285-1"></element-analytics>-->
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

	ready() {
		super.ready()
		const cookiesAgreement = localStorage.getItem('cookies-agreement') || 'false'
		
		if (cookiesAgreement === 'true') {
			this.$['splash-screen'].skip()
		}
	}

	boot() {
		console.log('welcome visitor :)')
		this.set('powerOn',true)
	}
}  

customElements.define('andaroth-website', AndarothWebsite);
