import React from 'react';
import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';
import "survey-react/modern.css";

Survey.StylesManager.applyTheme("modern");

var json = {
    "pages":[
        {
            "name":"page_1",
            "title":"Welcome to Page 1",
            "description":"This is a sample page. It shows how the JSON is rendered.",
            "elements":[
                {
                    "name":"name_container",
                    "type":"panel",
                    "elements":[
                        {
                            "name":"college_name",
                            "type":"text",
                            "title":"Enter your college name",
                            "placeHolder":"IIT Kanpur",
                            "isRequired":true
                        },
                        {
                            "name":"graduate_year",
                            "type":"text",
                            "title":"When you graduated?",
                            "placeHolder":"2020",
                            "startWithNewLine":false
                        }
                    ]
                },
                {
                    "name":"birthdate",
                    "type":"text",
                    "inputType":"date",
                    "title":"Your birthdate:",
                    "isRequired":true
                }
            ]
        }
    ]
};

// Global variable window.var_name
window.survey = new Survey.Model(json);

survey.onComplete.add(function (result) {
    console.log('Survey Data: ', result);
});

export default function SimpleSurvey() {
    return (
        <Survey.Survey model={survey}/>
    );
}
