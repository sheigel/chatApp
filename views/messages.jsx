var React = require('react');
var Message = require('./message')

var messages = React.createClass({

	render: function() {
		return (
			<div >
				<Message></Message>
				<Message></Message>
			</div>
		);
	}

});

module.exports = messages;