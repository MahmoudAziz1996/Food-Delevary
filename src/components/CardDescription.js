import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
import { Button, Icon } from 'native-base'
export default class CardDescription extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#FDA500',
            },
            headerTitle: navigation.getParam('name'),
            headerRight: (
                <Button
                    transparent
                    onPress={() => alert('This is a button!')}
                >
                    <Icon
                        name="shoppingcart"
                        type="AntDesign"
                        style={styles.icon}
                    />
                </Button>
            ),

        }

    };
    render() {
        const source = this.props.navigation.getParam('source', '../images/burger/burger4.jpg');
        return (
            <ImageBackground
                style={styles.ImageBackground}
                source={source}
            >
                <StatusBar barStyle="light-content" backgroundColor="#E09200" />
                <View  style={styles.background}/>
                <View style={styles.desc}>
                    <Text style={styles.text}>
                        {this.props.navigation.getParam('name')}
                    </Text>

                    <Text style={{ ...styles.text, fontSize: 50 }}>
                        {this.props.navigation.getParam('price')} $
                    </Text>
                </View>

                <View style={styles.add}>
                    <TouchableOpacity style={styles.btn} activeOpacity={.5} >

                        <Text style={styles.btnText}>ADD</Text>
                        <Icon name='ios-add-circle-outline' style={{ color: '#fff' }} />
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ImageBackground: {
        width: '100%',
        height: '100%'
    },
    icon: {
        color: '#FFF',
        fontSize: 30
    }, desc: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '50%',
        flexDirection: 'row'
    }, text: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    }, add: {
        height: '50%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',

    }, btn: {
        backgroundColor: '#007C00',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        flexDirection: 'row',

    }, btnText: {
        color: '#fff',
        paddingRight: 8,
        fontSize: 16,
        fontWeight: 'bold',
        textAlignVertical: 'center'
    },background:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,.5)'
    }
})
