import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div className="welcome">
            <h2>Welcome, <span>User</span></h2>
            <Link className='button' to="/login">Sign out</Link>
        </div>

    )
}

export default Homepage 