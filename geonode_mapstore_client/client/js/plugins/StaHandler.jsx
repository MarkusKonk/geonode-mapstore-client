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
//import layersReducer from "@mapstore/framework/reducers/layers";
import {get} from 'lodash';
import PropTypes from 'prop-types';
import { createSTA_features } from './staHandler/actions_StaHanlder';
import sta_add_features from './staHandler/reducers_StaHandler';
import { createStore } from 'redux';
import {staLayerSelector} from './staHandler/selector_StaHandler';
import {getMarkerLayer} from '@mapstore/framework/utils/MapInfoUtils';
import layers from '@mapstore/framework/reducers/layers';
import {addLayer} from '@mapstore/framework/actions/layers';

function STA(props) {
    
    console.log("sta layer stuff")
    
    if (props[0]) {
        const marker = getMarkerLayer("GetFeatureInfo", {lat:50.000000, lng:-98.525390625});
        props.add_sta_layer(marker);
    }

    return (
        <div></div>
    )
}

const StaPlugin = connect(staLayerSelector, {
    //sta_features: createSTA_features,
    add_sta_layer: addLayer,
}
)(STA)

export default createPlugin('StaHandler', {
    component: StaPlugin,
    reducers: {
        layers
    }
});
