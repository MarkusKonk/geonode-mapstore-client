import React from 'react';
import { createPlugin } from '../../MapStore2/web/client/utils/PluginsUtils';

function LineBreaker() {
    const defaultLayer = document.getElementsByClassName("toc-default-layer-head");
    if (defaultLayer[0]) {
        defaultLayer[0].style.height='auto';
        defaultLayer[0].style.display='flow-root';
    }
    const title = document.getElementsByClassName("toc-title");
    if (title[0]) {
        title[0].style.wordBreak = 'break-all';
        title[0].style.height = 'fit-content';
        title[0].style.width = '65%';
        title[0].style.maxWidth = '100%';
        title[0].style.whiteSpace = 'normal';
    } 
    return (
        <div></div>
    )
}

export default createPlugin('LayerTitleTocLineBreaker', {
    component: LineBreaker,
});