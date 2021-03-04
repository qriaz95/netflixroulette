import React from 'react';
import './Left.css';

/**
 * React component created using the React.Component method.
 * Just a simple div with some CSS styling to make the right
 * corners rounded to add some style. 
 */
class Left extends React.Component {
    render() {
        return (
            <div className="Left-outer-div">
                <div className="Left-div">
                    <p>
                        This is a basic ReactJS app using the create-react-app boilerplate with some custom components thrown in.
                    </p>
                </div>
            </div>
        )
    } 
}

export default Left;

