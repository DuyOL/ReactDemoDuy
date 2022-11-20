// Class Component
// Function Component
import React from "react";
class MyComponent extends React.Component {

    state = {
        name: 'Nguyen Duy',
        address: 'Hai Duong',
        age: 20
    }
    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'am From {this.state.address}
            </div>
        );
    }
}

export default MyComponent;