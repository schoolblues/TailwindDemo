import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"
import { useState } from 'react'

function ModelTools() {
    const [open, setOpen] = useState(false);

    return (
        <div className={`flex flex-row items-start border-b pt-5.5 border-solid border-windows-100 bg-white`}>
            <div className="ml-6 -mr-9">
                <p>Tools</p>
            </div>
            <div className="flex flex-col">
                <button className="w-3 h-5 self-end -mr-2" onClick={() => setOpen(o => !o)}>
                    <img src={open ? arrowUp : arrowDown} alt="img"/>
                </button>
                <div className={`mt-5 grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                        <div className="flex-col">
                            <p className='text-xs text-black/60 max-w-96'>
                                Connect tools to your agent for faster access to key information and improved efficiency. Learn more about best practices.
                            </p>
                            <div className="flex">
                                <div className="">
                                    <p>Web search</p>
                                </div>
                                <div className="">
                                    <p>Information Icon(Needs to be svg)</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="">
                                    <p>add</p>
                                </div>
                                <div className="">
                                    <p>Upload Files</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModelTools