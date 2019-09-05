import React from 'react';
import { View, ActivityIndicator, StatusBar, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getDataTestQuestions } from '../../actions/actionGetTestQustions';
import { ContentTestQuestions } from '../../components/templates';

interface IQuestionScreenProps {
    navigation?: any;
    getDataTest: any;
    testing: any;
    dataAnswers: any;
    isSuccess: boolean | undefined;
    isLoading: boolean | undefined;
}

class QuestionScreen extends React.Component<IQuestionScreenProps, any> {
    private id = this.props.navigation.state.params.id;

    constructor (props: any) {
        super(props);
    }

    static navigationOptions = ({ navigation, navigationOptions }: any) => {
        const { state: { params: { id, total } } } = navigation;

        return {
          title: id && total ? `Сет ${id}: Total 0/${total}` : 'Сет 1: Total 0/10',
          headerStyle: {
            backgroundColor: 'purple',
          },
        };
    };

    componentDidMount () {
        this.props.getDataTest(this.id);
    }

    render () {
        const { isLoading, isSuccess, testing, dataAnswers, navigation } = this.props;
        const { state: { params: { id } } } = this.props.navigation;
        let successAnswers = [];
        let loadData;

        if (isLoading) {
            loadData =
                <View style={[styles.container, styles.horizontal]} >
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
        } else if (!isLoading && isSuccess !== undefined) {
            successAnswers = dataAnswers.filter((data: any, index: any) => {
                return data.answer_success;
            })
 
            loadData = 
                <View>
                    <StatusBar hidden={false} backgroundColor='blueviolet' />
                    <ContentTestQuestions testing={testing} successAnswers={successAnswers} navigation={navigation} set_id={id} />
                </View>
        }

        return (
            <React.Fragment>
                {isSuccess && loadData}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state: any) => {

    return {
        dataAnswers: state.testQuestions.data,
        isSuccess: state.testQuestions.isSuccess,
        isLoading: state.testQuestions.isLoading,
        testing: state.testQuestions.testing,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getDataTest: (id: any) => dispatch(getDataTestQuestions(id))
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen);