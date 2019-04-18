import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import * as React from 'react';

const Header = (props: any) => {
    return (
        <div>
            <Menubar model={props.headerItems} >
                <Button label="Logout" className="p-button-raised p-button-success" onClick={props.logout} />
            </Menubar>
        </div>
    );
}

export default Header;
