var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>Hello {this.props.qp}</div>
      </DefaultLayout>
    );
  }
});

module.exports = HelloMessage;