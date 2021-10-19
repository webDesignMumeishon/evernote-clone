import React from 'react'
import { CardInfo, FooterBody } from '../styled-components/Footer'

export const Footer = () => {
    return (
       <FooterBody className="black">
           <CardInfo>
               <h4>Linkedin</h4>
               <a href="https://www.linkedin.com/in/tomas-ignacio-macchi/">Link</a> 
           </CardInfo>

           <CardInfo className="footer-info">
               <h4>GitHub</h4>
               <a href="https://github.com/webDesignMumeishon">Link</a> 

           </CardInfo>

           <CardInfo className="footer-info">
               <h4>Portfolio</h4>
               <a href="https://tomas-macchi-portfolio.netlify.app/">Link</a> 
           </CardInfo>
       </FooterBody>
    )
}
