import React from "react";
const Footer = (props) => {
    let classNames = 'text-muted ';
    if (props.environment ==='DEVELOPMENT'){classNames+=' bg-yellow'}
    else if (props.environment ==='PRODUCTION'){classNames+=' bg-green'}
    return(
<footer className={classNames}>
    <div><strong>{props.environment}</strong></div>
</footer>
    )
}

export default Footer;