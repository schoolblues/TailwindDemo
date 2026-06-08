import { YAMLBlock } from "./YAMLBlock"

type Props = {
    active: "Chat" | "YAML" | "Call Agent"
}

function ChatWindow({ active }: Props) {
    return (
        <div className="flex flex-col h-full">
            {active === "Chat" && (
                <>
                <div className="flex flex-col justify-center h-full text-center border border-windows-100 mt-4 m-4 rounded-md bg-windows-100">
                    <p className="pb-4 font-semibold text-xl"> User </p> 
                    <p className="text-xs text-black/60"> Send a message to start testing your agent </p>
                </div>
                </>
            )}
            {active === "YAML" &&
            <>
                <YAMLBlock />
            </>
            }
            <div className="">
                {active === "Call Agent" && <p>
                    Call Agent View
                </p>}
            </div>
        </div>
    )
}

export default ChatWindow