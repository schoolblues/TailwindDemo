import settings from "../assets/settings.svg"
import newChatTwo from "../assets/NewMessageBubbleTwo.svg"
import arrowDown from "../assets/arrowDown.svg"

type Props = {
    active: "Chat" | "YAML" | "Call Agent"
    setActive: (tab: "Chat" | "YAML" | "Call Agent") => void
}

function ChatWindowTabs({ active, setActive }: Props) {

    const buttonStyling = (tab: Props["active"]) =>
    `flex-1 w-20 text-center text-xs rounded 
    ${active === tab ? "bg-white text-black" 
    : "text-black/60"}`;
        
    return (
        <div className="flex flex-1 h-full bg-white border-windows-100 pl-4">
            <div className="flex mt-4 border border-solid border-windows-100 bg-windows-100 rounded space-x-0.5">
                <div className={buttonStyling("Chat")}>
                    <button className="w-full py-2 h-full" onClick={() => setActive("Chat")}>Chat</button> 
                </div>
                <div className={buttonStyling("YAML")}>
                    <button className="w-full py-2 h-full" onClick={() => setActive("YAML")}>YAML</button>
                </div>
                <div className={buttonStyling("Call Agent")}>
                    <button className="w-full py-2 h-full" onClick={() => setActive("Call Agent")}>Call agent</button>
                </div>
            </div>
            <div className="mt-4 mr-4 items-center flex text-right ml-auto">
                <div className="flex items-center text-xs mr-8">
                    <p className="text-black/70" >Metrics</p>
                    <img className="ml-2 h-[0.6rem] w-[0.6rem]" src={arrowDown} alt="SVG" />
                </div>
                <div className="mr-2">
                    <img className="h-4.5 w-4.5" src={settings} alt="SettingsButton" />
                </div>
                <div className="mr-7">
                    <p>Configure</p>
                </div>
                <div className="">
                    <img className="h-4.5 w-4.5" src={newChatTwo} alt="New Chat" />
                </div>
            </div>
        </div>
    ) 
}

export default ChatWindowTabs