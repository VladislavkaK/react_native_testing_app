import { MainScreen } from '../../containers';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: MainScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
);

export default createAppContainer(AppNavigator);
