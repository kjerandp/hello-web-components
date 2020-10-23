import { useRef, useState } from 'preact/hooks';
import register from 'preact-custom-element';
import './SubComponent';
import bulma from '../bulma.scss';

const Greeting = ({ name = 'World' }) => {
  const input = useRef(null);
  const [text, setText] = useState(null);
  return (
    <>
      <style>
        {bulma}
      </style>
      <p>Hello, {text || name}!</p>
      <input ref={input} onFocus={ev => console.log(ev.target.value)} type="text"></input><button class="button is-link" onClick={(ev) => {
        console.log(ev);
        if (!input.current) return;
        setText(input.current.value);
        input.current.value = '';
        input.current.focus();
      }}>Set Text</button>
      <x-sub-component bullets={['One', 'Two', 'Three']} callback={() => alert("callback")}></x-sub-component>
    </>
  );
};

register(Greeting, 'x-greeting', ['name'], { shadow: true });