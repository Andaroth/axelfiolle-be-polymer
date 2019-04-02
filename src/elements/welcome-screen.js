import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

class WelcomeScreen extends PolymerElement {
	static get template () {
		return html`
			<style>
				@keyframes left-span-anim {
					from {transform: translateY(-100vh);}
					to {transform: translateY(0);}
				}
				@keyframes right-span-anim {
					from {transform: translateY(100vh);}
					to {transform: translateY(0);}
				}
			
				.splash {
					display: flex;
					flex-direction: column;
					justify-content: center;
					height: 100vh;
					width: 100vw;
					transition: .7s ease-out;
					cursor: pointer;
					
					overflow: hidden;
                }
                
                span {
                	position:fixed;
                	font-size: 25vw;
                }
                span.left {
                	right: 50vw;
                	animation: left-span-anim 2s;
                }
                span.right {
                	left: 50vw;
                	animation: right-span-anim 2s;
                }
                aside.cut {
                	position:fixed;
                	top: -500vh;
                	left: 50vw;
                	height: 500vh;
                	width:4px;
                	background: white;
                	transform: translateX(-50%);
                	transition: .75s ease-in;
                }
                aside.cut.clicked-true {top: 500vh;}
                
                .clicked-true span {transition: .75s cubic-bezier(1, 0, 0.6, 1);}
                .clicked-true span.left {transform: translateX(-100vw);}
                .clicked-true span.right {transform: translateX(100vw);}
                
                .nopacity-true {opacity: 0;}
			</style>

		
            <template is="dom-if" if="[[!hidden]]">
                <div class$="splash clicked-[[isClicked]]" on-click="open">
					<span class="left">[An</span>
					<span class="right">da]</span>
                </div>
				<aside class$="cut clicked-[[isClicked]]"></aside>
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
			},
			isClicked: {
				type: Boolean,
				value: false
			}
        };
	}

	open() {
		this.set('nopacity',true)
		this.set('isClicked',true)
		setTimeout(()=>{
			this.set('hidden',true)
            this.dispatchEvent(new CustomEvent('power',{detail:{},bubbles:true,composed:true}))
        },1000)

	}
}

customElements.define('welcome-screen', WelcomeScreen);