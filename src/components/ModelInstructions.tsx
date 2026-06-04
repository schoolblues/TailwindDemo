import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"
import { useState } from 'react'

function ModelInstructions() {
    const [open, setOpen] = useState(false);

    return (
        <div className={`flex flex-col border-b pt-5.5 border-solid border-windows-100 bg-white`}>
            <div className="ml-5 mr-6 flex flex-row items-center justify-between">
                <p className="">Instructions</p>
                <button className="w-3 h-5" onClick={() => setOpen(o => !o)}>
                    <img src={open ? arrowUp : arrowDown} alt="img"/>
                </button>
            </div>
            <div className={`ml-5 mt-5 grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden pr-6 pb-5">
                    <div className="bg-windows-100 pb-26 mt-4 pt-4 pl-3">
                        <p className='text-xs text-black/60 max-w-96'>
                            Write your prompt here to give your agent instructions.
                        </p>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default ModelInstructions