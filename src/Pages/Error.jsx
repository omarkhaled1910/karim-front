import React from 'react'
import { useNavigate } from 'react-router-dom'


const Error = () => {

    const [counter, setCounter] = React.useState(3)
    const navigate = useNavigate()

    React.useEffect(() => {

        const timer = setTimeout(() => {
            setCounter(prev => --prev)
        }, 1000);

        if (counter === 0) {
            navigate('/')
        }

        return () => {
            clearTimeout(timer)
        }
    }, [counter])

    return (
        <div className="h-screen text-center font-extrabold  my-3.5 ">
            there is no page like this we will redieret you in {counter} second...
        </div>
    )
}

export default Error
