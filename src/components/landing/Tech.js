import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Tech extends React.Component {
  render () {
    return (
      <div className="feature">
        <div className={`big-icon text-${this.props.color}`} style={{marginBottom: 20}}>
          <img src={require(`../../assets/img/${this.props.icon}`)} />
        </div>
        <h6 className={`text-${this.props.color}`}>{this.props.title}</h6>
        <p className="lead" style={{fontSize: 12}}>{this.props.text}</p>
      </div>
    );
  }
};

Tech.propType = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

Tech.defaultProps = {
  color: "primary",
  icon: "tools",
  title: "Work with Bootstrap",
  text: "Bootstrap 4 is a toolkit of front-end components for websites. It provides multiple utilities and components for writing responsive websites."
};

export default Tech;
