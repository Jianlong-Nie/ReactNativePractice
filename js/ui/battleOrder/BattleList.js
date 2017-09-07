import React, {Component} from 'react';
import {
    ListView,
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';

class BattleList extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
          <ListView
              enableEmptySections={true}
              dataSource={this.props.dataSource}
              renderRow={this.renderRow}
              initialListSize={5}
          />
      );
  }
  renderRow = (rowData) => {
    return (
        <View style={styles.cell}>
            <View style={styles.firstRow}>
                <Text style={styles.firstRow1}>{rowData.customerLeval}</Text>
                <Text style={styles.firstRow2}>14:40</Text>
                <Text style={styles.firstRow2}>{rowData.distance}</Text>
            </View>
            <View style={styles.secondRow}>
                <Text style={styles.secondText}>{rowData.adress}</Text>
            </View>
            <View style={styles.secondRow}>
                <Text style={styles.secondText}>{rowData.expendTime}</Text>
            </View>
            <View style={styles.secondRow}>
                <Text style={styles.secondText}>{rowData.name}</Text>
            </View>
        </View>
    );
  }
}


const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  cell: {
      width: width,
      backgroundColor: 'white',
      borderBottomWidth: 0.5,
      borderBottomColor: '#F0F0F0',
  },
  firstRow: {
      flexDirection: 'row',
      width: width,
      alignItems: 'center',
      padding: 8
  },
  firstRow1: {
      fontSize: 16,
      color: '#54B0BE',
      marginRight: 4,
  },
  firstRow2: {
      fontSize: 11,
      color: '#999999',
      marginLeft: 8,
  },
  secondRow: {
    padding: 8
  },
  secondText: {
    fontSize: 13,
  }
});

export default BattleList;