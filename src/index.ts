import {html, render} from 'lit-html';
import "@codin/cwc-code-highlight";

import './app';

const app = html`<cwc-learn-app></cwc-learn-app>`;
render(app, document.getElementById('app'));
