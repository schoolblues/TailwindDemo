function Quickbar() {
    return (
        <div className="flex-row h-screen w-60 border border-solid rounded-tr-2xl border-mauve-300 bg-white">
            <div className="text-left space-y-3.5">
            <p>Agents</p>
            <p>Deployments</p>
            <p>Fine-Tune</p>
            <p>Tools</p>
            <p>Knowledge</p>
            <p>Memory</p>
            <p>Data</p>
            <p>Evaluations</p>
            <p>Guardrails</p>
            </div>
        </div>
    )
}

export default Quickbar