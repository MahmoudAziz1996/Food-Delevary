import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'


let height = Dimensions.get('window').height;
export default class FoodItem extends Component {
    render() {
        const { title, navigation, source, foodTitle, images, prices, foodDescriptions } = this.props
        return (
            <TouchableOpacity
                activeOpacity={.9}
                onPress={() => { navigation('Details', { title, source, foodTitle, prices, images, foodDescriptions }) }}>
                <View >
                    <Image
                        blurRadius={2.5}
                        style={styles.image}
                        source={source} />

                    <View style={styles.title}>
                        <Text style={styles.text}>
                            {title}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: height / 2
    },
    title: {
        position: 'absolute',
        justifyContent: 'center',
        width: '100%',
        height: '100%',

    }, text: {
        borderWidth: 2,
        borderColor: '#ddd',
        padding: '5%',
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        borderRadius: 20,
        fontWeight: 'bold',
        marginHorizontal: '20%',
        letterSpacing: 2
    }
})

// export default FoodItem
