import searchIcon from '../assets/search.svg'
import messageIcon from '../assets/message.svg'
import bell from '../assets/Bell.svg'
import feedBack from '../assets/feedback.svg'

function Navbar() {
    return (
        <div className="flex flex-row h-12 items-center justify-center bg-windows-100 border-t border-solid border-windows-300 space-x-10">
            <div className="text-black/60">
                <p>NOTMicrosoft Foundry</p>
            </div>
            <div className="">
                <p>NOTfoundryresearch</p>
            </div>
            <div className="text-black/60">
                <p>New NOTFoundry</p>
            </div>
            <div className="text-black/60">
                <p>Home</p>
            </div>
            <div className="text-black/60">
                <p>Discover</p>
            </div>
            <div className="">
                <p>Build</p>
            </div>
            <div className="text-black/60">
                <p>Operate</p>
            </div>
            <div className="text-black/60">
                <p>Docs</p>
            </div>
            <img className="h-4 w-4" src={searchIcon} alt="Search" />
            <img className="h-4 w-4" src={messageIcon} alt="Message" />
            <img className="h-4 w-4" src={bell} alt="Notification Bell" />
            <img className="h-4 w-4" src={feedBack} alt="Feedback" />
        </div>
    )
}

export default Navbar