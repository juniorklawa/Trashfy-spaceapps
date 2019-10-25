import React from 'react';
import {
  View, Text, StyleSheet,
  TouchableOpacity, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class MissionCard extends React.Component {




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

  }





  render() {
    return (
      <View
        key={this.props.i}
        style={styles.projectContainer}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{}}>
            <Image
              style={{ width: 100, height: 100, resizeMode: 'cover' }}
              source={this.props.mission.picture}
            />
          </View>
          <View style={{ flex: 3, marginLeft: 10 }}>
            <Text style={styles.missionTitle}>{this.props.mission.title}</Text>
            <Text style={styles.missionDate}>{this.props.mission.date}</Text>
            <Text>{mission.city}</Text>
            <Text>{mission.street}</Text>
          </View>
          <View style={{ flex: 2, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center' }}>{this.props.mission.reco}</Text>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{this.props.mission.reward}</Text>
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
