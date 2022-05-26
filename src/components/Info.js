import pfpImage from "../images/pfp.jpeg";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Info() {
    return (
        <div className="info">
            <img src={pfpImage} alt="profile"/>
            <h1>John Doe</h1>
            <p>Frontend Developer</p>
            <small>johnDoe.website</small>

            <div className="info-btn-container">
                <button className="email-btn"><EmailIcon sx={{ fontSize: 12 }}/>Email</button>
                <button className="linkedin-btn"><LinkedInIcon sx={{ fontSize: 12 }}/>LinkedIn</button>
            </div>
        </div>
    );
}
