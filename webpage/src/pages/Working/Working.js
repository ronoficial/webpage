import * as React from 'react';
//import {Linking} from 'react-native';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Icon from '@mdi/react';
// import { mdiAccount } from '@mdi/js';
import { mdiSpotify } from '@mdi/js'; 
import background from '../_img/ships_1.jpg';
import background404 from '../_img/america_map.png';
import './Working.css';

let theme = createTheme({
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'Milonga',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
			].join(','),
		allVariants: {
			color: "white"
		},
	},
	});

	theme = responsiveFontSizes(theme);

export default function Working(props) {
	if (props.titulo==='404'){
		background = background404;
	}
	return (
		<ThemeProvider theme={theme}>
			<Grid	container 
				component="main" 
				sx={{ 
					height: '100vh',
					backgroundImage: `url(${background})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					color: 'white',
					display: "flex",
					justifyContent: 'center',
					alignItems: 'center',
					boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.2)'
				}}
			>
				<Grid container
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center',
				}} 
				>
					<Typography 
						variant="h1" 
						component="h1"
						sx={{
							justifyContent: 'center',
							alignItems: 'center',
						}} 
					>
						{props.titulo}
					</Typography>
				</Grid>
				{(props.subtitulo !== undefined) &&
					<Grid container
					sx={{
						justifyContent: 'center',
						alignItems: 'center',
					}} 
						>
						<Typography 
							variant="h4" 
							component="h4"
						>
							{props.subtitulo}
						</Typography>
					</Grid>
				}
				<Grid 
					container
					className='RRSScontainer'
					sx={{
						justifyContent: 'space-around',
						alignItems: 'center',
						display: 'flex',
						}}
				>
					{/* DESKTOP */}
					<Link href="https://www.instagram.com/r.o.n_oficial" target="_blank" className='RRSSbutton show-in-desktop'>
						<InstagramIcon fontSize='large' sx={{ fontSize: "70px"}}/>
					</Link>		
					
					<Link href="https://www.facebook.com/RONoficial/" target="_blank" className='RRSSbutton show-in-desktop'>
						<FacebookIcon fontSize='large' sx={{ fontSize: "70px"}}/>
					</Link> 
					<Link href="https://open.spotify.com/artist/4I7Qz4NxoYfOACilSloQPT?si=r4S3XbnoQZuzFhk0FbLzEw" target="_blank" className='RRSSbutton show-in-desktop'>
						<Icon path={mdiSpotify} size={2.8}/>
					</Link>

					{/* MOBILE */}
					<Link href="instagram://user?username=r.o.n_oficial" target="_blank" className='RRSSbutton show-in-mobile'>
						<InstagramIcon fontSize='large' sx={{ fontSize: "70px"}}/>
					</Link>
					<Link href="fb://page/159501250908713" target="_blank" className='RRSSbutton show-in-mobile'>
						<FacebookIcon fontSize='large' sx={{ fontSize: "70px"}}/>
					</Link>
					<Link href="spotify:artist:4I7Qz4NxoYfOACilSloQPT?si=r4S3XbnoQZuzFhk0FbLzEw" target="_blank" className='RRSSbutton show-in-mobile'>
						<Icon path={mdiSpotify} size={2.8}/>
					</Link>

				</Grid>
				
			</Grid>
		</ThemeProvider>
	);
}
