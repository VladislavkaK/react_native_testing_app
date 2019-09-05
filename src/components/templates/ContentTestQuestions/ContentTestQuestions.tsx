import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { QuestionButton } from '../../atoms';

interface IContentTestQuestionsProps {
    testing: any;
    navigation: any;
    successAnswers: any;
    forceUnregisterOnUnmount: boolean;
    handleSubmit: any;
    set_id: any;
    reset: any;
}

interface IContentTestQuestionsState {
    question: number;
    trueAnswers: boolean;
}

class ContentTestQuestions extends React.Component<IContentTestQuestionsProps, IContentTestQuestionsState> {
    constructor (props: any) {
        super(props);

        this.state = {
            question: 1,
            trueAnswers: false
        }

        this.nextQuestion = this.nextQuestion.bind(this);
    }

    nextQuestion () {
        this.setState({
            question: this.state.question + 1
        })
    }

    submitData (values: any, successAnswers: any, navigation: any, size: number, set_id: any) {
        this.props.reset();
        navigation.navigate('TotalAnswers', { successAnswers: successAnswers, totalAnswers: size, set_id: set_id })
    }

    render () {
        const { testing, handleSubmit, successAnswers, navigation, set_id } = this.props;
        const { question, trueAnswers } = this.state;
        const size = testing !== undefined && testing.length;

        let blockQuestions = testing.map((data: any, index: number) => {
            const { question_id, question_title, answers } = data;
 
            return (
                <React.Fragment key={index} >
                    
                        {question === index + 1 && 
                                <View>
                                    <View>
                                        <Text style={{textAlign: 'center'}}>{`Вопрос ${question_id} из ${size}`}</Text>
                                    </View>
                                    <View style={{margin: 20}} >
                                        <Text style={{fontSize: 20}} >{`Вопрос ${question_id}. ${question_title}`}</Text>
                                    </View>
                                    <Field 
                                        name={`questions.questions_${question_id}`}
                                        type="submit"
                                        component={QuestionButton}
                                        trueAnswers={trueAnswers}
                                        options={answers} />
                                    {index + 1 === size && 
                                        <TouchableOpacity 
                                            onPress={handleSubmit((values: any) => this.submitData(values, successAnswers, navigation, size, set_id))}
                                        >
                                            <View style={styles.container}>
                                                <Text style={{color: 'white'}}>Завершить</Text>
                                            </View>
                                        </TouchableOpacity>}
                                    {index + 1 !== size && <TouchableOpacity onPress={() => this.nextQuestion()} >
                                        <View style={styles.container}>
                                            <Text style={{color: 'white'}}>Следующий вопрос</Text>
                                        </View>
                                    </TouchableOpacity>}
                                </View>
                            
                        }
                    
                </React.Fragment>
            )        
        })

        return (
            <View>
                <ScrollView>
                    {blockQuestions}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
        marginRight: 20,
        backgroundColor: 'purple',
        borderRadius: 10,
        height: 60,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default reduxForm<any, any>({
    form: 'formQuestions',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(ContentTestQuestions);