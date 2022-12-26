import {Button, View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useEffect} from 'react'    ;

const PlanView = styled.View`
  width: 100%;
  height: 60%;

  justify-content: center;
  align-items: center;
`;


const PlanImage = styled.Image`
  width: 80%;
  height: 80%;

`;

const DescriptionView = styled.View`
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
`;

export const Plan = ({navigation, route}) => {
    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            navigation.navigate('Home')
        })
    });

    return (
        <View>
            <PlanView>
                <PlanImage style={{resizeMode: 'contain'}} source={{uri: route.params.data.link}}/>
            </PlanView>
            <DescriptionView>
                <View>
                    <Text style={{fontSize: 24, marginBottom: 20}}>Улица: {route.params.data.street}</Text>
                    <Text style={{fontSize: 24, marginBottom: 20}}>Этаж: {route.params.data.floor}</Text>
                    <Text style={{fontSize: 24, marginBottom: 20}}>Кабинет: {route.params.data.number}</Text>
                </View>
            </DescriptionView>
        </View>
    );
}


