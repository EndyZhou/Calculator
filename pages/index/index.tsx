import { Component } from "react";
import { View, Text, Navigator } from "@tarojs/components";
import "./index.scss";
import { Calculator } from "../Calculator";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="wrap">
        {/* <Calculator /> */}
        <View className="content">
          <View className="menu clearfix hide">
            <Navigator url="/pages/calculator/index">
              <Text className="label">
                <Text className="fa fa-clock-o"></Text> alarm
              </Text>
            </Navigator>
            <Navigator url="/pages/Weather/index">
              <Text className="label">
                <Text className="fa fa-cloud"></Text> weather
              </Text>
            </Navigator>
            <Navigator url="pages/calculator/index">
              <Text className="label">
                <Text className="fa fa-calendar-o"></Text> calendar
              </Text>
            </Navigator>
            <Navigator url="pages/calculator/index">
              <Text className="label">
                <Text className="fa fa-adjust"></Text> flashlight
              </Text>
            </Navigator>
            <Navigator url="/pages/calculator/index">
              <Text className="label">
                <Text className="fa fa-calculator"></Text> calculator
              </Text>
            </Navigator>
            <Navigator url="pages/calculator/index">
              <Text className="label">
                <Text className="fa fa-file-text-o"></Text> notepad
              </Text>
            </Navigator>
            <Navigator url="pages/calculator/index">
              <Text className="label">
                <Text className="fa fa-info-circle"></Text> credits
              </Text>
            </Navigator>
            <Navigator url="pages/calculator/index">
              <Text className="label">
                <Text className="fa fa-user"></Text> about me
              </Text>
            </Navigator>
          </View>
        </View>
      </View>
    );
  }
}
