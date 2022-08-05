import React from 'react';

const Section = ({children, className})=>{
    return(
        <div className={`h-screen ${className}`}>
            {children}
        </div>
    )
}
export default Section;