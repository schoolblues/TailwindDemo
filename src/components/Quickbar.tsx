import weirdGon from "../assets/WeirdGon.svg"
import boxes from "../assets/boxes.svg"

function Quickbar() {
    return (
        <div className="flex h-full w-60 border-solid rounded-tr-2xl border-windows-300 bg-white">
            <div className="space-y-3.5 w-full">
                <div className="flex items-center indent-1 pt-1 pb-1 my-2 mx-2 bg-windows-100 rounded">
                    <img className="h-4 w-4 ml-1" src={weirdGon} alt="img" />
                    <p>Agents</p>
                </div>
                <div className="flex items-center indent-1 text-black/60 my-2 mx-2">
                    <img className="h-4 w-4 ml-1" src={boxes} alt="img" />
                    <p>Deployments</p>
                </div>
                <div className="text-black/60 my-2 mx-2">
                    <p>Fine-Tune</p>
                </div>
                <div className="text-black/60 my-2 mx-2">
                    <p>Tools</p>
                </div>
                <div className="text-black/60 my-2 mx-2">
                    <p>Knowledge</p>
                </div>
                <div className="text-black/60 my-2 mx-2">
                    <p>Memory</p>
                </div>
                <div className="text-black/60 my-2 mx-2">
                    <p>Data</p>
                </div>
                <div className="text-black/60 my-2 mx-2">
                    <p>Evaluations</p>
                </div>
                <div className="text-black/60 my-2 mx-2">
                    <p>Guardrails</p>
                </div>
            </div>
        </div>
    )
}

export default Quickbar