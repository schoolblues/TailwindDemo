import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"
import { useState } from 'react'

function ModelMemory() {
    const [open, setOpen] = useState(false);

    return (
        <div className={`flex flex-row items-center border-b border-solid border-windows-100 min-h-20 bg-white transition-[max-height] duration-300 ease-in-out overflow-hidden ${open ? "max-h-60" : "max-h-16"}`}>
            <div className="ml-6">
                <p>Memory</p>
            </div>
            <div className="flex flex-col mr-6 ml-auto">
                <button className="w-3 h-5 self-end mr-1" onClick={() => setOpen(o => !o)}>
                    <img src={open ? arrowUp : arrowDown} alt="img"/>
                </button>
            </div>
        </div>
    )
}

export default ModelMemory