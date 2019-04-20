import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  console.log(props, '123')
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      const tabClass = props.selectedTab === props.tab ? 'tab topics active-tab' : 'tab';
      const tabHandler = () => {
        this.changeSelected(props.tab);
        
        console.log(`My state: ${this.state}`)
        console.log("tab handler activated")
      }
  return (
    <div
      className={tabClass}
      onClick={tabHandler}


    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;

Tab.propTypes = {
  tab: PropTypes.string
}