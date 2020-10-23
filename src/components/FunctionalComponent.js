import { html } from 'lit-html';
import { defineElement, useProperty, useStyle } from 'fuco';

function FunctionalComponent() {
  const message = useProperty('message');

  return html`
    <div>I have a not a secret message for you: <strong>${message}</strong></div>
    <x-sub-component .bullets=${['A', 'B']} .callback=${() => alert("click")}></x-sub-component>
  `;
}

defineElement('x-functional-component', FunctionalComponent);