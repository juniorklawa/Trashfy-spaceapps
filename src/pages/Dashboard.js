import React from 'react';
import {
  View, Text, StyleSheet,
  ScrollView, StatusBar, TouchableOpacity, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SafeAreaView from 'react-native-safe-area-view';


class Dashboard extends React.Component {


  state = {
    missions: [{
      type: 'mission',
      reco: 'Recompensa',
      title: 'Limpar bueiro',
      date: 'Qua, 23 de Agosto',
      reward: `${Math.floor((Math.random() * 100) + 1)} pontos`,
      city: 'Curitiba',
      neighborhood: 'Bacacheri',
      street: 'Rua João das Neves 456',
      descriptionOption: 'cleaning',
      picture: require('../assets/bueiro2.jpeg')
    },
    {
      type: 'mission',
      reco: 'Recompensa',
      title: 'Remoção de lixo',
      date: 'Qua, 23 de Agosto',
      reward: `${Math.floor((Math.random() * 100) + 1)} pontos`,
      city: 'Curitiba',
      neighborhood: 'Bacacheri',
      street: 'Rua João das Neves 456',
      descriptionOption: 'cleaning',
      picture: require('../assets/lixo1.jpg')
    },
    {
      type: 'mission',
      reco: 'Recompensa',
      title: 'Possibilidade de área verde',
      date: 'Qua, 25 de Agosto',
      reward: `${Math.floor((Math.random() * 100) + 1)} pontos`,
      city: 'Curitiba',
      neighborhood: 'Rebouças',
      street: 'Avenida Silva Jardim 1227',
      descriptionOption: 'cleaning',
      picture: require('../assets/areaverde.jpg')
    },


    {
      type: 'mission',
      reco: 'Recompensa',
      title: 'Limpeza de lixo',
      date: 'Qua, 26 de Agosto',
      reward: `${Math.floor((Math.random() * 100) + 1)} pontos`,
      city: 'Curitiba',
      neighborhood: 'Portão',
      street: 'Avenida República Argentina 1654',
      descriptionOption: 'cleaning',
      picture: require('../assets/lixo2.jpg')
    },


    {
      type: 'mission',
      title: 'Limpeza de lixo',
      reco: 'Recompensa',
      date: 'Qua, 27 de Agosto',
      reward: `${Math.floor((Math.random() * 100) + 1)} pontos`,
      city: 'Curitiba',
      neighborhood: 'Água Verde',
      street: 'Avenida Eduardo Carlos Pereira 1323',
      descriptionOption: 'cleaning',
      picture: require('../assets/lixo3.jpg')
    },


    {
      type: 'mission',
      title: 'Possibilidade de inundação',
      reco: 'Recompensa',
      date: 'Qua, 28 de Agosto',
      reward: `${Math.floor((Math.random() * 100) + 1)} pontos`,
      city: 'Curitiba',
      neighborhood: 'Cidade Industrial',
      street: 'Avenida Eduardo Sprada 323',
      descriptionOption: 'cleaning',
      picture: require('../assets/inundacao.jpeg')
    },


    {
      type: 'mission',
      reco: 'Recompensa',
      title: 'Limpeza de lixo',
      date: 'Qua, 29 de Agosto',
      reward: `${Math.floor((Math.random() * 100) + 1)} pontos`,
      city: 'Curitiba',
      neighborhood: 'Fazendinha',
      street: 'Avenida General Potiguara 874',
      descriptionOption: 'cleaning',
      picture: require('../assets/baldio2.jpeg')
    },


    {
      type: 'mission',
      title: 'Limpeza de lixo',
      reco: 'Recompensa',
      date: 'Qua, 29 de Agosto',
      reward: `${Math.floor((Math.random() * 100) + 1)} pontos`,
      city: 'Curitiba',
      neighborhood: 'Centro',
      street: 'Avenida Sete de Setembro 1092',
      descriptionOption: 'cleaning',
      picture: require('../assets/baldio3.jpeg')
    },
    ]
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <StatusBar backgroundColor="#1B8161" barStyle="light-content" />
          <ScrollView style={styles.scrollViewContent}>
            <Image
              style={styles.headerImg}
              source={require('../assets/location.png')}
            />
            <Text style={styles.headerTitle}>Missões disponíveis</Text>
            <Text style={styles.headerSubtitle}>Um hero ajuda a comunidade recolhendo e
            limpando resíduos das missões marcadas pelo Helper
            </Text>
            {this.state.missions.map((mission, i) => (
              <View
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
                    <Text style={{ textAlign: 'center' }}>{mission.reco}</Text>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{mission.reward}</Text>
                  </View>
                </View>
                <View style={{ marginTop: 20 }}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Mission', { mission: mission })}
                    style={{ backgroundColor: '#1B8161', height: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} color="#1B8161">
                    <Text style={{ color: '#fff', fontWeight: 'bold', }}>
                      SER UM HERO
                    </Text>
                    <Icon style={{ marginLeft: 8 }} name={'bolt'} size={20} color={'#ffff00'} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
  },

  scrollViewContent: {
    margin: 8,
    borderRadius: 20
  },

  headerImg: {
    width: '100%',
    height: 200
  },

  headerTitle: {
    marginLeft: 5,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4b4b4b'
  },

  headerSubtitle: {

  },

  selectButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#CCC',
    borderStyle: 'dashed',
    height: 42,
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectButtonText: {
    fontSize: 16,
    color: '#666',
  },

  headerSubtitle: {
    marginLeft: 5,
    fontSize: 14,
    color: '#929699'
  },

  projectContainer: {
    backgroundColor: '#fbfbfb',
    justifyContent: 'space-between',
    borderRadius: 5,
    marginTop: 20,
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

  preview: {
    width: 300,
    height: 300,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 4,
  },

});

export default Dashboard