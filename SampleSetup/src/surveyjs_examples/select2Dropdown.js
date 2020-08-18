import React from 'react';
import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';

import $ from 'jquery'; // Required for using surveyjs-widgets
import * as Widgets from 'surveyjs-widgets';

import 'survey-react/modern.css';

// select2 dependencies
import 'select2/dist/js/select2.js';
import 'select2/dist/css/select2.css';

window["$"] = window["jQuery"] = $; // Required for using surveyjs-widgets

// Use the widget
Widgets.select2(Survey);

Survey.StylesManager.applyTheme("modern");

var json = {
    "pages":  [
        {
            "name": "page1",
            "title": "This is Page Title",
            "elements": [
                {
                    "type": "dropdown",
                    "renderAs": "select2",
                    "select2Config":{
                        "allowClear":false,
                        "placeholder":"--Name--"
                     },
                    "name": "greeting",
                    "title": "Say something",
                    "choices": [
                        "hello", "hi", "haha", "hola", "hey"
                    ]
                }
            ]
        }
    ]
}

window.survey = new Survey.Model(json);

export default function CustomDropdown(){
    return(
        <Survey.Survey model={survey}/>
    );
}
