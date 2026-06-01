import { useEffect, useState} from 'react'

function ModelInstructions() {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex flex-1 flex-col border-l-2 border-r border-b border-solid border-windows-100 bg-white">
            <div className="pl-4 pt-4 flex">
                <p>Instructions</p>
                <button className="ml-90 w-5 h-5 bg-black"></button>
            </div>
            <div className=" mx-4 mt-8 mb-6 pb-26 bg-windows-100">
                <p className='m-2'>
                    Write your prompt here to give your agent instructions.
                </p>
            </div>
        </div>
    )
}

export default ModelInstructions