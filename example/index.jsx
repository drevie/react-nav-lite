import React from 'react'
import ReactNavLite from '../src/ReactNavLite';

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSideBar: false
        };
    }

    render() {
        const { showSideBar } = this.state;
        return (
            <div>
                <div>
                    <button>Show Side Nav</button>
                </div>
                <ReactNavLite show={showSideBar} >
                    <div>
                        <div>
                            <button>Button 1</button>
                        </div>
                        <div>
                            <button>Button 2</button>
                        </div>
                        <div>
                            <button>Button 3</button>
                        </div>
                        <div>
                            <button>Button 4</button>
                        </div>                                                                    
                    </div>
                </ReactNavLite>
            </div>
        )
    }
}