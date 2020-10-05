import {html} from '../node_modules/lit-html/lit-html.js';

/**
 * Contains reusable styles between components.
 */
export class WorkspaceStyles {

    static get bootstrap() {
        return html`
            <style>
                /* iipax uses bootstrap but overrides some styles, use it here to get iipax-like styles.
                 * (bootstrap shouldn't be used for new projects, ask me why.)
                 */
                @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
                
                .btn-primary {
                    background-color: #3eb1c8;
                }
                
                .btn-primary:hover {
                    opacity: 0.5;
                    background-color: #3eb1c8;
                }
            </style>
        `
    }

    static get elevation() {
        return html`
         <style>
            .elevation {
                box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
            }
        </style>`;
    }

}