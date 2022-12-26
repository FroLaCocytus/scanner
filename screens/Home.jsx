import { Button, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const PlanView = styled.View`
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
`;

const TextUser = styled.Text`
  width: 80%;
  height: 80%;
  font-size: 20px;
  text-align: center;
  margin-top: 90px;
`;

const ButtonView = styled.View`
width: 100%;
height: 20%;
justify-content: center;
align-items: center;

`;

const ButtonScanner = styled.TouchableOpacity`
  width: 90%;
  height: 60%;
  background-color: #afffcf;
  justify-content: center;
  align-items: center;
  
`;


export const HomeScreen = ( { navigation } ) => {
  return (
    <View>
        <PlanView>
            <Text style={{fontSize: 40, textAlign: 'center', marginTop: "80%"}}>Здравствуйте! </Text>
            <TextUser>Отсканируйте QR-код чтобы узнать где вы находитесь!</TextUser>
        </PlanView>
        <ButtonView>
            <ButtonScanner onPress={() => navigation.navigate('Scanner')}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>Отсканировать QR-код</Text>
            </ButtonScanner>
        </ButtonView>
    </View>
  );
}


