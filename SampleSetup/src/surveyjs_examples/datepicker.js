import React from 'react';
import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';
import * as Widgets from 'surveyjs-widgets';

import $ from 'jquery'; // Required for using surveyjs-widgets

import 'survey-react/modern.css';

// Jquery Datepicker dependencies
import 'jquery-ui/ui/widgets/datepicker.js';
import 'jquery-ui/themes/base/datepicker.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/core.css';

// Bootstrap Datepicker dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.js';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.css';

window["$"] = window["jQuery"] = $; // Required for using surveyjs-widgets

// Custom widget:
import './customWidget/bootstrapdatepicker.js';

Widgets.jqueryuidatepicker(Survey);
// Widgets.bootstrapdatepicker(Survey);

Survey.StylesManager.applyTheme("modern");

var json = {
    "elements": [
        {
            "name": "default_date",
            "type": "text",
            "inputType": "date",
            "title": "Default Date"
        },
        {
            "type": "bootstrapdatepicker",
            "name": "bootstrap_date",
            "title": "Bootstrap Datepicker",
            "dateFormat": "dd/mm/yyyy",
            "startDate": "31/12/1920",
            "isRequired": true,
            "inputType": "date"
        },
        {
            "type": "datepicker",
            "name": "jquery_date",
            "title": "JQuery date",
            "inputType": "date"
        }
    ]
};

window.survey = new Survey.Model(json);

export default function customDatePicker(){
    return(
        <>
            <h3>Different Variety of Dates</h3>
            <Survey.Survey model={survey}/>
        </>
    );
}
