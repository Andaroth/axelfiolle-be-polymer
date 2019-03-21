import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

class LandingElement extends PolymerElement {
    static get template () {
        return html`
            <style>
                .landing {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    background: url('./res/img/parking.jpg') center no-repeat;
                    background-size: cover;
                    height: 100vh;
                    opacity: 0;
                    transition: opacity 1s ease;
                }
                .landing.active-true {
                    opacity: 1;
                }

                h2 {
                    margin: 0 0 10vh 0;
                    width:auto;
                    cursor: pointer;

                    color: #FFF;
                    text-align: center;
                    font-size: 2em;
                }
                h2:before {content: "<";}
                h2:after {content: "/>";}
            </style>

            <section class$="landing active-[[startedUp]]">
                <h2 on-click="_goToAnchor">[[shownSkill]]</h2>
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