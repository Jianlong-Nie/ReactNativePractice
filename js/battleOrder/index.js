import React, {Component} from 'react';
import {
  ListView,
  View,
  Text,
} from 'react-native';

class BattleOrder extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push(`r${i}`);
    }
    this.state = {
      dataSource: dataSource.cloneWithRows(data),
      refreshing: false,
    };
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        initialListSize={5}
      />
    );
  }
}

renderRow = (rowdata, sectionId, rowId) => {
  return (
    <View>
    </View>
  )
}

export default BattleOrder;

