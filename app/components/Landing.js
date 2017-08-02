// Include React
var React = require("react");

var Landing= React.createClass({

  // Here we render the component
  render: function() {

    return (

      <div class="container">

        <div className="jumbotron text-center">
            <h1><span className="fa fa-lock"></span> Node Authentication</h1>

            <p>Login or Register with:</p>

            <a href="/login" class="btn btn-default"><span class="fa fa-user"></span> Local Login</a>
            <a href="/signup" class="btn btn-default"><span class="fa fa-user"></span> Local Signup</a>
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Landing;
