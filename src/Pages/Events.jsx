import React from 'react'
import Card from '../Components/Card'

const Events = () => {

    const [events, setEvents] = React.useState([])

    return (
        <>
            <Card events={events} ></Card>
        </>
    )
}

export default Events
