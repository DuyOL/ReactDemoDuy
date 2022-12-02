// Class Component
// Function Component
import React from "react";
import Displayinfo from "./Displayinfo";
import AddUserInfo from "./AddUserInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Nguyen Duc Duy', age: '16' },
            { id: 2, name: 'James', age: '26' },
            { id: 3, name: 'Roys', age: '69' },
        ]
    }

    handleAddNewUsers = (userObj) => {
        // let listUsersClone = [...this.state.listUsers];
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    render() {
        // props => viết tắt properties
        // DRY : Don't repeat youseft
        return (
            <>
                <div className='a'>
                    <AddUserInfo
                        handleAddNewUsers={this.handleAddNewUsers}
                    />
                    <br></br>
                    <hr />
                    <Displayinfo
                        listUsers={this.state.listUsers}
                    />
                    <hr />
                </div>
                <div className='b'>

                </div>
            </>
        );
    }
}

export default MyComponent;