import InboxIcon from '@mui/icons-material/MoveToInbox';
import { ReactNode } from 'react';
    
    interface INav {
        name: string;
        Link: string;
        Icon: ReactNode;
    }
export const DrawerList:INav[] =[
    {
        name:"key",
        Link:"url",
        Icon:<InboxIcon/> 
    },
    {
        name:"key",
        Link:"url",
        Icon:<InboxIcon/> 
    },
    {
        name:"key",
        Link:"url",
        Icon:<InboxIcon/>
    }
]