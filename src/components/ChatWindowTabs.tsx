function ChatWindowTabs() {
    return (
        <div className="flex flex-1 w-full h-full bg-white border-l border-b p-4 border-mauve-300 space-x-3.5">
        <div className="flex flex-1 text-left space-x-3.5">
            <p>Chat</p>
            <p>YAMl</p>
            <p>Call Agent</p>
        </div>
        <div className="flex text-right space-x-3.5">
            <p>Metrics</p>
            <p>Configure</p>
        </div>
        </div>
    ) 
}

export default ChatWindowTabs