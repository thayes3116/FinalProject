// Include React
var React = require("react");
var Link = require("react-router").Link;
var Book = React.createClass({

  // Here we render the component
  render: function() {

    return (

      <div id="viewerCanvas" style="width: 600px; height: 500px"></div>
    );
  }
});

// Export the component back for use in other files
module.exports = Book;

