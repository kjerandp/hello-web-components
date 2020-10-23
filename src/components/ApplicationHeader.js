import { LitElement, html } from 'lit-element';
import { bulmaStyles } from '../lit-bulma';

class ApplicationHeader extends LitElement{
  static get styles() {
    return [bulmaStyles];
  }

  static get properties() {
    return {
      isActive: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.isActive = false;
  }

  render() {
    const { isActive } = this;

    return html`
      <nav class="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="images/sigma-upper.png" style="max-height:40px;" />
          </a>
          <a
            role='button'
            class=${`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbar-menu'
            @click=${() => {
              this.isActive = !isActive;
            }}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id="navbar-menu" class=${`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div class="navbar-start">
            <a class="navbar-item" href="/page-one" activeclass="is-active">
              <span>Page one</span>
            </a>
            <a class="navbar-item" href="/page-two" activeclass="is-active">
              <span>Page two</span>
            </a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <img src="images/akerbp-logo.png" />
            </div>
          </div>
        </div>
    </nav>
    `;
  }
}

customElements.define('x-application-header', ApplicationHeader);