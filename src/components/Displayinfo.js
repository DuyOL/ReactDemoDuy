import React from 'react';
import './Displayinfo.scss';

class Displayinfo extends React.Component {
    state = {
        isShowlistUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowlistUser: !this.state.isShowlistUser
        })
    }
    render() {
        // destructuring array/object
        const { listUsers } = this.props;
        // console.log(listUsers)
        // props => viết tắt properties
        return (
            <div className='display-infor-container'>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowlistUser === true ? "Hide list users: " : "Show list users"}
                    </span>
                </div>
                {this.state.isShowlistUser &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div style={{ color: 'black', paddingTop: '50px' }}>My Name is  {user.name} </div>
                                    <div>My age      {user.age}</div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>

        )
    }
}
export default Displayinfo;