import React from 'react';
import Classes from './description.module.css';

const description = (props) => {
    return (
        <div className={Classes.Background}>
            <p className={Classes.Heading}>Description</p>
            <p className={Classes.Display}>{props.description}</p>
        </div>
    );
}

export default description;