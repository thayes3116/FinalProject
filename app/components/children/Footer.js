// Include React
var React = require("react");
var Link = require("react-router").Link;
var Footer = React.createClass({

  // Here we render the component
  render: function() {

    return (

      <footer>
        <div className="container text-center">
          Copyright &copy; 2017 Timothy Hayes
        </div>
      </footer>
    );
  }
});

// Export the component back for use in other files
module.exports = Footer;

