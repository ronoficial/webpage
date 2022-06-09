import * as React from 'react';
//import {Linking} from 'react-native';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Icon from '@mdi/react';
import { mdiSpotify } from '@mdi/js'; 
import background from '../_img/ships_1.webp';
import RONLogo from '../_img/LOGOTIPO_RON.webp';
import './VideoShowcase.css';
import ReactPlayer from 'react-player'

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

export default function VideoShowcase(props) {
	return (
		<ThemeProvider theme={theme}>
			<Grid //PAGE
				container 
				component="main" 
				sx={{ 
					minHeight: '100vh',
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
				{/* <Grid //TITLE
					container
					sx={{
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'center',
						marginBottom: '0',
					}} 
				>
					{(props.titulo==='RON_LOGO')?	
						<img
						src= {RONLogo}
						alt= {props.titulo}
						style= {{
							paddingTop: '8px',
							paddingBottom: '0',
							align: 'center',
							flex: 1,
							maxWidth: '295px',
							width: 'auto',
							height: 'auto',
						}}
						/>
					:
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
					}
				</Grid> */}

				<Grid // RRSS
					container
					className='RRSScontainer'
					sx={{
						justifyContent: 'space-around',
						alignItems: 'center',
						display: 'flex',
						padding: '15px 0px',
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




				<Grid //YOUTUBE FRAME
					container
					sx={{
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'center',
						width: '1000px',
					}} 
				>
					<div className='player-wrapper'>
						<ReactPlayer
							className='react-player'
							url={props.link}
							width='100%'
							height='100%'
						/>
					</div>
					
				</Grid>

				<Grid //TITLE
					container
					sx={{
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'center',
						marginBottom: '0',
					}} 
				>
					{(props.titulo==='RON_LOGO')?	
						<img
						src= {RONLogo}
						alt= {props.titulo}
						style= {{
							paddingTop: '8px',
							paddingBottom: '0',
							align: 'center',
							flex: 1,
							maxWidth: '295px',
							width: 'auto',
							height: 'auto',
							filter: 'invert(90%)',

						}}
						/>
					:
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
					}
				</Grid> 
				
			</Grid>
		</ThemeProvider>
	);
}
