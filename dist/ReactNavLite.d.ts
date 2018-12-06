import * as React from 'react';
import './ReactNavLite.css';
interface ReactSideNavProps {
    show: boolean;
    children: JSX.Element[];
}
declare class ReactSideNav extends React.Component<ReactSideNavProps, {}> {
    render(): JSX.Element;
}
export default ReactSideNav;
