    import React from 'react'; //loads the react library from within the node_modules
    import ReactDOM from 'react-dom'//same same
    import { Button } from 'react-toolbox/lib/button';
    import { AppBar } from 'react-toolbox/lib/app_bar';
    import App from './App';

    //render the element to the dom in the div tag... to the document in the root tag
    ReactDOM.render(
        //render <App /> from the App component imported above
        <App />,
      document.getElementById('root'));
