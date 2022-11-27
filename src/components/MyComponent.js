// Class Component
// Function Component
import React from "react";
import Displayinfo from "./Displayinfo";
import UserInfo from "./UserInfor";
class MyComponent extends React.Component {

    render() {
        const MyInfo = ['Duy', 'Love', '???'];
        // props => viết tắt properties
        return (
            <div>
                <UserInfo></UserInfo>
                <br></br>
                <Displayinfo name="Hoi Dan IT" age="20"></Displayinfo>
                <hr></hr>
                <Displayinfo name="Jame" age={26} MyInfo={MyInfo} />
            </div>
        );
    }
}

export default MyComponent;