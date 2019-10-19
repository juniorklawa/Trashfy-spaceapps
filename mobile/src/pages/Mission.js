import React from 'react';
import { Button, Image, View, Text, StyleSheet, ScrollView } from 'react-native';


class Mission extends React.Component {


  state = {
    missions: [{
      type: 'mission',
      title: 'Possibilidade de área verde',
      date: 'Qua, 25 de Agosto',
      reward: Math.floor((Math.random() * 50) + 1),
      city: 'Curitiba',
      neighborhood: 'Rebouças',
      street: 'Avenida Silva Jardim 1227',
      descriptionOption: 'cleaning',
      picture: require('../assets/lixo1.jpg')
    },


{
      type: 'mission',
      title: 'Limpeza de lixo',
      date: 'Qua, 26 de Agosto',
      reward: Math.floor((Math.random() * 50) + 1),
      city: 'Curitiba',
      neighborhood: 'Portão',
      street: 'Avenida República Argentina 1654',
      descriptionOption: 'cleaning',
      picture: require('../assets/lixo1.jpg')
    },


{
      type: 'mission',
      title: 'Limpeza de lixo',
      date: 'Qua, 27 de Agosto',
      reward: Math.floor((Math.random() * 50) + 1),
      city: 'Curitiba',
      neighborhood: 'Água Verde',
      street: 'Avenida Eduardo Carlos Pereira 1323',
      descriptionOption: 'cleaning',
      picture: require('../assets/lixo1.jpg')
    },


{
      type: 'mission',
      title: 'Possibilidade de inundação',
      date: 'Qua, 28 de Agosto',
      reward: Math.floor((Math.random() * 50) + 1),
      city: 'Curitiba',
      neighborhood: 'Cidade Industrial',
      street: 'Avenida Eduardo Sprada 323',
      descriptionOption: 'cleaning',
      picture: require('../assets/lixo1.jpg')
    },


{
      type: 'mission',
      title: 'Limpeza de lixo',
      date: 'Qua, 29 de Agosto',
      reward: Math.floor((Math.random() * 50) + 1),
      city: 'Curitiba',
      neighborhood: 'Fazendinha',
      street: 'Avenida General Potiguara 874',
      descriptionOption: 'cleaning',
      picture: require('../assets/lixo1.jpg')
    },


{
      type: 'mission',
      title: 'Limpeza de lixo',
      date: 'Qua, 29 de Agosto',
      reward: Math.floor((Math.random() * 50) + 1),
      city: 'Curitiba',
      neighborhood: Centro,
      street: 'Avenida Sete de Setembro 1092',
      descriptionOption: 'cleaning',
      picture: require('../assets/lixo1.jpg')
    },



{
      type: 'mission',
      title: 'Possibilidade de área verde',
      date: 'Qua, 30 de Agosto',
      reward: 23,
      city: 'Curitiba',
      neighborhood: 'Campo Comprido',
      street: 'Rua João Alencar Guimarães 992',
      descriptionOption: 'cleaning',
      picture: require('../assets/lixo1.jpg')
    },]
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Report</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF1',
    minHeight: '100%',
    padding: 10,
    flex: 1
  },
  projectContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    marginTop: 5,
    padding: 15
  },
  missionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4b4b4b',
  },
  missionDate: {
    color: '#929699',
    fontSize: 12,
    fontWeight: 'bold'
  },
});

export default Mission