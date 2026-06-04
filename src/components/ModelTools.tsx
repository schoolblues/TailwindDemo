import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"
import worldSearch from "../assets/searchWorld.svg"
import info from "../assets/Info.svg"
import dotMenu from "../assets/dotMenu.svg"
import { useState } from 'react'

function ModelTools() {
    const [open, setOpen] = useState(false);

    return (
        <div className={`flex flex-col border-b pt-5.5 border-solid border-windows-100 bg-white`}>
            <div className="ml-5 mr-6 flex flex-row items-center justify-between">
                <p className="">Tools</p>
                <button className="w-3 h-5" onClick={() => setOpen(o => !o)}>
                    <img src={open ? arrowUp : arrowDown} alt="img"/>
                </button>
            </div>
            <div className={`ml-5 mt-5 grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden pr-6">
                    <div className="">
                        <p className='text-xs text-black/60 max-w-96'>
                            Connect tools to your agent for faster access to key information and improved efficiency. Learn more about best practices.
                        </p>
                        <div className="flex mt-5 mb-4">
                            <div className="">
                            <img className="h-5 w-5" src={worldSearch} alt="svg" />
                            </div>
                            <div className="">
                                <p className="ml-2 mr-2">Web search</p>
                            </div>
                            <div className="">
                                <img className="h-5 w-4" src={info} alt="svg" />
                            </div>
                            <div className="mt-1 ml-auto">
                                <img className="h-3.5 w-4" src={dotMenu} alt="" />
                            </div>
                        </div>
                        <div className="w-auto border-t border-solid border-windows-100"></div>
                        <div className="mt-5 mb-5 flex text-center items-center">
                            <div className="flex items-center justify-center border border-solid border-windows-300 rounded-2xl h-8 w-18">
                                <p>Add</p>
                                <img className="ml-2 w-2 h-3" src={arrowDown} alt="Menu" />
                            </div>
                            <div className="flex items-center justify-center ml-3 border border-solid border-windows-300 rounded-2xl h-8 w-28">
                                <p>Upload files</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModelTools