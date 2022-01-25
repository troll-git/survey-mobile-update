import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Platform, Dimensions, Image, TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from 'react-navigation-drawer';
import LogOutComponent from '../logout.component';
import {COLORS} from "../../styles/colors";
import {changeSettings, loadUser, searchSelector} from "../../redux/modules/auth";
import {showAlert} from "../../redux/modules/dialogs";

interface IMapProps {
    navigation: any,
    search: string,
    changeSettings: Function,
    showAlert: Function
}

class AppHeader extends Component<IMapProps> {
    private onChangeText = (value) => {
        this.props.changeSettings({
            name: 'search',
            value
        })
    };

    render() {
        const {navigation} = this.props;
        const isDrawerOpen = navigation.state.isDrawerOpen;
        return (
            <View style={isDrawerOpen ? localStyles.container : localStyles.toolbar}>
                {
                    isDrawerOpen ? (
                        <View style={localStyles.header}>
                            <Image style={localStyles.logotype} source={require('../../../assets/images/logo.png')}/>
                            <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
                                <Icon name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'} size={30} color={COLORS.TEXT_COLOR}/>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={localStyles.header}>
                            <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
                                <Icon name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} size={30} color={COLORS.TEXT_COLOR}/>
                            </TouchableOpacity>
                            <View style={localStyles.search}>
                                <Icon name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} size={30} color={COLORS.TEXT_COLOR}/>
                                <TextInput
                                    style={localStyles.input}
                                    placeholder={'Szukaj danych'}
                                    placeholderTextColor={COLORS.TEXT_COLOR}
                                    onChangeText={this.onChangeText}
                                    value={this.props.search}
                                />
                            </View>
                            <LogOutComponent navigation={navigation}/>
                        </View>
                    )
                }
            </View>
        )
    }
}

const localStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 45,
        height: 60,
        width: Dimensions.get('window').width,
        backgroundColor: COLORS.BACKGROUND_DARK,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },
    header: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    toolbar: {
        position: 'absolute',
        top: 45,
        height: 60,
        width: Dimensions.get('window').width - 20,
        backgroundColor: COLORS.BACKGROUND,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: .5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    logotype: {
        width: 270,
        height: 35,
        resizeMode: 'stretch',
        opacity: 0
    },
    search: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 30,
    },
    input: {
        marginLeft: 5,
        flex: 1,
        height: 60,
    }
});

const mapStateToProps = (state: any) => ({
    search: searchSelector(state)
});

const mapDispatchToProps = (dispatch: any) => (
    bindActionCreators({
        changeSettings,
        showAlert
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);