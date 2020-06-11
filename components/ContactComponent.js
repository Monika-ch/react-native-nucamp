import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import * as Animatable from "react-native-animatable";

class Contact extends Component {
  static navigationOptions = { title: "Contact Us" };

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="flipInX" duration={2000} delay={500}>
          <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
            <Text style={{ marginBottom: 10 }}>
              1 Nucamp Way Seattle, {"\n"}WA 98001 {"\n"}U.S.A.
            </Text>
            <Text>Phone: 1-206-555-1234</Text>
            <Text>Email: campsites@nucamp.co</Text>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;
