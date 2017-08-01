// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '131554850781685', // your App ID
        'clientSecret'  : '0fec864b5105ee6f29ff6039349cb92f', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '733938534419-8s8ne9dhk41k1e09csdi83ja0ps27o3e.apps.googleusercontent.com',
        'clientSecret'  : 'Xq-IU9f7ji3w15kRCbPT822l',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};