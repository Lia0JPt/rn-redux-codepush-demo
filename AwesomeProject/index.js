import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import CodePush from "react-native-code-push"

let CodePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL }

class Application extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => CodePush(CodePushOptions)(Application));