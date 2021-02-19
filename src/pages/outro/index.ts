import { html } from 'lit-element';

import image from './end.jpg';
import imageUrl from './url.png';
import imageGithub from './github.png';

export const render = html`
    <cwc-learn-page>
        <style>
            
            .links span{
                display: flex;
                align-items: center;
                margin: 20px;
            }
            .links img{
                width: 30px;
                margin-right: 20px;
            }

            .links a{
                text-decoration: none;
                color: cornflowerblue;
            }
        </style>
        <div slot="header">
            <img src="${image}" />
        </div>
        <div class="links">
            <span>
                <img src="${imageUrl}" />   
                <a href="https://odinr.github.io/learn-code-async/">https://odinr.github.io/learn-code-observable/</a>
            </span>
            <span>
                <img src="${imageGithub}" />   
                <a href="https://github.com/odinr/learn-code-async">https://github.com/odinr/learn-code-observable</a>
            </span>
        </div>
    </cwc-learn-page>
`;

export default render;