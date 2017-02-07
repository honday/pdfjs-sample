import promise from 'promise-polyfill';
import fetch from 'fetch-polyfill';
//import * as PDFJS from 'pdfjs-dist';


import React from 'react';
import ReactDOM from 'react-dom';
import PdfViewer from './pdf/PdfViewer.jsx';

(() => {
    'use strict';

    window.addEventListener('DOMContentLoaded', () => {
        PDFJS.workerSrc = '/lib/pdfjs/pdf.worker.js';
        PDFJS.cMapUrl = '/lib/pdfjs/cmaps/';
        PDFJS.cMapPacked = true;

        ReactDOM.render(
            <PdfViewer url='/temp/typescript.pdf' />,
            document.getElementById('app')
        );
    });
})();

/*
(() => {
    'use strict';

    window.addEventListener('DOMContentLoaded', () => {
        PDFJS.workerSrc = '/lib/pdfjs/pdf.worker.js';
        PDFJS.cMapUrl = '/lib/pdfjs/cmaps/';
        PDFJS.cMapPacked = true;

        let page = 1;
        let obj = new Test();
//        render(page);
        obj.render(page);

        document.getElementById('prev-page').addEventListener('click', () => {
            page--;
            if (page === 0) page = 1;
//            render(page);
            obj.render(page);
        });
        document.getElementById('next-page').addEventListener('click', () => {
            page++;
//            render(page);
            obj.render(page);
        });
    });

    function render(p = 1) {
        let view = document.getElementById('pdf-view');
        if (view) {
            view.parentNode.removeChild(view);
        }

        PDFJS.getDocument('/temp/typescript.pdf')
            .then((pdf) => {
                return pdf.getPage(p);
            })
            .then((page) => {
                let container = document.getElementById('pdf-content');

                let canvas = document.createElement('canvas');
                canvas.id = 'pdf-view';

                let scale = 1.0;
                let viewport = page.getViewport(scale);

                let context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                page.render({
                    canvasContext: context,
                    viewport: viewport
                });
                container.appendChild(canvas);
            });
    }

})();

class Test {
    constructor () {
        this.currentPage = 1;
    }

    render (index) {
        let view = document.getElementById('pdf-view');
        if (view) {
            view.parentNode.removeChild(view);
        }

        this.currentPage = index <= 0 ? 1: index;
        if (this._pdf === undefined) {
            PDFJS.getDocument('/temp/typescript.pdf')
                .then((pdf) => {
                    this._pdf = pdf;
                    return pdf.getPage(index);
                })
                .then(this.renderProcess);
        } else {
            this._pdf.getPage(index)
                .then(this.renderProcess);
        }
    }

    renderProcess (page) {
        let container = document.getElementById('pdf-content');

        let canvas = document.createElement('canvas');
        canvas.id = 'pdf-view';

        let scale = 1.0;
        let viewport = page.getViewport(scale);

        let context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        page.render({
            canvasContext: context,
            viewport: viewport
        });
        container.appendChild(canvas);
    }
}
*/
/*
(() => {
    PDFJS.workerSrc = '/lib/pdfjs/pdf.worker.js';
    PDFJS.cMapUrl = '/lib/pdfjs/cmaps/';
    PDFJS.cMapPacked = true;

    window.addEventListener('DOMContentLoaded', () => {
        let viewer = new PDFViewer('pdf-content');

        viewer.url = '/temp/typescript.pdf';
        viewer.scale = 1.0;
        viewer.page = 1;
        viewer.render('app', false);
    });
})();

export default class PDFViewer {
    constructor (id) {
        this._id = id;
        this._canvas = document.createElement('canvas');
        this._canvas.id = this.id;
        this.isUpdate = false;

        this.scale = 1.0;
        this.page = 1;
        this.url = '';
    }

    get id () {
        return this._id;
    }

    get scale () {
        return this._scale;
    }
    set scale (s = 1.0) {
        this._scale = s;
        if (this._isUpdate) {
            render();
        }
    }

    get page () {
        return this._page;
    }
    set page (p = 1) {
        this._page = p;
        if (this._isUpdate) {
            render();
        }
    }

    get url () {
        return this._url;
    }
    set url(u = '') {
        this._url = u;
        if (this._isUpdate) {
            render();
        }
    }

    get isUpdate () {
        return this._isUpdate;
    }
    set isUpdate (update = false) {
        this._isUpdate = update;
    }

    render (id, update = false) {

        let target = document.getElementById(id);
        if (!target) {
            return;
        }
        this._isUpdate = update;

        if (this.url) {
            PDFJS.getDocument(this.url)
                .then((pdf) => {
                    console.log(pdf);
                    return pdf.getPage(this.page);
                })
                .then((page) => {
                    console.log(page);

                    let viewport = page.getViewport(this.scale);

                    this._canvas.height = viewport.height;
                    this._canvas.width = viewport.width;

                    page.render({
                        canvasContext: this._canvas.getContext('2d'),
                        viewport: viewport
                    });
                    target.appendChild(this._canvas);
                })
        }

    }
}
*/
