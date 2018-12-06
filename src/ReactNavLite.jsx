import React from 'react';
import PropTypes from 'prop-types';
import './ReactNavLite.scss';


class ReactSideNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { show, children } = this.props;
    return (
      <div className={`left-nav ${show ? 'expanded' : 'collapsed'}`}>
        {show ? children : null}
      </div>
    );
  }
}
LeftNav.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

LeftNav.defaultProps = {
  children: [],
};

export default ReactSideNav;
