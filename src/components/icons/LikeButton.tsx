import {IconWrapper} from "../IconWrapper.tsx";
import {MdFavorite} from "react-icons/md";

export const LikeButton = () => {
    return (
        <IconWrapper >
            <MdFavorite  size={"24px"} color={"red"}/>
        </IconWrapper>
    );
};