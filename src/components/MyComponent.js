// Class Component
// Function Component
import React from "react";
import UserInfo from "./UserInfor";
class MyComponent extends React.Component {

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
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <UserInfo></UserInfo>
            </div>
        );
    }
}

export default MyComponent;