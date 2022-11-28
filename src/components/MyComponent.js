// Class Component
// Function Component
import React from "react";
import Displayinfo from "./Displayinfo";
import UserInfo from "./UserInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Nguyen Duc Duy', age: '20' },
            { id: 2, name: 'James', age: '19' },
            { id: 3, name: 'Roys', age: '30' },
        ]
    }
    render() {
        // props => viết tắt properties
        // DRY : Don't repeat youseft
        return (
            <div>
                <UserInfo></UserInfo>
                <br></br>
                <Displayinfo
                    listUsers={this.state.listUsers}
                />
                {/* <Displayinfo name="Hoi Dan IT" age="20" /> */}
                <hr></hr>
            </div>
        );
    }
}

export default MyComponent;