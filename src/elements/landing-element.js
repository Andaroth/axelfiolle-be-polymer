import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

class LandingElement extends PolymerElement {
    static get template () {
        return html`
            <style>
                #home {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    background-image: url('./res/img/parking.jpg');
                    background-size: cover;
                    background-position: center;
                    height: 100vh;
                    opacity: 0;
                    transition: opacity 1s ease;
                }
                #home.active-true {
                    opacity: 1;
                }
                #home .discover {
                    color: #FFF;
                    text-align: center;
                    font-size: 2em;
                    margin-bottom: 10vh;
                }
                #jobs {
                    margin: 0;
                    width:auto;
                    cursor: pointer;
                }
                #jobs:before {content: "<";}
                #jobs:after {content: "/>";}
            </style>
            <section id="home" class$="active-[[startedUp]]">
                <div class="discover"><h2 id="jobs">[[shownSkill]]</h2></div>
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

    ready() {
        super.ready()
        this.dispatchEvent(new CustomEvent('ready',{detail:{done:true},bubbles:true,composed:true}))
    }

    _skillsInterval() {
        if (this.startedUp) {
            let index = 0
            setInterval(()=>{
                if (this.startedUp && index < Object.keys(this.skills).length-1) index++
                else index = 0
                this.set('shownSkill',this.skills[index].label)
            },2500)
        }
    }

    start() {
        this._skillsInterval()
    }
  }  
  
  customElements.define('landing-element', LandingElement);