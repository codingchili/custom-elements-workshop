import {html, render} from '../node_modules/lit-html/lit-html.js';
import {WorkspaceStyles} from '../component/style.js'

import '../component/search-result.js'
import '../component/item-dialog.js'

/**
 * This is the search workspace.
 */
class SearchWorkspace extends HTMLElement {

    static get is() {
        return 'search-workspace';
    }

    connectedCallback() {
        this.results = [];
        this.attachShadow({mode: 'open'});
        this.render();
    }

    get template() {
        return html`
            ${WorkspaceStyles.bootstrap}
            <style>
                :host {
                    width: 80%;
                    margin: auto;
                    display: block;
                }
            
                #search-form {
                    display: flex;
                    flex-direction: row;
                    margin-top: 32px;
                }
                
                #results {
                    margin-top: 32px;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-around;
                }
            </style>
            
            <div>
                <h2>The Search Workspace</h2>
                <div id="search-form">
                    <input type="text" class="form-control" id="query" autofocus>
                    <button class="btn btn-large btn-primary">Search</button>
                </div>
                
                <div id="results">
                    ${this.results.map(result => html`
                        <search-result @click="${this.info.bind(this, result)}" .item="${result}"></search-result>
                    `)}
                </div>
            </div>
            
            <item-dialog .item="${this.selected}"></item-dialog>
        `;
    }

    info(result) {
        this.selected = result;
        this.render();
    }

    render() {
        render(this.template, this.shadowRoot);
    }
}
customElements.define(SearchWorkspace.is, SearchWorkspace);