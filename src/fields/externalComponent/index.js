import PropTypes from "prop-types";
import React, { Component } from "react";
import {TouchableOpacity } from "react-native";
import {
    View,
    Text,
    Icon,
    
} from "native-base";


export default class ExternalComponent extends Component {

    static propTypes = {
        attributes: PropTypes.object,
        updateValue: PropTypes.func,
        theme: PropTypes.object,
        ErrorComponent: PropTypes.func,
        onExternalComponent:PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    handleOnclick =()=> {
        if(typeof this.props.onExternalComponent === 'function'){
            this.props.onExternalComponent(this.props)
        }
        return
    }

    getLabel =(value)=>{
        let label = "None"
        if(typeof value !=='undefined' && value && Object.keys(value).length){
            return value.label?value.label:'None';
        }
        return label;
    }
    
    render() {

        const { theme, attributes, ErrorComponent } = this.props;
    
        return (
            <View>
                <TouchableOpacity style={{
                    backgroundColor: theme.pickerBgColor,
                    borderBottomColor: theme.inputBorderColor,
                    borderBottomWidth: theme.borderWidth,
                    marginHorizontal: 15,
                    marginVertical: 0,
                    paddingVertical: 15,
                    marginLeft: 20,                    
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Text style={{ color: theme.inputColorPlaceholder,paddingStart:5}}>{attributes.label}</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginEnd:10,
                            justifyContent:'flex-end',alignItems:'flex-end',
                        }}>
                        <TouchableOpacity  
                            hitSlop={{ top: 10, bottom: 10, right: 50, left: 50 }}
                            style={{marginHorizontal: 5,justifyContent:'flex-end',alignItems:'flex-end',flexDirection:'row'}} 
                            onPress={() => this.handleOnclick()}>
                            <Text style={{fontSize:12}}>{this.getLabel(attributes.value)}</Text>
                            <Icon name="ios-arrow-forward" style={{fontSize:18,paddingStart:10,color:theme.inputColorPlaceholder}}/>
                        </TouchableOpacity>
                    </View>

                </TouchableOpacity>
                <View style={{ paddingHorizontal: 15 }}>
                    <ErrorComponent {...{ attributes, theme }} />
                </View>
            </View>
        );
    }
}