import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import { COLOR } from 'react-native-material-ui';
import { getAttendant } from './../../actions/parkingLotAttendant'
import { StackActions, NavigationActions } from 'react-navigation';

import styles from "./style";
const drawerImage = require("../../../assets/icon-Parking-Application.png");
const drawerCover = require("../../../assets/background.png");

const datas = [
  {
    name: "Live Tracking",
    route: "LiveTracking",
    icon: "map-marker",
    type: "FontAwesome",
    bg: "#C5F442",
    enable: true
  },
  {
    name: "Transaction History",
    route: "TransactionHistory",
    icon: "history",
    type: "FontAwesome",
    bg: "#C5F442",
    enable: false
  },
  {
    name: "My Wallet",
    route: "MyWallet",
    icon: "google-wallet",
    type: "FontAwesome",
    bg: "#C5F442",
    enable: false
  },
  {
    name: "Current Parking",
    route: "CurrentParking",
    icon: "local-parking",
    type: "MaterialIcons",
    bg: "#C5F442",
    enable: false
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  _logout = () => {
    // navigate and remove from stack
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  componentDidMount() {
    const username = this.props.navigation.getParam('username', 'null');

    getAttendant(username).then((response) => {
      this.setState({ user: response[0] });
    });
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => {
                  if (data.enable) {
                    this.props.navigation.navigate(data.route)
                  }
                }}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    type={data.type}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />

          <ListItem style={{ marginTop: 90 }}>
            <Left>
              <Icon
                active
                name='user-circle-o'
                type='FontAwesome'
                style={{ color: "#777", fontSize: 26, width: 30 }}
              />
              <Text style={styles.text}>
                {this.state.user.name}
              </Text>
            </Left>
            <Right>
              <Icon
                active
                name='logout'
                type='MaterialCommunityIcons'
                style={{ color: "#777", fontSize: 26, width: 30 }}
                onPress={this._logout}
              />
            </Right>
          </ListItem>
          <Text style={{ marginTop: 7, fontSize: 11, color: COLOR.grey600, textAlign: "center" }}>© 2018 ParkEco, Inc.</Text>
        </Content>
      </Container>
    );
  }
}

export default SideBar;
