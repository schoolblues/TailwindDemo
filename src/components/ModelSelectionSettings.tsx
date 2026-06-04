import parameters from "../assets/parameters.svg"

function ModelSelectionSettings() {
    return (
        <div className="h-36.5 flex flex-col border-b border-solid border-windows-100 bg-white">
            <div className="indent-2 px-6 pt-4 flex flex-row">
                <div className="flex-1 p-1 border border-solid border-windows-100 bg-windows-100 rounded">
                    <p>Model: Biggly-Wiggly-7.9-zippy</p>
                </div>
                <div className="ml-3 pt-1">
                    <img className="w-6 h-6" src={parameters} alt="" />
                </div>
            </div>
            <div className="flex justify-center flex-col h-16 indent-3 mx-6 mb-5 mt-4 border border-solid border-windows-100 bg-windows-100 rounded">
                <div className="">
                    <p>Voice Mode</p>
                </div>
                <div className="">
                    <p className="text-[11px]">Switch the agent to a voice-first experience.</p>
                </div>
            </div>
        </div>
    )
}

export default ModelSelectionSettings