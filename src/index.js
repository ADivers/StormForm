import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Comments from './components/Comments';
// import InputForm from './components/InputForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Comments />, document.getElementById('root'));

// ReactDOM.render(
//     <App history={browserHistory} />,
//     document.getElementById('root')
//   );

registerServiceWorker();

// ReactDOM.render(<InputForm />, document.getElementById('root'));
// // registerServiceWorker();
