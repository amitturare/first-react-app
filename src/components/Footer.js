import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <footer>
            <button role="button"><TwitterIcon sx={{ fontSize: 18 }}/></button>
            <button role="button"><FacebookIcon sx={{ fontSize: 18 }}/></button>
            <button role="button"><InstagramIcon sx={{ fontSize: 18 }}/></button>
            <button role="button"><GitHubIcon sx={{ fontSize: 18 }}/></button>
        </footer>
    );
}