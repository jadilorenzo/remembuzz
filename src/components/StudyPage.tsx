import React from 'react';
import { Button, Card, Container } from '@material-ui/core';

const Flashcards = () =>  {
    return (
        <Container>
            <Card>
                <h1>Study</h1>
                <div>
                    <Button>Flashcards</Button>
                    <Button>Test</Button>
                </div>  
            </Card>
        </Container>
    )
}

export default Flashcards