import dotMenu from "../assets/dotMenu.svg"
import arrowDown from "../assets/arrowDown.svg"

function MainContainerTabs() {
    return (
        <div className="w-full border-b border-solid border-windows-100 rounded-tl-2xl bg-white">
            <div className="pt-4 pl-6 flex flex-1 border-solid border-windows-300">
                <div className="flex flex-1">
                    <p className="font-semibold">
                        User
                    </p>
                </div>
                <div className="flex ml-auto">
                    <div className="flex items-center mr-1">
                        <p className="text-xs font-medium">
                            Version:
                        </p>
                        <p className="text-xs ml-1 text-black/70 mr-1">
                            1 (5/11/2026 10:15PM)
                        </p>
                        <img className="h-[0.6rem] w-[0.6rem] ml-1 mr-3" src={arrowDown} alt="SVG" />
                    </div>
                    <div className="py-1 px-4 mr-3 border border-solid border-windows-100 bg-windows-100 rounded-3xl ml-auto">
                        <p className="text-black/70">Save</p>
                    </div>
                    <div className="flex py-1 px-4 mr-3 border border-solid border-windows-300 bg-white rounded-2xl ml-auto items-center">
                        <p>Publish</p>
                        <img className="ml-3 h-[0.6rem] w-[0.6rem]" src={arrowDown} alt="SVG" />
                    </div>
                    <div className="flex items-center mr-3">
                        <img className="h-4 w-4" src={dotMenu} alt="SVG" />
                    </div>
                </div>
            </div>
            <div className="pb-1 pt-2 pl-6 border-solid border-windows-300 flex space-x-3.5">
            <div className="">
                <p>Playground</p>
            </div>
            <div className="text-black/60">
                <p>Details</p>
            </div>
            <div className="text-black/60">
                <p>Traces</p>
            </div>
            <div className="text-black/60">
                <p>Monitor</p>
            </div>
            <div className="text-black/60">
                <p>Evaluation</p>
            </div>
            </div>
        </div>
    )
}

export default MainContainerTabs