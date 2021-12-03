import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Customers = () => {

    const [counter, setCounter] = React.useState(0)
    const [projects, setProjects] = React.useState(0)
    const [callob, setCallob] = React.useState(0)


    React.useEffect(() => {

        const timer = setTimeout(() => {
            if (counter === 100) {
                clearTimeout(timer)
            } else {

                setCounter(prev => ++prev)
            }
        }, 50);

        return () => {
            clearTimeout(timer)
        }
    }, [counter])
    React.useEffect(() => {

        const timer = setTimeout(() => {
            if (projects === 110) {
                clearTimeout(timer)
            } else {

                setProjects(prev => ++prev)
            }
        }, 40);

        return () => {
            clearTimeout(timer)
        }
    }, [projects])
    React.useEffect(() => {

        const timer = setTimeout(() => {
            if (callob === 130) {
                clearTimeout(timer)
            } else {

                setCallob(prev => ++prev)
            }
        }, 30);

        return () => {
            clearTimeout(timer)
        }
    }, [callob])

    return (

        <section className="bg-black text-white p-4">
            <h1 className="text-3xl text-center p-6 m-1"> TRUSTED BY ARTISTS ALL OVER THE WORLD</h1>

            <div className="container h-36 flex  items-center justify-center">
                <div className="flex-1 text-center flex-col flex place-items-center ">

                    <div style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={counter} text={`+ ${counter}`} />
                    </div>
                    <h1 className="py-2 text-xl">   customers happily served</h1>

                </div>

                <div className="flex-1 text-center flex-col flex place-items-center ">


                    <div style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={projects} text={`+ ${projects}`} />
                    </div>
                    <h1 className="py-2 text-xl">   Projects already finished</h1>
                </div>

                <div className="flex-1 text-center flex-col flex place-items-center ">
                    <div style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={callob} text={`+ ${callob}`} />

                    </div>
                    <h1 className="py-2 text-xl">   Callobrations alrady done</h1>
                </div>



            </div>
        </section>
    )
}

export default Customers
