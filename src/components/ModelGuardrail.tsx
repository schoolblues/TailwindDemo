import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"
import { useState, useEffect, useRef } from 'react'

function ModelGuardrail() {
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
        <div className={`flex flex-1 flex-row border-b border-solid border-windows-100 bg-white transition-all duration-250 ease-in-out overflow-hidden ${open ? "max-h-150" : "max-h-20"}`}>
            <div className="ml-6 mt-7">
                <p>Guardrail</p>
            </div>
            <div ref={ref} className="flex flex-col pt-7 mr-6">
                <button className="ml-90 w-5 h-5" onClick={() => setOpen(o => !o)}>
                    <img src={open ? arrowUp : arrowDown} alt="img"/>
                </button>
            </div>
        </div>
    )
}

export default ModelGuardrail