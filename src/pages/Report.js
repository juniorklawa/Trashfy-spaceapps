import React from 'react';
import {
  TextInput, Picker, View, Text, StyleSheet,
  ScrollView, StatusBar, TouchableOpacity, Image, SafeAreaView
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeAlert from 'react-native-awesome-alerts';


class Report extends React.Component {


  state = {
    preview: null,
    image: null,
    hasLocalization: false,
    btnText: 'Enviar localização',
    showAlert: false,
    missionType: '',
    missionQuantity: '',
    details: ''
  };

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
          <ScrollView style={{ margin: 8, backgroundColor: '#fbfbfbfb', borderRadius: 20 }}>
            <Image

              style={{ width: '100%', height: 200 }}
              source={require('../assets/message.png')}
            />
            <View style={{ marginTop: -10, marginHorizontal: 18 }} >
              <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#4b4b4b' }}>Reportar uma ocorrência</Text>
              <Text style={{ fontSize: 14, color: '#929699' }}>Um helper ajuda a comunidade registrando ocorrências com acumulo de lixo e outros tipos de degradação.</Text>

              <Text style={{ marginTop: 30, fontSize: 16, fontWeight: 'bold', color: '#4b4b4b' }}>
                Qual é o tipo de ocorrência?
            </Text>

              <Picker
                selectedValue={this.state.missionType}
                style={{ height: 50, width: '100%' }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ missionType: itemValue })
                }>
                <Picker.Item label="Limpeza de bueiro" value="1" />
                <Picker.Item label="Remoção de lixo" value="2" />
                <Picker.Item label="Possibilidade de área verde" value="3" />
                <Picker.Item label="Limpeza de lixo" value="4" />
                <Picker.Item label="Possibilidade de inundação" value="5" />
              </Picker>



              <Text style={{ marginTop: 15, fontSize: 16, fontWeight: 'bold', color: '#4b4b4b' }}>
                Essa é uma missão para um ou vários heroes?
            </Text>
              <Picker
                selectedValue={this.state.missionQuantity}
                style={{ height: 50, width: '100%' }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ missionQuantity: itemValue })
                }>
                <Picker.Item label="Individual" value="1" />
                <Picker.Item label="Avengers assemble!" value="2" />
              </Picker>

              <TextInput
                style={[{ borderColor: '#ddd', borderWidth: 1, padding: 10 }]}
                autoCorrect={false}
                value={this.state.details}
                onChangeText={details => this.setState({ details })}
                placeholder="Digite aqui outras observações sobre a ocorrência"
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
              <Text style={{ marginTop: 15, fontSize: 16, fontWeight: 'bold', color: '#4b4b4b' }}>
                Tire uma foto do local
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

export default Report