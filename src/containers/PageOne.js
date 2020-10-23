import { LitElement, html } from 'lit-element';
import { bulmaStyles } from '../lit-bulma';
import '../components/SubComponent';

const bullets = [
  'The Custom Elements specification',
  'The shadow DOM specification',
  'The HTML Template specification',
  'The ES Module specification'
];

class PageOne extends LitElement {
  static get styles() {
    return [bulmaStyles];
  }
  
  render() {
    return html`
      <div>
        <div class="hero is-link is-bold is-small">
          <div class="hero-body">
            <div class="container is-fluid page-title">
              <h1 class="title is-4">This is page one!</h1>
              <h2 class="subtitle">...powered by web components and all!</h2>
            </div>
          </div>
        </div>
        <br />
        <x-sub-component .bullets=${bullets} .callback=${() => this.callback()}></x-sub-component>
      </div>
    `;
  }

  callback() {
    alert('Stop clicking me!');
  }
}

customElements.define('x-page-one', PageOne);