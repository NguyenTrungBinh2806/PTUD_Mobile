import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Divider, Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';
class Contact extends Component {
  
  render() {
    return (
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
      <Card>
            <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 15}}>Contact information</Text>
            <Divider style={{paddingTop: 10}}/>
            <Text style={{ margin: 5}}>121, Clear Water Bay Road</Text>
            <Text style={{ margin: 5}}>Clear Water Bay, Kowloon</Text>
            <Text style={{ margin: 5}}>HONG KONG </Text>
            <Text style={{ margin: 5}}>Tel: +852 1234 5678</Text>
            <Text style={{ margin: 5}}>Fax: +852 8765 4321</Text>
            <Text style={{ margin: 5}}>Email:confusion@food.net</Text>
            <Button title=' Send Email' buttonStyle={{ backgroundColor: '#7cc' }}
            icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
            onPress={this.sendMail} />
      </Card>
      </Animatable.View>
    );
  }
  sendMail() {
    MailComposer.composeAsync({
      recipients: ['nguyenbinh28062001@gmail.com'],
      subject: 'From Nguyen Trung Binh - MSSV: 2192064',
      body: 'Hello my friends ...'
    });
  }
}
export default Contact;