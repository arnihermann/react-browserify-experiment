/** @jsx React.DOM */

var React = require('react-tools').React;

var HelloMessage = React.createClass({
  render: function() {
    return <div>{'Hello ' + this.props.name}</div>;
  }
});

React.renderComponent(
  <HelloMessage name="John Smith" />,
  document.getElementById('example')
);
