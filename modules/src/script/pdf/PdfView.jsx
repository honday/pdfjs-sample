import React from 'react';

export default class PdfView extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            element: document.createElement('canvas'),
            currentPage: this.props.page,
            currentScale: this.props.scale,
        };

        this.loadPages();

        this.render = this.render.bind(this);
        this.loadPages = this.loadPages.bind(this);
    }

    render () {
        if (this.props.page !== this.state.currentPage || this.props.scale !== this.state.currentScale) {
            this.loadPages();
        }
        return (
            <div ref="textlayer" className="textLayer">
                <canvas id="pdf-view" ref="canvas"></canvas>
            </div>
        );
    }

    loadPages () {
        this.props.src.getPage(this.props.page)
            .then((page) => {

                let viewport = page.getViewport(this.props.scale);

                let { canvas } = this.refs;
                let context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                page.render({
                    canvasContext: context,
                    viewport: viewport
                })
                .then((textContent) => {
                    let { textlayer } = this.refs;
                });
                ;

                this.setState({
                    currentPage: this.props.page,
                    currentScale: this.props.scale
                });

                return page.getTextContent();
            });
    }
}

PdfView.propTypes = {
    src: React.PropTypes.any.isRequired,
    page: React.PropTypes.number.isRequired,
    scale: React.PropTypes.number.isRequired
};

PdfView.defaultProps = {
    src: '',
    page: 1,
    scale: 1
};
