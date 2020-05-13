I encountered some issues. I have mentioned them as well as the solution which worked for me.

```
react-dom.development.js:88 Warning: Can't perform a React state update on an unmounted component.
This is a no-op, but it indicates a memory leak in your application.
To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
    in SurveyQuestion (created by SurveyRow)
    in div (created by SurveyRow)
    in SurveyRow (created by SurveyPanel)
    in div (created by SurveyPanel)
    in div (created by SurveyPanel)
    in SurveyPanel (created by SurveyRow)
    in div (created by SurveyRow)
    in SurveyRow (created by SurveyPanel)
    in div (created by SurveyPanel)
    in div (created by SurveyPanel)
    in SurveyPanel (created by SurveyRow)
```

## Solution

Still Pending

```
class SurveyComponent extends React.Component {
  _isunmounted = false;
  constructor(props){
    super(props);
    this.onComplete = this.onComplete.bind(this);
  }
}
```

I was getting an error in the line:
```
_isunmounted = false;
```

### SyntaxError: Support for the experimental syntax 'classProperties' isn't currently enabled.

## Solution:

First install the dependencies:
```
npm install @babel/plugin-proposal-class-properties --save-dev
```

Change the .babelrc file as follows:
```
{
  "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
  ],
  "plugins": [
      [
        "@babel/plugin-proposal-class-properties"
      ]
  ]
}
```
