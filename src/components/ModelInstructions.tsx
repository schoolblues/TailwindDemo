import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"
import { useState } from 'react'

function ModelInstructions() {
    const [open, setOpen] = useState(false);

    return (
        <div className={`flex flex-row items-start border-b pt-7 border-solid border-windows-100 bg-white transition-[max-height] duration-300 ease-in-out overflow-hidden ${open ? "max-h-60" : "max-h-20"}`}>
            <div className="ml-6">
                <p>Instructions</p>
            </div>
            <div className="flex flex-col mr-6">
                <button className="w-3 h-3 self-end mr-1" onClick={() => setOpen(o => !o)}>
                    <img src={open ? arrowUp : arrowDown} alt="img"/>
                </button>
                <div className={`-ml-21 mt-14 mb-6 pb-15 bg-windows-100`}>
                    <p className='m-2 text-black/60'>
                        Write your prompt here to give your agent instructions.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ModelInstructions