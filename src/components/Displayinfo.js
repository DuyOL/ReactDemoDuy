import React from 'react';
class Displayinfo extends React.Component {
    render() {
        // destructuring array/object
        const { listUsers } = this.props;
        console.log(listUsers)
        // props => viết tắt properties
        return (
            <div>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My Name is  {user.name} </div>
                            <div>My age     {user.age}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Displayinfo;