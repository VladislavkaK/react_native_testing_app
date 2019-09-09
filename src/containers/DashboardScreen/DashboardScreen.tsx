import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { ContentDashboard } from '../../components/templates';
import { getDataTest, updateResultTest } from '../../actions/actionGetTests';

interface IDashboardProps {
    getDataTest: any;
    isSuccess: boolean | undefined;
    isLoading: boolean | undefined;
    total_questions: any;
    tests: any;
    navigation: any;
    currentAnswers: any;
    updateResultTest: any;
    totalSuccessAnswers: any;
}

interface IDashboardState {

}

class DashboardScreen extends React.Component<IDashboardProps, IDashboardState> {
    // private successAnswers = this.props.navigation.state.params.successAnswers;

    constructor(props: Readonly<IDashboardProps>) {
        super(props);
    }

    static navigationOptions = {
        title: `Total 0/10`,
        headerStyle: {
            backgroundColor: 'purple',
        },
    };

    // static navigationOptions = ({ navigation, navigationOptions }: any) => {
    //     const { state: { params: { id, total } } } = navigation;

    //     return {
    //         title: id && total ? `Сет ${id}: Total 0/${total}` : 'Сет 1: Total 0/10',
    //         headerStyle: {
    //             backgroundColor: 'purple',
    //         },
    //     };
    // };

    componentDidMount() {
        this.props.getDataTest();
    }

    render() {
        const { isLoading, isSuccess, tests, total_questions, navigation, currentAnswers, updateResultTest, totalSuccessAnswers } = this.props;
        // const { state: { params: { successAnswers } } } = this.props.navigation;
        let loadScreen;

        if (isLoading) {
            loadScreen =
                <View style={[styles.container, styles.horizontal]} >
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
        } else if (!isLoading && isSuccess !== undefined) {
            loadScreen = 
                <ContentDashboard 
                    data={tests} 
                    updateResultTest={updateResultTest}
                    successAnswers={totalSuccessAnswers}
                    currentAnswers={currentAnswers}
                    test_set_id={this.props.navigation.state.params !== undefined ? this.props.navigation.state.params.test_set_id : 0}
                    navigation={navigation} 
                    totalQuestions={total_questions} />
        }

        return (
            <React.Fragment>
                {isSuccess && loadScreen}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any) => {

    return {
        currentAnswers: state.tests.answersData,
        totalSuccessAnswers: state.tests.successAnswers,
        isSuccess: state.tests.isSuccess,
        isLoading: state.tests.isLoading,
        total_questions: state.tests.total_questions,
        tests: state.tests.tests,
        lengthData: state.tests.lengthData,
    }
}

const mapDispatchToProps = {
    getDataTest,
    updateResultTest
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
