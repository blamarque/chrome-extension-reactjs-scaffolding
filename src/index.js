import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App  from './App';
import SampleComponent from "./components/sampleComponentPanel/SampleComponent"

function render(children) {

  ReactDOM.render(
    <React.StrictMode>
      <App>
        {children}
      </App>
    </React.StrictMode>,
    document.getElementById('div-papyrus')
  );
}

//waiting for message from the content_script
window.addEventListener('message', function (event) {
  
  if (event.data.selection) {
    console.log('page javascript got selection:', event);
    render(<SampleComponent text={`Text selected: ${event.data.selection}`} url={event.data.origin}/>);
  } else if (event.data.list) {
    console.log('page javascript got list:', event);
    render(<SampleComponent text={"Extension icon clicked"}/>);
  }

});
