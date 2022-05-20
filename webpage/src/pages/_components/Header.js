import * as React from 'react';
//import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import RONLogo from '../_img/LOGOTIPO_RON.png';
import {hideOnMobile} from '../../App';
//import Link from '@mui/material/Link';
//import Image from 'material-ui-image'
import {Link} from 'react-router-dom';
import './styles.css';


const defaultSections = [
	{ title: 'Inicio', url: '/Home' },
	{ title: 'Lanzamientos', url: '/Working' },
	{ title: 'Eventos', url: '/Working' },
	{ title: 'Noticias', url: '/Working' },
	{ title: 'Fotos', url: '/Working' },
];

function Header(props) {
	var { sections, title } = props;
	if (title===undefined){
		title="R.O.N.";
	}
	if (sections===undefined){
		sections = defaultSections;
	}
	return (
		<React.Fragment>
			<Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
				{hideOnMobile &&<Button size="small" className='show-in-desktop'>Subscribe</Button> 
				}			
				<Typography
					component="h2"
					variant="h5"
					color="inherit"
					align="center"
					noWrap
					sx={{ flex: 1 }}
				>
					<Link to = {'/home'}>
						<img
							src= {RONLogo}
							alt= {title}
							height= {'85px'}
							style= {{
								paddingTop: '8px',
								align: 'center',
								flex: 1,
							}}
						/>
					</Link>	
				</Typography>
				{hideOnMobile && 
				<React.Fragment>
					<IconButton className='show-in-desktop'>
						<SearchIcon />
					</IconButton>
					<Button variant="outlined" size="small" className='show-in-desktop'>
						Sign up
					</Button>
				</React.Fragment>
				}
			</Toolbar>
			<Toolbar
				component="nav"
				variant="dense"
				sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
			>
				{sections.map((section) => (
					<Link
						className='noDecorLink popUpLink submenuLink'
						style={{fontSize: '20px'}}
						key={section.title}
						to = {section.url}
					>
						{section.title}
					</Link>
				))}
			</Toolbar>
		</React.Fragment>
	);
}

// Header.propTypes = {
// 	sections: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			title: PropTypes.string.isRequired,
// 			url: PropTypes.string.isRequired,
// 		}),
// 	).isRequired,
// 	title: PropTypes.string.isRequired,
// };

export default Header;
