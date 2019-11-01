import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Header, Left, Right, Body, Button } from 'native-base'

class DetailHead extends Component {

    render() {
        return (
            <View>
                <Header androidStatusBarColor="#E09200" style={styles.contain}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()} >
                            <Icon
                                name="arrow-back"
                                type="MaterialIcons"
                                style={styles.icon}
                            />
                        </Button>
                    </Left>
                    <Body style={styles.body}>
                        <Text style={styles.title}>
                            {this.props.title}
                    </Text>
                    </Body>
                    <Right>
                        <Button
                        transparent
                        onPress={()=> this.props.navigation.navigate('Card')}
                        >

                        <Icon
                            name="shopping-cart"
                            type="MaterialIcons"
                            style={styles.icon}
                        />
                        </Button>
                    </Right>
                </Header>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contain: {
        backgroundColor: 'orange'
    },
    icon: {
        color: '#000',
        fontSize: 30
    },
    body: {
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Tajawal-Bold',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
export default DetailHead;
