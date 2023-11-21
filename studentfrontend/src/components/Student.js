import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function Student() {
    const paperStyle = {padding: '50px 20px', width: 600, margin: "20px auto"}
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');

    const handleClick = (e) => {
        e.preventDefault()
        const student = {name, address}
        console.log(student)
    }

  return (
    <Container>
        <Paper 
            elevation={3}
            style = {paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Student</u></h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1},
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="outlined-basic" label="Student name" variant="outlined" fullWidth 
                value={name}
                onChange={(e) => setName(e.target.value)}/>
                <TextField id="outlined-basic" label="Student address" variant="outlined" fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}/>
                <Button variant="contained" endIcon={<SendIcon />} onClick = {handleClick}>
                    Send
                </Button>
            </Box>
            {name}
            {address}
        </Paper>
    </Container>
  );
}