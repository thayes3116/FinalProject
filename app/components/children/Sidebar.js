// Include React
var React = require("react");
var Link = require("react-router").Link;
var Sidebar = React.createClass({

  // Here we render the component
  render: function() {

    return (
    
    <ul id="slide-out" class="side-nav fixed custom-scrollbar">

        
        <li><p>item</p>
        </li> 
        <li><p>item</p>
        </li> 
        <li><p>item</p>
        </li> 
        <li><p>item</p>
        </li> 
    
    </ul>  
    );
  }
});

// Export the component back for use in other files
module.exports = Sidebar;

