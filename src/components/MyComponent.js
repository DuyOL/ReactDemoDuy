// Class Component
// Function Component
import React from "react";
class MyComponent extends React.Component {

    state = {
        name: 'Nguyen Duy',
        address: 'Hai Duong',
        age: 20
    }
    hendleClick = (event) => {
        console.log(" >>> Click me my button");
        // Khi click vào cửa sổ console sẽ hiện ra chữ  Click me my button
        // merge State => react class
        this.setState({
            name: 'James',
            age: Math.floor((Math.random() * 100) + 1)
        })

    }
    hendleMoverOver(event) {
        // console.log(event.pageX)
    }
    // JSX
    hendleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'am From {this.state.age}
                {/* <button onClick={this.hendleClick}>Click me</button> */}
                {/* <button onClick={(event) => { this.hendleClick(event) }}>Click Me</button> */}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        onChange={(event) => this.hendleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;