import React, { useContext } from 'react';
import { Card } from '@material-ui/core';
import { AppContext } from '../AppContext';

const TestComponent = () => {
    const {words} = useContext(AppContext)
    
    return (
        <Card>
            
        </Card>
    )
}

export default TestComponent