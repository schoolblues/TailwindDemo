import searchIcon from '../assets/search.svg'
import sparkleBubble from '../assets/sparkleBubble.svg'
import bell from '../assets/Bell.svg'
import feedBack from '../assets/feedback.svg'
import forwardSlash from "../assets/forwardSlash.svg"
import logo from "../assets/Logo.svg"
import upDown from "../assets/arrowUpDown.svg"
import profilePlaceholder from "../assets/profilePlaceholder.svg"

function Navbar() {
    return (
        <div className="flex flex-row max-h-12 items-center flex-1 whitespace-nowrap shrink-0 bg-windows-100 border-t border-solid border-windows-300 space-x-10">
            <div className="">
                <img className='ml-4 -mr-4 h-5 w-5' src={logo} alt="" />
            </div>
            <div className="mr-0 relative right-3 text-black/60 text-sm">
                <p>NOTMicrosoft Foundry</p>
            </div>
            <div className="">
                <img className='-ml-0.5 -rotate-22 h-3 w-3' src={forwardSlash} alt="SVG" />
            </div>
            <div className="-ml-7 mr-0 text-sm">
                <p>NOTfoundryresearch</p>
            </div>
            <div className="">
                <img className="ml-1 h-2.5 w-2.5" src={upDown} alt="svg" />
            </div>
            <div className="flex h-8 w-60 border border-solid border-windows-300 rounded-2xl items-center mr-3 ml-16">
                <img className='w-4 h-4 ml-2' src={searchIcon} alt="svg" />
                <p className='text-black/60 text-sm ml-2'>Search with AI (Ctrl + K)</p>
            </div>
            <div className="">
                <img className="h-5 w-5" src={sparkleBubble} alt="svg" />
            </div>
            <div className="text-black/60 text-sm mr-0">
                <p>New NOTFoundry</p>
            </div>
            <div className="flex space-x-[0.8rem] text-black/60 text-sm mr-2">
                <p>Home</p>
                <p>Discover</p>
                <p className='text-black font-semibold'>Build</p>
                <p>Operate</p>
                <p>Docs</p>
            </div>
            <div className="flex ml-auto mr-7 space-x-3.5">
                <img className="h-4.5 w-4.5" src={bell} alt="Notification Bell" />
                <img className="h-4.5 w-4.5" src={feedBack} alt="Feedback" />
                <img className="h-5 w-5" src={profilePlaceholder} alt="svg" />
            </div>
        </div>
    )
}

export default Navbar