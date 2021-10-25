import { Text, View, Button } from "@tarojs/components";
import "./style.scss";
export default function Weather() {
  return (
    <View className="html calendar">
      <View className="temperature slideInRight animated">75&deg; F</View>
      <View className="top-info">
        <View className="time slideInLeft animated">
          <Text className="12-hour">9.17.13</Text>{" "}
          <Text className="am-pm"></Text>
        </View>
        <View className="clearfix">
          <View className="day pull-left slideInLeft animated">Friday</View>
          <View className="events pull-right">
            <View className="ev-list slideInLeft animated">
              <Text className="fa fa-angle-right"></Text> finish animation
            </View>
            <View className="ev-list slideInLeft animated">
              <Text className="fa fa-angle-right"></Text> mom's b-day
            </View>
          </View>
        </View>
      </View>
      <View className="table schedule" data-bg="#942152">
        <View className="row">
          <View className="cell">
            <View className="date-dd">
              <Text className="count">18</Text>
              <Text className="basecloud pull-right">
                <Text className="icon-drizzle"></Text>
              </Text>
            </View>
            <View className="date-day">SAT</View>
            <View className="date-event">
              <Text className="fa fa-angle-right"></Text> created animated
            </View>
          </View>
          <View className="cell">
            <View className="date-dd">
              <Text className="count">19</Text>
              <Text className="basecloud full pull-right"></Text>
            </View>
            <View className="date-day">SUN</View>
          </View>
        </View>
        <View className="row">
          <View className="cell">
            <View className="date-dd">
              <Text className="count">20</Text>
              <Text className="icon-sun pull-right"></Text>
            </View>
            <View className="date-day">MON</View>
            <View className="date-event">&nbsp;</View>
          </View>
          <View className="cell">
            <View className="date-dd">
              <Text className="count">21</Text>
              <Text className="basecloud full pull-right">
                <Text className="icon-sunny"></Text>
              </Text>
            </View>
            <View className="date-day">TUE</View>
            <View className="date-event">
              <Text className="fa fa-angle-right"></Text> pick up sam @ airport
            </View>
          </View>
        </View>
        <View className="row">
          <View className="cell">
            <View className="date-dd">
              <Text className="count">22</Text>
              <Text className="basecloud pull-right">
                <Text className="icon-drizzle"></Text>
              </Text>
            </View>
            <View className="date-day">WED</View>
            <View className="date-event">&nbsp;</View>
          </View>
          <View className="cell">
            <View className="date-dd">
              <Text className="count">23</Text>
              <Text className="basecloud pull-right">
                <Text className="icon-drizzle"></Text>
              </Text>
            </View>
            <View className="date-day">THU</View>
            <View className="date-event">&nbsp;</View>
          </View>
        </View>
        <View className="row">
          <View className="cell">
            <View className="date-dd">
              <Text className="count">24</Text>
              <Text className="basecloud pull-right">
                <Text className="icon-thunder"></Text>
              </Text>
            </View>
            <View className="date-day">FRI</View>
            <View className="date-event">&nbsp;</View>
          </View>
          <View className="cell">
            <View className="date-dd">
              <Text className="count">25</Text>
              <Text className="icon-mist pull-right"></Text>
            </View>
            <View className="date-day">SAT</View>
            <View className="date-event">&nbsp;</View>
          </View>
        </View>
        <View className="row">
          <View className="cell">
            <View className="date-dd">
              <Text className="count">26</Text>
              <Text className="icon-sun pull-right"></Text>
            </View>
            <View className="date-day">SUN</View>
            <View className="date-event">&nbsp;</View>
          </View>
          <View className="cell">
            <View className="date-dd">
              <Text className="count">27</Text>
              <Text className="basecloud full pull-right">
                <Text className="icon-sunny"></Text>
              </Text>
            </View>
            <View className="date-day">MON</View>
            <View className="date-event">&nbsp;</View>
          </View>
        </View>
      </View>
      <View className="table action" data-bg="#942152">
        <View className="row">
          <View className="cell">
            <Button className="btn">Daily</Button>
          </View>
          <View className="cell">
            <Button className="btn">Weekly</Button>
          </View>
          <View className="cell">
            <Button className="btn">Monthly</Button>
          </View>
        </View>
      </View>
    </View>
  );
}
