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
import { useState } from 'react'

function App() {
    const [active, setActive] = useState<"Chat" | "YAML" | "Call Agent">("Chat")
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
                        <div className='flex flex-col flex-none'>
                            <ModelSelectionSettings />
                            <ModelInstructions />
                            <ModelTools />
                            <ModelKnowledge/>
                            <ModelMemory />
                            <ModelGuardrail />
                        </div>
                        <div className='flex flex-col flex-1 min-h-0'>
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