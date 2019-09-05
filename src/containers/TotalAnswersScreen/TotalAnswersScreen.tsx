import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { getResultTest } from '../../actions/actionGetTests';

interface ITotalAnswersScreenProps {
    navigation: any;
    getResultTest: any;
}

class TotalAnswersScreen extends React.Component<ITotalAnswersScreenProps, any> {
    constructor (props: any) {
        super(props)
    }

    static navigationOptions = ({ navigation, navigationOptions }: any) => {
        const { state: { params: { successAnswers, totalQuestions } } } = navigation;

        return {
            title: 'dsa',
        //   title: successAnswers && total ? `Сет ${successAnswers}: Total 0/${total}` : 'Сет 1: Total 0/10',
          headerStyle: {
            backgroundColor: 'purple',
          },
        };
    };

    render () {
        const { state: { params: { successAnswers, totalAnswers, set_id } } } = this.props.navigation;
        const { getResultTest } = this.props;

        return (
            <React.Fragment>
                <View style={styles.container} >
                    <StatusBar hidden={false} backgroundColor='blueviolet' />
                    <Text style={{fontSize: 20}} >
                        {`Результат: ${successAnswers.length}/${totalAnswers}`} 
                    </Text>
                
                </View>
                <TouchableHighlight 
                    style={styles.button} 
                    onPress={() => {
                        getResultTest({ successAnswers: successAnswers, test_set_id: set_id })
                        this.props.navigation.navigate('Dashboard', { successAnswers: successAnswers, test_set_id: set_id })
                    }} 
                >
                    <Text>Вернуться к сетам</Text>
                </TouchableHighlight>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        backgroundColor: '#f8f8ff',
        borderRadius: 10,
        height: 60,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: 20,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        getResultTest: (data: any) => dispatch(getResultTest(data))  
    }
}

export default connect(null, mapDispatchToProps)(TotalAnswersScreen);