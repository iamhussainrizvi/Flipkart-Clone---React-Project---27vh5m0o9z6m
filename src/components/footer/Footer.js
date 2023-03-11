import React from 'react'
import "./footer.css"
import FooterList from './FooterList'

const aboutUs = ["Contact us", "About us", "Careers", "Flipkart Stories", "Press", "Flipkart", "Wholesale", "Corporate", "Information" ]
const help = ["Payments","Shipping","Cancellations &", "Returns","FAQ", "Report","Infringment"];
const policy = ["Return Policy", "Terms Of Use", "Security", "Privacy", "Sitemap", "EPR Compliance"];
const social =["Facebook", "Twitter", "Youtube"];

function Footer() {
  return (
    <div className='footer_container'>
        <div className="footer_top">
            <FooterList head="About" content={aboutUs} />
            <FooterList head="HELP" content={help} />
            <FooterList head="POLICY" content={policy} />
            <FooterList head="SOCIAL" content={social} />
            <div className ="footer_address">
                <div className="heading">Mail uS</div>
                <div className='address'>
                    <p>Flipkart Internet Private Limited,Buildings Alyssa, Begonia & Clove Embassy Tech Village,
                            Outer Ring Road, Devarabeesanahalli Village,
                            Bengaluru, 560103,
                            Karnataka, India.
                    </p>
                </div>
                    
            </div>
            <div className ="footer_address">
                <div className="heading">Registered Office Address:</div>
                <div className='address'>
                    <p>Flipkart Internet Private Limited,
                            Buildings Alyssa, Begonia &
                            Clove Embassy Tech Village,
                            Outer Ring Road, Devarabeesanahalli Village,
                            Bengaluru, 560103,
                            Karnataka, India
                            CIN : U51109KA2012PTC066107
                            Telephone: 044-45614700
                    </p>
                </div>  
            </div>
        </div> 
        <div className="footer_bottom">
            
        </div>

    </div>
  )
}

export default Footer   