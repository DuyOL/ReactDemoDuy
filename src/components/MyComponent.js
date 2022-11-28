// Class Component
// Function Component
import React from "react";
import Displayinfo from "./Displayinfo";
import UserInfo from "./UserInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Nguyen Duc Duy', age: '16' },
            { id: 2, name: 'James', age: '26' },
            { id: 3, name: 'Roys', age: '69' },
        ]
    }
    render() {
        // props => viết tắt properties
        // DRY : Don't repeat youseft
        return (
            <div>
                <UserInfo></UserInfo>
                <br></br>
                <hr />
                <Displayinfo
                    listUsers={this.state.listUsers}
                />
                <hr />
            </div>
        );
    }
}

export default MyComponent;