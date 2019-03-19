import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

class HomeElement extends PolymerElement {
    static get template () {
        return html`
            <style>
                #home {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    background-size: cover;
                    background-position: center;
                    height: 100vh;
                }
                #home:before, #home-after {
                    height:0;
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
            <section id="home" style="background: url('[[parkingJpg]]');">
                <div class="discover"><h2 id="jobs">[[shownSkill]]</h2></div>
            </section>
        `;
    }
  
    static get properties () {
      return {
          active: {
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
          sIndex: {
              type: Number,
              value: 0
          },
          parkingJpg: {
            type: String,
            value: ''
        }
      };
    }

    static get observers () {
        return ['display(showWebsite)']
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();

        setInterval(()=>{
            if (this.sIndex < Object.keys(this.skills).length-1 && this.active) this.set('sIndex',this.sIndex+1)
            else this.sIndex = 0
            this.set('shownSkill',this.skills[this.sIndex ].label)
        },2500)
    }

    display(showWebsite) {
        this.set('showWebsite',showWebsite)
    }
  }  
  
  customElements.define('home-element', HomeElement);