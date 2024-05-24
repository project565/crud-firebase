import { useRouter } from "next/navigation";
import { useState } from "react";

function Loginwindow() {
    const [user, setUser] = useState('')
    const router = useRouter()

    const handelClick = () => {
        if(user === 'admin' || user === "Admin" || user === "ADMIN") {
            router.push("/admin")
        }else{
            router.push("/user")
        }
    }   

    return (
        <div className="login-container">
            <div className="login-content">
                <h2>login window</h2>
                <hr />
                <div className="login-inputs">
                    <input onChange={(e) => setUser(e.target.value)} value={user} type="text" placeholder="User name.."/>
                    <input type="password" placeholder="Password" />
                    <button onClick={handelClick}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Loginwindow;