// Include React
var React = require("react");
var Link = require("react-router").Link;
var Header = React.createClass({

  // Here we render the component
  render: function() {

    return (

      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img alt="Brand" src="..." />
            </a>
             <ul className="nav navbar-nav">
              <li><a href="#">Link</a></li>
              <li><Link to="/Login">login</Link></li>
              <li><Link to="/Signup">signup</Link></li>
             </ul>
            <div className="dropdown">
              <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <span className="caret"></span>  Link Your Account To               
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Read To Me</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Google</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div> 
          </div>
        </div>
      </nav>
    );
  }
});

// Export the component back for use in other files
module.exports = Header;
