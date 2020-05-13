I encountered some issues. I have mentioned them as well as the solution which worked for me.

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
