# radio
a react native checkbox component for android and ios
# Installation
-npm i react-native-checkbox-master --save
# Usage
## Import this module:
```javascript
 import CheckBox from 'react-native-checkbox-master';
```

## code
```javascript
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
export default class RadioModalItem extends Component{
	constructor(props){
		super(props);
		this.state = {
            language:datas[3].selecteId,
			item:datas[3].content,
			initItem:'选项a',
			initId:'0',
			array:null,
        };
	}
	onchangeVal(array){
	    this.setState({
			length:array.length,
			arr:array,
			sel:array.length>0?1:0
		})
	  
	}
	creatInner(item,index){
		return <CreateAnwser key={index} item={item} index={index} />
	}
	render(){
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
				    <CheckBox
					    dataOption={datas}
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
						seledImg={require('./imgs/selected.png')}
						selImg={require('./imgs/select.png')}
						selnoneImg={require('./imgs/selectnone.png')}
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
```
# Show
<img src="https://github.com/antiantian/rn-checkbox/blob/master/show.png"/>
# Explain
- Two ways of using

  -1.
```javascript
   <RadioModal dataOption={data} />
 ```
  -2. 
```javascript
      <RadioModal>
          <Text value="0">选项a</Text>
	  <Text value="1" disabled="true">选项b</Text>
	  <Text value="2">选项c</Text>
	  <Text value="3">选项d</Text>
      </RadioModal>
```
# Customization
- innerStyle：Style of each radio button
- txtColor：Style of each radio button text
- noneColor：No click on the button style
- seledImg:Select Picture
- selImg:default Picture
- selnoneImg:disabled Picture
- style：Outer style
# Props 
- options={{id:'selecteId',value:'content',disabled:'selected',checked:'checked'}}  Set corresponding name
- dataOption: data

# Methods

- onValueChange={(array)=>{}}  //return id(Unique identification) item（Text content）
```javascript 
array=[
	{
	  id:id,
	  item:item,
	},
	{
	  id:id,
	  item:item,
	},
	...
]
```
