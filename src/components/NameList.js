import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Ram', 'Aroon', 'Rakesh', 'Vittal']
    const persons = [
        {
            name: 'ram',
            title: 'Dev',
            team : 'API'
        },
        {
            name: 'Vittal',
            title: 'Dev',
            team : 'GSt'
        },
        {
            name: 'Anoop',
            title: 'Dev',
            team : 'OIT'
        }
    ]
    const namesList = names.map(x => <h2>{x}</h2>)
    //const personList = persons.map(person => (<h2>I am {person.name}. I am {person.title}. I am {person.team}</h2>)) //create a separate component to render the object
    const temp = persons.map(person => <Person person={person}/>) //pass person object to person component
    return (
        <div>
            {namesList}
            {/* {personList} */}
            {temp}
        </div>
    )
}

export default NameList
