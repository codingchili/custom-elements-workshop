import {html, render} from '../node_modules/lit-html/lit-html.js';
import {WorkspaceStyles} from '../component/style.js'

/**
 * This component models a single search hit.
 */
class SearchResult extends HTMLElement {

    static get is() {
        return 'search-result';
    }

    set item(value) {
        this._item = value;
        if (this.shadowRoot) {
            this.render();
        }
    }

    get item() {
        return this._item;
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.render();
    }

    get template() {
        return html`
            ${WorkspaceStyles.bootstrap}
            ${WorkspaceStyles.elevation}
            <style>
                :host {
                    display: block;
                    width: 346px;
                    height: 128px;
                }
                
                .card {
                    border: 1px solid #3eb1c8;
                    border-radius: 2px;
                    color: #000;
                    cursor: pointer;
                    transition: opacity 0.4s ease-out;
                }
                
                .card:hover {
                    opacity: 0.64;
                }
                
                .title {
                    font-size: x-large;
                    display: block;
                    padding: 8px;
                }
                
                .type {
                    text-transform: uppercase;
                    opacity: 0.64;
                    font-weight: 800;
                    padding-left: 8px;
                }
            </style>
            <div class="card elevation">
                <span class="title">${this.item.title}</span>
                <span class="type">${this.item.type}</span>
            </div>
        `;
    }

    render() {
        render(this.template, this.shadowRoot);
    }
}
customElements.define(SearchResult.is, SearchResult);