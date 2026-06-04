import searchIcon from '../assets/search.svg'
import messageIcon from '../assets/message.svg'
import bell from '../assets/Bell.svg'
import feedBack from '../assets/feedback.svg'
import forwardSlash from "../assets/forwardSlash.svg"
import logo from "../assets/Logo.svg"
import upDown from "../assets/arrowUpDown.svg"

function Navbar() {
    return (
        <div className="flex flex-row max-h-12 items-center flex-1 whitespace-nowrap shrink-0 bg-windows-100 border-t border-solid border-windows-300 space-x-10">
            <div className="">
                <img className='ml-4 -mr-4 h-5 w-5' src={logo} alt="" />
            </div>
            <div className="mr-0 relative right-3 text-black/60 text-xs">
                <p>NOTMicrosoft Foundry</p>
            </div>
            <div className="">
                <img className='-ml-0.5 -rotate-22 h-3 w-3' src={forwardSlash} alt="SVG" />
            </div>
            <div className="-ml-7 mr-0 text-xs">
                <p>NOTfoundryresearch</p>
            </div>
            <div className="">
                <img className="ml-1 h-2.5 w-2.5" src={upDown} alt="svg" />
            </div>
            <div className="flex h-8 w-64 border border-solid border-windows-300 rounded-2xl items-center mr-3 ml-16">
                <img className='w-4 h-4 ml-2' src={searchIcon} alt="svg" />
                <p className='text-black/60 text-sm ml-2'>Search with AI (Ctrl + K)</p>
            </div>
            <div className="">
                <img className="h-5 w-5" src={messageIcon} alt="svg" />
            </div>
            <div className="text-black/60 text-xs mr-0">
                <p>New NOTFoundry</p>
            </div>
            <div className="text-black/60 text-xs mr-0">
                <p>Home</p>
            </div>
            <div className="text-black/60 text-xs mr-0">
                <p>Discover</p>
            </div>
            <div className="mr-0">
                <p>Build</p>
            </div>
            <div className="text-black/60 text-xs mr-0">
                <p>Operate</p>
            </div>
            <div className="text-black/60 text-xs mr-0">
                <p>Docs</p>
            </div>
            <img className="h-4 w-4" src={bell} alt="Notification Bell" />
            <img className="h-4 w-4" src={feedBack} alt="Feedback" />
        </div>
    )
}

export default Navbar