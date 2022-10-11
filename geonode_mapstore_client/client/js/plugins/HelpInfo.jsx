import React, { useState } from 'react';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import { Glyphicon } from 'react-bootstrap';
import ResizableModal from '@mapstore/framework/components/misc/ResizableModal';
import Button from '../../MapStore2/web/client/components/misc/Button';
import Message from '@mapstore/framework/components/I18N/Message';

import './helpInfo/helpInfo.css';

/**
 * Plugin for HelpInfo modal
 * @name HelpInfo
 * @class
 * @memberof plugins
 * @example
 */

function HelpModal(props) {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <Button onClick={()=>setOpen(true)} className="square-button" bsStyle={props.bsStyle}>
                <Glyphicon glyph="info-sign"/>
            </Button>
            {
                open && <ResizableModal
                    title={<Message msgId="helpInfo.title" />}
                    show={open} 
                    onClose={()=>setOpen(false)}
                >
                    <div className='helpInfoModal'>
                        <h1> {<Message msgId="helpInfo.header"/>} </h1>
                        <iframe className='helpInfoVideo'
                            src="https://www.youtube.com/embed/ybuivDWypdQ" 
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen 
                        />
                        <h1><a href='https://docs.mapstore.geosolutionsgroup.com/en/latest/' target='_blank'>{<Message msgId="helpInfo.text" />}</a></h1>
                        <Button onClick={()=>setOpen(false)}>{<Message msgId="close"/>}</Button>
                    </div>
                </ResizableModal>
            }
        </React.Fragment>
    )
}

export default createPlugin('HelpInfo', {
    component: HelpModal,
    containers: {
        Toolbar: {
            name: 'helpInfo',
            position: 1,
            tool: true,
            priority: 1,
        }
    },    
    epics: {
    },
    reducers: {
    }
});
