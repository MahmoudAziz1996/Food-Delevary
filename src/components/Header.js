import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Header, Left, Right, Body, Button } from 'native-base'
class Head extends Component {


    render() {
        return (
            <View>
                <Header androidStatusBarColor="#E09200" style={styles.contain}>
                    <Left>
                        <Button
                            transparent
                            onPress={this.props.openDrawer}
                        >
                            <Icon
                                name="menu"
                                type="MaterialIcons"
                                style={styles.icon}
                            />
                        </Button>
                    </Left>
                    <Body style={styles.body}>
                        <Text style={styles.title}>
                            BBQ
                    </Text>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation('Card')}
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
export default Head;
