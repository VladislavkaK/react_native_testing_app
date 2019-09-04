import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface IElementDashboardProps {
    data: any;
    styleBlock: object;
    styleElement: object;
    navigation: any;
}

class ElementDashboard extends React.Component<IElementDashboardProps, any> {
    constructor (props: any) {
        super(props);
    }

    render () {
        const { styleBlock, styleElement, data, navigation } = this.props;

        return (
            <React.Fragment>
                {data.map((value: any, index: number) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('QuestionsList', { id: value.test_id })} key={index} >
                            <View style={styleBlock}  >
                                <View style={styleElement} >
                                    <Text>
                                        {`Сет ${value.test_id}: ${value.test_title}`}
                                    </Text>
                                </View>
                                <View style={styleElement} >
                                    <Text>
                                        {`Лучший результат: 2/${value.test_total_questions}`}
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