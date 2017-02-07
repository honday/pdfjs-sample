import React from 'react';
import PdfView from './PdfView.jsx';
import PdfToolbar from './PdfToolbar.jsx';

export default class PdfViewer extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            src: null,
            page: 1,
            scale: 1.0,
            pageIndex: 1,
            lastPageIndex: null
        };

        this.loadFile();
        this.render = this.render.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.pageIndexChange = this.pageIndexChange.bind(this);
        this.setPage = this.setPage.bind(this);
        this.setPageIndex = this.setPageIndex.bind(this);
        this.blurPageForm = this.blurPageForm.bind(this);
        this.expansionPage = this.expansionPage.bind(this);
        this.shrinkPage = this.shrinkPage.bind(this);
    }

    render () {
        return (
            <div id="pdf-viewer">
                <PdfToolbar
                    clickExpansionCallback={this.expansionPage}
                    clickShrinkingCallback={this.shrinkPage}
                    prevPageCallback={this.prevPage}
                    nextPageCallback={this.nextPage}
                    changePageIndexCallback={this.pageIndexChange}
                    blurPageFormCallback={this.blurPageForm}
                    lastPageIndex={(() => {
                        return this.state.lastPageIndex ? this.state.lastPageIndex : 1;
                    })()}
                    pageIndex={(() => {
//                       return this.state.pageIndex ? this.state.page : 1;
                         return this.state.pageIndex;
                    })()}/>
                <div id="pdf-content">
                    {(() => {
                        if (this.state.src) {
                            return <PdfView {...this.state} />;
                        }
                    })()}
                </div>
            </div>
        );
    }

    loadFile () {
        PDFJS.getDocument(this.props.url)
            .then((pdf) => {
                this.setState({
                    src: pdf,
                    lastPageIndex: pdf.pdfInfo.numPages
                });
            });
    }
    expansionPage (evt) {
        this.setState({scale: this.state.scale + 0.1});
    }
    shrinkPage (evt) {
        let scale = this.state.scale - 0.1;

        scale = scale <= 0 ? 0.1 : scale;
        this.setState({scale: scale});
    }
    prevPage () {
        let index = this.state.page-1;
        index = this.setPage(index);
        this.setPageIndex(index);
    }
    nextPage () {
        let index = this.state.page+1;
        index = this.setPage(index);
        this.setPageIndex(index);
    }
    pageIndexChange (evt) {
        this.setPageIndex(parseInt(evt.target.value));
    }
    blurPageForm (evt) {
        let index = parseInt(evt.target.value);
        index = this.setPage(index);
        this.setPageIndex(index);
    }
    setPage (page) {
        if (!page || page <= 0) page = 1;
        if (page > this.state.lastPageIndex) page = this.state.lastPageIndex;

        this.setState({page: page});

        return page;
    }
    setPageIndex(index) {
        this.setState({pageIndex: index});
    }
}

PdfViewer.propTypes = {
    url: React.PropTypes.string.isRequired
};

PdfViewer.defaultProps = {
};
