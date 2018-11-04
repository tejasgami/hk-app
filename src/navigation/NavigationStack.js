import { createStackNavigator } from 'react-navigation';

import Login from '../containers/Login';
import Home from '../containers/Home';

const RNApp = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        Home: {
            screen: Home,
            navigationOptions: { header: null, gesturesEnabled: false }
        }
    },
    {
        initialRouteName: 'Login'
    }
);

export default RNApp;
