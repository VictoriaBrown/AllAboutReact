import React from "react";
import ReactDOM from "react-dom";

const App = props => {
    return <NumberOfStudents />;
};

class NumberOfStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enrolledStudents: 87,
            waitlistStudents: 8,
            addAmount: 0
        };
    }

    incrementEnrolledByOne() {
        this.setState({ enrolledStudents: this.state.enrolledStudents + 1});
    }

    incrementWaitlistByOne() {
        this.setState({ waitlistStudents: this.state.waitlistStudents + 1});
    }

    incrementEnrolledByInput() {
        this.setState({
            enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addAmount)
        });
    }

    incrementWaitlistByInput() {
        this.setState({
            waitlistStudents: this.state.waitlistStudents + parseInt(this.state.addAmount)
        });
    }

    render() {
        return (
            <div>
                <h1>Enrolled Students: {this.state.enrolledStudents}</h1>
                <button onClick={this.incrementEnrolledByOne.bind(this)}>Add 1 Enrolled Student</button>
                <h3>Add Multiple Enrolled Students:</h3>
                <input
                    type="number"
                    onChange={event => this.setState({ addAmount: event.target.value })}
                    value={this.state.addAmount}
                />
                <button onClick={this.incrementEnrolledByInput.bind(this)}>Increase Students</button>
                <h1>Waitlisted Students: {this.state.waitlistStudents}</h1>
                <button onClick={this.incrementWaitlistByOne.bind(this)}>Add 1 Waitlisted Student</button>
                <h3>Add Multiple Waitlisted Students:</h3>
                <input
                    type="number"
                    onChange={event => this.setState({ addAmount: event.target.value })}
                    value={this.state.addAmount}
                />
                <button onClick={this.incrementWaitlistByInput.bind(this)}>Increase Students</button>
            </div>
        );
    }


}

ReactDOM.render(<App />, document.getElementById('root'));