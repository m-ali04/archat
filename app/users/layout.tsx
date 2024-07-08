

import getUsers from '../actions/getUsers';
import Sidebar from '../components/sidebar/Sidebar';
import UserList from './components/UserList';

export default async function UserLayout({
    children
}:{
    children: React.ReactNode;
}) {
    const users = await getUsers();
    return(
        // ALLIIII PUT AT THE RATE IF ts-expect-error Server Component
        <Sidebar>
        <div className="h-full">
            <UserList items = {users}/>
            {children}
        </div>
        </Sidebar>
    )
};