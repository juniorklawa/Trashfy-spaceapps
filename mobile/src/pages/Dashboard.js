import React from 'react';
import { Button, Image, View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';



class Dashboard extends React.Component {

  static navigationOptions = {
    headerTitle: 'Missões',
  };

  state = {
    missions: [{
      type: 'mission',
      title: 'Limpar bueiro',
      date: 'Qua, 23 de Agosto',
      reward: Math.floor((Math.random() * 100) + 1),
      city: 'Curitiba',
      neighborhood: 'Bacacheri',
      street: 'Rua João das Neves 456',
      descriptionOption: 'cleaning',
      picture: require('../assets/bueiro2.jpeg')
    },
    {
      type: 'mission',
      title: 'Remoção de lixo',
      date: 'Qua, 23 de Agosto',
      reward: Math.floor((Math.random() * 100) + 1),
      city: 'Curitiba',
      neighborhood: 'Bacacheri',
      street: 'Rua João das Neves 456',
      descriptionOption: 'cleaning',
      picture: require('../assets/lixo1.jpg')
    },
    {
      type: 'mission',
      title: 'Possibilidade de área verde',
      date: 'Qua, 25 de Agosto',
      reward: Math.floor((Math.random() * 100) + 1),
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
      reward: Math.floor((Math.random() * 100) + 1),
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
      reward: Math.floor((Math.random() * 100) + 1),
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
      reward: Math.floor((Math.random() * 100) + 1),
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
      reward: Math.floor((Math.random() * 100) + 1),
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
      reward: Math.floor((Math.random() * 100) + 1),
      city: 'Curitiba',
      neighborhood: 'Centro',
      street: 'Avenida Sete de Setembro 1092',
      descriptionOption: 'cleaning',
      picture: require('../assets/lixo1.jpg')
    },



    {
      type: 'mission',
      title: 'Possibilidade de área verde',
      date: 'Qua, 30 de Agosto',
      reward: Math.floor((Math.random() * 100) + 1),
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
        <StatusBar backgroundColor="#1B8161" barStyle="light-content" />
        <ScrollView style={{ flex: 1 }}>
          <Text style={{ marginLeft: 5, fontSize: 30, fontWeight: 'bold', color: '#fff' }}>Missões disponíveis</Text>
          {this.state.missions.map((mission, i) => (
            <View
              onPress={() => this.props.navigation.navigate('Mission')}
              key={i}
              style={styles.projectContainer}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{}}>
                  <Image
                    style={{ width: 100, height: 100, resizeMode: 'cover' }}
                    source={mission.picture}
                  />
                </View>
                <View style={{ flex: 3, marginLeft: 10 }}>
                  <Text style={styles.missionTitle}>{mission.title}</Text>
                  <Text style={styles.missionDate}>{mission.date}</Text>
                  <Text>{mission.city}</Text>
                  <Text>{mission.street}</Text>
                </View>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                  <Text style={{ textAlign: 'center' }}>Recompensa</Text>
                  <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{mission.reward} pontos</Text>
                </View>
              </View>
              <View style={{ marginTop: 20 }}>
                <Button color="#1B8161" title="Ser um HERO!"></Button>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B8161',
    minHeight: '100%',
    padding: 10,
    flex: 1
  },
  projectContainer: {
    backgroundColor: '#ffffff',
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

export default Dashboard