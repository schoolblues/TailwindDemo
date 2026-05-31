type Props = {
    active: "Chat" | "YAML" | "Call Agent"
    setActive: (tab: "Chat" | "YAML" | "Call Agent") => void
}

function ChatWindowTabs({ active, setActive}: Props) {
    return (
        <div className="flex flex-1 h-full bg-white border-mauve-300 pl-4">
        <div className="flex mt-4 border border-solid border-mauve-300 bg-mauve-100 rounded space-x-0.5">
            <div className="flex-1 w-20 bg-white text-center rounded">
                <button className="w-full py-1 h-full" onClick={() => setActive("Chat")}>Chat</button> 
            </div>
            <div className="flex-1 w-20 text-center">
                <button className="w-full py-1 h-full" onClick={() => setActive("YAML")}>YAML</button>
            </div>
            <div className="flex-1 w-20 justify-center text-center">
                <button className="w-full py-1 h-full" onClick={() => setActive("Call Agent")}>Call Agent</button>
            </div>
        </div>
        <div className="flex text-right space-x-3.5 ml-auto">
            <p>Metrics</p>
            <p>Configure</p>
        </div>
        </div>
    ) 
}

export default ChatWindowTabs