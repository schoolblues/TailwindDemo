import paperclip from "../assets/paperClip.svg"
import sendarrow from "../assets/sendArrow.svg"
import routine from "../assets/newRoutine.svg"

function MessageWindow() {
    return (
        <div className="flex flex-col text-left pt-3 pl-3 mx-4 h-26 border border-windows-100 rounded-md bg-windows-100">
            <div className="">
                <p className=" text-black/60">
                    Message the agent...
                </p>
            </div>
            <div className="flex justify-end mt-auto space-x-2.5 mb-3 mr-3">
                <img className="h-4.5 w-4.5 rotate" src={paperclip} alt="svg" />
                <img className="h-4.5 w-4.5" src={routine} alt="svg" />
                <img className="h-4.5 w-4.5" src={sendarrow} alt="svg" />
            </div>
        </div>
    )
}

export default MessageWindow