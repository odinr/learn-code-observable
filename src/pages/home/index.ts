import { html } from 'lit-element';

import image from './here_we_go.jpg';

export const render = html`
    <cwc-learn-page header="Observables">
            <img src="${image}" />
    </cwc-learn-page>
`;

export default render;