import React from 'react';
import { Container, Typography, TextField } from '@material-ui/core';


const LogSleep = () => {

    return (
        <Container component='main' maxWidth='xs'>
            <div>
                <Typography component='h1' variant='h5'>
                    Log your day
                </Typography>

                <form>
                    <TextField
                        variant='outlined'
                        id='duration'
                        name='duration'
                        autoFocus
                        label='Sleep duration'
                    />
                    <TextField
                        variant='outlined'
                        id='score'
                        name='score'
                        autoFocus
                        label='Sleep score'
                    />

                    <TextField
                        variant='outlined'
                        id='bedtime'
                        name='bedtime'
                        autoFocus
                        label='Bed time'
                    />


                </form>
            </div>
        </Container>
    )
}

export default LogSleep;