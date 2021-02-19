import { html } from 'lit-element';

import image from './here_we_go.jpg';
import imageGithub from '../outro/github.png';

export const render = html`
<style>
            
            .link{
                display: flex;
                align-items: center;
                margin: 20px;
            }
            .link img{
                width: 30px;
                margin-right: 20px;
            }

            .link a{
                text-decoration: none;
                color: cornflowerblue;
            }
        </style>
    <cwc-learn-page header="Observables">
            <img src="${image}" />
            <span class="link">
                <img src="${imageGithub}" />   
                <a href="https://github.com/odinr/learn-code-observable">https://github.com/odinr/learn-code-observable</a>
            </span>
    </cwc-learn-page>
`;

export default render;