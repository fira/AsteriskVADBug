ari = require('ari-client');

var connector = null
var holding = null

var _stasisStart = function (call, chan) {
	holding.addChannel({ channel: chan.id })
}

ari.connect('http://localhost:8088', 'username', 'asterik', function (err, result) {
	connector = result
	connector.bridges.create({
		type: 'mixing',
		name: 'Holding Bridge'
	}, function (err, res) {
		holding = res
		connector.on('StasisStart', _stasisStart);
		connector.start('sigsegvme');
	})
});


