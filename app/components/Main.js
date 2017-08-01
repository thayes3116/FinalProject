// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron text-center">
            <h1>Read To Me!!</h1>
            
            <Link to="/Login"><button className="btn btn-default">Login</button></Link>
            <Link to="/Signup"><button className="btn btn-default">Signup</button></Link>
          </div>

          <div className="row">
            <div className="text-center">
              
            </div>
          </div>

          <div className="container">

            {/* Added this.props.children to dump all of the child components into place */}
            {this.props.children}

          </div>
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
