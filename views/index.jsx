var React = require('react');
var DefaultLayout = require('./layouts/default');
var ChatRoom = require('./chatRoom')

var HelloMessage = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <ChatRoom ></ChatRoom>
      </DefaultLayout>
    );
  }
});

module.exports = HelloMessage;