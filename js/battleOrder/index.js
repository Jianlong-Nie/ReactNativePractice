import React, {Component} from 'react';
import {
    ListView,
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';

class BattleOrder extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        const data = [];
        this.state = {
            dataSource: dataSource.cloneWithRows(data),
            loading: true,
        };
    }
    
    componentWillMount() {
        setTimeout(() => this.initData(), 3000);
    }

    initData = () => {
        const data = [];
        for (let i = 0; i < 10; i++) {
            data.push({
                key: `r${i}`,
                customerLeval: ['Vip客户', '普通客户'][Math.round(Math.random())],
                adress: ['北京市', '山东省青岛市', '山东省济南市', '安徽省合肥市', '安徽省安庆市'][Math.round(Math.random() * 4)],
                name: ['张飞', '关羽', '赵云', '黄忠', '马超'][Math.round(Math.random() * 4)],
                distance: `距离您${Math.round(Math.random() * 100)}公里`,
                type: ['文件', '包裹'][Math.round(Math.random())],
                expendTime: `${Math.round(Math.random()) * 10}小时到达`
            });
        }
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.setState({
          dataSource: dataSource.cloneWithRows(data),
          loading: false,
        })
    }

    render() {
        return (
            <View>
                <ListView
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    initialListSize={5}
                />
                {this.state.loading && <LoadingView />}
            </View>
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

export default BattleOrder;

