import { LitElement, html } from 'lit-element';
import '../components/FunctionalComponent';
import '../components/PreactWebComponent';

class PageTwo extends LitElement {
  render() {
    return html`
      <h1>Hello page two</h1>
      <p>
        <x-functional-component .message=${'functional components are great!'}></x-functional-component>
      </p>
      <p>
        <x-greeting name="Web component created with preact!"></x-greeting>
      </p>
    `;
  }
}

customElements.define('x-page-two', PageTwo);