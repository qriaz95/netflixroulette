import React from 'react';
import './Right.css';

/**
 * React component created using the React.PureComponent method.
 * Just a simple div similar to Left component but the opposite
 * corners have been rounded.
 */
class Right extends React.PureComponent {
    render() {
        return (
            <div className="Right-div">
                <p>
                    Enjoy the pretty animations!
                </p>
            </div>
        )
    } 
}

export default Right;