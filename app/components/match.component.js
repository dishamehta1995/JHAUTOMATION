import React, {Component} from 'react'
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  Grid,
  Col,
  Row
} from "native-base";


export default class Match extends Component {
  constructor(props) {
    super(props);
  }
  render() {
return (
      <Container style={styles.container}>
        <Content padder>
          <Grid>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="devices-other" style={{ color: "#32db64" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                device name
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="device-hub" style={{ color: "#27a" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                device name
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="devices" style={{ color: "#fac125" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                device name
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="devices_other" style={{ color: "green" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                device name
                </Text>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: "#FFF"
  },
  col: {
    alignItems: "center",
    paddingHorizontal: 3
  },
  row: {
    paddingBottom: 20
  },
  iconText: {
    fontSize: 12
  },
});
