import React from 'react';
import { View, Text, StatusBar } from 'react-native';

interface IQuestionScreenProps {
    navigation: any;
}

class QuestionScreen extends React.Component<IQuestionScreenProps, any> {
    constructor (props: any) {
        super(props);
    }

    static navigationOptions = {
        title: `Сет 1: Total 0/10`,
        headerStyle: {
            backgroundColor: 'purple',
        },
    };

    render () {
        const { navigation: { state: { params: { id } } } } = this.props;

        return (
            <View>
                <StatusBar hidden={false} backgroundColor='blueviolet' />
                <Text>Questions list</Text>
            </View>
        )
    }
}

export default QuestionScreen;