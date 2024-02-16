import {
	Button,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from '@mui/material'

function TokenWindow({ handleClick, handleChange, handleClose }) {
	return (
		<>
			<DialogTitle>Enter Token</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					margin='dense'
					id='name'
					label='Enter token'
					type='text'
					fullWidth
					variant='standard'
					onChange={handleChange}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Отмена</Button>
				<Button onClick={handleClick}>Ок</Button>
			</DialogActions>
		</>
	)
}

export { TokenWindow }
