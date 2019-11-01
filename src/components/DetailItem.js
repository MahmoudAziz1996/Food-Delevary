import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native'

const height = Dimensions.get('window').height;

export default class Item extends Component {

    render() {
        return (
            <TouchableOpacity activeOpacity={.5} onPress={() => { this.props.navigation.navigate('Descrioption', { source: this.props.source, name: this.props.foodTitle, price: this.props.prices }) }}>
                <View style={styles.item}>
                    <View style={styles.price}>
                        <Text style={styles.text}>
                            {this.props.prices} $
                        </Text>
                    </View>

                    <View style={styles.imageView}>
                        <Image
                            style={styles.image}
                            source={this.props.source}
                        />
                    </View>

                    <View style={styles.descriptionView}>
                        <Text style={styles.descriptionTitle}>{this.props.foodTitle}</Text>
                        <Text style={styles.descriptionContent}>{this.props.description}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }, item: {
        height: height / (4),
        paddingLeft: '5%',
        alignItems: 'center',
        justifyContent: 'center'

    }, price: {
        backgroundColor: '#87AB1D',
        position: 'absolute',
        width: '30%',
        height: '20%',
        borderRadius: 10,
        top: 10,
        left: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5
    }, text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '400'
    }, imageView: {
        width: '50%',
        height: '70%',
        position: 'absolute',
        top: 25,
        left: 30
    }, image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    descriptionView: {
        width: '50%',
        height: '70%',
        position: 'absolute',
        top: 10,
        right: 20,
        backgroundColor: 'rgba(0,0,0,.1)',
        alignItems: 'center',
        borderRadius: 10,
        zIndex: -1,
        padding: 8
    }, descriptionTitle: {
        fontWeight: 'bold'
    }, descriptionContent: {
        paddingLeft: '20%',
        textAlign: 'center'
    }
})
