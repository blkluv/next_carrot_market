import { useEffect, useState } from "react";

export default function useUser(){
    const [user, setUser] = useState();
    useEffect(() => {
        fetch("/api/users/me")
    }, [])
    return user;
}0