import React from 'react';
import Classes from './instruction.module.css';

const instruction = (props) => {
    return (
        <div className={Classes.Background}>
            <p className={Classes.Heading}>Instruction</p>
            <p className={Classes.Display}>
                {props.instruction}
            </p>
        </div>
    );
}

export default instruction;