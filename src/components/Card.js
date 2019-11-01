import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './CardHeader'
import CardItem from './CardItem'
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Header navigation={navigation} />
                <ScrollView style={{marginTop:5}}>
                    <CardItem title="Burger" price={18} size={1} source={require('../images/checken/chicken1.jpg')}/>
                    <CardItem title="Checken"  price={8} size={14} source={require('../images/checken/chicken2.jpg')}/>
                </ScrollView>

                <View style={styles.bottom}>
                    <Text style={styles.bottomTotaolTxt}>Total:</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }, bottom: {
        height: '12%',
        width: '100%',
        backgroundColor: '#A01207',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 8,
        position: 'absolute',
        bottom: 0
    },
    bottomTotaolTxt: {
        fontFamily: 'Tajawal-Regular',
        fontSize: 18,
        color: '#fff',
        alignSelf: 'center'
    }
})
export default Card;
