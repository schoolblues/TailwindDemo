import weirdGon from "../assets/WeirdGon.svg"
import boxes from "../assets/boxes.svg"
import beaker from "../assets/Beaker.svg"
import tools from "../assets/Tools.svg"
import circleBoxes from "../assets/circleBoxes.svg"
import data from "../assets/data.svg"

function Quickbar() {
    return (
        <div className="flex h-full w-60 border-solid rounded-tr-2xl border-windows-300 bg-white">
            <div className="space-y-3.5 w-full">
                <div className="flex items-center indent-3 pt-1 pb-1 my-2 mx-2 bg-windows-100 rounded">
                    <img className="h-4 w-4 ml-2" src={weirdGon} alt="img" />
                    <p>Agents</p>
                </div>
                <div className="flex items-center indent-3 text-black/60 my-2 mx-2">
                    <img className="h-4 w-4 ml-2" src={boxes} alt="img" />
                    <p>Deployments</p>
                </div>
                <div className="flex items-center indent-3 text-black/60 my-2 mx-2">
                    <img className="h-4 w-4 ml-2" src={beaker} alt="img" />
                    <p>Fine-Tune</p>
                </div>
                <div className="flex items-center indent-3 text-black/60 my-2 mx-2">
                    <img className="h-4 w-4 ml-2" src={tools} alt="img" />
                    <p>Tools</p>
                </div>
                <div className="flex items-center indent-3 text-black/60 my-2 mx-2">
                    <img className="h-4 w-4 ml-2" src={circleBoxes} alt="img" />
                    <p>Knowledge</p>
                </div>
                <div className="text-black/60 my-2 mx-2">
                    <p>Memory</p>
                </div>
                <div className="flex items-center indent-3 text-black/60 my-2 mx-2">
                    <img className="h-4 w-4 ml-2" src={data} alt="img" />
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