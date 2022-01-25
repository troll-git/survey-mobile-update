import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import MainList, {TYPES} from "../main.list";
import {showDialogContent} from "../../../redux/modules/dialogs";
import {locationPoisSelector, moduleName} from "../../../redux/modules/map";
import {searchSelector} from "../../../redux/modules/auth";

class Edit extends MainList {
    constructor(p: any) {
        super(p);
        this.title = 'Poi';
        this.type = TYPES.POI;
    }

    render() {
        return super._render();
    }
}

const mapStateToProps = (state: any) => ({
    selectedList: locationPoisSelector(state),
    search: searchSelector(state),
    loading: state[moduleName].loading
});

const mapDispatchToProps = (dispatch: any) => (
    bindActionCreators({
        showDialogContent
    }, dispatch)
);

const list = connect(mapStateToProps, mapDispatchToProps)(Edit);
export default list;