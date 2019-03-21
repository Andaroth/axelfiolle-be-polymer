import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

class WelcomeScreen extends PolymerElement {
	static get template () {
		return html`
			<style>
				.splash {
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
                
				.welcome {
                    display: flex;
                    flex-direction: row;
                    margin: 0 auto;
                    cursor: pointer;
                    
                    text-align: center;
                    font-family: "Times New Roman", serif;
                    font-size: 25vw;
                }
                .welcome.clicked-true span {transition: .75s cubic-bezier(1, 0, 0.6, 1);}
                .welcome.clicked-true span.left {transform: translateX(-100vw);}
                .welcome.clicked-true span.right {transform: translateX(100vw);}

                
				.notice {
                    text-align: center;
                    transition: opacity .25s ease-out;
                }

                .nopacity-true {opacity: 0;}
			</style>

		
            <template is="dom-if" if="[[!hidden]]">
                <aside class$="splash nopacity-[[nopacity]]" on-click="open">
                    <div class$="welcome clicked-[[nopacity]]">
                        <span class="left">[An</span>
                        <span class="right">da]</span>
                    </div>
                    <span class$="notice nopacity-[[nopacity]]">Loading ...</span>
                </aside>
            </template>
		`;
	}
	
	static get properties () {
		return {
			nopacity: {
				type: Boolean,
				value: false
			},
			hidden: {
				type: Boolean,
				value: false
			}
        };
	}

	open() {
		this.set('nopacity',true)
		this.dispatchEvent(new CustomEvent('power',{detail:{},bubbles:true,composed:true}))
		setTimeout(()=>this.set('hidden',true),700)
	}
}

customElements.define('welcome-screen', WelcomeScreen);