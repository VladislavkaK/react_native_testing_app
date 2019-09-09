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
    updateResultTest: any;
}

class ElementDashboard extends React.Component<IElementDashboardProps, any> {
    constructor (props: any) {
        super(props);
    }

    render () {
        const { styleBlock, styleElement, data, navigation, totalQuestions, test_set_id, currentAnswers, updateResultTest, successAnswers } = this.props;

        // let lengthAnswers: any = [];
        // let idAnswer: any = [];

        // if (currentAnswers !== undefined) {

        //     for (let i = 0; i < currentAnswers.length; i++) {

        //         if (currentAnswers[i] !== undefined) {
        //             idAnswer.push( currentAnswers[i].test_set_id);
        //             lengthAnswers.push(currentAnswers[i].successAnswers.length);
        //         }
                
        //     }
        // }

        return (
            <React.Fragment>
                {data !== undefined && data.map((value: any, index: number) => {
                    // let len;
                    // console.log(currentAnswers)
                    // if (currentAnswers !== undefined) {
                    //     // id = currentAnswers[index].answer_id;
                    //     for (let i = 0; i < currentAnswers.length; i++) {
                    //         if (index == currentAnswers[i].answer_id) { 
                    //             len = currentAnswers.length
                    //         }
                    //     }
                        
                    // }

                    return (
                        <TouchableOpacity onPress={() => {
                            updateResultTest({id: value.test_id, answers: currentAnswers})
                            navigation.navigate('QuestionsList', { id: value.test_id, total: totalQuestions })
                        }} key={index} >
                            <View style={styleBlock}  >
                                <View style={styleElement} >
                                    <Text>
                                        {`Сет ${value.test_id}: ${value.test_title}`}
                                    </Text>
                                </View>
                                <View style={styleElement} >
                                    <Text>
                                        {`Лучший результат: ${currentAnswers !== undefined && currentAnswers[value.test_id] ? currentAnswers[value.test_id].length : 0}/${value.test_total_questions}`}
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