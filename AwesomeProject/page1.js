import React, { Component } from 'react';
import CodePush from 'react-native-code-push';

import { Text, View, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: 150,
        height: 80,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        textAlignVertical:'center',
        borderWidth: 2
    }
})

export default class Page1 extends Component {
    constructor() {
        super()
        this.state = {
            text: 'page 1'
        }
    }
    onButtonPress() {
        CodePush.sync({
            updateDialog: {
                mandatoryContinueButtonLabel:'更新',
                mandatoryUpdateMessage:'必要更新',
                optionalIgnoreButtonLabel: '稍后',
                optionalInstallButtonLabel: '后台更新',
                optionalUpdateMessage: '不是必要更新',
                title: '更新提示'
            },
            installMode: CodePush.InstallMode.IMMEDIATE
        })
    }
    checkForUpdate() {
        CodePush.checkForUpdate().then(res => {
            if (!res) {
                Alert.alert('已是最新')
                return ''
            }
            Alert.alert(typeof res === 'object' ? JSON.stringify(res) : res)
        })
    }
    render() {
        return (
            <SafeAreaView style={styles.center}>
                <View>
                    <Text>{this.state.text}</Text>
                </View>
                <View style={styles.btn}>
                    <Text>新加入的代码</Text>
                </View>
                <TouchableOpacity onPress={this.onButtonPress} style={styles.btn}>
                    <Text>安装更新</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.checkForUpdate} style={styles.btn}>
                    <Text>检查更新</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}