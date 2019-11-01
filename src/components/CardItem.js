import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image } from 'react-native'
import { Button, Icon } from 'native-base'

export default class CardItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image
                        style={styles.image}
                        source={this.props.source}
                    />

                </View>
                <View style={styles.textView}>
                    <Text> {this.props.title} </Text>
                    <Text> {this.props.price} $ </Text>
                </View>
                <View style={styles.btnView}>
                    <Button
                        transparent
                        onPress={() => { }}
                        style={{ height: '25%' }}
                    >
                        <Icon
                            style={{ color: '#1E1E1E' }}
                            name="caretup"
                            type="AntDesign"
                        />
                    </Button>
                    <Text>{this.props.size}</Text>
                    <Button
                        transparent
                        onPress={() => { }}
                        style={{ height: '25%' }}
                    >
                        <Icon
                            style={{ color: '#1E1E1E' }}
                            name="caretdown"
                            type="AntDesign"
                        />
                    </Button>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height / 6.5,
        backgroundColor: 'rgba(0,0,0,.03)',
        borderRadius: 10,
        justifyContent: 'center',
        marginHorizontal: 5,
        marginBottom: 5,
        paddingLeft: '2%',
        paddingRight: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, imageView: {
        height: '100%',
        width: '25%',
        elevation: 10,
        justifyContent: 'center'
    }, image: {
        width: '100%',
        height: '80%',
        borderRadius: 10,
    }, textView: {
        // backgroundColor: '#f78',
        justifyContent: 'space-around',
        alignItems: 'center'
    }, btnView: {
        padding: 10,
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
