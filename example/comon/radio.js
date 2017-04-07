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
						txtColor={'#000000'}
						noneColor={'#efefef'}
						selectedValue={'16'}
						onValueChange={this.onchangeVal.bind(this)}
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
					   <Text value="0" disabled="true" checked="true">apple</Text>
					   <Text value="1"  checked="true">orange</Text>
					   <Text value="2">purple</Text>
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
const styles=StyleSheet.create({
	titleCom:{
		marginBottom:5,
	},
	seltedImgs:{
		width:14,
		height:14,
		marginRight:8,
	},
	emailH:{
	 height:28,
	 textAlignVertical:'center',
	 marginRight:10,
	 color:'#141414',
	 fontSize:12,
	},
	inputs:{
		width:width*0.5,
		borderWidth:1,
		borderColor:'#dfdfdf',
		borderRadius:3,
		height:28,
		padding:0,
		paddingLeft:5,
		paddingRight:5,
		marginBottom:10,
		fontSize:12,
	},
	closeBtns:{
		position:'absolute',
		width:14,
		height:14,
		right:10,
		top:7,
	},
	headLog:{
	  backgroundColor:'#e6454a',
	  color:'#ffffff',
	  height:28,
	  textAlignVertical:'center',
	  textAlign:'center'
	},
	border1:{
		borderWidth:1,
		borderColor:'#dfdfdf',
	},
	borderR:{
		borderRightWidth:1,
		borderRightColor:'#dfdfdf',
	},
	borderL:{
		borderLeftWidth:1,
		borderLeftColor:'#dfdfdf',
	},
	eleMess:{
		paddingLeft:10,
		paddingRight:10,
		height:24,
		fontSize:12,
		color:'#ffffff',
		backgroundColor:'#f8cb43',
		borderRadius:3,
		textAlignVertical:'center',
		textAlign:'center',
		width:80,
	},
	electronicTip:{
		width:(width-40)/5,
		flexDirection:'row',
		justifyContent:'center',
		paddingTop:10,
		paddingBottom:10,
	},
	lineRow:{
		backgroundColor:'#ffffff',
		borderRadius:3,
		flexDirection:'row',
		flex:1,
		marginBottom:15,
		padding:10,
		alignItems:'center',
		justifyContent:'space-between',
		flexWrap:'wrap',
		alignItems: 'flex-start',
		
	},
	lineRowB:{
		backgroundColor:'#ffffff',
		borderRadius:3,
		flexDirection:'row',
		flex:1,
		marginBottom:15,
		paddingLeft:10,
		paddingRight:10,
		alignItems:'center',
	},
	inner3:{
		width:(width-40)/3,
		fontSize:12,
		color:'#141414'
	},
	innerS:{
		flexDirection:'row',
        flex:1,
		fontSize:12,
		color:'#141414'
	},
	flex1:{
		flex:1
	},
	flexRow:{

	   flexDirection:'row',
	 },
	flexVer:{
		flexDirection:'column',
	},
	Jcenter:{
		justifyContent:'center',
	},
	Acenter:{
		alignItems:'center',
	},
	BE:{
		justifyContent:'space-between'
	},
	Textcenter:{
		textAlign:'center',
	},
	TextCenterVer:{
		textAlignVertical:'center',
	},
	backCGray:{
	  backgroundColor:'#dfdfdf'
    },
	backWhite:{
		backgroundColor:'#ffffff',
	},
	borderRadius5:{
		borderRadius:5,
	},
	borderRadius3:{
		borderRadius:3,
	},
	horLine:{
		flexDirection:'row',
		flex:1,		
		flexWrap:'wrap',
		alignItems: 'flex-start',
		marginBottom:10,
		},
	paddlr10:{
	   paddingLeft:10,
	   paddingRight:10,
    },
	marginB10:{
		marginBottom:10,
	},
	colorRed:{
	   color:'#b40e12',
	},
	colorBlack:{
	   color:'#141414',
	},
	colorYellow:{
	   color:'#f8cb43', 
	},
	color999:{
	   color:'#999999',
	},
	colorWhite:{
	   color:'#ffffff',
    },	
})
