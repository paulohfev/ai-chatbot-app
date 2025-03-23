import { Box, TextField } from '@mui/material'

const GPTForm: React.FC = () => {
  return (
    <Box component='form'>
      <TextField label='Ask something' fullWidth maxRows={5} multiline />
    </Box>
  )
}

export default GPTForm
