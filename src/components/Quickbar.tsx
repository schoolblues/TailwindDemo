function Quickbar() {
    return (
        <div className="flex h-full w-60 border border-solid rounded-tr-2xl border-mauve-300 bg-white">
            <div className="indent-10 space-y-3.5 w-full">
                <div className="my-2 mx-2 border border-solid border-mauve-300 bg-mauve-100 rounded-md">
                    <p>Agents</p>
                    </div>
                <div className="my-2 mx-2 border border-solid border-mauve-300 bg-mauve-100 rounded-md">
                    <p>Deployments</p>
                    </div>
                <div className="my-2 mx-2 border border-solid border-mauve-300 bg-mauve-100 rounded-md">
                    <p>Fine-Tune</p>
                    </div>
                <div className="my-2 mx-2 border border-solid border-mauve-300 bg-mauve-100 rounded-md">
                    <p>Tools</p>
                    </div>
                <div className="my-2 mx-2 border border-solid border-mauve-300 bg-mauve-100 rounded-md">
                    <p>Knowledge</p>
                    </div>
                <div className="my-2 mx-2 border border-solid border-mauve-300 bg-mauve-100 rounded-md">
                    <p>Memory</p>
                    </div>
                <div className="my-2 mx-2 border border-solid border-mauve-300 bg-mauve-100 rounded-md">
                    <p>Data</p>
                    </div>
                <div className="my-2 mx-2 border border-solid border-mauve-300 bg-mauve-100 rounded-md">
                    <p>Evaluations</p>
                    </div>
                <div className="my-2 mx-2 border border-solid border-mauve-300 bg-mauve-100 rounded-md">
                    <p>Guardrails</p>
                </div>
            </div>
        </div>
    )
}

export default Quickbar