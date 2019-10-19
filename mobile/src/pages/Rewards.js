import React from 'react';
import {
  SafeAreaView, FlatList, View, Text, StyleSheet, StatusBar, ScrollView, Image, Picker, TextInput, TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import AwesomeAlert from 'react-native-awesome-alerts';

class Rewards extends React.Component {


  state = {
    data: [
      {
        title: 'Boticário',
        voucher: 'Troque suas embalagens vazias por pontos',
        picture: require('../assets/logo1.jpeg'),
        points: Math.floor((Math.random() * 30) + 1),
      },
      {
        title: 'Madero',
        voucher: '30% de desconto em combos',
        picture: require('../assets/madero.jpeg'),
        points: Math.floor((Math.random() * 30) + 1),
      },

      {
        title: `Domino's Pizza`,
        voucher: '30% de desconto na pizza grande',
        picture: require('../assets/dominos.jpeg'),
        points: Math.floor((Math.random() * 30) + 1),
      },
      {
        title: 'Rappi',
        voucher: 'R$ 300 em frete grátis',
        picture: require('../assets/rappi.jpeg'),
        points: Math.floor((Math.random() * 30) + 1),
      },
      {
        title: 'Barbearia	Navalha ',
        voucher: '50% de desconto no cabelo + barba',
        picture: require('../assets/navalha.jpeg'),
        points: Math.floor((Math.random() * 30) + 1),
      },
      {
        title: 'Bosch',
        voucher: '30% de desconto em ferramentas',
        picture: require('../assets/bosch.jpeg'),
        points: Math.floor((Math.random() * 30) + 1),
      },
    ]
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
      picture: null
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
    const columns = 2;
    const { showAlert } = this.state
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <StatusBar backgroundColor="#1B8161" barStyle="light-content" />
          <ScrollView style={{ margin: 8, backgroundColor: '#f5f5f5', borderRadius: 20 }}>

            <View style={{ marginTop: 20, marginHorizontal: 18, }} >
              <View>
                <View style={{ backgroundColor: '#fbfbfbfb', height: 150, borderRadius: 5, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                  <Image style={{ height: 80, width: 80, resizeMode: 'stretch',marginLeft:16 }} source={require('../assets/hero.png')}>

                  </Image>
                  <View style={{ width: '100%', justifyContent: 'center', marginLeft:50 }}>
                    <Text style={{ fontWeight: 'bold', color: '#4b4b4b', fontSize: 16, width: '100%' }}>
                      Everaldo Rosa de Junior
                  </Text>
                    <Text style={{ fontWeight: 'bold', color: '#4b4b4b', fontSize: 16 }}>
                      134 Pontos
                  </Text>
                  <Text style={{ fontWeight: 'bold', color: '#1B8161', fontSize: 16 }}>
                      Hero Level 5
                  </Text>
                    <View style={{ flexDirection: 'row', marginTop:16, }}>
                      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: '#4b4b4b', fontSize: 16 }}>
                          46
                        </Text>
                        <Text style={{ fontWeight: 'bold', color: '#1B8161', fontSize: 13 }}>
                          Missões concluidas
                        </Text>
                      </View>
                    </View>

                  </View>
                </View>
              </View>
              <View style={{ marginHorizontal: 6, marginTop: 18, marginBottom: 12 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#4b4b4b' }}>Meus bônus</Text>
                <Text style={{ fontSize: 14, color: '#929699' }}>Aqui você pode usar seus pontos para ganhar discontos,vouchers e cashbacks!</Text>
              </View>
              <FlatList
                data={createRows(this.state.data, columns)}
                keyExtractor={item => item.id}
                numColumns={columns}
                renderItem={({ item }) => {
                  if (item.empty) {
                    return <View style={[styles.item, styles.itemEmpty]} />;
                  }
                  return (
                    <View style={styles.item}>
                      <Image
                        style={{ resizeMode: 'contain', height: 100, width: 150 }}
                        source={item.picture}></Image>
                      <Text style={styles.text}>{item.title}</Text>
                      <Text style={styles.subtitle}>{item.voucher}</Text>
                      <Text>{item.points} pontos</Text>
                      <TouchableOpacity
                        onPress={() => this.showAlert()}
                        style={{
                          height: 30, marginTop: 10, backgroundColor: '#1B8161',
                          justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: 5
                        }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Resgatar</Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />

            </View>

          </ScrollView>
          <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title="QR Gerado"
            message={'Apresente esse QR code no estabelecimento escolhido!'}
            customView={<Image
              style={{ resizeMode: 'contain', height: 300, width: 250 }}
              source={require('../assets/qrcode.png')}></Image>}
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

function createRows(data, columns) {
  const rows = Math.floor(data.length / columns);
  let lastRowElements = data.length - rows * columns;

  while (lastRowElements !== columns) {
    data.push({
      id: `empty-${lastRowElements}`,
      name: `empty-${lastRowElements}`,
      empty: true
    });
    lastRowElements += 1;
  }

  return data;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B8161'
  },
  item: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    flexBasis: 0,
    flexGrow: 1,
    margin: 4,
    padding: 10
  },
  itemEmpty: {
    backgroundColor: "transparent"
  },
  text: {
    marginTop: 3,
    fontSize: 16,
    height: 30,
    fontWeight: 'bold',
    color: "#333333"
  },
  subtitle: {
    marginTop: 5,
    height: 50,
    color: "#929292",
    fontWeight: '600'
  }
});

export default Rewards