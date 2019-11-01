import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { Drawer } from 'native-base';
import FoodItem from '../components/FoodItem'
import Sidebar from './SideBar'
import Header from './Header'
let burger = require('../images/burger.jpg');
let checken = require('../images/chicken.jpg');
let pizza = require('../images/pizza.jpg');
let burgers = [require('../images/burger/burger1.jpg'), require('../images/burger/burger2.jpg'), require('../images/burger/burger3.jpg')]
let cheikens = [require('../images/checken/chicken1.jpg'), require('../images/checken/chicken2.jpg'), require('../images/checken/chicken3.jpg')]
let pizzas = [require('../images/pizza/pizza1.jpg'), require('../images/pizza/pizza2.jpg'), require('../images/pizza/pizza3.jpg')]
export default class Launch extends Component {

    closeDrawer = () => {
        this.drawer._root.close();
    }
    openDrawer = () => {
      this.drawer._root.open()
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <Drawer
                ref={(ref) => this.drawer = ref}
                content={<Sidebar />}
                onClose={() => this.closeDrawer}
                onOpen={() => this.openDrawer}
            >
                <View>
                    <Header openDrawer={this.openDrawer} navigation={navigate}/>
                    <ScrollView>
                        <FoodItem
                            source={burger}
                            title="Burger"
                            navigation={navigate}
                            foodTitle={["BBQ Burger", "Spicy Burger", "Big Burger"]}
                            foodDescriptions={["Awesome BBq burger", "Very spicy burger for this people love", "A big burger if you very hungry."]}
                            prices={["14", "17", "12"]}
                            images={burgers}
                        />
                        <FoodItem
                            source={checken}
                            title="Checken"
                            navigation={navigate}
                            foodTitle={["Banu Chicken", "Spicy Chicken", "Kfc Burger"]}
                            prices={["16", "18", "11"]}
                            foodDescriptions={["Awesome BBq burger", "Very spicy burger for this people love", "A big burger if you very hungry."]}
                            images={cheikens}
                        />
                        <FoodItem
                            source={pizza}
                            title="Pizza"
                            prices={["15", "10", "14"]}
                            foodDescriptions={["Awesome BBq burger", "Very spicy burger for this people love", "A big burger if you very hungry."]}
                            foodTitle={["hot Pizza", "Large Pizza", "Butter Pizza"]}
                            images={pizzas}
                            navigation={navigate} />
                    </ScrollView>
                </View>
            </Drawer >
        )
    }
}

const styles = StyleSheet.create({

})
