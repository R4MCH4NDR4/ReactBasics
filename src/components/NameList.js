import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Ram', 'Aroon', 'Rakesh', 'Vittal', 'Ram']
    const persons = [
        {
            id:1,
            name: 'ram',
            title: 'Dev',
            team : 'API'
        },
        {
            id:2,
            name: 'Vittal',
            title: 'Dev',
            team : 'GSt'
        },
        {
            id:3,
            name: 'Anoop',
            title: 'Dev',
            team : 'OIT'
        }
    ]
    const namesList = names.map((x, index) => <h2 key={index}>{x} my index is {index}</h2>)
    //const personList = persons.map(person => (<h2>I am {person.name}. I am {person.title}. I am {person.team}</h2>)) //create a separate component to render the object
    const temp = persons.map(person => <Person key={person.id} person={person}/>) //pass person object to person component
    return (
        <div>
            {namesList}
            {/* {personList} */}
            {temp}
        </div>
    )
}

export default NameList
