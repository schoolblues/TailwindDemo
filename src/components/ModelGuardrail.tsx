import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"
import infoDark from "../assets/infoDark.svg"
import { useState } from 'react'

function ModelGuardrail() {
    const [open, setOpen] = useState(false);

    return (
        <div className={`flex flex-col border-b pt-5.5 border-solid border-windows-100 bg-white`}>
            <div className="ml-5 mr-6 flex flex-row items-center justify-between">
                <p className="">Guardrail</p>
                <button className="w-3 h-5" onClick={() => setOpen(o => !o)}>
                    <img src={open ? arrowUp : arrowDown} alt="img"/>
                </button>
            </div>
            <div className={`ml-5 mt-5 grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden pr-6">
                    <p className='text-xs text-black/60 max-w-120'>
                        Add safety and security controls to your guardrail to help reduce the risks and support deployments
                    </p>
                    <p className='mb-5 text-xs text-purple-700 max-w-96'>Learn more</p>
                    <div className="flex mb-3">
                        <p className="text-xs">Name:</p>
                        <p className="ml-1 text-xs text-black/60 max-w-96">NotMicrosoft.DefaultV2</p>
                    </div>
                    <div className="flex mb-3">
                        <p className="text-xs">Risks with controls:</p>
                        <p className="ml-1 text-xs text-black/60 max-w-96">Jailbreak (1), Content safety (4), Protected materials (2)</p>
                    </div>
                    <div className="flex">
                        <p className="text-xs min-w-0 max-w-120">
                            <span>Risks without controls:</span>
                            <span className="ml-1 text-black/60">Indirect prompt injections, Sensitive data leakage, Task drift</span>
                        </p>
                    </div>
                    <div className="flex mt-5 border border-solid border-windows-300 rounded-md pt-3 pb-3 bg-windows-100">
                        <img className="ml-2 h-4 w-4" src={infoDark} alt="SVG" />
                        <p className="ml-2 text-xs min-w-0 max-w-118">
                            <span className="text-black/60">This Agent has not been assigned a guardrail. It is inheriting its model's guardrail.</span>
                        </p>
                    </div>
                    <div className="mt-7 mb-5 flex text-center items-center">
                        <div className="flex items-center justify-center border border-solid border-windows-300 rounded-2xl h-8 w-42">
                            <p>Manage Guardrail</p>
                            <img className="ml-2 w-2 h-3" src={arrowDown} alt="Menu" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModelGuardrail