import React from 'react';
import {
  SafeAreaView, FlatList, View, Text, StyleSheet, StatusBar, ScrollView, Image, Picker, TextInput, TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeAlert from 'react-native-awesome-alerts';

class Rewards extends React.Component {


  state = {
    data: [
      {
        title: 'Boticário',
        voucher: 'Troque suas embalagens vazias por pontos',
        picture: require('../assets/logo1.jpeg')
      },
      {
        title: 'Madero',
        voucher: '30% de desconto em combos',
        picture: require('../assets/madero.jpeg')
      },

      {
        title: `Domino's Pizza`,
        voucher: '30% de desconto na pizza grande',
        picture: require('../assets/dominos.jpeg')
      },
      {
        title: 'Rappi',
        voucher: 'R$ 300 em frete grátis',
        picture: require('../assets/rappi.jpeg')
      },
      {
        title: 'Barbearia	Navalha Beer',
        voucher: '50% de desconto no cabelo + barba',
        picture: require('../assets/navalha.jpeg')
      },
      {
        title: 'Bosch',
        voucher: '30% de desconto em ferramentas',
        picture: require('../assets/bosch.jpeg')
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
              <View style={{ backgroundColor: '#fbfbfbfb', height: 150, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Image style={{ height: 80, width: 80, resizeMode: 'stretch' }} source={require('../assets/hero.png')}>

                </Image>
                <Text style={{ marginLeft: 18, fontWeight: 'bold', color: '#4b4b4b', fontSize: 16 }}>
                  Carlos, você tem 134 pontos!
                </Text>
              </View>
              <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#4b4b4b' }}>Meus bônus</Text>
              <Text style={{ fontSize: 14, color: '#929699' }}>Aqui você pode usar seus pontos para ganhar discontos,vouchers e cashbacks!</Text>
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
                      <Text>20 pontos</Text>
                      <TouchableOpacity style={{ height: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1B8161' }}>
                        <Text>Resgatar</Text>
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
    marginTop: 8,
    fontWeight: 'bold',
    color: "#333333"
  },
  subtitle: {
    marginTop: 5,
    color: "#929292",
    fontWeight: '600'
  }
});

export default Rewards