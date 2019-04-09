import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

import './landing-element.js';
import './portfolio-element.js';

// import _ from 'lodash/lodash';

class WebsiteMain extends PolymerElement {
    static get template () {
        return html`
            <style>
                #site {display: none;}
                #site.show-website-true {display: initial;}
                
                #title {
                    position: fixed;
                    margin: 0;
                    bottom: 8px;
                    right: 16px;
                }

                .hidden {display: none;}
            </style>
            <main id="site" class$="show-website-[[opened]]">
                <h1 id="title">Axel Fiolle</h1>
                
                <landing-element 
                    started-up="[[opened]]" 
                    on-ready="_elementIsReady"
                    on-router-call="doRoute"
                ></landing-element>

                <section id="about">
                    <h2>About</h2>
                    <p>I design dreams and experiences since I was just a kid.</p>
                    <p>With more than ten years of experience in web design and developement, I can help you to create your own website and assert your presence online.</p>
                    <p>Since I'm 12, I've always been interested in the virtual world. <br/>
                    I learned to handle any design tool and also mastering the art of code.</p>
                    <p>My natural taste of unknown and my initiative made me discover a lot of wonders, I'd be glad to help you getting online and expands all over the Internet !</p>
                </section>

                <portfolio-element
                    on-ready="_elementIsReady"
                ></portfolio-element>

                <section id="contact">
                    <h2>Contact</h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid, aspernatur aut autem consectetur distinctio, dolor doloremque doloribus iure magni perspiciatis qui quidem quisquam sit sunt, tenetur vero voluptate voluptates?
                </section>

                <footer>
                    <p>ᕕ( ᐛ )ᕗ <br/>Axel Andaroth &copy; 2005-2019 All rights reserved</p>
                </footer>

            </main>
        `;
    }
  
    static get properties () {
        return {
            opened: {
                type: Boolean,
                value: false
            },
            componentsLoaded: {
                type: Array,
                value: []
            },
            componentsToLoad: {
                type: Array,
                value: [
                    'landing-element',
                    'about-element',
                    'portfolio-element',
                    'contact-element'
                ]
            },
            siteLoaded: {
                type: Boolean,
                value: false
            }
        };
    }

    static get observers () {
        return [
            'display(opened)',
            '_isLoadedComplete(componentsLoaded)',
            '_loadedComplete(siteLoaded)'
        ]
    }

    /* private */
    _elementIsReady(e) {
        if (e && e.target && e.target.localName && e.detail && e.detail.done) {
            this.push('componentsLoaded',e.target.localName)
            // console.log('ready : ',e.target.localName)
        }
        // else console.log('e is not done or undefined')
    }

    _isLoadedComplete() {
        this.set('siteLoaded', this.equalArrays(this.componentsLoaded,this.componentsToLoad))
    }

    _loadedComplete(siteLoaded) {
        // console.log('_isLoadedComplete ?',siteLoaded)
        if (siteLoaded) this.dispatchEvent(new CustomEvent('loaded',{detail:{},bubbles:true,composed:true}))
    }

    /* public */
    display(opened) {
        // console.log('display()',opened)
    }

    doRoute(e) {
        if (!(e && e.detail)) return

        const page = e.detail.page || null
        const anchor = e.detail.anchor || null

        if (page && !anchor) return // TODO this.goTo(this.root.getElementById(page)) 
        else if (anchor && !page) return // TODO this.scrollTo(this.root.getElementById(anchor)) 
        else if (page && anchor) return // TODO
        else return
    }

    equalArrays(a,b) {
        if (Array.isArray(a) && Array.isArray(b)) { // both MUST be arrays
            a.map(line=>{ // for each line of a
                if (b.indexOf(line) == -1) return false // false if not in b
            })
            return a.length == b.length // if none of a absent of b, check lengths
        } else return false
    }
}  
  
customElements.define('website-main', WebsiteMain);