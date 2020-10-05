import {html, render} from '../node_modules/lit-html/lit-html.js';
import {WorkspaceStyles} from '../component/style.js'

/**
 * Shows some information about a single item.
 */
class ItemDialog extends HTMLElement {

    static get is() {
        return 'item-dialog';
    }

    constructor() {
        super();
        this.item = {};
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.render();
    }

    set item(value) {
        if (value) {
            this._item = value;
            if (this.shadowRoot) {
                this.render();
                this.style.display = 'block';
            }
        }
    }

    get item() {
        return this._item;
    }

    get template() {
        return html`
            ${WorkspaceStyles.bootstrap}
            ${WorkspaceStyles.elevation}
            
            <style>
                :host {
                    display: none;
                }
            
                #overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #323232;
                    opacity: 0.5;
                    z-index: 100;
                }            
                
                #dialog {
                    z-index: 200;
                    width: 100%;
                    max-width: 375px;
                    height: fit-content;
                    margin: auto;
                    position: relative;
                    top: 50%;
                    transform: translateY(-50%);
                }
                
                .header {
                    display: block;
                    font-size: xx-large;
                }
                
                .body {
                    display: block;
                }
                
                .btn {
                    color: #fff;
                    width: 100%;
                }
                .btn:hover {
                    color: #fff;
                }
                
                #content {
                    padding: 24px;
                }
            </style>
            
            <div id="overlay"></div>
            <div id="dialog" class="elevation">
                <div id="content">
                    <span class="header">${this.item.title}</span>
                    <span class="body">${this.item.description}</span>
                </div>
                <button class="btn btn-large">Close</button>
            </div>
        `;
    }

    render() {
        render(this.template, this.shadowRoot);
    }
}
customElements.define(ItemDialog.is, ItemDialog);