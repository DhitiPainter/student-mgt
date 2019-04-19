import { Button } from 'primereact/button';
// import { Menu } from 'primereact/menu';
import { Menubar } from 'primereact/menubar';
import * as React from 'react';

const Header = (props: any) => {
    return (
        <div className="layout-topbar">
            <Menubar model={props.headerItems} >
                {/* <Menu model={props.headerItems} popup={true} /> */}
                <Button label="Logout" className="p-button-raised p-button-success" onClick={props.logout} />
            </Menubar>
        </div>
    );
}

export default Header;
