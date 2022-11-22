// Class Component
// Function Component
import React from "react";
class MyComponent extends React.Component {

    state = {
        name: 'Nguyen Duy',
        address: 'Hai Duong',
        age: 20
    }
    hendleClick(event) {
        console.log(" >>> Click me my button")
        console.log("My name is", this.state.name)
        // Khi click vào cửa sổ console sẽ hiện ra chữ  Click me my button
    }
    hendleMoverOver(event) {
        console.log(event.pageX)
    }
    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'am From {this.state.address}
                {/* <button onClick={this.hendleClick}>Click me</button> */}
                <button onMouseOver={this.hendleMoverOver}>MoverMe</button>
                <button onClick={this.hendleClick}>Click Me</button>
            </div>
        );
    }
}

export default MyComponent;