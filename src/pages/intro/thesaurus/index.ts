import { html } from "lit-html";

import image from './pubsub.png';

export const render = html`   
<cwc-learn-page header="Thesaurus">
  <img src="${image}" />
  <h3>Publisher (producer / sink)</h3>
  <p>When a action is trigged, an event (topic / fact) is produced and published to the stream. this artifact is immutable, simply because it happend</p>
  <h3>Stream</h3>
  <p>The fabric between the publisher and subscriber contains a flow of artifacts. Streams can be piped or merged into new streams but never altered.</p>
  <h3>Subscriber (consumer / drain)</h3>
  <p>Subscribers consumes a stream. Reducing a stream into a state will remain in flux since it will change depending of the window of time on observation.</p>
</cwc-learn-page>
`;

export default render;