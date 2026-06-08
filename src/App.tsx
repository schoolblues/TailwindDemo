import MainContainerTabs from './components/MainContainerTabs'
import Navbar from './components/Navbar'
import Quickbar from './components/Quickbar'
import ModelSelectionSettings from './components/ModelSelectionSettings'
import ModelInstructions from './components/ModelInstructions'
import ModelTools from './components/ModelTools'
import ModelKnowledge from './components/ModelKnowledge'
import ModelMemory from './components/ModelMemory'
import ModelGuardrail from './components/ModelGuardrail'
import ChatWindowTabs from './components/ChatWindowTabs'
import ChatWindow from './components/ChatWindow'
import MessageWindow from './components/MessageWindow'
import AIDisclaimer from './components/AIDisclaimer'
import { useState, useRef } from 'react'

function App() {
    const [active, setActive] = useState<"Chat" | "YAML" | "Call Agent">("Chat")
    const [panelWidth, setPanelWidth] = useState(320)
    const resize = useRef(false)
    const panelRef = useRef<HTMLDivElement>(null)

    const beginResize = (event: React.MouseEvent) => {
        event.preventDefault()
        resize.current = true

        const onGrab = (event: MouseEvent) => {
            if (!resize.current) return
            const left = panelRef.current?.getBoundingClientRect().left ?? 0
            setPanelWidth(Math.min(Math.max(event.clientX - left, 200), 700))
        }

        const onMove = () => {
            resize.current = false
            window.removeEventListener('mousemove', onGrab)
            window.removeEventListener('mouseup', onMove)
        }
        
        window.addEventListener('mousemove', onGrab)
        window.addEventListener('mouseup', onMove)
    }

    return (
        <div className='flex flex-col h-screen bg-white'>
            <Navbar />
            <div className='flex flex-1 min-h-0'>
                <div className='bg-windows-100'>
                    <Quickbar />
                </div>
                <div className='flex flex-col flex-1 min-h-0 bg-windows-100'>
                    <MainContainerTabs />
                    <div className='flex flex-1 min-h-0 bg-white'>
                        <div ref={ panelRef } className='flex flex-col flex-none overflow-auto' style={{ width: panelWidth }}>
                            <ModelSelectionSettings />
                            <ModelInstructions />
                            <ModelTools />
                            <ModelKnowledge/>
                            <ModelMemory />
                            <ModelGuardrail />
                        </div>
                        <div onMouseDown={beginResize} className="w-1 cursor-col-resize hover:bg-windows flex-none"></div>
                        <div className='flex flex-col flex-1 min-h-0 border-l border-windows-100'>
                            <ChatWindowTabs active={active} setActive={setActive}/>
                            <ChatWindow active={active} />
                            <MessageWindow />
                            <AIDisclaimer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App