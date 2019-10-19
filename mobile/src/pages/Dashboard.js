import React from 'react';
import {
  TextInput, Picker, View, Text, StyleSheet,
  ScrollView, StatusBar, TouchableOpacity, Image, Button
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeAlert from 'react-native-awesome-alerts';
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
      reco: 'EVENTO',
      title: 'Remoção de lixo',
      date: 'Qua, 23 de Agosto',
      reward: '3/5 Heroes',
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

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  goToRewards = () => {

    this.props.navigation.navigate('Recompensas')
    this.hideAlert();
    this.setState({
      picture: null,
      preview: null,
      details: '',
      hasLocalization: false,
      btnText: 'Enviar localização'
    })
  }

  sendLocalization = async () => {

    this.setState({
      btnText: 'Enviando...'
    })

    await setTimeout(() => {
      this.setState({
        hasLocalization: true
      });
    }, 3000);
  }

  sendAnswer = () => {
    this.showAlert()
  }

  handleSelectImage = () => {
    ImagePicker.showImagePicker({
      title: 'Selecionar imagem'
    }, upload => {
      if (upload.error) {
        console.log('Error');
      } else if (upload.didCancel) {
        console.log('Used canceled');
      } else {
        const preview = {
          uri: `data:image/jpeg;base64,${upload.data}`,
        }

        let prefix;
        let ext;

        if (upload.fileName) {
          [prefix, ext] = upload.fileName.split('.')
          ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
        } else {
          prefix = new Date().getTime();
          ext = 'jpg';
        }

        const image = {
          uri: upload.uri,
          type: upload.type,
          name: `${prefix}.${ext}`
        };

        this.setState({ preview, image });
      }
    });
  }


  render() {
    const { showAlert } = this.state;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <StatusBar backgroundColor="#1B8161" barStyle="light-content" />
          <ScrollView style={{ margin: 8, borderRadius: 20 }}>
            <Image

              style={{ width: '100%', height: 200 }}
              source={require('../assets/location.png')}
            />
            <Text style={{ marginLeft: 5, fontSize: 30, fontWeight: 'bold', color: '#4b4b4b' }}>Missões disponíveis</Text>
            <Text style={{ marginLeft: 5, fontSize: 14, color: '#929699' }}>Um hero ajuda a comunidade recolhendo e limpando resíduos das missões marcadas pelo Helper</Text>
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
                    onPress={() => this.props.navigation.navigate('Mission',{mission: mission})}
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
          <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title="Muito bem! Você está nos ajudando a salvar o mundo!"
            message={`Você ganhou ${Math.floor((Math.random() * 50) + 5)} pontos!`}
            closeOnTouchOutside={true}
            titleStyle={{ fontWeight: 'bold', justifyContent: 'center' }}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="OK!"
            confirmButtonTextStyle={{ fontWeight: 'bold' }}
            confirmButtonStyle={{ width: 200, height: 50, justifyContent: 'center', alignItems: 'center' }}
            confirmButtonColor="#1B8161"
            onConfirmPressed={() => {
              this.goToRewards()
            }}
          />
        </View>
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
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