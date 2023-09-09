import React from 'react';
import './App.css';


export default function Html() {
    return(
        <div>
        <div className='topics'>
          <h1>HTML (W3)</h1>
          {/* Projects */}
          
    <div className="row">
        <ol style={{marginLeft: "50px", marginTop: "50px"}}>
    
            {/* <!--HTML Inroduction--> */}
            <li>HTML Introduction <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>What is HTML? <input type="checkbox" className="ins" /></li>
                <li>A Simple HTML Document <input type="checkbox" className="ins" /></li>
                <li>What is an HTML Element? <input type="checkbox" className="ins" /></li>
                <li>HTML Page Structure <input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--HTML Editors--> */}
            <li>HTML Editors <input type="checkbox" className="inp" /></li>
    
            {/* <!--HTML Basics--> */}
            <li>HTML Basics <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>HTML Document <input type="checkbox" className="ins" /></li>
                <li>The !DOCTYPE Declaration <input type="checkbox" className="ins" /></li>
                <li>HTML Headings <input type="checkbox" className="ins" /></li>
                <li>HTML Paragraphs <input type="checkbox" className="ins" /></li>
                <li>HTML Links <input type="checkbox" className="ins" /></li>
                <li>HTML Images <input type="checkbox" className="ins" /></li>
                <li>View HTML Source Code <input type="checkbox" className="ins" /></li>
                <li>Inspect HTML Element <input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--HTML Elements--> */}
            <li>HTML Elements <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>Nested HTML Elements <input type="checkbox" className="ins" /></li>
                <li>Empty Elements <input type="checkbox" className="ins" /></li>
                <li>HTML is not case sensitive <input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--HTML Attributes--> */}
            <li>HTML Attributes <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>The <b>href</b> Attribute <input type="checkbox" className="ins" /></li>
                <li>The <b>src</b> Attribute <input type="checkbox" className="ins" /></li>
                <li>The <b>width</b> and <b>height</b> Attribute <input type="checkbox" className="ins" /></li>
                <li>The <b>alt</b> Attribute <input type="checkbox" className="ins" /></li>
                <li>The <b>style</b> Attribute <input type="checkbox" className="ins" /></li>
                <li>The <b>lang</b> Attribute <input type="checkbox" className="ins" /></li>
                <li>The <b>title</b> Attribute <input type="checkbox" className="ins" /></li>
            </ol>
            
            {/* <!--HTML Headings--> */}
            <li>HTML Headings <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>h1 to h6 tags <input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--HTML Paragraphs--> */}
            <li>HTML Paragraphs <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>HTML Horizontal Rules <input type="checkbox" className="ins" /></li>
                <li>HTML Line Breaks <input type="checkbox" className="ins" /></li>
                <li>The Poem Problem <input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--HTML styles--> */}
            <li>HTML Styles <input type="checkbox" className="inp" /></li>
    
            {/* <!--HTML Formatting--> */}
            <li>HTML Formatting <input type="checkbox" className="inp" /></li>
    
            {/* <!--HTML Quotations and Citations--> */}
            <li>HTML Quotations and Citations <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>Quotations <input type="checkbox" className="ins" /></li>
                <li>Short Quotations <input type="checkbox" className="ins" /></li>
                <li>Abbreviations <input type="checkbox" className="ins" /></li>
                <li>Contact Information <input type="checkbox" className="ins" /></li>
                <li>Work Title <input type="checkbox" className="ins" /></li>
                <li>Bi-Directional Override <input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--HTML Comments--> */}
            <li>HTML Comments <input type="checkbox" className="inp" /></li>
    
            {/* <!--HTML Colors--> */}
            <li>HTML Colors <input type="checkbox" className="inp" /></li>
    
             {/* <!--HTML CSS--> */}
            <li>HTML CSS <input type="checkbox" className="inp" /></li>
    
            {/* <!--HTML Links--> */}
            <li>HTML Links <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>Links <input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>The <b>target</b> Attribute <input type="checkbox" className="ing" /></li>
                    <li>Absolute URLs vs. Relative URLs <input type="checkbox" className="ing" /></li>
                    <li>Image as a Link <input type="checkbox" className="ing" /></li>
                    <li>Link to an Email Address <input type="checkbox" className="ing" /></li>
                    <li>Button as a Link <input type="checkbox" className="ing" /></li>
                    <li>Link Titles <input type="checkbox" className="ing" /></li>
                </ol>
                <li>Link Colors</li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>Link Button <input type="checkbox" className="ins" /></li>
                </ol>  
                <li>Link Bookmarks</li>
            </ol>
    
            {/* <!--HTML Images--> */}
            <li>HTML Images <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>Images <input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                   <li>Animated (gif) Images <input type="checkbox" className="ing" /></li>
                   <li>Image as a Link <input type="checkbox" className="ing" /></li>
                </ol>
                <li>Image Maps <input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>Background Images <input type="checkbox" className="ing" /></li>
                </ol>
                <li>The Picture Element <input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--HTML Favicons--> */}
            <li>HTML Favicons <input type="checkbox" className="inp" /></li>
    
            {/* <!--HTML Page Title--> */}
            <li>HTML Page Title <input type="checkbox" className="inp" /></li>
    
            {/* <!--HTML Tables--> */}
            <li>HTML Tables <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>HTML Tables <input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>Define an HTML Table <input type="checkbox" className="ing" /></li>
                    <li>Table Cells <input type="checkbox" className="ing" /></li>
                    <li>Table Rows <input type="checkbox" className="ing" /></li>
                    <li>Table Headers <input type="checkbox" className="ing" /></li>
                </ol>
                <li>Table Borders <input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>How To Add a Border <input type="checkbox" className="ing" /></li>
                    <li>Collapsed Table Borders <input type="checkbox" className="ing" /></li>
                    <li>Style Table Borders <input type="checkbox" className="ing" /></li>
                    <li>Round Table Borders <input type="checkbox" className="ing" /></li>
                    <li>Dotted Table Borders <input type="checkbox" className="ing" /></li>
                    <li>Border Color <input type="checkbox" className="ing" /></li>
                </ol>
                <li>Table Sizes <input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>HTML Table Sizes <input type="checkbox" className="ing" /></li>
                    <li>HTML Table Width <input type="checkbox" className="ing" /></li>
                    <li>HTML Table Column Width <input type="checkbox" className="ing" /></li>
                    <li>HTML Table Row Height <input type="checkbox" className="ing" /></li>
                </ol>
                <li>Table Headers <input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>HTML Table Headers <input type="checkbox" className="ing" /></li>
                    <li>Align Table Headers <input type="checkbox" className="ing" /></li>
                    <li>Vertical Table Headers <input type="checkbox" className="ing" /></li>
                    <li>Table Caption <input type="checkbox" className="ing" /></li>
                    <li>Header for Multiple Columns <input type="checkbox" className="ing" /></li>
                </ol>
                <li>Padding & Spacing <input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>HTML Table Padding & Spacing <input type="checkbox" className="ing" /></li>
                    <li>HTML Table - Cell Padding <input type="checkbox" className="ing" /></li>
                    <li>HTML Table - Cell Spacing <input type="checkbox" className="ing" /></li>
                </ol>
                <li>Colspan & Rowspan <input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>HTML Table - Colspan <input type="checkbox" className="ing" /></li>
                    <li>HTML Table - Rowspan <input type="checkbox" className="ing" /></li>
                </ol>
                <li>Table Styling <input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>HTML Table Styling <input type="checkbox" className="ing" /></li>
                    <li>HTML Table - Zebra Stripes <input type="checkbox" className="ing" /></li>
                    <li>HTML Table - Vertical Zebra Stripes <input type="checkbox" className="ing" /></li>
                    <li>Combine Vertical and Horizontal Zebra Stripes <input type="checkbox" className="ing" /></li>
                    <li>Horizontal Dividers <input type="checkbox" className="ing" /></li>
                    <li>Hoverable Table <input type="checkbox" className="ing" /></li>
                </ol>
                <li>Table Colgroup <input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>HTML Table Colgroup <input type="checkbox" className="ing" /></li>
                    <li>Legal CSS Properties <input type="checkbox" className="ing" /></li>
                    <li>Multiple Col Elements <input type="checkbox" className="ing" /></li>
                    <li>Empty Colgroups <input type="checkbox" className="ing" /></li>
                    <li>Hide Columns <input type="checkbox" className="ing" /></li>
                </ol>
            </ol>
    
            {/* <!--HTML Lists--> */}
            <li>HTML Lists <input type="checkbox" className="inp" /></li>
            <ol>
                <li>Unordered HTML List <input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>Unordered HTML List - Choose List Item Marker <input type="checkbox" className="ing" /></li>
                </ol>
                <li>Ordered HTML List <input type="checkbox" className="ins" /></li>
                <li>HTML Description Lists</li>
            </ol>
        </ol>
        </div>
          </div>
          </div>      
    )
}