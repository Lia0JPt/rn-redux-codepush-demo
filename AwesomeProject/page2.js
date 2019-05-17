import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { SafeAreaView } from 'react-navigation';

import { increase, decrease } from './store'

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

class Page2 extends Component {
    constructor() {
        super()
        this.state = {
            text: 'page 2'
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.center}>
                <View>
                    <Text>{this.state.text}</Text>
                </View>
                <TouchableOpacity onPress={this.props.increase} style={styles.btn}>
                    <Text>+</Text>
                </TouchableOpacity>
                <View style={styles.btn}>
                    <Text>{this.props.count}</Text>
                </View>
                <TouchableOpacity onPress={this.props.decrease} style={styles.btn}>
                    <Text>-</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        count: state.count
    })
}
const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease())
    }
}

Page2 = connect(mapStateToProps, mapDispatchToProps)(Page2)

export default Page2