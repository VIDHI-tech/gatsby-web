/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Navbar from "./Navbar"
// import "./layout.css"

export const FooterContainer = styled.div`
  background-color: #229851;
  margin-top: -2rem;
`

export const FooterContent = styled.div`
  align-items: center;
  padding: 3rem;
  justify-content: center;
`

export const FooterHead = styled.div`
  margin: 0rem auto 3rem 37rem;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const Footerpara = styled.div`
  margin-left: 17rem;
`;

export const FooterImages= styled.div`
 margin-left: 37rem;
 gap: 1rem
`;

export const FooterAnchor = styled.div`
 margin-left: 10rem;
 padding: 0px;
 display: flex;
  justify-content: space-around;

`;


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <FooterContainer>
          <FooterContent>
            <FooterHead>
              <StaticImage src="../images/density.png" />
              <span>density</span>
            </FooterHead>

            <FooterAnchor>
              <span>Blog</span>
              <span>Fees</span>
              <span>Leaderboard</span>
              <span>Careers</span>
              <span>Contact Us</span>
              <span>Private Policy</span>
            </FooterAnchor>
            <Footerpara>
              <p>
                Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
                diska. Jinesade bel när feras redorade i belogi. FAR paratyp i{" "}
                <br></br>muvåning, och pesask vyfisat. Viktiga poddradio har un
                mad och inde.{" "}
              </p>
            </Footerpara>
            <FooterImages>
              <StaticImage src="../images/facebook.png" />
              <StaticImage src="../images/tweeter.png" />
              <StaticImage src="../images/linkedin.png" />
              <StaticImage src="../images/instagram.png" />
            </FooterImages>
          </FooterContent>
        </FooterContainer>
      </div>
    </>
  )
}

export default Layout
