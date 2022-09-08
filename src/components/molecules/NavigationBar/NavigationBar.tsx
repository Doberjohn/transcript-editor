import React from "react";
import {Div, Image, Span} from "../../atoms";

export const NavigationBar = () => {
   return (
      <Div className="navbar navbar-dark bg-dark">
         <Div className="container">
            <Div className="navbar-brand">
               <Image src="https://studio-vn21.s3.eu-central-1.amazonaws.com/elizabeth_logo.png" width="30" height="30"
                      className="d-inline-block align-top" alternativeText="elizabeth_logo"/>
               <Span className="header_brand_name">Studio VN21</Span>
            </Div>
         </Div>
      </Div>
   )
}