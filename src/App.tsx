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

function App() {
    return (
        <div className='flex flex-col h-screen bg-white'>
            <Navbar />
            <div className='flex flex-1 min-h-0'>
                <div className='bg-mauve-100'>
                    <Quickbar />
                </div>
                <div className='flex flex-col flex-1 min-h-0 bg-mauve-100'>
                    <MainContainerTabs />
                    <div className='flex flex-1 min-h-0 bg-white'>
                    <div className='flex flex-col'>
                        <ModelSelectionSettings />
                        <ModelInstructions />
                        <ModelTools />
                        <ModelKnowledge/>
                        <ModelMemory />
                        <ModelGuardrail />
                    </div>
                    <div className='flex flex-col flex-1 min-h-0'>
                        <ChatWindowTabs />
                        <ChatWindow />
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