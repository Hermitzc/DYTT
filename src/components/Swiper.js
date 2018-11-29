/**
 * Swiper
 */

import React, { PureComponent } from 'react';

import {
	TouchableOpacity,
    StyleSheet,
    Image,
    ImageBackground,
	Text,
	View,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Loading from './Loading';

import {ThemeContext} from '../../util/theme-context';



class SwiperCon extends React.Component {
    render(){
        const {theme} = this.context;
        const {loading,data,navigation} = this.props;
        if(loading){
            return <View style={styles.item} ><Loading size="small" text="" /></View>
        }
        return (
            <Swiper style={styles.wrap} autoplay={true} paginationStyle={{bottom:30,right:10,justifyContent:'flex-end'}} dotColor='rgba(252,255,255,.7)' dotStyle={{width: 6, height: 6}}  activeDotStyle={{width: 6, height: 6}} activeDotColor={theme.themeColor}>
                {
                    data.map((d,i)=>(
                        <TouchableOpacity key={i} activeOpacity={.9} style={styles.item} onPress={()=>navigation.navigate('MovieDetail',{movieId:d.ID})} >
                            <ImageBackground style={styles.bg} resizeMode="cover" blurRadius={5} source={{uri:d.Cover}}>
                                <Image style={styles.itemimg} source={{uri:d.Cover}} />
                                <View style={styles.iteminfo}>
                                    <Text style={styles.title}>{d.Name}</Text>
                                    <Text style={styles.MovieTitle}>{d.MovieTitle}</Text>
                                    <Text style={styles.Tags}>{d.Tags}</Text>
                                    <Text style={styles.UpdateTime}>{d.UpdateTime}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    ))
                }
            </Swiper>
        )
    }
};

SwiperCon.contextType = ThemeContext;

export default SwiperCon;

const styles = StyleSheet.create({
    wrap: {
        height:200,
    },
	item: {
        height:200,
        //margin:5,
        //borderRadius:5,
        overflow:'hidden',
        backgroundColor:'#fff',
    },
    bg:{
        flex:1,
        padding:15,
        //borderRadius:5,
        flexDirection:'row',
    },
    itemimg:{
        width:100,
        height:150,
        borderRadius:3,
    },
    iteminfo:{
        flex:1,
        paddingLeft:10
    },
    title:{
        marginTop:5,
        color:'#fff',
        fontSize:20
    },
    MovieTitle:{
        marginTop:10,
        color:'#fff',
        backgroundColor:'rgba(0,0,0,.5)',
        alignSelf:'flex-start',
        fontSize:12,
        paddingHorizontal:5,
        paddingVertical:2,
        borderRadius:2,
    },
    Tags:{
        marginTop:10,
        color:'#fff',
        fontSize:14
    },
    UpdateTime:{
        marginTop:10,
        color:'#fff',
        fontSize:14
    },
});