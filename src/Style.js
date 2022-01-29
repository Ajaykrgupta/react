import React from "react";
import './style.css';
import style from './custom.module.css';
import {Button,Alert} from 'react-bootstrap';
function Style(){
    return(
        <div className="App">
            <h1 className="primary">CSS Apply in React</h1>
            <h1 className="primary">CSS Apply in React</h1>
            <h1 className="primary">CSS Apply in React</h1>
            <h1 style={{color:'red',backgroundColor:'blue'}}>CSS Apply in React</h1>
            <h1 className={style.success}>CSS Apply in React</h1>
            <Button onClick={()=>{alert("i am here")}}>Click Me</Button>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
            <Button variant="link">Link</Button>
            {
                [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                  ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                      This is a {variant} alert—check it out!
                    </Alert>
                  ))
            }
        </div>
    )
}

export default Style;