import React from 'react';
import { createPlugin } from '../../MapStore2/web/client/utils/PluginsUtils';

function LineBreaker() {
    const defaultLayer = document.getElementsByClassName("toc-default-layer-head");
    const title = document.getElementsByClassName("toc-title");

    if (defaultLayer && defaultLayer.length > 0 && title && title.length > 0) {
        Object.entries(defaultLayer).forEach(element => {
            element[1].style.height='auto';
            element[1].style.display='flow-root';
        });
        Object.entries(title).forEach(element => {
            element[1].style.wordBreak = 'break-all';
            element[1].style.height = 'fit-content';
            element[1].style.width = '65%';
            element[1].style.maxWidth = '100%';
            element[1].style.whiteSpace = 'normal';
        });
    }
    
    return (
        <div></div>
    )
}

export default createPlugin('LayerTitleTocLineBreaker', {
    component: LineBreaker,
});