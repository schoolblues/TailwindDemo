import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"
import { useState } from 'react'

function ModelTools() {
    const [open, setOpen] = useState(false);

    return (
        <div className={`flex flex-row items-start border-b pt-7 border-solid border-windows-100 bg-white transition-[max-height] duration-300 ease-in-out overflow-hidden ${open ? "max-h-60" : "max-h-20"}`}>
            <div className="ml-6">
                <p>Tools</p>
            </div>
            <div className="flex flex-col mr-6">
                <button className="w-3 h-3 self-end mr-1" onClick={() => setOpen(o => !o)}>
                    <img src={open ? arrowUp : arrowDown} alt="img"/>
                </button>
                <div className={`-ml-10 mt-14 mb-6 pb-15`}>
                    <p className='m-2 text-black/60 max-w-96'>
                        Connect tools to your agent for faster access to key information and improved efficiency. Learn more about best practices.
                    </p>
                    <p className="m-2">Web search</p>
                    <p className="m-2">Information Icon(Needs to be svg)</p>
                </div>
            </div>
        </div>
    )
}

export default ModelTools