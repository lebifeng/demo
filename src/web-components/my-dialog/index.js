import { myDialogStyle } from './style';

class MyDialog extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = myDialogStyle;
    shadowRoot.appendChild(style);
    const { content } = document.getElementById('my-dialog-template');
    shadowRoot.appendChild(content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['visible'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(this.attributes);
    if (name === 'visible') {
      this.shadowRoot.querySelector('.my-dialog').style.display =
        newValue === 'true' ? 'block' : 'none';
    }

    if (name === 'onOk') {
      this.shadowRoot.querySelector('.ok').onclick = () => {
        this.dispatchEvent(new CustomEvent('ok'));
      };
    }
  }
}

customElements.define('my-dialog', MyDialog);
