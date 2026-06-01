type Props = {
    active: "Chat" | "YAML" | "Call Agent"
}

function ChatWindow({ active }: Props) {
    return (
        <div className="h-full text-center border border-windows-100 mt-4 m-4 rounded-md bg-windows-100">
            <p>User</p>
            {active === "Chat" && <p>Send a message to start testing your agent</p>}
            {active === "YAML" && <p>YAML View</p>}
            {active === "Call Agent" && <p>Call Agent View</p>}
        </div>
    )
}

export default ChatWindow