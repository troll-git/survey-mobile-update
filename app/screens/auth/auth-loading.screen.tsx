import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {moduleName, loadUser, userSelector, applyHeader} from '../../redux/modules/auth';
import {
    ActivityIndicator,
    StatusBar,
    View,
    StyleSheet,
} from 'react-native';

interface IMapProps {
    isChecked: boolean,
    loading: boolean,
    user: any,
    loadUser: Function,
    navigation: any
}

class AuthLoadingScreen extends Component<IMapProps> {
    static defaultProps = {
        navigation: () => 1
    };

    state = {
        isReady: false
    };

    constructor(props) {
        super(props);
        this.props.loadUser();
    }

    componentDidUpdate(): void {
        this.props.navigation.navigate(this.props.user ? 'App' : 'Auth');
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle={"default"}/>
            </View>
        );
    }
}

const mapStateToProps = (state: any) => ({
    user: userSelector(state),
    authError: state[moduleName].error,
    isChecked: state[moduleName].isChecked,
    loading: state[moduleName].loading
});

const mapDispatchToProps =(dispatch: any) => (
    bindActionCreators({
        loadUser
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});