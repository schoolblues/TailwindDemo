import MainContainerTabs from './components/MainContainerTabs'
import Navbar from './components/Navbar'
import Quickbar from './components/Quickbar'
import ModelSelectionSettings from './components/ModelSelectionSettings'
import ModelInstructions from './components/ModelInstructions'
import ModelTools from './components/ModelTools'
import ModelKnowledge from './components/ModelKnowledge'
import ModelMemory from './components/ModelMemory'
import ModelGuardrail from './components/ModelGuardrail'

function App() {
    return (
        <div className='bg-mauve-200'>
            <div>
                <Navbar />
            </div>
            <div className="flex">
                <div>
                    <Quickbar />
                </div>
                <div className='flex flex-col flex-1'>
                    <MainContainerTabs />
                    <ModelSelectionSettings />
                    <ModelInstructions />
                    <ModelTools />
                    <ModelKnowledge/>
                    <ModelMemory />
                    <ModelGuardrail />
                </div>
            </div>
        </div>
    )
}

export default App