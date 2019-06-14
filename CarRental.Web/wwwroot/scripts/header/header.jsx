﻿import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <menu>
                    <ul>
                        <li>
                            <Link className='link' to='/selects'>Selects</Link>
                        </li>
                        <li>
                            <Link className='link' to='/creating'>Creating a new location</Link>
                        </li>
                        <li>
                            <Link className='link' to='/show'>Show locations</Link>
                        </li>
                    </ul>
                </menu>
            </header>
        );
    }
};