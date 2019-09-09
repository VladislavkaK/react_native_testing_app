import React from 'react';
import { View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { ElementDashboard } from '../../atoms';

interface IContentDashboardProps {
    data: any;
    navigation: any;
    totalQuestions: any;
    successAnswers: any;
    test_set_id: any;
    currentAnswers: any;
    updateResultTest: any;
}

class ContentDashboard extends React.Component<IContentDashboardProps, any> {
    constructor (props: any) {
        super(props);
    }

    render () {
        const { data, navigation, totalQuestions, successAnswers, test_set_id, currentAnswers, updateResultTest } = this.props;

        return (
            <ScrollView>
                <View style={styles.contentDashboard} >
                    <StatusBar hidden={false} backgroundColor='blueviolet' />
                    <ElementDashboard 
                        data={data} 
                        updateResultTest={updateResultTest}
                        currentAnswers={currentAnswers}
                        styleBlock={styles.blockDashboard} 
                        successAnswers={successAnswers}
                        test_set_id={test_set_id}
                        styleElement={styles.elementDashboard}
                        navigation={navigation}
                        totalQuestions={totalQuestions} />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentDashboard: {
        flex: 1,
        flexDirection: 'column'
    },
    blockDashboard: {
        width: '95%',
        height: 200,
        margin: 10,
        backgroundColor: 'powderblue',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    elementDashboard: {
        margin: 20
    }
})

export default ContentDashboard;