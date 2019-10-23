import React from 'react';
import {
  TextInput,View, Text, StyleSheet, CheckBox,
  ScrollView, StatusBar, TouchableOpacity, Image, SafeAreaView
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeAlert from 'react-native-awesome-alerts';


class Mission extends React.Component {


  state = {
    preview: null,
    image: null,
    hasLocalization: false,
    btnText: 'Enviar localização!',
    showAlert: false,
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    details: '',
    actualMission: {}
  };

  static navigationOptions = {
    title: 'Voltar',
    headerStyle: {
      backgroundColor: '#1B8161',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  async componentDidMount() {
    await this.setState({
      actualMission: this.props.navigation.getParam('mission')
    })

    console.log(this.state.actualMission)
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
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#1B8161" barStyle="light-content" />
          <ScrollView style={{ margin: 8, backgroundColor: '#fbfbfbfb', borderRadius: 20 }}>
            <Image
              style={{ width: '100%', height: 200, resizeMode: 'contain' }}
              source={require('../assets/message1.png')}
            />
            <View style={{ marginTop: -10, marginHorizontal: 18 }} >
              <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#4b4b4b', marginTop: 10 }}>Missão</Text>
              <Text style={{ fontSize: 18, color: '#929699' }}>{this.state.actualMission.neighborhood}</Text>
              <Text style={{ fontSize: 18, color: '#929699' }}>{this.state.actualMission.street}</Text>
              <Text style={{ fontSize: 18, color: '#929699', fontWeight: 'bold' }}>{this.state.actualMission.title}</Text>
              <Text style={{ fontSize: 14, color: '#929699', marginTop:12 }}>Remova os resíduos da região apontada e leve a um local adequado </Text>


              <View style={{ marginTop: 16 }}>

                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked1: !this.state.checked1 })}
                  />
                  <Text style={styles.checkBox}> Usar luvas</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked2: !this.state.checked2 })}
                  />
                  <Text style={styles.checkBox}>Separar o resíduo reciclável</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked3: !this.state.checked3 })}
                  />
                  <Text style={styles.checkBox}>Separar o resíduo orgânico</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked5: !this.state.checked5 })}
                  />
                  <Text style={styles.checkBox}> Armazenar o lixo em local adequado</Text>
                </View>
              </View>

              <TextInput
                style={[{ borderColor: '#ddd', borderWidth: 1, padding: 10, marginTop: 18 }]}
                autoCorrect={false}
                value={this.state.details}
                onChangeText={details => this.setState({ details })}
                placeholder="Digite aqui outras observações sobre a sua missão"
                placeholderTextColor="#999"
              />
              {
                this.state.hasLocalization ?
                  <TouchableOpacity
                    style={{ backgroundColor: '#1B8161', width: '100%', marginTop: 18, borderRadius: 5, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name={'check'} size={25} color={'#fff'} />
                  </TouchableOpacity> :
                  <TouchableOpacity
                    onPress={() => this.sendLocalization()}
                    style={{ backgroundColor: '#1976d2', width: '100%', marginTop: 18, borderRadius: 5, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>{this.state.btnText}</Text>
                  </TouchableOpacity>
              }
              <Text style={{ marginTop: 15, fontSize: 16, fontWeight: 'bold', color: '#949494' }}>
                Tire uma foto do local limpo
            </Text>
              <TouchableOpacity style={styles.selectButton} onPress={() => this.handleSelectImage()}>
                <Text style={styles.selectButtonText}>Selecionar imagem</Text>
              </TouchableOpacity>

              {this.state.preview && <Image style={styles.preview} source={this.state.preview} />}
              <View style={{ marginTop: 15, marginBottom: 15 }}>
                {this.state.preview ? <TouchableOpacity
                  onPress={() => this.sendAnswer()}
                  style={{ backgroundColor: '#1B8161', width: '100%', marginTop: 18, borderRadius: 5, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Enviar ocorrência!</Text>
                </TouchableOpacity> : null}
              </View>
            </View>

          </ScrollView>
          <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title="Muito bem, Herói!"
            message={`Parabéns! Você ganhou ${Math.floor((Math.random() * 100) + 1)} pontos por concluir essa missão.`}
            customView={<Image
              style={{ resizeMode: 'contain', height: 150, width: 350 }}
              source={require('../assets/sucess.png')}></Image>}
            closeOnTouchOutside={true}
            titleStyle={{ fontWeight: 'bold', justifyContent: 'center' }}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="OK"
            confirmButtonTextStyle={{ fontWeight: 'bold' }}
            confirmButtonStyle={{ width: 200, height: 50, justifyContent: 'center', alignItems: 'center' }}
            confirmButtonColor="#1B8161"
            onConfirmPressed={() => {
              this.goToRewards()
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B8161',
    height: '100%'

  },
  checkBox: {
    color: '#949494',
    fontWeight: '600',
    marginTop: 5,
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

  preview: {
    width: 300,
    height: 300,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 4,
  },

});

export default Mission