import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-database"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>ODSAS</h1>
                <h2>Open Data Standard for the Apparel Sector</h2>
                <p>Making Supplier Disclosure data transparent, accessible and usable</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('why')}}>Why</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('how')}}>How</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('benefits')}}>Benefits</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('tools')}}>Tools &amp; Resources</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
