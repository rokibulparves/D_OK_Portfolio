import "./topbar.scss"
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">D~OK</a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+8801795722318</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>+8801795722318</span>
          </div>
        </div>
        
        <div className="right"> 
        {/* setMenuOpen(!menuOpen) handles toggle between true of false in the useState */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
