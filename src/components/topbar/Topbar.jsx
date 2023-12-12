import "./topbar.scss"
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

export default function Topbar() {
  return (
    <div className='topbar'>
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
          right
        </div>
      </div>
    </div>
  )
}
