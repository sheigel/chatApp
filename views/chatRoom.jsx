var React = require('react');
var ChatRoomTitle = require('./chatRoomTitle');
var Messages = require('./messages');
var Sender = require('./sender');


var chatRoom = React.createClass({
	render:function(){
		return (
			<div className="chatRoom">
				<ChatRoomTitle></ChatRoomTitle>
				<Messages></Messages>
				<Sender></Sender>
			</div>
			);
}
});

module.exports = chatRoom;