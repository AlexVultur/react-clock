import './clock.css'
import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    
    componentDidMount() {
        this.timerId = setInterval( () => this.setState({ date: new Date() }), 1000);
    }
  
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        const { date } = this.state;
        const options = {
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        return (
            <div className='clock d-flex flex-column justify-content-center align-items-center my-5'>
                <p className='time'>{date.toLocaleTimeString()}</p>
                {this.props.show && <p className='date'>{date.toLocaleDateString('default', options)}</p>}
            </div>
        );
    }
}
  
export default Clock;