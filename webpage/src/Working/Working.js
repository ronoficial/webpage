import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from '../img/ships_1.jpg'
import { red } from '@mui/material/colors';
import './Working.css';



// function Copyright(props) {
// 	return (
// 		<Typography variant="body2" color="text.secondary" align="center" {...props}>
// 			{'Copyright © '}
// 			<Link color="inherit" href="https://mui.com/">
// 				Your Website
// 			</Link>{' '}
// 			{new Date().getFullYear()}
// 			{'.'}
// 		</Typography>
// 	);
// }

const theme = createTheme({
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

export default function SignInSide() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid  container 
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

				}}>
			<Grid container
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
			}} 
				>
				<Typography 
					variant="h1" 
					component="h1"
				>
					Se vienen cositas
				</Typography>
			</Grid>
			<Grid 
			container
			sx={{
				justifyContent: 'space-around',
				alignItems: 'center',
				width: '30%'
			}}>
			<Link href="https://www.instagram.com/r.o.n_oficial" target="_blank" >
				<InstagramIcon fontSize='large' sx={{ fontSize: "70px"}}/>
			</Link>  	
			
			<Link href="https://www.facebook.com/RONoficial/" target="_blank" >
				<FacebookIcon fontSize='large' sx={{ fontSize: "70px"}}/>
			</Link> 

			
			</Grid>
			
			</Grid>
		</ThemeProvider>
	);
}
