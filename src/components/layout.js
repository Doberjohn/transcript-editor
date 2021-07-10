import * as React from 'react'
import studio_logo from '../images/logo.svg'

const pageStyles = {
   color: "#232129",
   fontFamily: "-apple-system, Roboto, sans-serif, serif",
   height: '100%',
   display: 'flex',
   justifyContent: 'center',
}

const Layout = ({ pageTitle }) => {
   return (
      <main style={pageStyles}>
         <title>{pageTitle}</title>
         <img src={studio_logo} alt='Studio VN21 logo'/>
      </main>
   )
}
export default Layout