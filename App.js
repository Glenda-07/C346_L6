import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';

//Define own Question component with appropriate parameters and display
const QuizQuestion = ({question}) => {
    return (
        <View style={{marginTop: 10, marginBottom: 10}}>
            <Text style={{ fontWeight: 'bold' }}>{question}</Text>
        </View>
    );
};


const QuizApp = () => {
    // Declare necessary State variables

    const [Sport, setSport]=useState('');
    const [Sport2, setSport2]=useState('');
    const [Sport3, setSport3]=useState('');

    return (
        <ScrollView style={{marginTop: 40, marginBottom: 50}}>
            <Text style={{ fontWeight: 'bold', fontSize: 30}}>Quiz Title:                                 Do you know your sports?</Text>

            <QuizQuestion
                question='What is this sport?'
            />

            <Image
                source={require('./img/Badminton.jpg')}
                style={{width:450,height:300}}/>

            <Picker onValueChange={(value)=> setSport(value)}>
                <Picker.Item label = 'Badminton' value='Badminton'/>
                <Picker.Item label = 'Sky Diving' value='Sky Diving'/>
                <Picker.Item label = 'Tennis' value='Tennis'/>
            </Picker>
            {/* Add custom rendering Quiz Question component with appropriate properties set. */}
            {/* Add at least 3 questions. */}
            {/*-------------------------------------------------*/}

            <QuizQuestion
                question='What is this sport?'
            />

            <Image
                source={require('./img/squash.jpg')}
                style={{width:450,height:200}}/>


            <Picker onValueChange={(value)=> setSport2(value)}>
                <Picker.Item label = 'Soccer' value='Soccer'/>
                <Picker.Item label = 'Tennis' value='Tennis'/>
                <Picker.Item label = 'Squash' value='Squash'/>
            </Picker>

            {/*-------------------------------------------------*/}


            <QuizQuestion
                question='What is this sport?'
            />

            <Image
                source={require('./img/Basketball.jpg')}
                style={{width:400,height:300}}/>


            <Picker onValueChange={(value)=> setSport3(value)}>
                <Picker.Item label = 'Boxing' value='Boxing'/>
                <Picker.Item label = 'Basketball' value='Basketball'/>
                <Picker.Item label = 'E-sports' value='E-sports'/>
            </Picker>

            {/*-------------------------------------------------*/}

            <TouchableOpacity
                style={{
                    margin: 5, backgroundColor: '#D8BFD8', height: 50, borderRadius: 5,
                    justifyContent: 'center', alignItems: 'center'
                }}



                onPress={() => {
                    const correctSport = 'Badminton';
                    const correctSport2 = 'Squash';
                    const correctSport3 = 'Basketball';

                    let correctNum = 0;


                    if (Sport === correctSport) correctNum=correctNum+1;
                    if (Sport2 === correctSport2) correctNum=correctNum+1;
                    if (Sport3 === correctSport3) correctNum=correctNum+1;

                    if (correctNum === null){
                        Alert.alert('Error. Please try again.')
                    }
                    else if (correctNum === 1){
                        Alert.alert('You have 1 correct. You can do better!')
                    }
                    else if (correctNum === 2){
                        Alert.alert('You have 2 correct. You are almost there!')
                    }
                    else if (correctNum === 3){
                        Alert.alert('You have All correct. Good Job!')
                    }
                }}>




            <Text style={{fontSize: 20}}>SUBMIT ANSWERS</Text>
        </TouchableOpacity>


</ScrollView>
);
};

export default QuizApp;




