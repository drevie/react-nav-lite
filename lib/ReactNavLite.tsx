
import * as React from 'react';
import './ReactNavLite.scss';


interface ReactSideNavProps {
  show: boolean;
  children: JSX.Element[];
}



class ReactSideNav extends React.Component<ReactSideNavProps, {}> {


  render() {
    const { show, children } = this.props;
    return (
      <div className={`left-nav ${show ? 'expanded' : 'collapsed'}`}>
        {show ? children : null}
      </div>
    );
  }
}


export default ReactSideNav;
