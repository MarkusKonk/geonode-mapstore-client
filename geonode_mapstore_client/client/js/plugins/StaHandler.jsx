/*
Map.jsx einladen
function HandlerSTa extends Map? //irgendwie an die props rankommen, wo die layer drin sind. Oder über den reducer?
dann layer durchgucken und checken ob STA layer dabei ist
wenn dem so ist, dann marker hinzufügen mit Koordinaten aus map.center

gucken, wie die featrures in den state kommen
da muss der marker rein
dann sollte der state aktualisieren und so auch die map
*/
import React from 'react';
import { createPlugin } from '../../MapStore2/web/client/utils/PluginsUtils';
import map from '@mapstore/framework/plugins/Map';
import { connect } from 'react-redux';
import layersReducer from "@mapstore/framework/reducers/layers";
import {get} from 'lodash';
import PropTypes from 'prop-types';
import { createSTA_features } from './staHandler/actions_StaHanlder';
import sta_add_features from './staHandler/reducers_StaHandler';

function STA(props) {

    props.sta_features();

    return (
        <div>
            hällo
        </div>
    )
}

const StaPlugin = connect((state) =>{
    return {
        sta_layer: get(state, 'layers.flat')
    }
}, {
    sta_features: createSTA_features
}
)(STA)

export default createPlugin('StaHandler', {
    component: StaPlugin,
    reducers: {
        sta_add_features
    }
});