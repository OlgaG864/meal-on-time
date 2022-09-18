import { useParams } from "react-router-dom";
import Title from "../Title/Title";


function UpdateItem() {
    const { id } = useParams();

    return (
        <>
            <Title text="Update your dish" />
            {id}
        </>
    );
}

export default UpdateItem;