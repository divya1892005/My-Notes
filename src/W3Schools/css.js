import React from 'react';
import './App.css';


export default function Css() {
    return(
        <div>
        <div className='topics'>
          <h1>CSS (W3)</h1>
          {/* Projects */}
          
    <div className="row">
        <ol style={{marginLeft: "50px", marginTop: "50px"}}>
    
            {/* <!--CSS Inroduction--> */}
            <li>CSS Introduction <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>What is CSS? <input type="checkbox" className="ins" /></li>
                <li>CSS Demo <input type="checkbox" className="ins" /></li>
                <li>Why Use CSS?<input type="checkbox" className="ins" /></li>
                <li>CSS Solved a Big Problem<input type="checkbox" className="ins" /></li>
                <li>CSS Saves a Lot of Work!<input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--CSS Syntax--> */}
            <li>CSS Syntax<input type="checkbox" className="inp" /></li>
    
            {/* <!--CSS Selectors--> */}
            <li>CSS Selectors <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>CSS Selectors<input type="checkbox" className="ins" /></li>
                <li>CSS element Selector<input type="checkbox" className="ins" /></li>
                <li>CSS id Selector<input type="checkbox" className="ins" /></li>
                <li>CSS class Selector<input type="checkbox" className="ins" /></li>
                <li>CSS Universal Selector<input type="checkbox" className="ins" /></li>
                <li>CSS Grouping Selector<input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--CSS How To--> */}
            <li>CSS How To<input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>Three Ways to Insert CSS<input type="checkbox" className="ins" /></li>
                <li>External CSS<input type="checkbox" className="ins" /></li>
                <li>Internal CSS<input type="checkbox" className="ins" /></li>
                <li>Inline CSS<input type="checkbox" className="ins" /></li>
                <li>Multiple Style Sheets<input type="checkbox" className="ins" /></li>
                <li>Cascading Order<input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--CSS Comments--> */}
            <li>CSS Comments<input type="checkbox" className="inp" /></li>
            
            {/* <!--CSS Colors--> */}
            <li>CSS Colors<input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>Colors<input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                   <li>CSS Color Names<input type="checkbox" className="ing" /></li>
                   <li>CSS Background Color<input type="checkbox" className="ing" /></li>
                   <li>CSS Text Color<input type="checkbox" className="ing" /></li>
                   <li>CSS Border Color<input type="checkbox" className="ing" /></li>
                   <li>CSS Color Values<input type="checkbox" className="ing" /></li>
                </ol>
                <li>RGB<input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                   <li>RGB Value<input type="checkbox" className="ing" /></li>
                   <li>RGBA Value<input type="checkbox" className="ing" /></li>
                </ol>
                <li>HEX<input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                   <li>HEX Value<input type="checkbox" className="ing" /></li>
                   <li>3 Digit HEX Value<input type="checkbox" className="ing" /></li>
                </ol>
                <li>HSL<input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                   <li>HSL Value<input type="checkbox" className="ing" /></li>
                   <li>HSLA Value<input type="checkbox" className="ing" /></li>
                </ol>
            </ol>
    
            {/* <!--CSS Backgrounds--> */}
            <li>CSS Backgrounds <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>CSS Backgrounds Color<input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                   <li>CSS background-color<input type="checkbox" className="ing" /></li>
                   <li>Other Elements<input type="checkbox" className="ing" /></li>
                   <li>Opacity / Transparency<input type="checkbox" className="ing" /></li>
                   <li>Transparency using RGBA<input type="checkbox" className="ing" /></li>
                </ol>
                <li>CSS Background Image<input type="checkbox" className="ins" /></li>
                <li>CSS Background Image Repeat<input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>CSS background-repeat<input type="checkbox" className="ing" /></li>
                    <li>CSS background-repeat: no-repeat<input type="checkbox" className="ing" /></li>
                    <li>CSS background-position<input type="checkbox" className="ing" /></li>
                </ol>
                <li>CSS Background Attachment<input type="checkbox" className="ins" /></li>
                <li>CSS Background Shorthand<input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--CSS Borders--> */}
            <li>CSS Borders <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>CSS Borders<input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                   <li>CSS Border Style<input type="checkbox" className="ing" /></li>
                </ol>
                <li>CSS Border Width<input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                   <li>Specific Side Widths<input type="checkbox" className="ing" /></li>
                </ol>
                <li>CSS Border Color<input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>Specific Side Colors<input type="checkbox" className="ing" /></li>
                </ol>
                <li>CSS Border Sides<input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>CSS Border - Individual Sides<input type="checkbox" className="ing" /></li>
                </ol>
                <li>CSS Border Shorthand Property<input type="checkbox" className="ins" /></li>
                <li>CSS Rounded Borders<input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--CSS Margins--> */}
            <li>CSS Margins <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>CSS Margins<input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                   <li>Margin - Individual Sides<input type="checkbox" className="ing" /></li>
                   <li>Margin - Shorthand Property<input type="checkbox" className="ing" /></li>
                   <li>The auto Value<input type="checkbox" className="ing" /></li>
                   <li>The inherit Value<input type="checkbox" className="ing" /></li>
                </ol>
                <li>CSS Margin Collapse<input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--CSS Padding--> */}
            <li>CSS Padding <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>Padding - Individual Sides<input type="checkbox" className="ins" /></li>
                <li>Padding - Shorthand Property<input type="checkbox" className="ins" /></li>
                <li>Padding and Element Width<input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--CSS Height, Width and Max-width--> */}
            <li>CSS Height, Width and Max-width <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>CSS Setting height and width<input type="checkbox" className="ins" /></li>
                <li>CSS height and width Values<input type="checkbox" className="ins" /></li>
                <li>Setting max-width<input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--CSS Box Model--> */}
            <li>CSS Box Model <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>Width and Height of an Element<input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--CSS Outline--> */}
            <li>CSS Outline <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>CSS Outline Style<input type="checkbox" className="ins" /></li>
                <li>CSS Outline Width<input type="checkbox" className="ins" /></li>
                <li>CSS Outline Color<input type="checkbox" className="ins" /></li>
                <li>CSS Outline Shorthand property<input type="checkbox" className="ins" /></li>
                <li>CSS Outline Offset<input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--CSS Text--> */}
            <li>CSS Text <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>CSS Text<input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>Text Color<input type="checkbox" className="ing" /></li>
                </ol>
                <li>CSS Text Alignment</li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>Text Alignment and Text Direction<input type="checkbox" className="ins" /></li>
                    <li>Text Alignment<input type="checkbox" className="ins" /></li>
                    <li>Text Align Last<input type="checkbox" className="ins" /></li>
                    <li>Text Direction<input type="checkbox" className="ins" /></li>
                    <li>Vertical Alignment<input type="checkbox" className="ins" /></li>
                </ol>  
                <li>CSS Text Decoration</li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>Add a Decoration Line to Text<input type="checkbox" className="ins" /></li>
                    <li>Specify a Color for the Decoration Line<input type="checkbox" className="ins" /></li>
                    <li>Specify a Style for the Decoration Line<input type="checkbox" className="ins" /></li>
                    <li>Specify the Thickness for the Decoration Line<input type="checkbox" className="ins" /></li>
                    <li>The Shorthand Property<input type="checkbox" className="ins" /></li>
                    <li>A Small Tip<input type="checkbox" className="ins" /></li>
                </ol>  
                <li>CSS Text Transformation</li>  
                <li>CSS Text Spacing</li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>Text Indentation<input type="checkbox" className="ins" /></li>
                    <li>Letter Spacing<input type="checkbox" className="ins" /></li>
                    <li>Line Height<input type="checkbox" className="ins" /></li>
                    <li>Word Spacing<input type="checkbox" className="ins" /></li>
                    <li>White Space<input type="checkbox" className="ins" /></li>
                    <li>A Small Tip<input type="checkbox" className="ins" /></li>
                </ol>  
                <li>CSS Text Shadow</li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>CSS Text Shadow Effects<input type="checkbox" className="ins" /></li>
                </ol>  
            </ol>
    
            {/* <!--CSS Fonts--> */}
            <li>CSS Fonts <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>CSS Font Family<input type="checkbox" className="ins" /></li>
                <li>CSS Web Safe Fonts<input type="checkbox" className="ins" /></li>
                <li>CSS Font Fallbacks<input type="checkbox" className="ins" /></li>
                <li>CSS Font Style</li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>Font Weight<input type="checkbox" className="ins" /></li>
                    <li>Font Variant<input type="checkbox" className="ins" /></li>
                </ol>  
                <li>CSS Font Size</li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>Set Font Size With Pixels<input type="checkbox" className="ins" /></li>
                    <li>Set Font Size With Em<input type="checkbox" className="ins" /></li>
                    <li>Use a Combination of Percent and Em<input type="checkbox" className="ins" /></li>
                    <li>Responsive Font Size<input type="checkbox" className="ins" /></li>
                </ol>  
                <li>CSS Google Fonts</li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>How To Use Google Fonts<input type="checkbox" className="ins" /></li>
                    <li>Styling Google Fonts<input type="checkbox" className="ins" /></li>
                    <li>Enabling Google Font Effects<input type="checkbox" className="ins" /></li>
                    <li>Styling Google Fonts<input type="checkbox" className="ins" /></li>
                </ol>  
                <li>CSS Great Font Pairings</li>  
                <li>CSS Font Shorthand Property</li>  
            </ol>
    
            {/* <!--CSS Icons--> */}
            <li>CSS Icons <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>How To Add Icons<input type="checkbox" className="ins" /></li>
                <li>Font Awesome Icons<input type="checkbox" className="ins" /></li>
                <li>Bootstrap Icons<input type="checkbox" className="ins" /></li>
                <li>Google Icons<input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--CSS Links--> */}
            <li>CSS Links <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>Styling Links<input type="checkbox" className="ins" /></li>
                <li>Link Buttons<input type="checkbox" className="ins" /></li>
                <li>cursor Property<input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--Css Lists--> */}
            <li>Css Lists <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>Unordered Lists<input type="checkbox" className="ins" /></li>
                <li>Ordered Lists<input type="checkbox" className="ins" /></li>
                <li>HTML Lists and CSS List Properties<input type="checkbox" className="ins" /></li>
                <li>Different List Item Markers<input type="checkbox" className="ins" /></li>
                <li>An Image as The List Item Marker<input type="checkbox" className="ins" /></li>
                <li>Position The List Item Markers<input type="checkbox" className="ins" /></li>
                <li>Remove Default Settings<input type="checkbox" className="ins" /></li>
                <li>List - Shorthand property<input type="checkbox" className="ins" /></li>
                <li>Styling List With Colors<input type="checkbox" className="ins" /></li>
            </ol>
    
            {/* <!--CSS Tables--> */}
            <li>CSS Tables <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>Table Borders<input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>Full-Width Table<input type="checkbox" className="ins" /></li>
                    <li>Collapse Table Borders<input type="checkbox" className="ins" /></li>
                </ol>
                <li>CSS Table Size<input type="checkbox" className="ins" /></li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>Table Width and Height<input type="checkbox" className="ins" /></li>
                </ol>  
                <li>CSS Table Alignment</li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>Horizontal Alignment<input type="checkbox" className="ins" /></li>
                    <li>Vertical Alignment<input type="checkbox" className="ins" /></li>
                </ol>  
                <li>CSS Table Style</li>
                <ol style={{listStyleType: "lower-alpha", paddingLeft: "40px"}}>
                    <li>Table Padding<input type="checkbox" className="ins" /></li>
                    <li>Horizontal Dividers<input type="checkbox" className="ins" /></li>
                    <li>Hoverable Table<input type="checkbox" className="ins" /></li>
                    <li>Striped Tables<input type="checkbox" className="ins" /></li>
                    <li>Table Color<input type="checkbox" className="ins" /></li>
                </ol>  
                <li>CSS Responsive Table</li>
            </ol>

            {/* <!--CSS Display--> */}
            <li>CSS Display <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>The display Property<input type="checkbox" className="ins" /></li>
                <li>Block-level Elements<input type="checkbox" className="ins" /></li> 
                <li>Inline Elements</li>
                <li>Display: none;</li>  
                <li>Override The Default Display Value</li>
                <li>Hide an Element - display:none or visibility:hidden?</li>
            </ol>

            {/* <!--CSS Max-width--> */}
            <li>CSS Max-width <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>Using width, max-width and margin: auto;<input type="checkbox" className="ins" /></li>
            </ol>

            {/* <!--CSS Position--> */}
            <li>CSS Position <input type="checkbox" className="inp" /></li>
            <ol style={{listStyleType: "upper-alpha", paddingLeft: "40px"}}>
                <li>The position Property<input type="checkbox" className="ins" /></li>
                <li>position: static;<input type="checkbox" className="ins" /></li> 
                <li>position: relative;</li>
                <li>position: fixed;</li>  
                <li>position: absolute;</li>
                <li>position: sticky;</li>
                <li>Positioning Text In an Image</li>
            </ol>

            {/* <!--CSS Z-index--> */}
            <li>CSS Z-index <input type="checkbox" className="inp" /></li>
        </ol>
        </div>
          </div>
          </div>      
    )
}