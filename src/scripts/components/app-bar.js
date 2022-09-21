class AppBar extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          background-color: transparent;
          color: black;
        }
        h4 {
          padding: 1.5em;
        }
      </style>

      <h4>Joke Generator</h4>
    `;
  }
}

customElements.define('app-bar', AppBar);
