import React from 'react'

function Display(props) {
    console.log(props)
    return (
        <h1>{props.count}</h1>
    )
}

export default Display