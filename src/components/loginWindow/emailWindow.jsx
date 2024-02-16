import {
	Button,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from '@mui/material'

function EmailWindow({ handleClick, handleClose }) {
	return (
		<>
			<DialogTitle>Request token</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					margin='dense'
					id='email'
					label='Enter email'
					type='email'
					fullWidth
					variant='standard'
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleClick}>Ok</Button>
			</DialogActions>
		</>
	)
}

export { EmailWindow }
