import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

import '@polymer/paper-button/paper-button.js';

class LandingElement extends PolymerElement {
    static get template () {
        return html`
            <style>
                .landing {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background: url('./res/img/family.jpg') center no-repeat;
                    background-size: cover;
                    height: 100vh;
                    opacity: 0;
                    transition: opacity 1s ease;
                    
                    text-align: right;
                }
                .landing.active-true {
                    opacity: 1;
                }
                
                .row {
                    display: flex;
                    flex-direction: row;
                }
                .grow-2{
                    flex-grow: 2;
                }

                h2 {
                    margin: 0 40px 0 0;
                    width:auto;
                    cursor: pointer;

                    color: #FFF;
                    font-size: 64px;
                    opacity: .75;
                }
                h2:before {content: "<";}
                h2:after {content: "/>";}
                
                nav {
                    display: flex;
                    flex-direction: row;
                    margin: 16px 64px 0 0;
                }
               nav > paper-button {
                    margin: 0 16px;
                    border: 2px solid rgba(255,255,255,.75);
                    border-bottom: 4px solid rgba(255,255,255,.75);;
                    background-size: 100% 200%;
                    background-image: linear-gradient(to bottom, transparent 50%, rgba(255,255,255,.25) 50%);
                    box-sizing: border-box;
                    text-align: right;
                    transition: .125s ease-in-out;
                }
                nav > paper-button:hover {
                    background-position-y: 100%;
                }
                nav > paper-button:after {content: ".";}
            </style>

            <section class$="landing active-[[startedUp]]">
                <h2 on-click="_goToAnchor">[[shownSkill]]</h2>
                
                <div class="row">
                    <aside class="grow-2"></aside>
                    <nav>
                        <paper-button>Lorem ipsum</paper-button>
                        <paper-button>dolor sit amet</paper-button>
                        <paper-button>Lorem ipsum dolor amet</paper-button>
                    </nav>
                </div>
            </section>
        `;
    }
  
    static get properties () {
        return {
            startedUp: {
                type: Boolean,
                value: false
            },
            shownSkill: {
                type: String,
                value: 'FrontEnd-Dev'
            },
            skillIndex: {
                type: Number,
                value: 0
            },
            skills: {
                type: Object,
                value: {
                    0:{label:'FrontEnd-Dev',anchor:'dev'},
                    1:{label:'Web-Design',anchor:'design'},
                    2:{label:'Illustration',anchor:'illu'},
                    3:{label:'Photography',anchor:'photo'},
                    4:{label:'Blogging',anchor:'blog'}
                }
            },
            parkingJpg: {
                type: String,
                value: ''
            }
        };
    }

    static get observers () {
        return ['start(startedUp)']
    }

    _skillsInterval() {
        if (this.startedUp) {
            let index = 0
            setInterval(()=>{
                if (this.startedUp && index < Object.keys(this.skills).length-1) index++
                else index = 0
                this.set('shownSkill',this.skills[index].label)
                this.set('skillIndex',index)
            },2500)
        }
    }

    start(startedUp) {
        if (startedUp) {
            this._skillsInterval()
            this.dispatchEvent(new CustomEvent('ready',{detail:{done:true},bubbles:true,composed:true}))
        }
    }

    _goToAnchor() {
        this.dispatchEvent(new CustomEvent('router-call',{detail:{anchor:this.skills[this.skillIndex].anchor},bubbles:true,composed:true}))
    }

  }  
  
  customElements.define('landing-element', LandingElement);