"use client"
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebaseConfig"
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { Database } from "firebase/database";

function Navigation() {
    const [manage, setManage] = useState(false)
    const [home, setHome] = useState(true)
    const titleInput = useRef(null)
    const priceInput = useRef(null)
    const router = useRouter()

    // CONTROL DATA FROM FIREBASE
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [val, setVal] = useState([])
    const value = collection(db, "demo")

    useEffect(() => {
        const getData = async() => {
            const dbval = await getDocs(value)
            setVal(dbval.docs.map(doc=> ({...doc.data(), id:doc.id})))
        }
        getData()
    })

    const addData = async() => {
        await addDoc(value, {title:title, price:price})
        titleInput.current.value = ""
        priceInput.current.value = ""
    }

    const handelDelte = async(id) => {
        const delelteval = doc(db, "demo", id)
        await deleteDoc(delelteval)
    }
// END CONTROL DATA FROM FIREBASE 

    const handelClick = () => {
        router.push('/')
    }

    const manageSection = () => {
        setHome(false)
        setManage(true)
    }

    const handelHome = () => {
        setManage(false)
        setHome(true)
    }

    return(
        <>
            <nav>
                <div className="left-side">
                    <h2>Book Store</h2>
                </div>
                <div className="middel-side">
                    <button onClick={handelHome}>HOME</button>
                    <button onClick={manageSection}>CONTENT MANAGEMENT</button>
                </div>
                <div className="right-side">
                    <button onClick={handelClick}>Logout</button>
                </div>
            </nav>
            <section className={manage? "new-book open" : "new-book"}>
                <h2>CONTENT MANAGEMENT</h2>
                <hr />
                <div className="new-book-content">
                    <input ref={titleInput} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                    <input ref={priceInput} type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
                    <button onClick={addData}>CREAT</button>
                </div>
            </section>
            <section className={home? "home" : "home close"}>
                <table>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>price</th>
                            <th>actions</th>
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
                                        <button>edit</button>
                                        <button onClick={()=> handelDelte(value.id)}>delete</button>
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

export default Navigation;