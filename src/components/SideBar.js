import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { List, ListItem, Left, Body, Icon } from 'native-base'
export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageView}>
                  <Image
                  style={styles.image}
                  source={require('../images/food.jpg')}
                  resizeMode="stretch"
                  />
                </View>
                <List>
                    <ListItem itemDivider>
                        <Text>Food</Text>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Icon
                            style={{fontSize: 22,}}
                            type="MaterialCommunityIcons"
                            name="hamburger"
                            />
                        </Left>
                        <Body>
                            <Text>Burgers</Text>
                        </Body>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Icon
                            style={{fontSize: 22,}}
                            type="Entypo"
                            name="bowl"
                            />
                        </Left>
                        <Body>
                            <Text>Chicken</Text>
                        </Body>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Icon
                            style={{fontSize: 22,}}
                            type="FontAwesome5"
                            name="pizza-slice"
                            />
                        </Left>
                        <Body>
                            <Text>Pizza</Text>
                        </Body>
                    </ListItem>
                     <ListItem itemDivider>
                        <Text>Drinks</Text>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Icon
                            style={{fontSize: 22,}}
                            type="Entypo"
                            name="drink"
                            />
                        </Left>
                        <Body>
                            <Text>Top Drinks</Text>
                        </Body>
                    </ListItem>
                </List>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imageView:{
     width:'100%',
     height:'30%'
    },image:{
        width:'100%',
        height:'100%'
    }
})