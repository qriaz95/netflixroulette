import React from 'react';
import './Top.css';
import Typical from 'react-typical';

/**
 * A Funtion react component created using the React.Component method.
 * Just a simple div with some CSS styling to make the right
 * corners rounded to add some style. 
 */
function Top() {
    return (
        <React.Fragment>
            <header className="Top-header">
                <h1>Hello {' '}
                    <Typical
                        steps={[
                            'World', 3000, 
                            'EPAM', 3000,
                            'ReactJS', 3000.
                        ]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </h1>
            </header>
        </React.Fragment>
    )
}

export default Top;