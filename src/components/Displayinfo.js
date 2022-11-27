import React from 'react';
class Displayinfo extends React.Component {
    render() {
        // destructuring array/object
        const { name, age } = this.props;
        // props => viết tắt properties
        return (
            <div>
                <div>My Name is {name} </div>
                <div> My age 20 {age}</div>
            </div>
        )
    }
}
export default Displayinfo;