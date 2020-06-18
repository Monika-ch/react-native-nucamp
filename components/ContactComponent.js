import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import * as MailComposer from "expo-mail-composer";

class Contact extends Component {
  static navigationOptions = { title: "Contact Us" };

  sendMail() {
    MailComposer.composeAsync({
      recipients: ["campsites@nucamp.co"],
      subject: "Inquiry",
      body: "To whom it may concern : ",
    });
  }

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="flipInX" duration={2500} delay={500}>
          <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
            <Text style={{ marginTop: 10, textAlign: "center", color: "#666" }}>
              1 Nucamp Way Seattle, {"\n"}WA 98001 {"\n"}U.S.A.{"\n"}
              {"\n"}Phone: 1-206-555-1234
              {"\n"}Email: campsites@nucamp.co
            </Text>
            <Button
              title="Send Email"
              buttonStyle={{
                backgroundColor: "#5637DD",
                marginTop: 30,
                marginBottom: 10,
                marginHorizontal: 50,
              }}
              icon={
                <Icon
                  name="envelope-o"
                  type="font-awesome"
                  color="#fff"
                  iconStyle={{ marginRight: 15 }}
                />
              }
              onPress={() => this.sendMail()}
            />
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;
