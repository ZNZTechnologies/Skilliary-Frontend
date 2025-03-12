import React from 'react'
import AuthNav from './AuthNav'

interface NavbarProps {
    type: "AUTH_SIDE" | "USER_SIDE"
}

function Navbar(props: NavbarProps) {
    return (
        <>
            {props.type === "AUTH_SIDE" ?
                <AuthNav /> : null
            }
        </>
    )
}

export default Navbar