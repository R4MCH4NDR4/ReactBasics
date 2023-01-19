import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>I am {person.name}. I am {person.title}. I am {person.team}</h2>
        </div>
    )
}

export default Person
