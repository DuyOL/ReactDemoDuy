// Class Component
// Function Component
import React, { useState } from "react";
import Displayinfo from "./Displayinfo";
import AddUserInfo from "./AddUserInfor";
// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: 'Nguyen Duc Duy', age: '16' },
//             { id: 2, name: 'James', age: '26' },
//             { id: 3, name: 'Roys', age: '69' },
//         ]
//     }

//     handleAddNewUsers = (userObj) => {
//         // let listUsersClone = [...this.state.listUsers];
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }
//     handleDeleteUser = (userid) => {
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== userid)
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }
//     render() {
//         // props => viết tắt properties
//         // DRY : Don't repeat youseft
//         // const test = ' Jame học React JS'
//         return (
//             <>
//                 <div className='a'>
//                     <AddUserInfo
//                         handleAddNewUsers={this.handleAddNewUsers}
//                     />
//                     <br></br>
//                     <hr />
//                     <Displayinfo
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                     <hr />
//                 </div>
//                 <div className='b'>

//                 </div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: 'Nguyen Duc Duy', age: '16', address: 'Ha Noi' },
            { id: 2, name: 'James', age: '26', address: 'Hai Duong' },
            { id: 3, name: 'Roys', age: '69', address: 'Tp Ho Chi Minh' },
        ]
    )
    const handleAddNewUsers = (userObj) => {
        setListUsers([userObj, ...listUsers])
    }
    const handleDeleteUser = (userid) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userid)
        setListUsers(listUsersClone)
    }
    return (
        <>
            <div className='a'>
                <AddUserInfo
                    handleAddNewUsers={handleAddNewUsers}
                />
                <br></br>
                <hr />
                <Displayinfo
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
                <hr />
            </div>
            <div className='b'>

            </div>
        </>
    )
}
export default MyComponent;