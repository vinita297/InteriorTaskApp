import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated } from 'react-native'

//redux


//components

//utilities
import { width, colors } from '../../utility/utilities'
import HeightWidth from '../../utility/HeightWidth';


class CustomTabBar extends Component {
    constructor(props) {
        super(props);
        this.animationOpacity = new Animated.Value(0);
        this.animation = new Animated.Value(0);
        this.ShowTabBar = this.ShowTabBar.bind(this);
        this.state = {
            selected: "Home",
            setzIndex: 1,
            selectedKey: ''
        }
    }

    componentDidMount() {
        this.ShowTabBar()
        this.ShowTabBarOnDrag()
        this.TabBarOpacity()
    }

    ShowTabBar = () => {
        let { setTabBarVisible } = this.props;
        if (setTabBarVisible) {
            Animated.timing(this.animation, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(this.animation, {
                toValue: 100,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
    }

    ShowTabBarOnDrag = () => {
        let { setTabBarShowhideBool } = this.props;
        if (setTabBarShowhideBool) {
            Animated.timing(this.animation, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(this.animation, {
                toValue: 100,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
    }

    TabBarOpacity = () => {
        Animated.timing(this.animationOpacity, {
            toValue: 1,
            duration: 1800,
            useNativeDriver: true
        }).start();
    }

    ShowHideTabBarOnKeyboardAppairs = (tabBarState) => {
        if (tabBarState === 0) {
            this.setState({ setzIndex: -1 })
        } else {
            this.setState({ setzIndex: 1 })
        }
        Animated.timing(this.animationOpacity, {
            toValue: tabBarState,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.setTabBarVisible !== this.props.setTabBarVisible) {
            this.ShowTabBar()
        }
        if (prevProps.setTabBarVisibleOnKeyboardAppairs !== this.props.setTabBarVisibleOnKeyboardAppairs) {
            this.ShowHideTabBarOnKeyboardAppairs(this.props.setTabBarVisibleOnKeyboardAppairs)
        }
        if (prevProps.setTabBehaviour !== this.props.setTabBehaviour) {
            console.log("setTab--------", this.state.selected)
            this.setState({ selected: this.props.setTabBehaviour })
        }
        if (prevProps.setTabBarShowhideBool !== this.props.setTabBarShowhideBool) {
            this.ShowTabBarOnDrag()
        }
    }

    renderColor = (currentTab) => {
        let { selected } = this.state;
        if (currentTab === selected) {
            return colors.softRed
        } else {
            return colors.verySoftOrange
        }
    }

    onHandelPress = (activeTab, index, key) => {
        let { state } = this.props;
        console.log("state---", state)
        if (state.index !== index) {
            this.setState({
                selected: activeTab,
                selectedKey: key
            })
            this.props.navigation.navigate(activeTab)
        }
    }

    render() {
        let { state } = this.props;
        let { routes } = state;
        let { setzIndex } = this.state;
        return (
            <View style={styles.__wrapper}>
                <Animated.View style={[styles.__container, { opacity: this.animationOpacity, zIndex: setzIndex, transform: [{ translateY: this.animation }] }]}>
                    {
                        routes.map((route, index) => <CustomTab
                            tab={route}
                            icon={route.params.icon}
                            onPress={() => this.onHandelPress(route.name, index, route.key)}
                            color={this.renderColor(route.name)}
                            key={route.key}
                        />)
                    }
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    __wrapper: {
        position: "absolute",
        bottom: 15,
        width: width,
        alignItems: "center",
        justifyContent: "center",
    },
    __container: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.white,
        width: HeightWidth.getResWidth(width - 115),
        borderRadius: 100,
        elevation: 3
    }
})

// const mapStateToProps = state => {
//     return {
//         setTabBarVisible: state.home.setTabBarBoll,
//         setTabBarVisibleOnKeyboardAppairs: state.home.setTabBarShowHide,
//         setTabBehaviour: state.home.setTabBackBehaviourBoll,
//         setTabBarShowhideBool: state.home.setTabBarOnOffOnDrag,
//     };
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         setTabBarBehaviour: (setTabBackBehaviour) => dispatch(actions.setTabBehaviour(setTabBackBehaviour))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CustomTabBar)
export default CustomTabBar