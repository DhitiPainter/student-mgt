import { PanelMenu } from 'primereact/panelmenu';
import * as React from 'react';

const SideBar = (props: any) => {
    return (
        <PanelMenu model={props.sideBarPanel} style={{ width: '300px' }} />
    );
}

export default SideBar;
