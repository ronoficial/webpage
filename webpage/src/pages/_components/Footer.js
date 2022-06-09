import * as React from 'react';
//import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Grid from '@mui/material/Grid';
import Icon from '@mdi/react';
import { mdiSpotify } from '@mdi/js'; 
import './styles.css';

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://ronoficial.cl/">
			ronoficial.cl
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

function Footer(props) {
	let { description, title } = props;
	// title="Footer"
	// description="Something here to give the footer a purpose!"
	return (
		<Box component="footer" sx={{ bgcolor: ' rgba(255,255,255,0.15)',bgopacity: '0.5', py: 3 }}>
			<Container maxWidth="lg"
			sx={{
				
				justifyContent: 'center',
				alignItems: 'center',
			}} >
				{ (title!==undefined) &&
					<Typography variant="h6" align="center" gutterBottom>
						{title}
					</Typography>
				}
				{(description!==undefined) &&
					<Typography
						variant="subtitle1"
						align="center"
						color="text.secondary"
						component="p"
					>
						{description}
					</Typography>
				}
				<Grid 
					container
					className='RRSScontainer'
					sx={{
						justifyContent: 'space-around',
						alignItems: 'center',
						display: 'flex',
						float: 'center',
						marginLeft: 'auto',
						marginRight: 'auto',
						}}
				>
					{/* DESKTOP */}
					<Link href="https://www.instagram.com/r.o.n_oficial" target="_blank" className='RRSSbutton show-in-desktop'>
						<InstagramIcon fontSize='large' sx={{ fontSize: "30px"}}/>
					</Link>		
					
					<Link href="https://www.facebook.com/RONoficial/" target="_blank" className='RRSSbutton show-in-desktop'>
						<FacebookIcon fontSize='large' sx={{ fontSize: "30px"}}/>
					</Link> 
					<Link href="https://open.spotify.com/artist/4I7Qz4NxoYfOACilSloQPT?si=r4S3XbnoQZuzFhk0FbLzEw" target="_blank" className='RRSSbutton show-in-desktop'>
						<Icon path={mdiSpotify} size={1.2}/>
					</Link>

					{/* MOBILE */}
					<Link href="instagram://user?username=r.o.n_oficial" target="_blank" className='RRSSbutton show-in-mobile'>
						<InstagramIcon fontSize='large' sx={{ fontSize: "30px"}}/>
					</Link>
					<Link href="fb://page/159501250908713" target="_blank" className='RRSSbutton show-in-mobile'>
						<FacebookIcon fontSize='large' sx={{ fontSize: "30px"}}/>
					</Link>
					<Link href="spotify:artist:4I7Qz4NxoYfOACilSloQPT?si=r4S3XbnoQZuzFhk0FbLzEw" target="_blank" className='RRSSbutton show-in-mobile'>
						<Icon path={mdiSpotify} size={1.2}/>
					</Link>

				</Grid>
				<Grid 
					container
					sx={{
						justifyContent: 'space-around',
						alignItems: 'center',
						display: 'flex',
						}}
				>	
				<Copyright />
				</Grid>
			</Container>
		</Box>
	);
}

// Footer.propTypes = {
// 	description: PropTypes.string.isRequired,
// 	title: PropTypes.string.isRequired,
// };

export default Footer;
