import React from 'react'

import { Link } from 'react-router-dom'

const index = () => {
    return (
        <div className="container landing">
            <div className="intro">
                <h1 className="title">Welcome to Game of Thrones House List by Jason Simms</h1>
                <h3 className="subtitle">A ReactJS challenge for Piet.</h3>
                <Link to="/main">
                    <button className="button">See all GOT Houses</button>
                </Link>
            </div>
        </div>
    )
}

export default index