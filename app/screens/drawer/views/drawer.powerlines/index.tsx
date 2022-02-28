import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FlatList, ScrollView, Text, StyleSheet, View, TouchableOpacity} from "react-native";
import {changeControls, locationSelector, powerlineSelector, powerlinesSelector} from "../../../../redux/modules/map";
import {fetchLocationParcels, fetchParcelsOffline} from "../../../../redux/modules/map/parcels";
import {fetchLocationPoles, fetchPolesOffline} from "../../../../redux/modules/map/poles";
import {showDialogContent} from "../../../../redux/modules/dialogs";
import {fetchLocationSegments, fetchSegmentsOffline} from "../../../../redux/modules/map/segments";
import {Powerline, Project} from "../../../../entities";
import {COLORS} from "../../../../styles/colors";
import {connectionSelector} from "../../../../redux/modules/connect";

interface IMapProps {
    changeControls: Function,
    fetchLocationParcels: Function,
    fetchParcelsOffline: Function,
    fetchLocationPoles: Function,
    fetchPolesOffline: Function,
    fetchLocationSegments: Function,
    fetchSegmentsOffline: Function,
    showDialogContent: Function,
    project: Project,
    powerlines: Array<Powerline>,
    selected_powerlines: Array<number>,
    connection: boolean,
}

class DrawerPowerlines extends Component<IMapProps> {

    state = {
        isAll: false
    };

    private selectItem = (item: any) => {
        let list: Array<number> = this.props.selected_powerlines.filter((el: any) => el.id === item.id);

        list.push(item.id);
        this.props.changeControls({
            name: 'selected_powerlines',
            value: [...list]
        });

        this.loadItemData(item);
    };

    private onChange = (name, item) => {
        this.props.changeControls({
            name,
            value: item.value
        });
        this.loadItemData(item);
    };

    private loadItemData = (item: any) => {
        const reqData = {...this.props.project, powerLineId: item.id};

        if(this.props.connection) {
            this.props.fetchLocationParcels(reqData);
            this.props.fetchLocationPoles(reqData);
            this.props.fetchLocationSegments(reqData);
        } else {
            this.props.fetchParcelsOffline(reqData);
            this.props.fetchPolesOffline(reqData);
            this.props.fetchSegmentsOffline(reqData);
        }
    };

    render() {
        if (!this.props.project) {
            return null;
        }
        return (
            <View style={localStyles.container}>
                <Text style={localStyles.title}>Wybierz linie:</Text>
                
                    <FlatList
                        data={
                            [
                                ...this.props.powerlines
                            ]
                        }
                        renderItem={
                            ({item}: any) => {
                                return (
                                    <TouchableOpacity key={item.value}
                                                      onPress={() => this.selectItem(item.id ? item : null)}>
                                        {
                                            (this.props.selected_powerlines.indexOf(item.id) > -1) ? (
                                                <View style={localStyles.radioBtn}>
                                                    <View style={localStyles.checkedCircle}>
                                                        <View style={localStyles.checkedInnerCircle}/>
                                                    </View>
                                                    <Text style={localStyles.selected}>{item.title}</Text>
                                                </View>
                                            ) : (
                                                <View style={localStyles.radioBtn}>
                                                    <View style={localStyles.circle} />
                                                    <Text style={localStyles.item}>{item.title}</Text>
                                                </View>
                                            )
                                        }
                                    </TouchableOpacity>
                                )
                            }
                        }
                    />
                
            </View>
        )
    }
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
        width: '100%',
        maxHeight: 265,
        borderBottomWidth: 1,
        borderBottomColor: '#979797',
        borderBottomEndRadius: 1,
    },
    title: {
        paddingBottom: 20,
        opacity: 0.5,
        color: COLORS.TEXT_COLOR
    },
    scroll: {
        flex: 1,
        width: '100%',
    },

    radioBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        borderWidth: 2.5,
        borderColor: COLORS.PRIMARY,
        backgroundColor: COLORS.PRIMARY,
        marginRight: 10,
    },
    checkedCircle: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        backgroundColor: COLORS.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    checkedInnerCircle: {
        width: 11,
        height: 11,
        borderRadius: 5.5,
        backgroundColor: COLORS.WHITE,
    },
    item: {
        padding: 10,
        fontSize: 16,
        height: 40,
        opacity: 0.7,
        color: COLORS.TEXT_COLOR
    },
    selected: {
        padding: 10,
        fontSize: 16,
        height: 40,
        opacity: 1,
        color: COLORS.TEXT_COLOR
    }
});

const mapStateToProps = (state: any) => ({
    project: locationSelector(state),
    powerlines: powerlinesSelector(state),
    selected_powerlines: powerlineSelector(state),
    connection: connectionSelector(state),
});

const mapDispatchToProps = (dispatch: any) => (
    bindActionCreators({
        changeControls,
        fetchLocationParcels,
        fetchLocationPoles,
        fetchLocationSegments,
        showDialogContent,
        fetchParcelsOffline,
        fetchPolesOffline,
        fetchSegmentsOffline
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(DrawerPowerlines);