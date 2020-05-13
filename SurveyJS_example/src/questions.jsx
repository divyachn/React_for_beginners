import React from 'react';
import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';

var json =
{
  "completeText": "Finish",
  "pageNextText": "Continue",
  "pagePrevText": "Previous",
  "pages": [
      {
          "elements": [
              {
                  "type": "panel",
                  "elements": [
                      {
                          "type": "html",
                          "name": "income_intro",
                          "html": "<article class='intro'>    <h1 class='intro__heading intro__heading--income title'>                     Income              </h1>    <div class='intro__body wysiwyg'>       <p>In this section, you will be asked about your current employment and any other way you and your partner currently receive income.</p>       <p>It will be handy to have the following in front of you:</p>       <ul>        \t<li>        \t\tPayslip (for employment details)        \t</li>        \t<li>        \t\t<p>A current Centrelink Schedule for any account based pension from super, annuities, or other income stream products that you own</p>        \t\t<p>        \t\t\tIf you don't have a current one you can get these schedules by contacting your income stream provider        \t\t</p>        \t</li>        \t<li>        \t\tLatest statement from any payments (from Centrelink or other authority)        \t</li>       </ul>         </div> </article>"
                      }
                  ],
                  "name": "panel1"
              }
          ],
          "name": "page0"
      }, {
          "elements": [
              {
                  "type": "panel",
                  "elements": [
                      {
                          "type": "radiogroup",
                          "choices": [
                              "Married", "In a registered relationship", "Living with my partner", "Widowed", "Single"
                          ],
                          "name": "maritalstatus_c",
                          "title": " "
                      }
                  ],
                  "name": "panel13",
                  "title": "What is your marital status?"
              }
          ],
          "name": "page1"
      }, {
          "elements": [
              {
                  "type": "panel",
                  "elements": [
                      {
                          "type": "panel",
                          "elements": [
                              {
                                  "type": "radiogroup",
                                  "choices": [
                                      {
                                          "value": "1",
                                          "text": "Yes"
                                      }, {
                                          "value": "0",
                                          "text": "No"
                                      }
                                  ],
                                  "colCount": 2,
                                  "isRequired": true,
                                  "name": "member_receives_income_from_employment",
                                  "title": " "
                              }, {
                                  "type": "checkbox",
                                  "name": "member_type_of_employment",
                                  "visible": false,
                                  "visibleIf": "{member_receives_income_from_employment} =1",
                                  "title": "  ",
                                  "isRequired": true,
                                  "choices": ["Self employment", "All other types of employment"]
                              }
                          ],
                          "name": "panel2",
                          "title": "You"
                      }, {
                          "type": "panel",
                          "elements": [
                              {
                                  "type": "radiogroup",
                                  "choices": [
                                      {
                                          "value": "1",
                                          "text": "Yes"
                                      }, {
                                          "value": "0",
                                          "text": "No"
                                      }
                                  ],
                                  "colCount": 2,
                                  "isRequired": true,
                                  "name": "partner_receives_income_from_employment",
                                  "title": " "
                              }, {
                                  "type": "checkbox",
                                  "name": "partner_type_of_employment",
                                  "visible": false,
                                  "visibleIf": "{partner_receives_income_from_employment} =1",
                                  "title": " ",
                                  "isRequired": true,
                                  "choices": ["Self employment", "All other types of employment"]
                              }
                          ],
                          "name": "panel1",
                          "startWithNewLine": false,
                          "title": "Your Partner",
                          "visible": false,
                          "visibleIf": "{maritalstatus_c} = 'Married' or {maritalstatus_c} = 'In a registered relationship' or {maritalstatus_c} = 'Living with my partner'"
                      }
                  ],
                  "name": "panel5",
                  "title": "Do you and/or your partner currently receive income from employment?"
              }
          ],
          "name": "page2"
      }, {
          "elements": [
              {
                  "type": "panel",
                  "elements": [
                      {
                          "type": "panel",
                          "elements": [
                              {
                                  "type": "paneldynamic",
                                  "minPanelCount": 1,
                                  "name": "member_arrray_employer_names",
                                  "valueName": "member_arrray_employer",
                                  "title": "Please enter all your employers",
                                  "panelAddText": "Add another employer",
                                  "panelCount": 1,
                                  "templateElements": [
                                      {
                                          "type": "text",
                                          "name": "member_employer_name",
                                          "valueName": "name",
                                          "title": "Name of employer"
                                      }
                                  ]
                              }
                          ],
                          "name": "panel2",
                          "title": "You",
                          "visible": false,
                          "visibleIf": "{member_type_of_employment} contains 'All other types of employment'"
                      }, {
                          "type": "panel",
                          "elements": [
                              {
                                  "type": "paneldynamic",
                                  "minPanelCount": 1,
                                  "name": "partner_arrray_employer_names",
                                  "valueName": "partner_arrray_employer",
                                  "title": "Please enter all your partner employers",
                                  "panelAddText": "Add another employer",
                                  "panelCount": 1,
                                  "templateElements": [
                                      {
                                          "type": "text",
                                          "name": "partner_employer_name",
                                          "valueName": "name",
                                          "title": "Name of employer"
                                      }
                                  ]
                              }
                          ],
                          "name": "panel8",
                          "startWithNewLine": false,
                          "title": "Your Partner",
                          "visible": false,
                          "visibleIf": "{partner_type_of_employment} contains 'All other types of employment'"
                      }
                  ],
                  "name": "panel6",
                  "title": "Who are you employed by?"
              }
          ],
          "name": "page3.1",
          "visible": false,
          "visibleIf": "{member_type_of_employment} contains 'All other types of employment' or {partner_type_of_employment} contains 'All other types of employment'"
      }, {
          "elements": [
              {
                  "type": "panel",
                  "elements": [
                      {
                          "type": "panel",
                          "elements": [
                              {
                                  "type": "paneldynamic",
                                  "renderMode": "progressTop",
                                  "allowAddPanel": false,
                                  "allowRemovePanel": false,
                                  "name": "member_arrray_employer_info",
                                  "title": "Your employers",
                                  "valueName": "member_arrray_employer",
                                  "panelCount": 1,
                                  "templateElements": [
                                      {
                                          "type": "panel",
                                          "name": "panel_member_employer_address",
                                          "title": "Address",
                                          "elements": [
                                              {
                                                  "type": "text",
                                                  "name": "member_employer_address",
                                                  "valueName": "address",
                                                  "title": "Address"
                                              }, {
                                                  "type": "text",
                                                  "name": "member_employer_phone",
                                                  "valueName": "phone",
                                                  "title": "Phone number:"
                                              }, {
                                                  "type": "text",
                                                  "name": "member_employer_abn",
                                                  "valueName": "abn",
                                                  "title": "ABN"
                                              }
                                          ]
                                      }, {
                                          "type": "panel",
                                          "name": "panel_member_employer_role",
                                          "title": "What is your role?",
                                          "elements": [
                                              {
                                                  "type": "radiogroup",
                                                  "choices": [
                                                      "Full time", "Part time", "Casual", "Seasonal"
                                                  ],
                                                  "name": "member_employer_role",
                                                  "title": "Your role",
                                                  "valueName": "role"
                                              }
                                          ]
                                      }, {
                                          "type": "panel",
                                          "name": "panel_member_employer_hours_work",
                                          "title": "What hours do you work?",
                                          "elements": [
                                              {
                                                  "type": "text",
                                                  "inputType": "number",
                                                  "name": "member_employer_hours_worked",
                                                  "valueName": "hours_worked",
                                                  "title": "Hours:"
                                              }, {
                                                  "type": "dropdown",
                                                  "name": "member_employer_hours_worked_frequency",
                                                  "title": "Worked Frequency:",
                                                  "valueName": "hours_worked_frequency",
                                                  "startWithNewLine": false,
                                                  "defaultValue": "Year",
                                                  "choices": ["Day", "Week", "Fortnight", "Month", "Year"]
                                              }
                                          ]
                                      }, {
                                          "type": "panel",
                                          "name": "panel_member_employer_income",
                                          "title": "What income do you receive?",
                                          "elements": [
                                              {
                                                  "type": "text",
                                                  "inputType": "number",
                                                  "name": "member_employer_income",
                                                  "valueName": "income",
                                                  "title": "Income:"
                                              }, {
                                                  "type": "dropdown",
                                                  "name": "member_employer_income_frequency",
                                                  "title": "Income Frequency",
                                                  "valueName": "income_frequency",
                                                  "startWithNewLine": false,
                                                  "defaultValue": "Year",
                                                  "choices": ["Day", "Week", "Fortnight", "Month", "Year"]
                                              }
                                          ]
                                      }
                                  ],
                                  "templateTitle": "Employer name: {panel.name}"
                              }
                          ],
                          "name": "panel17",
                          "title": "You",
                          "visibleIf": "{member_type_of_employment} contains 'All other types of employment'"
                      }, {
                          "type": "panel",
                          "elements": [
                              {
                                  "type": "paneldynamic",
                                  "renderMode": "progressTop",
                                  "allowAddPanel": false,
                                  "allowRemovePanel": false,
                                  "name": "partner_arrray_employer_info",
                                  "title": "Your partner employers",
                                  "valueName": "partner_arrray_employer",
                                  "panelCount": 1,
                                  "templateElements": [
                                      {
                                          "type": "panel",
                                          "name": "panel_partner_employer_address",
                                          "title": "Address",
                                          "elements": [
                                              {
                                                  "type": "text",
                                                  "name": "partner_employer_address",
                                                  "valueName": "address",
                                                  "title": "Address:"
                                              }, {
                                                  "type": "text",
                                                  "name": "partner_employer_phone",
                                                  "valueName": "phone",
                                                  "title": "Phone number"
                                              }, {
                                                  "type": "text",
                                                  "name": "partner_employer_abn",
                                                  "valueName": "abn",
                                                  "title": "ABN"
                                              }
                                          ]
                                      }, {
                                          "type": "panel",
                                          "name": "panel_partner_employer_role",
                                          "title": "What is your role?",
                                          "elements": [
                                              {
                                                  "type": "radiogroup",
                                                  "choices": [
                                                      "Full time", "Part time", "Casual", "Seasonal"
                                                  ],
                                                  "name": "partner_employer_role",
                                                  "title": "Your role",
                                                  "valueName": "role"
                                              }
                                          ]
                                      }, {
                                          "type": "panel",
                                          "name": "panel_partner_employer_hours_work",
                                          "title": "What hours do you work?",
                                          "elements": [
                                              {
                                                  "type": "text",
                                                  "inputType": "number",
                                                  "name": "partner_employer_hours_worked",
                                                  "valueName": "hours_worked",
                                                  "title": "Hours"
                                              }, {
                                                  "type": "dropdown",
                                                  "name": "partner_employer_hours_worked_frequency",
                                                  "valueName": "hours_worked_frequency",
                                                  "title": "Worked Frequency:",
                                                  "startWithNewLine": false,
                                                  "defaultValue": "Year",
                                                  "choices": ["Day", "Week", "Fortnight", "Month", "Year"]
                                              }
                                          ]
                                      }, {
                                          "type": "panel",
                                          "name": "panel_partner_employer_income",
                                          "title": "What income do you receive?",
                                          "elements": [
                                              {
                                                  "type": "text",
                                                  "inputType": "number",
                                                  "name": "partner_employer_income",
                                                  "valueName": "income",
                                                  "title": "Income:"
                                              }, {
                                                  "type": "dropdown",
                                                  "name": "partner_employer_income_frequency",
                                                  "valueName": "income_frequency",
                                                  "title": "Income frequency:",
                                                  "startWithNewLine": false,
                                                  "defaultValue": "Year",
                                                  "choices": ["Day", "Week", "Fortnight", "Month", "Year"]
                                              }
                                          ]
                                      }
                                  ],
                                  "templateTitle": "Employer name: {panel.name}"
                              }
                          ],
                          "name": "panel18",
                          "startWithNewLine": false,
                          "title": "You partner",
                          "visibleIf": "{partner_type_of_employment} contains 'All other types of employment'"
                      }
                  ],
                  "name": "panel16",
                  "title": "Tells us about your employer(s)"
              }
          ],
          "name": "page3.2",
          "visibleIf": "{member_type_of_employment} contains 'All other types of employment' or {partner_type_of_employment} contains 'All other types of employment'"
      }, {
          "elements": [
              {
                  "type": "panel",
                  "elements": [
                      {
                          "type": "panel",
                          "elements": [
                              {
                                  "type": "radiogroup",
                                  "choices": [
                                      {
                                          "value": "1",
                                          "text": "Yes"
                                      }, {
                                          "value": "0",
                                          "text": "No"
                                      }
                                  ],
                                  "colCount": 2,
                                  "isRequired": true,
                                  "name": "member_receive_fringe_benefits",
                                  "title": " "
                              }, {
                                  "type": "panel",
                                  "elements": [
                                      {
                                          "type": "text",
                                          "name": "member_fringe_benefits_type"
                                      }, {
                                          "type": "text",
                                          "name": "member_fringe_benefits_value"
                                      }, {
                                          "type": "radiogroup",
                                          "choices": [
                                              "Grossed up", "Not grossed up"
                                          ],
                                          "name": "member_fringe_benefits_grossing"
                                      }
                                  ],
                                  "name": "panel11",
                                  "visible": false,
                                  "visibleIf": "{member_receive_fringe_benefits} = 1"
                              }
                          ],
                          "name": "panel2",
                          "title": "You",
                          "visible": false,
                          "visibleIf": "{member_type_of_employment} contains 'All other types of employment'"
                      }, {
                          "type": "panel",
                          "elements": [
                              {
                                  "type": "radiogroup",
                                  "choices": [
                                      {
                                          "value": "1",
                                          "text": "Yes"
                                      }, {
                                          "value": "0",
                                          "text": "No"
                                      }
                                  ],
                                  "colCount": 2,
                                  "isRequired": true,
                                  "name": "partner_receive_fringe_benefits",
                                  "title": " "
                              }, {
                                  "type": "panel",
                                  "elements": [
                                      {
                                          "type": "text",
                                          "name": "partner_fringe_benefits_type"
                                      }, {
                                          "type": "text",
                                          "name": "partner_fringe_benefits_value"
                                      }, {
                                          "type": "radiogroup",
                                          "choices": [
                                              "Grossed up", "Not grossed up"
                                          ],
                                          "name": "partner_fringe_benefits_grossing"
                                      }
                                  ],
                                  "name": "panel12",
                                  "visible": false,
                                  "visibleIf": "{partner_receive_fringe_benefits} = 1"
                              }
                          ],
                          "name": "panel1",
                          "startWithNewLine": false,
                          "title": "Your Partner",
                          "visible": false,
                          "visibleIf": "{partner_type_of_employment} contains 'All other types of employment'"
                      }
                  ],
                  "name": "panel9",
                  "title": "Do any of your employers provide you with fringe benefits?"
              }
          ],
          "name": "page4",
          "visible": false,
          "visibleIf": "{member_type_of_employment} contains 'All other types of employment' or {partner_type_of_employment} contains 'All other types of employment'"
      }, {
          "elements": [
              {
                  "type": "panel",
                  "elements": [
                      {
                          "type": "panel",
                          "elements": [
                              {
                                  "type": "radiogroup",
                                  "choices": [
                                      {
                                          "value": "1",
                                          "text": "Yes"
                                      }, {
                                          "value": "0",
                                          "text": "No"
                                      }
                                  ],
                                  "colCount": 2,
                                  "isRequired": true,
                                  "name": "member_seasonal_intermittent_or_contract_work",
                                  "title": " "
                              }
                          ],
                          "name": "panel2",
                          "title": "You",
                          "visible": false,
                          "visibleIf": "{member_receives_income_from_employment} = 1"
                      }, {
                          "type": "panel",
                          "elements": [
                              {
                                  "type": "radiogroup",
                                  "choices": [
                                      {
                                          "value": "1",
                                          "text": "Yes"
                                      }, {
                                          "value": "0",
                                          "text": "No"
                                      }
                                  ],
                                  "colCount": 2,
                                  "isRequired": true,
                                  "name": "partner_seasonal_intermittent_or_contract_work",
                                  "title": " "
                              }
                          ],
                          "name": "panel1",
                          "startWithNewLine": false,
                          "title": "Your Partner",
                          "visible": false,
                          "visibleIf": "{partner_receives_income_from_employment} =1 "
                      }
                  ],
                  "name": "panel10",
                  "title": "In the last 6 months, have you done any seasonal, intermittent or contract work?"
              }
          ],
          "name": "page5",
          "visible": false,
          "visibleIf": "{member_receives_income_from_employment} = 1 or {partner_receives_income_from_employment} =1 "
      }
  ],
  "requiredText": "",
  "showQuestionNumbers": "off",
  "storeOthersAsComment": false
};

var survey = new Survey.Model(json);

class SurveyComponent extends React.Component {
  _ismounted = false;
  constructor(props) {
    super(props);
    this.state = { isCompleted: false };
    this.onComplete = this.onComplete.bind(this);
  }

  componentDidMount() {
    this._ismounted = true;
  }

  componentWillUnmount() {
    this._ismounted = false;
  }

  onComplete() {
    console.log("Is it mounted? " + this._ismounted)  // true
    if(this._ismounted){
      this.setState({ isCompleted: true });
    }
    console.log("Survey results: " + JSON.stringify(survey.data));
  }

  render() {

    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey model={survey} onComplete={this.onComplete} /> ) : null;

    var onCompleteComponent = this.state.isCompleted ? (
      <div>You have finished the survey.</div> ) : null;

    return (
      <div>
        {surveyRender}
        {onCompleteComponent}
      </div>
    );

  }
}

export default SurveyComponent;
