// Include React
var React = require("react");
var Link = require("react-router").Link;
var Video = React.createClass({


  // Here we render the component
  render: function() {

    return (

        // credentials
      var apiKey = '45828062';
      var sessionId = '1_MX40NTgyODA2Mn5-MTUwMTg0OTEzODg0OH5URi9Zc2hMRkU1dWpBUU1MWEwwbjRzN25-UH4';
      var token = 'T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9MTE4NTU5NmYwNDkxZmU3NjdhODY1ZDUxMDY5YmQxYmE5ZDQ3ZjlkYzpzZXNzaW9uX2lkPTFfTVg0ME5UZ3lPREEyTW41LU1UVXdNVGcwT1RFek9EZzBPSDVVUmk5WmMyaE1Sa1UxZFdwQlVVMU1XRXd3YmpSek4yNS1VSDQmY3JlYXRlX3RpbWU9MTUwMTg0OTE0MSZub25jZT0wLjE3MDI4MDExMzA5NTQwMTI1JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE1MDE5MzU1NDE=';
      // connect to session
      var session = OT.initSession(apiKey, sessionId)
      session.connect(token, function(error) {
         // create publisher
      var publisher = OT.initPublisher();
        session.publish(publisher);

      })
      
      // create subscriber
      session.on('streamCreated', function(event) {
         session.subscribe(event.stream);
      });

      );
  }
});

// Export the component back for use in other files
module.exports = Video;

