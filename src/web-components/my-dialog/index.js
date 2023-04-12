import { myDialogStyle } from './style';

class MyDialog extends HTMLElement {
  #title;

  #dialogMain;

  #btnGroup;

  static get observedAttributes() {
    return ['visible', 'title'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    const div = document.createElement('div');
    style.textContent = myDialogStyle;
    div.classList.add('my-dialog');
    div.innerHTML = `
      <header class="title"></header>
      <main class="content">
        <div><slot></slot></div>
      </main>
      <footer class="footer">
        <button class="footer-btn ok">OK</button>
        <button class="footer-btn cancel">Cancel</button>
      </footer>
    `;
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(div);
    this.#dialogMain = shadowRoot.querySelector('.my-dialog');
    this.#btnGroup = shadowRoot.querySelector('.footer');
    this.#title = shadowRoot.querySelector('.title');
    this.bindEvent();
  }

  bindEvent() {
    this.#btnGroup.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        if (event.target.classList.contains('cancel')) {
          this.dispatchEvent(new CustomEvent('onCancel'));
          return;
        }

        if (event.target.classList.contains('ok')) {
          this.dispatchEvent(new CustomEvent('onOk'));
        }
      }
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'visible') {
      this.#dialogMain.style.display = newValue === 'true' ? 'block' : 'none';
    }

    if (name === 'title') {
      this.#title.textContent = newValue;
    }
  }
}

customElements.define('my-dialog', MyDialog);
