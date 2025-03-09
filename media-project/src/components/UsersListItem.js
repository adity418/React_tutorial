import { useThunk } from "../hooks/use-thunks";
import { removeUser } from "../store";
import Button from './Button';
import { GoTrash } from "react-icons/go";
import ExpandablePanel from './ExpandablePanel';
import AlbumList from './AlbumsList';

function UsersListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    };

    const header = (
        <>
            <Button className="mr-3" loading={isLoading} onClick={handleClick}>
                <GoTrash />
            </Button>
            {error && <div>Error delaying user.</div>}
            {user.name}
        </>
    );


    return(
        <ExpandablePanel header={header}>
            <AlbumList user={user}/>
        </ExpandablePanel>
    );
}

export default UsersListItem;