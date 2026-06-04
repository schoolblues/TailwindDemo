import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"
import { useState } from 'react'

function ModelMemory() {
    const [open, setOpen] = useState(false);

    return (
        <div className={`flex flex-col border-b pt-5.5 border-solid border-windows-100 bg-white`}>
            <div className="ml-5 mr-6 flex flex-row items-center justify-between">
                <p className="">Memory</p>
                <button className="w-3 h-5" onClick={() => setOpen(o => !o)}>
                    <img src={open ? arrowUp : arrowDown} alt="img"/>
                </button>
            </div>
            <div className={`ml-5 mt-5 grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden pr-6">
                    <div className="">
                        <p className='text-xs text-black/60 max-w-96'>
                            Memory retains context to personalize and improve interactions. A memory store will be auto-created for you. It wil luse the model you have deployed for this agent.
                        </p>
                        <p className='text-xs text-purple-700 max-w-96'>Learn more about cost</p>
                        <div className="mt-3 mb-5 flex text-center items-center">
                            <div className="flex items-center justify-center border border-solid border-windows-300 rounded-2xl h-8 w-18">
                                <p>Add</p>
                                <img className="ml-2 w-2 h-3" src={arrowDown} alt="Menu" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModelMemory