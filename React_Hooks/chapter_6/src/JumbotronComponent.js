import React from 'react';
import { Button } from 'react-bootstrap';

function JumbotronComponent(props) {
    return (
        <div className='p-5 mb-4 bg-light rounded-3'>
            <h1>Hello, world!</h1>
            <p>{props.children}</p>
            <p>
                <Button variant='primary'>Learn more</Button>
            </p>
        </div>
    );
}

export default JumbotronComponent;