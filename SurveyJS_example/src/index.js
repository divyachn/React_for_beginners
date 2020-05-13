import React from 'react';
import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';

import "../css/style.css";
import "survey-react/survey.css";

import SurveyComponent from './questions.jsx';

function App() {
  return (
    <div className="App">
      <h3>Income Survey</h3>
      <SurveyComponent />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
