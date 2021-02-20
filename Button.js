/* eslint-disable no-template-curly-in-string */
import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';



export const Button = ({
    children, 
    type, 
    onClick}) => {;


    return (
        <Link to='sign-up' className='btn-mobile'>
            <button className={'btn ${checkButtonStyle} ${checkButtonSize}'}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </Link>
    )
};