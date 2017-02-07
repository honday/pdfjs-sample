import React from 'react';

export default class PdfToolbar extends React.Component {
    constructor(props) {
        super(props);

        this.render = this.render.bind(this);
        this.onclickPrevPage = this.onclickPrevPage.bind(this);
        this.onclickNextPage = this.onclickNextPage.bind(this);
        this.onPageIndexChange = this.onPageIndexChange.bind(this);
        this.onBlurPageForm = this.onBlurPageForm.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
        this.onclickExpansion = this.onclickExpansion.bind(this);
        this.onclickShrinking = this.onclickShrinking.bind(this);
    }

    render () {
        let cls = ["icon", "fa", "fa-fw", "fa-2x"];
        return (
            <div id="pdf-toolbar">
                <i id="save-pdf" className={[...cls, "fa-floppy-o"].join(' ')} aria-hidden="true" onClick={this.onclickNextPage}></i>
                <i id="print-pdf" className={[...cls, "fa-print"].join(' ')} aria-hidden="true" onClick={this.onclickNextPage}></i>
                <i id="pdf-expansion" className={[...cls, "fa-plus"].join(' ')} aria-hidden="true" onClick={this.onclickExpansion}></i>
                <i id="pdf-shrinking" className={[...cls, "fa-minus"].join(' ')} aria-hidden="true" onClick={this.onclickShrinking}></i>
                <div className="pagenation">
                    <input className="pagenation__form" type="text"
                        value={this.props.pageIndex ? this.props.pageIndex : ''}
                        onChange={this.onPageIndexChange}
                        onBlur={this.onBlurPageForm}
                        onKeyUp={this.onKeyup}></input>
                    <span className="pagenation__label">/ {this.props.lastPageIndex}</span>
                </div>
                <i id="prev-page" className={[...cls, "fa-arrow-left"].join(' ')} aria-hidden="true" onClick={this.onclickPrevPage}></i>
                <i id="next-page" className={[...cls, "fa-arrow-right"].join(' ')} aria-hidden="true" onClick={this.onclickNextPage}></i>
            </div>
        );
    }

    onclickPrevPage (evt) {
        if (this.props.prevPageCallback) {
            this.props.prevPageCallback(evt);
        }
    }

    onclickNextPage (evt) {
        if (this.props.nextPageCallback) {
            this.props.nextPageCallback(evt);
        }
    }

    onclickExpansion (evt) {
        if (this.props.clickExpansionCallback) {
            this.props.clickExpansionCallback(evt);
        }
    }

    onclickShrinking (evt) {
        if (this.props.clickShrinkingCallback) {
            this.props.clickShrinkingCallback(evt);
        }
    }

    onPageIndexChange (evt) {
        if (this.props.changePageIndexCallback) {
            this.props.changePageIndexCallback(evt);
        }
    }

    onBlurPageForm (evt) {
        if (this.props.blurPageFormCallback) {
            this.props.blurPageFormCallback(evt);
        }
    }

    onKeyup (evt) {
        if (evt.keyCode === 13) {
            if (this.props.blurPageFormCallback) {
                this.props.blurPageFormCallback(evt);
            }
        }
    }

}

PdfToolbar.propTypes = {
    pageIndex: React.PropTypes.number.isRequired,
    lastPageIndex: React.PropTypes.number.isRequired,
    clickExpansionCallback: React.PropTypes.any.isRequired,
    clickShrinkingCallback: React.PropTypes.any.isRequired,
    prevPageCallback: React.PropTypes.any.isRequired,
    nextPageCallback: React.PropTypes.any.isRequired,
    changePageIndexCallback: React.PropTypes.any.isRequired,
    blurPageFormCallback: React.PropTypes.any
};

PdfToolbar.defaultProps = {
    pageIndex: '',
    lastPageIndex: 1,
    clickExpansionCallback: null,
    clickShrinkingCallback: null,
    prevPageCallback: null,
    nextPageCallback: null,
    changePageIndexCallback: null,
    blurPageFormCallback: null,
};
