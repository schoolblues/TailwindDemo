import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"
import { useState, useEffect, useRef } from 'react'

function ModelKnowledge() {
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;

        const handler = (event: MouseEvent) => { 
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        
        return () => 
            document.removeEventListener("mousedown", handler);
    }, [open]);

    return (
        <div className={`flex flex-row items-start border-b pt-7 border-solid border-windows-100 min-h-20 bg-white transition-[max-height] duration-300 ease-in-out overflow-hidden ${open ? "max-h-60" : "max-h-20"}`}>
            <div className="ml-6">
                <p>Knowledge</p>
            </div>
            <div ref={ref} className="flex flex-col mr-6 ml-auto">
                <button className="w-3 h-3 self-end mr-1" onClick={() => setOpen(o => !o)}>
                    <img src={open ? arrowUp : arrowDown} alt="img"/>
                </button>
            </div>
        </div>
    )
}

export default ModelKnowledge