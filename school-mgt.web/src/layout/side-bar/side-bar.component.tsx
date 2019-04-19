import { PanelMenu } from 'primereact/panelmenu';
import * as React from 'react';

const SideBar = (props: any) => {
    return (
        <div className="layout-sidebar">
            <PanelMenu model={props.sideBarPanel} style={{ width: '300px' }} />
        </div>
    );
}

export default SideBar;
