import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image } from 'react-native'
import Header from './DetailHeader'
import FoodItem from './DetailItem.js'
const height = Dimensions.get('window').height;
export default class Details extends Component {
    render() {
        const { navigation } = this.props
        const titles = navigation.getParam('foodTitle', "");
        const prices = navigation.getParam('prices', "");
        const images = navigation.getParam('images', "")
        const descriptions = navigation.getParam('foodDescriptions', "");
        let foodItems = []

        for (let i = 0; i < 3; i++) {
            foodItems.push(
                <FoodItem
                    navigation={navigation}
                    source={images[i]}
                    foodTitle={titles[i]}
                    prices={prices[i]}
                    description={descriptions[i]}
                    key={i}
                />
            )
        }
        return (


            <View style={styles.container}>
                <Header title={navigation.getParam('title', "Details")} navigation={navigation} />
                <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                    <Text style={{ fontSize: 35, fontFamily: 'Tajawal-Bold' }}>
                        {navigation.getParam('title', "")}s
                    </Text>
                </View>
                {foodItems}
            </View>
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
