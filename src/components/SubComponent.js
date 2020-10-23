import { LitElement, html } from 'lit-element';
import { bulmaStyles } from '../lit-bulma';

class SubComponent extends LitElement {
  static get styles() {
    return [bulmaStyles];
  }

  static get properties() {
    return {
      bullets: { type: Array },
      callback: { type: Function },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>I'm a sub component, made up of the following specifications:</div>
      <ul>
        ${this.bullets.map(bullet => html`
          <li>${bullet}</li>
        `)}
      </ul>
      <br />
      <button class="button is-danger is-outlined" @click=${() => this.callback && this.callback()}>Don't click the button!</button>
    `;
  }
}

customElements.define('x-sub-component', SubComponent);