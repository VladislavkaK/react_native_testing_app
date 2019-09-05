import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface IElementDashboardProps {
    data: any;
    styleBlock: object;
    styleElement: object;
    navigation: any;
    totalQuestions: any;
    successAnswers: any;
    test_set_id: any;
    currentAnswers: any;
}

class ElementDashboard extends React.Component<IElementDashboardProps, any> {
    constructor (props: any) {
        super(props);
    }

    render () {
        const { styleBlock, styleElement, data, navigation, totalQuestions, test_set_id, currentAnswers } = this.props;
        let lengthAnswers: any = [];
        let idAnswer: any = [];
        let idAnswerNew: any = [];
console.log("currentAnswers", currentAnswers)
        // if (currentAnswers !== undefined) {
        //     idAnswerNew = {
        //         ...currentAnswers,
        //         successAnswers: currentAnswers.map((data: any) => data.test_set_id ? {...data, currentAnswers: currentAnswers} : data)
        //     }
        //     console.log(idAnswerNew)
        //     // for (let i = 0; i < currentAnswers.length; i++) {

        //     //     if (currentAnswers[i] !== undefined) {
        //     //         idAnswer.push({id: currentAnswers[i].test_set_id});
        //     //         lengthAnswers.push(currentAnswers[i].successAnswers.length);
        //     //     }
                
        //     // }
        // }

        return (
            <React.Fragment>
                {data !== undefined && data.map((value: any, index: number) => {
    
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('QuestionsList', { id: value.test_id, total: totalQuestions })} key={index} >
                            <View style={styleBlock}  >
                                <View style={styleElement} >
                                    <Text>
                                        {`Сет ${value.test_id}: ${value.test_title}`}
                                    </Text>
                                </View>
                                <View style={styleElement} >
                                    <Text>
                                        {`Лучший результат: ${idAnswer[index] == value.test_id ? lengthAnswers[index] : 0}/${value.test_total_questions}`}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default ElementDashboard;