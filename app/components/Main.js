// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;
// Here we include all of the sub-components
var Header = require("./children/Header.js");
var Footer = require("./children/Footer.js");
var Sidebar = require("./children/Sidebar.js");
var Video = require("./children/Video.js");
var Book = require("./children/Book.js");
// Requiring our helper for making API calls
var helpers = require("../utils/helpers.js");
// Create the Main component
var Main = React.createClass({


  getInitialState: function() {
    return {
    };
  },
  //  On load display the number of clicks
  componentDidMount: function() {
    console.log("COMPONENT MOUNTED");

    google.books.load();
    // The moment the page renders on page load, we will retrieve the previous click count.
    // We will then utilize that click count to change the value of the click state.
    helpers.getUser()
      .then(function(response) {
        // Using a ternary operator we can set newClicks to the number of clicks in our response object
        // If we don't have any clicks in our database, set newClicks to 0
        
        // var newClicks = response.data.length ? response.data[0].clicks : 0;
        // this.setState({
        //   clicks: newClicks
        
        console.log("RESULTS", response);
        
        }.bind(this));
    },
  
  // Here we render the component
  render: function() {

    return (
      
      <div className="container">

        <Header />

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
        
        <Footer />
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
