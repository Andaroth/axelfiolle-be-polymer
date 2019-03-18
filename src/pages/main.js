import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

class MainPage extends PolymerElement {
  static get template () {
    return html`
        <h1 id="title" class="hidden">Axel Fiolle</h1>
        <main id="site">
            <nav id="accessibility" class="hidden">
                <ul id="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <section id="home">
                <div class="discover"><span id="jsFill"></span><h2 id="jobs">FrontEnd-Dev</h2></div>
            </section>

            <section id="about">
                <h2>About</h2>
                <p>I design dreams and experiences since I was just a kid.</p>
                <p>With more than ten years of experience in web design and developement, I can help you to create your own website and assert your presence online.</p>
                <p>Since I'm 12, I've always been interested in the virtual world. <br/>
                I learned to handle any design tool and also mastering the art of code.</p>
                <p>My natural taste of unknown and my initiative made me discover a lot of wonders, I'd be glad to help you getting online and expands all over the Internet !</p>
            </section>

            <section id="portfolio">
                <h2>Portfolio</h2>
                <div class="skills">
                <article id="dev">
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
                    <h3>I make essays</h3>
                </article>
                </div>
            </section>

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
          isLoaded: {
              type: Boolean,
              value: false
          }
      };
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
    }
  }  
  
  customElements.define('main-page', MainPage);