"use client"
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig"

function User() {
    const router = useRouter()
    const [val, setval] = useState([])
    const value = collection(db, "demo")

    useEffect(() => {
        const getData = async() => {
            const dbval = await getDocs(value)
            setval(dbval.docs.map(doc=> ({...doc.data(), id:doc.id})))
        }
        getData()
    })


    const handelClick = () => {
        router.push("/")
    }

    return (
        <>
            <nav>
                <div className="left-side">
                    <h2>Book Store</h2>
                </div>
                <div className="middel-side">
                    <button>BOOKS</button>
                </div>
                <div className="right-side">
                    <button onClick={handelClick}>Logout</button>
                </div>
            </nav>
            <section className="home">
                <table>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>price</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {val.map((value) => {
                            return(
                                // eslint-disable-next-line react/jsx-key
                                <tr>
                                    <th>{value.title}</th>
                                    <th>{value.price}</th>
                                    <th>
                                        <button>BUY</button>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>
        </>
        
    )
}

export default User;