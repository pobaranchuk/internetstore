import {useState} from "react";
import {LikeButtonStyled} from "./ShopCardStyled.ts";
import {HeartIcon} from "../../assets/svg/HeartIcon.tsx";

export const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <LikeButtonStyled onClick={toggleLike} liked={liked}>
            <HeartIcon />
        </LikeButtonStyled>
    );
};