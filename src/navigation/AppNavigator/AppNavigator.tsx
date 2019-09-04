import { MainScreen, DashboardScreen, QuestionScreen } from '../../containers';
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
    Dashboard: {
      screen: DashboardScreen,
    },
    QuestionsList: {
      screen: QuestionScreen,
    },
  },
);

export default createAppContainer(AppNavigator);
