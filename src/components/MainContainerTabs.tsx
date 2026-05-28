function MainContainerTabs() {
    return (
        <div className="w-full border border-solid border-mauve-300 rounded-tl-2xl bg-white">
            <div className="pt-4 pl-4 flex flex-1 border-solid border-mauve-300">
                <div className="flex flex-1 text-left">
                    <p>User</p>
                </div>
                <div className="flex flex-1 space-x-21 text-right">
                    <p>Version</p>
                    <p>Save</p>
                    <p>Preview</p>
                    <p>Publish</p>
                </div>
            </div>
            <div className="pb-1 pt-2 pl-4 border-solid border-mauve-300 flex space-x-3.5">
                <p>Playground</p>
                <p>Traces</p>
                <p>Monitor</p>
                <p>Evaluation</p>
            </div>
        </div>
    )
}

export default MainContainerTabs