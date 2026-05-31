function ModelSelectionSettings() {
    return (
        <div className="flex flex-1 border-l border-b border-r border-solid border-mauve-300 bg-white">
            <div className="indent-2 px-4 pt-4 flex-col">
                <div className="p-1 border border-solid border-mauve-300 bg-mauve-100 rounded">
                    <p>Model: Biggly-Wiggly-7.9-zippy</p>
                </div>
                <div className="mt-4 border border-solid border-mauve-300 bg-mauve-100 rounded">
                    <p>Voice Mode</p>
                    <p>Switch the agent to a voice-first experience.</p>
                </div>
            </div>
        </div>
    )
}

export default ModelSelectionSettings