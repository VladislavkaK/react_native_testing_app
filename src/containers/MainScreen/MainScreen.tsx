import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

interface IMainProps {
  navigation: any;
}

interface IMainState {

}

class MainPage extends React.Component<IMainProps, IMainState> {
  constructor (props: Readonly<IMainProps>) {
    super(props);
  }

  performTime = async () => {
    return new Promise((resolve): any =>
      setTimeout(
        () => { resolve('result'); },
        2000,
      ),
    );
  }

  async componentDidMount () {
    const data = await this.performTime();

    if (data !== null) {
      this.props.navigation.navigate('Dashboard');
    }
  }

  render () {
    return (
      <View style={styles.viewStyles}>
        <StatusBar hidden={true} backgroundColor='purple' />
        <Text style={styles.textStyles}>
          Meduza Фейк
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default MainPage;
