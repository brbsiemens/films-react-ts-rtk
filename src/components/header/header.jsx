import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useState } from 'react'
import { AuthModals } from '../loginWindow/AuthModals'
function Header() {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	return (
		<Paper
			elevation={0}
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				height: '50px',
				backgroundColor: '#2196f3',
				alignItems: 'center',
			}}
		>
			<p className='header__logo' href='#!'>
				Films
			</p>
			<IconButton aria-label='login' onClick={handleOpen}>
				<AccountCircleIcon fontSize='inherit' sx={{ color: 'white' }} />
			</IconButton>
			<AuthModals open={open} handleClose={handleClose} />
		</Paper>
	)
}

export { Header }
