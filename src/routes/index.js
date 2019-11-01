import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Launch from '../components/Launch'
import Details from '../components/Details'
import Card from '../components/Card'
import FoodDescription from '../components/CardDescription'
const AppStack = createStackNavigator({
    Main: {
        screen: Launch,
        navigationOptions: {
            headerTransparent: true
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            header: null
        }
    },
    Card: {
        screen: Card,
        navigationOptions: {
            header: null
        }
    }, Descrioption: FoodDescription
})

export default createAppContainer(AppStack)