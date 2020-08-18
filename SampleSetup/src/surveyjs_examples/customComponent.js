import React from 'react';
import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';
import "survey-react/survey.css";

Survey.StylesManager.applyTheme("default");

Survey.ComponentCollection.Instance.add({
    name: 'newquestion',
    title: 'user_name',
    elementsJSON: [
        {
            type: 'text',
            name: 'firstName',
            title: 'First Name',
            isRequired: true,
        },
        {
            type: 'text',
            name: 'middleName',
            title: 'Middle Name',
            startWithNewLine: false
        },
        {
            type: 'text',
            name: 'lastName',
            title: 'Last Name',
            isRequired: true,
            startWithNewLine: false,
        }
    ],
    onInit() {
        Survey.Serializer.addProperty('newquestion', {
            name: 'showMiddleName:string'
        });
    },
    onLoaded(question) {
        this.changeMiddleVisibility(question);
    },
    onPropertyChanged(question, propertyName, newValue) {
        // If some property changes, you can add the action here.
    },
    changeMiddleVisibility(question) {
        let middle = question.contentPanel.getQuestionByName('middleName');
        if (!!middle) {
            middle.visibleIf = question.showMiddleName;
        }
    }
});

var json = {
    pages: [
        {
            name: 'page_one',
            title: 'Welcome to Page One',
            elements: [
                {
                    type: 'radiogroup',
                    name: 'show_middle_name',
                    title: 'Do you want to show middle name?',
                    choices: [
                        {
                            value: 'yes',
                            text: 'Yes. It is required.',
                        },
                        {
                            value: 'no',
                            text: 'No, not required.',
                        },
                    ],
                },
                {
                    type: 'newquestion',
                    name: 'question1',
                    title: 'This is the title of the Composite Question',
                    showMiddleName: "{show_middle_name} = 'yes'",
                }
            ],
        }
    ]
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function (result) {
    console.log('Survey Completed: ', result);
});

survey.onUpdateQuestionCssClasses.add(function (survey, options) {
    var classes = options.cssClasses;
    if (options.question.getType() === 'newquestion') {
        classes.mainRoot += ' anotherNewClass';
        console.log('EVENT: onUpdateQuestionCssClasses >>>', options.cssClasses);
    }
});

export default function CustomComponent(){
    return(
        <Survey.Survey model={survey}/>
    );
}
