import React, { useState } from 'react';
import { View, Alert, TouchableOpacity, ScrollView, Text, StyleSheet, Button } from 'react-native';
import { answersData } from '../../../actions/actionGetTestQustions';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const QuestionButton = (props: any) => {
    const { input, meta, options, trueAnswers, answersData } = props;
    const [checkedAnswer, setCheckedAnswer] = useState(false);
    const [indexAnswer, setIndexAnswer] = useState();
    // const [arr, setArr]: any = useState({});
    const [successAnswer, setSuccessAnswer] = useState(false);

    const questions = options.map((questionsData: any, index: number) => {
        const { answer_id, answer_success, answer_title } = questionsData;

        return (
            <TouchableOpacity
                    {...props}
                    key={index}
                    onPress={(e) => {
                        setCheckedAnswer(!checkedAnswer);
                        setIndexAnswer(answer_id);
                        setSuccessAnswer(!successAnswer);
                        answersData({
                            answer_id: answer_id,
                            answer_title: answer_title,
                            answer_success: answer_success,
                        })
                        return input.onChange(input.value)
                    }}
                >
                    <View style={[styles.container, (checkedAnswer && answer_id === indexAnswer) ? { borderWidth: 2, borderColor: 'green' } : {  } ]} >
                        <Text style={{fontSize: 14, textAlign: 'center'}}>{answer_title}</Text>
                    </View>  
            </TouchableOpacity>         
        )
    })

    return (
        <React.Fragment>
            {questions}
        </React.Fragment>    
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        backgroundColor: '#f8f8ff',
        borderRadius: 10,
        // borderWidth: 1,
        // borderColor: 'red',
        height: 60,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapDispatchToProps = (dispatch: any) => {
   return {
    answersData: (data: any) => dispatch(answersData(data)) 
   }
}

export default connect(null, mapDispatchToProps)(QuestionButton);