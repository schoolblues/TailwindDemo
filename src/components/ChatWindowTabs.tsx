import settings from "../assets/settings.svg"
import newChat from "../assets/newChat.svg"

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
            <div className="mt-4 mr-4 items-center flex text-right space-x-3.5 ml-auto">
                <div className="">
                    <p>Metrics</p>
                </div>
                <div className="">
                    <img className="h-4 w-4" src={settings} alt="SettingsButton" />
                </div>
                <div className="">
                    <p>Configure</p>
                </div>
                <div className="">
                    <img className="h-4 w-4" src={newChat} alt="New Chat" />
                </div>
            </div>
        </div>
    ) 
}

export default ChatWindowTabs