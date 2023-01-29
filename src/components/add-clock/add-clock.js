import React, { useState } from 'react';
import './add-clock.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Clock from '../clock/clock';

function Example(props) {
    const [state, setState] = useState(false);
   
        return (
            <Form>
                <FormGroup switch className='d-flex justify-content-center align-items-center my-4'>
                    <Input 
                    type="switch" 
                    role="switch" 
                    className="switch-size"
                        onClick={() => {
                        setState(!state);
                    }}/>
                    <Label check> <FontAwesomeIcon icon={faCalendarDays} className="calendar" /></Label>
                </FormGroup>
                    <Clock show={state}/>
           </Form>
        );
}
   
export default Example;