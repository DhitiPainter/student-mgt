import axios from 'axios';
import { Core } from 'src/common/constant';

export async function getRoles() {
    return await axios.get(Core.getRoles);
}

export async function getSidebarPanel(userRole: any) {
    return await [
        {
            icon: 'pi pi-fw pi-home',
            label: 'Dashboard'
        },
        {
            icon: 'pi pi-fw pi-table',
            label: 'Attendance'
        },
    ]
    // return await axios.get(Core.getSidebarPanel, { params: { role: userRole } });
}