import { useSelector } from 'react-redux';
import { useThunk } from '../hooks/use-thunks';
import { fetchUser, addUser } from '../store';
import { useEffect } from 'react';
import Skeleton from './Skeleton';
import UsersListItem from './UsersListItem';
import Button from './Button';

function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUser);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
    const { data } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        doCreateUser();
    }

    
    let content;
    if (isLoadingUsers) {
        content = <Skeleton times={6} className='h-10 w-full'/>;
    } else if (loadingUsersError) {
        content = <div>Error fetching data...</div>
    } else {
        content = data.map((user) => {
            return <UsersListItem  key={user.id} user={user} />;
        });
    }

    return (
        <div>
            <div className='flex flex-row justify-between items-center m-3'>
                <h1 className='m-2 text-xl'>Users</h1>
                <Button loading={isCreatingUser} onClick={handleUserAdd}>
                    + Add User
                </Button>
                {creatingUserError && 'Error creating user...'}
            </div>
            {content}
        </div>
    );
}

export default UsersList;