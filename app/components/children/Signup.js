// Include React
var React = require("react");

var Signup = React.createClass({


  // Here we render the component
  render: function() {

    return (

      <div className="container">

        <div className="row">

          <div className="col-lg-12">

            <p>Signup</p>

          </div>

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Signup;
