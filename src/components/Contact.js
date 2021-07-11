import React from 'react'

function Contact() {
    return (
        <div id="contact">
            <h1>BOOK YOUR TABEL</h1>
            <form>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Type You'r Email" />
                <textarea placeholder="Enter Your Message ..."></textarea>
                <input type="submit" value="BOOK"/>
            </form>
        </div>
    )
}

export default Contact
