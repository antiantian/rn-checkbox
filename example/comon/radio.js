import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Navigator,
    TouchableHighlight,
    Text,
    ScrollView,
    Image,
    ListView,
    ToastAndroid,
} from 'react-native'
 import CheckBox from 'react-native-checkbox-master';
var Dimensions = require('Dimensions');
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;

var datas= [
            {
              "selecteId": 13,
              "content": "Apple",
              "selected": false,
              "checked":false,
            },
            {
              "selecteId": 14,
              "content": "Banana",
              "selected": false,
              "checked":false,
            },
            {
              "selecteId": 15,
              "content": "Orange",
              "selected": false,
              "checked":true,
            },
            {
              "selecteId": 16,
              "content": "Watermelon",
              "selected": true,
              "checked":true,
            },
            {
              "selecteId": 17,
              "content": "Grape",
              "selected": false,
              "checked":false,
            }
          ]   
export default class Types extends Component{
    constructor(props){
        super(props);
        this.state = {
            language:datas[3].selecteId,
            item:datas[3].content,
            initItem:'选项a',
            initId:'0',
            array:null,
            all:false,
            datalist:datas
        };
    }
    onchangeVal(array){
        this.setState({
            length:array.length,
            arr:array,
            sel:array.length>0?1:0,
            all:array.length===this.state.datalist.length?true:false
        })

    }
    checkAll=()=>{
          this.setState({
             all:!this.state.all  
          },()=>{

               for(let i=0;i<datas.length;i++){

                    if(this.state.all){
                        datas[i].checked=true
                    }else{
                        datas[i].checked=false
                    }     
               }

               this.setState({
                  datalist:datas 
               },()=>{
               // ToastAndroid.show(JSON.stringify(this.state.datalist), ToastAndroid.SHORT);
               })
               
          })
    }
    creatInner(item,index){
        return <CreateAnwser key={index} item={item} index={index} />
    }
    render(){
        imgUrl=this.state.all?this.props.seledImg||require('./imgs/selected.png'):this.props.selImg||require('./imgs/select.png');
        return (
                <View style={{padding:20,flex:1,flexDirection:'column'}}>
                    <Text style={{backgroundColor:'#ffffff',color:'#414141',padding:5,}}>    
                     array length：<Text style={{color:'#ff0000'}}>
                                             {this.state.length}
                                             
                                            </Text>
                    </Text>
                    {
                      this.state.arr&&this.state.arr.length>0&&
                        <View style={{flexDirection:'row'}}>
                          {this.state.arr.map((item,index)=>this.creatInner(item,index))}
                        </View>     
                    }
                    <Text>是否选中：{this.state.sel}</Text>
                    <TouchableHighlight onPress={this.checkAll}>
                      <View style={{flexDirection:'row',alignItems:'center',}}><Image source={imgUrl} style={{width:14,height:14,marginRight:7}}/><Text>全选</Text></View>
                    </TouchableHighlight>
                    <CheckBox
                        dataOption={this.state.datalist}
                        options={{id:'selecteId',value:'content',disabled:'selected',checked:'checked'}}
                        innerStyle={{width:(width-80)/2}}
                        onValueChange={this.onchangeVal.bind(this)}
                        style={{ flexDirection:'row',
                              flexWrap:'wrap',
                              alignItems:'flex-start',
                              flex:1,
                              backgroundColor:'#ffffff',padding:5,marginTop:10
                              }} 
                    />
                    <View><Text>是否选中：{this.state.orangeCheck}</Text></View>
                    <CheckBox
                        onValueChange={(array1)=>{this.setState({orangeCheck:array1.length>0?1:0})}}
                    
                        style={{ flexDirection:'row',
                              flexWrap:'wrap',
                              alignItems:'flex-start',
                              flex:1,
                              backgroundColor:'#ffffff',padding:5,marginTop:10
                              }} 
                    >
                       <Text value="1"  checked="true">orange</Text>
                    </CheckBox>

                </View>

        );
    }
}
class CreateAnwser extends Component{
    render(){
        return(
           <Text>{this.props.item.id}{this.props.item.item}</Text>
        )
    }
}
