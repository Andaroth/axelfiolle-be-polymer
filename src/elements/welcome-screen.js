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
                
                p.cookie {
                	position: fixed;
                	display: block;
                	bottom: 20vh;
                	width: 100%;
                	text-align: center;
                	font-size: 2em;
                	opacity: 0;
                	transition: .5s ease;
                }
                p.cookie.display {
                	opacity: 1;
                }
                
                .nopacity-true {opacity: 0;}
			</style>

		
            <template is="dom-if" if="[[!hidden]]">
                <div id="splash" class$="splash clicked-[[isClicked]]" on-click="open">
					<span class="left">&lt;An</span>
					<span class="right">da&gt;</span>
					<p id="cookie-line" class="cookie">This website uses cookies. Please click to accept cookies &#127850;</p>
                </div>
				<aside class$="cut clicked-[[isClicked]]"></aside>
            </template>
		`;
	}
	
	static get properties () {
		return {
			skip: {
                type: Boolean
			},
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
			},
			isFirstAnimOver: {
				type: Boolean,
				value: false
			}
        };
	}

	ready() {
		super.ready()
        setTimeout(()=>{
            this.set('isFirstAnimOver',true)

            this.showCookie()
        },2000)
	}

	open() {
		if (this.isFirstAnimOver) {
			// localStorage.setItem('cookies-agreement',true)
			setTimeout(()=>{
				this.set('hidden',true)
				this.dispatchEvent(new CustomEvent('power',{detail:{},bubbles:true,composed:true}))
			},2000)
		}
	}

	showCookie() {
		const cookie_txt = this.root.querySelector('#cookie-line') || null
		if (cookie_txt) {
            this.set('nopacity', true)

			setTimeout(() => {
				cookie_txt.classList.add('display')
			}, 600) // .6s
        } else {
			console.warn('unfound element #cookie_txt')
		}
	}

	afterClickAnim() {
		const splash = this.root.querySelector('#splash') || null
        const cookie_txt = this.root.querySelector('#cookie-line') || null

		if (splash && cookie_txt) {
            setTimeout((A) => {
                cookie_txt.classList.remove('display')
			setTimeout((B)=>{
				splash.classList.add('after-click')
			},2000) // B 2s
            }, 600) // A .6s
		} else {
            console.warn('unfound element #splash or #cookie_txt', splash,cookie_txt)
        }
	}

	skip() {
        this.set('hidden',true)
        this.dispatchEvent(new CustomEvent('power',{detail:{},bubbles:true,composed:true}))
	}
}

customElements.define('welcome-screen', WelcomeScreen);