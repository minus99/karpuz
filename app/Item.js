import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

export default class Item extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const B = (props) => <Text style={{fontWeight: 'bold', lineHeight: 19}}>{props.children}</Text>

        return (
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <View style={{ width: 60 }}>
                    <Image
                        style={styles.button}
                        source={require('../assets/like.png')}
                    />
                    <Image
                        style={styles.button}
                        source={require('../assets/unlike.png')}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <View>
                    <TouchableOpacity activeOpacity={0.8} onPress={this._onPressButton}>
                        <Text style={{fontFamily: 'Graphik-Regular'}}>
                            <Text>2017 stajyer 4.2 Puan toplam </Text> 
                            <B>Monitise</B>
                            <Text> 'ye vermiş.</Text>
                            <Text style={{color: '#ADABAB'}}> 7 dk önce</Text>
                        </Text>
                    </TouchableOpacity>

                    </View>
                    <View style={{ height: 30, flexDirection: 'row', alignSelf: 'flex-end' }}>
                        <TouchableOpacity activeOpacity={0.8} onPress={this._onPressButton}>
                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                <Image
                                    style={styles.button}
                                    source={require('../assets/like.png')}
                                />
                                <Text>19</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} onPress={this._onPressButton}>
                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                <Image
                                    style={styles.button}
                                    source={require('../assets/unlike.png')}
                                />
                                <Text>5</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}