import { Button, Container, FormControl, FormLabel, Grid, Input } from '@chakra-ui/react';
import React, { useState} from 'react';
import HomePage from '../HomePage';
import DisplayProfile from '../users_github/DisplayProfile';

const GitUser = () => {
  const [username, setUsername] = useState ('');

  const [data, setData] = useState ({});

  const handleChange = e => {
    setUsername (e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
        fetch(`https://api.github.com/users/${username}`)
        .then((response)=>{
          return response.json();
        }).then((originalData)=>{
            setData(originalData);
        })
  };

  return (
    
    <>
    <HomePage />

    <Container maxW="container.sm">
      <Grid
        my="8"
        gap={4}
        gridTemplateColumns="repeat(auto-fit,minmax(320px,1fr))"
      >
            <form onSubmit={handleSubmit}>
                <FormControl isRequired >
                    <FormLabel>Username</FormLabel>
                    <Input placeholder='Please enter your Github username' onChange={handleChange}/>
                </FormControl>

                <Button
                mt={4}
                colorScheme='teal'
                type='submit'
                >
                    Submit
                </Button>
            </form>

        <DisplayProfile data={data}/>
      </Grid>
    </Container>
  </>
  );
};

export default GitUser;
