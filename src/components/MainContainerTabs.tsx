function MainContainerTabs() {
    return (
        <div className="w-full border-l-2 border-b border-solid border-windows-100 rounded-tl-2xl bg-white">
            <div className="pt-4 pl-4 flex flex-1 border-solid border-windows-300">
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
            <div className="pb-1 pt-2 pl-4 border-solid border-windows-300 flex space-x-3.5">
            <div className="">
                <p>Playground</p>
            </div>
            <div className="text-black/60">
                <p>Traces</p>
            </div>
            <div className="text-black/60">
                <p>Monitor</p>
            </div>
            <div className="text-black/60">
                <p>Evaluation</p>
            </div>
            </div>
        </div>
    )
}

export default MainContainerTabs