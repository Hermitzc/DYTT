/*
*
MovieContent
*
*/

import React, { PureComponent, Fragment } from 'react';
import {
    BackHandler,
    InteractionManager,
    NativeModules,
    TouchableOpacity,
    Platform,
    LayoutAnimation,
    Text,
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import AppTop from '../components/AppTop';
import Loading from '../components/Loading';
import MovieList from '../components/MovieList';
import { GetPageList } from '../../util/api';

const { UIManager } = NativeModules;

const nowYear = new Date().getFullYear();

const CommonList = [
    {
        name: "地区",
        icon: 'map-pin',
        cate: 'Area',
        //大陆香港台湾美国韩国日本泰国新加坡马来西亚印度英国法国加拿大
        type: [
            {
                name:"大陆",
                id:"大陆"
            },
            {
                name:"香港",
                id:"香港"
            },
            {
                name:"台湾",
                id:"台湾"
            },
            {
                name:"美国",
                id:"美国"
            },
            {
                name:"韩国",
                id:"韩国"
            },
            {
                name:"日本",
                id:"日本"
            },
            {
                name:"泰国",
                id:"泰国"
            },
            {
                name:"新加坡",
                id:"新加坡"
            },
            {
                name:"马来西亚",
                id:"马来西亚"
            },
            {
                name:"英国",
                id:"英国"
            },
            {
                name:"法国",
                id:"法国"
            },
            {
                name:"加拿大",
                id:"加拿大"
            },
        ]
    },
    {
        name: "年份",
        icon: 'calendar',
        cate: 'Year',
        //nowYear, nowYear - 1, nowYear - 2, nowYear - 3, nowYear - 4, nowYear - 5, nowYear - 6, nowYear - 7, nowYear - 8, nowYear - 9, nowYear - 10
        type: [
            {
                name:nowYear,
                id:nowYear
            },
            {
                name:nowYear-1,
                id:nowYear-1
            },
            {
                name:nowYear-2,
                id:nowYear-2
            },
            {
                name:nowYear-3,
                id:nowYear-3
            },
            {
                name:nowYear-4,
                id:nowYear-4
            },
            {
                name:nowYear-5,
                id:nowYear-5
            },
            {
                name:nowYear-6,
                id:nowYear-6
            },
            {
                name:nowYear-7,
                id:nowYear-7
            },
            {
                name:nowYear-8,
                id:nowYear-8
            },
            {
                name:nowYear-9,
                id:nowYear-9
            },
            {
                name:nowYear-10,
                id:nowYear-10
            }
        ]
    }
]

const Categories = {
    dy: [
        {
            name: "分类",
            icon: 'compass',
            cate: 'Plot',
            type: [
                {
                    name:"动作",
                    id:8
                },
                {
                    name:"惊悚",
                    id:43
                },
                {
                    name:"犯罪",
                    id:40
                },
                {
                    name:"冒险",
                    id:35
                },
                {
                    name:"武侠",
                    id:44
                },
                {
                    name:"悬疑",
                    id:42
                },
                {
                    name:"科幻",
                    id:11
                },
                {
                    name:"恐怖",
                    id:12
                },
                {
                    name:"爱情",
                    id:10
                },
                {
                    name:"喜剧",
                    id:9
                },
                {
                    name:"战争",
                    id:13
                },
                {
                    name:"灾难",
                    id:38
                },
                {
                    name:"古装",
                    id:37
                },
                {
                    name:"警匪",
                    id:39
                },
                {
                    name:"历史",
                    id:28
                },
                {
                    name:"伦理",
                    id:27
                },
                {
                    name:"剧情",
                    id:26
                },
                {
                    name:"抗日",
                    id:122
                },
                {
                    name:"谍战",
                    id:45
                },
                {
                    name:"青春",
                    id:31
                }
            ]
        },
    ],
    dsj: [
        {
            name: "分类",
            icon: 'compass',
            cate: 'Plot',
            type: [
                {
                    name:"动作",
                    id:133
                },
                {
                    name:"惊悚",
                    id:134
                },
                {
                    name:"犯罪",
                    id:66
                },
                {
                    name:"恐怖",
                    id:112
                },
                {
                    name:"言情",
                    id:87
                },
                {
                    name:"悬疑",
                    id:67
                },
                {
                    name:"搞笑",
                    id:80
                },
                {
                    name:"校园",
                    id:69
                },
                {
                    name:"战争",
                    id:74
                },
                {
                    name:"古装",
                    id:78
                },
                {
                    name:"抗日",
                    id:123
                },
                {
                    name:"谍战",
                    id:71
                },
            ]
        },
        {
            name: "状态",
            icon: 'layers',
            cate: 'Status',
            type: [
                {
                    name:"连载中",
                    id:1
                },
                {
                    name:"已完结",
                    id:2
                },
            ]
        }
    ],
    Animation: [
        {
            name: "分类",
            icon: 'compass',
            cate: 'Plot',
            type: [
                {
                    name:"热血",
                    id:59
                },
                {
                    name:"搞笑",
                    id:58
                },
                {
                    name:"冒险",
                    id:60
                },
                {
                    name:"惊悚",
                    id:128
                },
                {
                    name:"励志",
                    id:64
                },
                {
                    name:"恋爱",
                    id:104
                },
                {
                    name:"科幻",
                    id:109
                },
                {
                    name:"宠物",
                    id:116
                },
                {
                    name:"推理",
                    id:54
                },
                {
                    name:"校园",
                    id:53
                },
                {
                    name:"魔幻",
                    id:56
                },
                {
                    name:"益智",
                    id:50
                },
                {
                    name:"机战",
                    id:55
                },
            ]
        },
        {
            name: "状态",
            icon: 'layers',
            cate: 'Status',
            type: [
                {
                    name:"连载中",
                    id:1
                },
                {
                    name:"已完结",
                    id:2
                },
            ]
        }
    ],
    Arts: [
        {
            name: "分类",
            icon: 'compass',
            cate: 'Plot',
            type: [
                {
                    name:"搞笑",
                    id:100
                },
                {
                    name:"真人秀",
                    id:101
                },
                {
                    name:"脱口秀",
                    id:102
                },
                {
                    name:"晚会",
                    id:16
                },
                {
                    name:"财经",
                    id:17
                },
                {
                    name:"体育",
                    id:18
                },
                {
                    name:"纪实",
                    id:19
                },
                {
                    name:"益智",
                    id:127
                },
                {
                    name:"歌舞",
                    id:21
                },
                {
                    name:"军事",
                    id:23
                },
                {
                    name:"少儿",
                    id:24
                },
                {
                    name:"音乐",
                    id:92
                },
                {
                    name:"游戏",
                    id:93
                },
                {
                    name:"美食",
                    id:94
                },
                {
                    name:"娱乐",
                    id:98
                },
            ]
        },
        {
            name: "状态",
            icon: 'layers',
            cate: 'Status',
            type: [
                {
                    name:"连载中",
                    id:1
                },
                {
                    name:"已完结",
                    id:2
                },
            ]
        }
    ]
}

class DrawerContent extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            Plot: props.state.Plot,
            Status: props.state.Status,
            Area: props.state.Area,
            Year: props.state.Year,
            isVisible:false
        }
    }

    setType = (cate, value) => {
        LayoutAnimation.easeInEaseOut();
        this.setState({
            [cate]: value
        })
    }

    setVisibel = () => {
        /*
        if(this.props.type==='movie'){
            this.setType('isVisible',true);
        }
        */
    }

    onSubmit = () => {
        const { Status, Plot, Area, Year } = this.state;
        const { setType, closeDrawer } = this.props;
        closeDrawer();
        setType({ Status, Plot, Area, Year });
    }

    componentDidMount() {

    }

    render() {
        const { themeColor, closeDrawer, type } = this.props;
        const typeList = [...Categories[type], ...CommonList];
        const { isVisible } = this.state;
        return (
            <Fragment>
                <LinearGradient colors={themeColor.length>1?themeColor:[...themeColor,...themeColor]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.appbar}>
                    <BorderlessButton
                        activeOpacity={.8}
                        style={styles.btn}
                        onPress={closeDrawer}
                    >
                        <Icon name='x' size={22} color='#fff' />
                    </BorderlessButton>
                    <Text style={styles.apptitle} numberOfLines={1} onLongPress={this.setVisibel}>高级筛选</Text>
                </LinearGradient>
                <ScrollView style={styles.content}>
                    {
                        typeList.map((d, i) => (
                            <View key={i} style={styles.typewrap}>
                                <View style={styles.typetitle}>
                                    <Icon name={d.icon} size={16} color={themeColor[0]} />
                                    <Text style={[styles.typetitletxt, { color: themeColor[0] }]}>{d.name}</Text>
                                </View>
                                <View style={styles.typecon}>
                                    <BorderlessButton disabled={this.state[d.cate].id == ''} onPress={() => this.setType(d.cate, {name:'',id:''})} style={styles.typeitem}><Text style={[styles.typeitemtxt, this.state[d.cate].id == '' && { color: themeColor[0] }]}>全部</Text></BorderlessButton>
                                    {
                                        d.type.map((el, j) => (
                                            <BorderlessButton disabled={this.state[d.cate].id === el.id} onPress={() => this.setType(d.cate, el)} key={j} style={styles.typeitem}><Text style={[styles.typeitemtxt, el.id == this.state[d.cate].id && { color: themeColor[0] }]}>{el.name}</Text></BorderlessButton>
                                        ))
                                    }
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
                <View style={styles.typeaction}>
                    <TouchableOpacity activeOpacity={.8} onPress={this.onSubmit} style={{ flex: 1 }}>
                        <LinearGradient style={[styles.typebtn,{borderWidth:0}]} colors={themeColor.length>1?themeColor:[...themeColor,...themeColor]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                            <Text style={styles.typebtns}>确定</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8} onPress={closeDrawer} style={[styles.typebtn, { borderColor: themeColor[0] }]}><Text style={[styles.typebtns, { color: themeColor[0] }]}>取消</Text></TouchableOpacity>
                </View>
            </Fragment>
        )
    }
}

const CategoryTop = ({state,type,openDrawer,themeColor}) => (
    <View style={styles.typetop}>
        {
            [...Categories[type], ...CommonList].map((d, i) => (
                <BorderlessButton onPress={openDrawer} style={styles.typetopitem} key={i}>
                    <Icon name={d.icon} size={16} color={themeColor[0]} />
                    <Text style={[styles.typetoptxt, { color: themeColor[0] }]}>{state[d.cate].name || d.name}</Text>
                </BorderlessButton>
            ))
        }
    </View>
)

export default class extends PureComponent {

    page = 1;

    pageSize = 50;

    constructor(props) {
        super(props);
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        this.state = {
            data: [],
            isRender: false,
            isEnding: false,
            Status: {
                name:'',
                id:''
            },
            Plot: {
                name:'',
                id:''
            },
            Area: {
                name:'',
                id:''
            },
            Year: {
                name:'',
                id:''
            }
        }
    }

    openDrawer = () => {
        const { Status, Plot, Area, Year } = this.state;
        this.drawer.openDrawer();
        this.drawerContent.setState({ Status, Plot, Area, Year });
    }

    closeDrawer = () => {
        this.drawer.closeDrawer();
    }

    setType = (options) => {
        LayoutAnimation.easeInEaseOut();
        this.setState(options,this.regetData);
    }

    regetData = () => {
        this.page = 1;
        this.setState({
            isRender: false,
            isEnding: false,
            data: []
        }, this.getData)
    }

    getData = async () => {
        const { Status, Plot, Area, Year } = this.state;
        const data = await GetPageList({ pageIndex: this.page, pageSize: this.pageSize, Type:this.type, Status:Status.id, Area:Area.id, Plot:Plot.id, Year:Year.id,orderBy:'addtime' });
        console.warn(data)
        if(this.mounted){
            LayoutAnimation.easeInEaseOut();
            this.setState({
                data: [...this.state.data, ...data],
                isRender: true,
            })
            if (data.length < 25) {
                this.setState({
                    isEnding: true
                })
            } else {
                this.page = this.page + 1;
            }
        }
    }

    loadMore = () => {
        if (!this.state.isEnding) {
            this.getData();
        }
    }

    onDrawerOpen = () => {
        this.open = true;
    }

    onDrawerClose = () => {
        this.open = false;
    }

    onBackAndroid = () => {
        if(this.open){
            this.closeDrawer();
            return true;
        }
    }

    componentWillMount() {
        this.mounted = true;
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('handwareBackPress', this.onBackAndroid)
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            const { type } = this.props.navigation.state.params;
            this.type = type;
            this.getData();
        })
    }

    componentWillUnmount() {
        this.mounted = false;
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('handwareBackPress', this.onBackAndroid)
        }
    }

    render() {
        const { navigation, screenProps: { themeColor } } = this.props;
        const { title, type } = navigation.state.params;
        const { Status, Plot, Area, Year, isRender, data, isEnding } = this.state;
        return (
            <DrawerLayout
                drawerPosition={DrawerLayout.positions.Right}
                ref={drawer => this.drawer = drawer}
                drawerBackgroundColor="#fff"
                edgeWidth={50}
                onDrawerOpen={this.onDrawerOpen}
                onDrawerClose={this.onDrawerClose}
                drawerWidth={$.WIDTH * .8}
                renderNavigationView={() => <DrawerContent ref={drawer => this.drawerContent = drawer} themeColor={themeColor} closeDrawer={this.closeDrawer} type={type} state={{ Status, Plot, Area, Year }} setType={this.setType} />}
            >
                <View style={[styles.content, styles.bg]}>
                    <AppTop navigation={navigation} themeColor={themeColor} title={title} isBack={true} >
                        <BorderlessButton activeOpacity={.8} style={styles.btn} onPress={this.openDrawer} >
                            <Icon name='filter' size={18} color='#fff' />
                        </BorderlessButton>
                    </AppTop>
                    <CategoryTop openDrawer={this.openDrawer} type={type} state={{ Status, Plot, Area, Year }} themeColor={themeColor} />
                    {
                        isRender ?
                            <MovieList style={{paddingHorizontal:5}} isRender={true} isEnding={isEnding} data={data} navigation={navigation} themeColor={themeColor[0]} onEndReached={this.loadMore} />
                            :
                            <Loading size='small' text='正在努力加载中...' themeColor={themeColor[0]} />
                    }
                </View>
            </DrawerLayout>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    bg: {
        backgroundColor: '#f7f7f7',
    },
    appbar: {
        paddingTop: $.STATUS_HEIGHT,
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn: {
        width: 48,
        height: 48,
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    apptitle: {
        flex: 1,
        fontSize: 16,
        color: '#fff'
    },
    typewrap: {
        padding: 10,
        paddingBottom: 0
    },
    typetitle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 40
    },
    typetitletxt: {
        fontSize: 15,
        paddingLeft: 10,
        color: '#333',
    },
    typecon: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    typeitem: {
        paddingHorizontal: 10,
        marginRight: 5,
        marginBottom: 5,
        height: 30,
        justifyContent: 'center'
    },
    typeitemtxt: {
        fontSize: 14,
        color: '#666'
    },
    typetop: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        paddingHorizontal: 10
    },
    typetopitem: {
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    typetoptxt: {
        fontSize: 14,
        paddingLeft: 5,
    },
    typeaction: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    typebtn: {
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderWidth: 1,
        borderColor: 'transparent'
    },
    typebtns: {
        fontSize: 14,
        color: '#fff'
    }
})