# 🍋💡 react-nav-lite 💡🍋
A Node.js module which provides a lightweigth navigation sidebar for React

## Installation
```sh
npm install react-nav-lite --save
yarn add react-nav-lite
```

## Usage
```javascript
import React from 'react'
import ReactNavLite from 'react-nav-lite';

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggleSideBar = this.toggleSideBar.bind(this);

        this.state = {
            showSideBar: false
        };
    }
    
    toggleSideBar() {
        this.setState({
            showSidebar: !this.state.showSidebar,
        });
    }

    render() {
        const { showSideBar } = this.state;
        return (
            <div>
                <div>
                    <button onClick={this.toggleSideBar}>Show Side Nav</button>
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

```
