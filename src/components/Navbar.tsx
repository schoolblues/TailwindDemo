import searchIcon from '../assets/search.svg'
import messageIcon from '../assets/message.svg'
import bell from '../assets/Bell.svg'
import feedBack from '../assets/feedback.svg'

function Navbar() {
    return (
        <div className="flex flex-row h-12 items-center justify-center bg-mauve-100 border-t border-solid border-mauve-300 space-x-10">
            <p>NOTMicrosoft Foundry</p>
            <p>NOTfoundryresearch</p>
            <p>New NOTFoundry</p>
            <p>Home</p>
            <p>Discover</p>
            <p>Build</p>
            <p>Operate</p>
            <p>Docs</p>
            <img className="h-4 w-4" src={searchIcon} alt="Search" />
            <img className="h-4 w-4" src={messageIcon} alt="Message" />
            <img className="h-4 w-4" src={bell} alt="Notification Bell" />
            <img className="h-15 w-15" src={feedBack} alt="Feedback" />
        </div>
    )
}

export default Navbar