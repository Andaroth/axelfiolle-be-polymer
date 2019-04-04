import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

// import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';

class PortFolio extends PolymerElement {
    static get template () {
        return html`
            <style>
                #portfolio {
                    background: dimgrey;
                }
                
                #portfolio > div {
                    width: calc(100vw - 64px);
                    margin: 0 auto;
                }
            </style>

            <section id="portfolio">
                    <h2>Portfolio</h2>
                    <div class="skills">
                    
                        <paper-card id="code">
                            <h3>Code</h3>
                        </paper-card>
                    
                    <!-- <article id="dev">
                        <h3>I write code</h3>
                    </article>
                    <article id="design">
                        <h3>I do design</h3>
                    </article>
                    <article id="illu">
                        <h3>I can draw</h3>
                    </article>
                    <article id="photo">
                        <h3>I shoot pictures</h3>
                    </article>
                    <article id="blog">
                        <h3>I'm a writer</h3>
                    </article> -->
                    </div>
                </section>
        `;
    }

    static get properties () {
        return {
        };
    }

}

customElements.define('portfolio-element', PortFolio);