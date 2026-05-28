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

function App() {
    return (
        <div className='flex flex-col h-screen bg-mauve-200'>
            <Navbar />
            <div className='flex flex-1 min-h-0'>
                <div>
                    <Quickbar />
                </div>
                <div className='flex flex-col flex-1 min-h-0'>
                    <MainContainerTabs />
                    <div className='flex flex-1 min-h-0'>
                    <div className='flex flex-col flex-1'>
                        <ModelSelectionSettings />
                        <ModelInstructions />
                        <ModelTools />
                        <ModelKnowledge/>
                        <ModelMemory />
                        <ModelGuardrail />
                    </div>
                    <div className='flex flex-1'>
                        <ChatWindowTabs />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App