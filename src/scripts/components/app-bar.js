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
          text-align: center;
          border-radius: 50px;
          background: linear-gradient(145deg, #f0f0f0, #cacaca);
          box-shadow:  20px 20px 60px #bebebe,
                      -20px -20px 60px #ffffff;
        }
        h2 {
          padding: 1.5em;
        }
      </style>

      <h2>Joke Generator</h2>
    `;
  }
}

customElements.define('app-bar', AppBar);
