import React from 'react'
import "./footerList.css"

function FooterList({head, content}) {
  return (
    <div className="footer_list_wrapper">
        <div className='head'>{head}</div>
        <div className="content_wrapper">
            <ul>
                {content.map( (con,index) => <li key={index} >{con}</li>)}
            </ul>
        </div>
    </div>
  )
}

export default FooterList