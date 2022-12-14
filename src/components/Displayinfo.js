import React, { useEffect, useState } from 'react';
import './Displayinfo.scss';
import logo from './../logo.svg';

// class Displayinfo extends React.Component {
//     //babel compiler
//     // constructor(props) {
//     //     console.log('>>> call construstor:   1')
//     //     super(props)
//     //     this.state = {
//     //         isShowlistUser: true
//     //     }
//     // }
//     // componentDidMount() {
//     //     console.log('>>> Call me component did mount')
//     //     setTimeout(() => {
//     //         document.title = 'React JS'
//     //     }, 3000)
//     // }

//     // componentDidUpdate(prevProps, prevState, snapshot) {
//     //     console.log('>>> Call me component did update', this.props, prevProps)
//     //     if (this.props.listUsers !== prevProps.listUsers) {
//     //         if (this.props.listUsers.length === 5) {
//     //             alert('You got 5 users')

//     //         }
//     //     }
//     // }
//     // handleShowHide = () => {
//     //     this.setState({
//     //         isShowlistUser: !this.state.isShowlistUser
//     //     })
//     // }
//     render() {
//         console.log('>>> call me render   ')
//         // destructuring array/object
//         const { listUsers } = this.props;
//         // console.log(listUsers)
//         // props => viết tắt properties
//         return (
//             <div className='display-infor-container'>
//                 {/* <img src={logo} /> */}
//                 {/* <div>
//                     <span onClick={() => { this.handleShowHide() }}>
//                         {this.state.isShowlistUser === true ? "Hide list users: " : "Show list users"}
//                     </span>
//                 </div> */}
//                 {true &&
//                     // {this.state.isShowlistUser &&

//                     <>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         <div>My Name is  {user.name} </div>
//                                         <div>My age      {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}> Delete </button>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>

//         )
//     }
// }

const Displayinfo = (props) => {
    const { listUsers } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {

        setShowHideListUser(!isShowHideListUser)
    }

    console.log(">>> Call me render ")
    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('Xoá Luôn User cuối cùng')
            }
            console.log(">>> Call me useEffect ")
        }, [listUsers]
    );
    return (
        <div className='display-infor-container'>
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list User" : "Show List User"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>My Name is  {user.name} </div>
                                    <div>My age      {user.age}</div>
                                    <div>My address  {user.address}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}> Delete </button>
                                </div>
                            </div>
                        )
                    })}
                </>
            }
        </div>

    )
}
export default Displayinfo;