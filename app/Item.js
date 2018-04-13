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
    
    _renderItem = ()=>{
        const { typ } = this.props.data;
        console.log(typ);
        return(
            <View>
                <Text>{ typ }</Text>
            </View>
        )
    }

    render() {
        const lineHeight = 24;
        const B = (props) => <Text style={{fontWeight: 'bold', lineHeight: lineHeight}}>{props.children}</Text>
        const { name } = this.props.data;

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
                            <Text style={{fontWeight: 'bold', lineHeight: lineHeight}}>{ name }</Text> 
                            <B style={{fontWeight: 'bold', lineHeight: lineHeight}}>Monitise</B>
                            <Text style={{fontWeight: 'bold', lineHeight: lineHeight}}> 'ye vermiş.</Text>
                            <Text style={{color: '#ADABAB', lineHeight: lineHeight}}> 7 dk önce</Text>
                        </Text>
                    </TouchableOpacity>
                        {this._renderItem()}
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