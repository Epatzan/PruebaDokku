// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '371423933067428', // your App ID
		'clientSecret' 	: '660f3227fd9112ac0d93a3d4abe208a2', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback',
		//'callbackURL'	: 'http://192.168.0.35:8080/auth/facebook/callback',
		//'scope'			: 'email'
		'enableProof'	: 'true'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'your-consumer-key-here',
		'consumerSecret' 	: 'your-client-secret-here',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};