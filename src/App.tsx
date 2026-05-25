import MainContainerTabs from './components/MainContainerTabs'
import Navbar from './components/Navbar'
import Quickbar from './components/Quickbar'

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
                <div className='flex flex-1'>
                    <MainContainerTabs />
                </div>
            </div>
        </div>
    )
}

export default App