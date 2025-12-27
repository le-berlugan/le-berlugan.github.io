import { Link as RouterLink } from "react-router-dom";
import { MenuType } from "../types";
import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export interface IMenuProps {
	menuItemData: Array<MenuType>;
}

const Menu: React.FC<IMenuProps> = (props) => {
	const theme = useTheme();
	const isSm = useMediaQuery(theme.breakpoints.down('sm'));
	const [open, setOpen] = React.useState(false);

	const handleToggle = (value: boolean) => () => {
		setOpen(value);
	};

	const list = (
		<Box sx={{ width: 250 }} role="presentation" onClick={handleToggle(false)} onKeyDown={handleToggle(false)}>
			<List>
				{props.menuItemData.map((item, idx) => (
					<ListItem key={idx} disablePadding>
						<ListItemButton component={RouterLink} to={process.env.PUBLIC_URL + item.url}>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box sx={{ ml: 'auto' }}>
			{/* Small screens: show hamburger */}
			{isSm ? (
				<>
					<IconButton color="inherit" onClick={handleToggle(true)} aria-label="open menu">
						<MenuIcon />
					</IconButton>
					<Drawer anchor="right" open={open} onClose={handleToggle(false)}>
						{list}
					</Drawer>
				</>
			) : (
				<ButtonGroup variant="text" color="inherit" aria-label="menu buttons">
					{props.menuItemData.map((item, idx) => (
						<Button key={idx} component={RouterLink} to={process.env.PUBLIC_URL + item.url} sx={{ color: '#fff' }}>
							{item.label}
						</Button>
					))}
				</ButtonGroup>
			)}
		</Box>
	);
};

export default Menu;