import React from "react";

class AddUserInfo extends React.Component {
    state = {
        name: 'Nguyen Duy',
        address: 'Hai Duong',
        age: 20
    }
    // JSX
    hendleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    hendleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    hendleOnChangeaddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.handleAddNewUsers({
            id: Math.floor((Math.random() * 100) + 1) + 'Random',
            name: this.state.name,
            age: this.state.age,
        });
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'am From {this.state.age} and address {this.state.address}
                {/* <button onClick={this.hendleClick}>Click me</button> */}
                {/* <button onClick={(event) => { this.hendleClick(event) }}>Click Me</button> */}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label> Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.hendleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                    <label> Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.hendleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                    <label> Your address: </label>
                    <input
                        value={this.state.address}
                        type="text"
                        onChange={(event) => this.hendleOnChangeaddress(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}
export default AddUserInfo;