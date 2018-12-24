import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="why" className={`${this.props.article === 'why' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Why a standard is needed</h2>
          <em>The current issues blocking usability of disclosed data:</em>
          <ul>
            <li>Supplier lists published on brand websites are listed in different, incompatible and non machine-readable formats</li>
            <li>When a brand updates the supplier list on its website, data previously gathered can quickly become obsolete</li>
            <li>Supplier lists are often hard to find on brand or retailer websites and are disclosed without explicit permission for reuse</li>
            <li>Comparing and analyzing across these data sets without a unique identifier number/ unique factory id for each factory is difficult and time consuming</li>
           </ul>
          {close}
        </article>

        <article id="how" className={`${this.props.article === 'how' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">How to disclose using the Open Data Standard for the Apparel Sector</h2>
          <p>When publishing factory lists, brands and retailers should:</p>
          <ul>
            <li><strong>Publish a downloadable, machine-readable</strong> file at a regular common frequency in one or more of the following formats: <b>csv, json, xlsx</b></li>
            <li>Publish their supplier list using a common disclosure template (see "Tools &amp; Resources)</li>
            <li>Use the <a href="https://opendatacommons.org/licenses/odbl/" target="_blank" rel="noopener noreferrer">Open Data Commons database license</a>, to explicitly give permission for reuse, by copying and pasting it on the supplier list page</li>
          </ul>
          <p>Note that the datapoints in the template are fully compliant and aligned with the <a href="https://transparancypledge.org" target="_blank" rel="noopener noreferrer">Transparency Pledge</a> initiative</p>
          <p>The ODSAS is a <strong>minimum standard</strong>; it leaves room for brands to publish more information, as many already do.</p>
          {close}
        </article>

        <article id="benefits" className={`${this.props.article === 'benefits' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">The benefits of an Open Data Standard for the Apparel Sector</h2>
          <p>An open data standard will:</p>
          <ul>
            <li>Provide a level playing field: various stakeholders like academia, civil society, MSIs and consumer organizations can more easily use this data to provide accurate and up-to-date analyses, and allow brands to fulfill their due diligence obligations in a responsible, comparable way</li>
            <li>Make data usable and current: with the ability to scrape from machine readable data, open source databases can update when a brand publishes an up-to-date list </li>
            <li>Create one common resource: organizations can collate supplier lists and make them accessible to users in easy-to use tools and maps </li>
            <li>Save time: companies won't spend time or money publishing information which might not be used and organizations analyzing data won’t spend time collating or trying to sync data</li>
            <li>Make it easy to find factories and associations which contribute data to promote sustainable and transparent fashion</li>
            </ul>
          {close}
        </article>

        <article id="tools" className={`${this.props.article === 'tools' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Tools &amp; Resources to help in disclosure</h2>
          <i>Note: this list is not exhaustive</i>
          <ul>
            <li><a href="https://transparencypledge.org" target="_blank" rel="noopener noreferrer">Transparency Pledge</a>: (initiative) The objective of the Transparency Pledge is to help the garment industry reach a common minimum standard for supply chain disclosures by getting companies to publish standardized, meaningful information on all factories in the manufacturing phase of their supply chains. The civil society coalition that developed the Pledge based it on published factory lists of leading apparel companies and developed a set of minimum supply chain disclosure standards. These build on good practices in the industry.</li>
            <li><a href={withPrefix('/odsas-template.xlsx')}><b>Example template</b></a> in xlsx format that can be used to provide supplier data. Note that brands are of course free to add more datapoints, and can also provide the informatin in JSON and/or CSV formats.</li>
            <li><a href="https://openapparel.org/" target="_blank" rel="noopener noreferrer">Open Apparel Registry</a>: (tool) Upload supplier list to the Open Apparel Registry to assign each factory a standard factory identification number (2018)</li>
            <li><a href="https://wikirate.org/" target="_blank" rel="noopener noreferrer">Wikirate</a>: (tool) An open, collaborative tool for asking and answering important questions about corporate impacts.</li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main