"use client"

import style from "./logoutButton.module.css";
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation"

export default function LogoutButton() {
    const router = useRouter();
    const { data : me } = useSession(); // client 에서만 사용가능

    const onLogout = () => {
        signOut({redirect : false})
            .then(() => {
                router.replace('/');
            })
    };

    if(!me?.user) {
        return null;
    }

    return (
        <button className={style.logOutButton} onClick={onLogout}>
            <div className={style.logOutUserImage}>
                <img src={me.user?.image as string} alt={me.user?.email as string}/>
            </div>
            <div className={style.logOutUserName}>
                <div>{me.user?.name}</div>
                <div>{me.user?.email}</div>
            </div>
        </button>
    )
}