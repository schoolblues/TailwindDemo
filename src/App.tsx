import MainContainer from './components/MainContainer'
import Navbar from './components/Navbar'
import Quickbar from './components/Quickbar'

function App() {
    return (
        <div className='bg-mauve-200'>
            <div>
                <Navbar />
            </div>
            <div className="flex">
                <Quickbar />
                <MainContainer />
            </div>

        </div>
    )
}

export default App