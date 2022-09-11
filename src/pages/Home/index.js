import React, { useEffect, useState } from "react"
import Card from "../../components/Card"
import dataApi from "../../api/dataApi"
import "./Home.scss"



const Home = () => {
    // const [dataAni, setDataAni] = useState(null)
    const data = [1, 2, 3, 4, 5, 6, 7, 8]

    // useEffect(()=> {
    //     const callDataAni = async () => {
    //         await dataApi.getData().then((res) => {
    //             console.log(res)
    //         })
    //         .catch((error) => {
    //           console.log(error);
    //         });
    //     }
    //     callDataAni()
    // }, [])

    return (
        <div className="container">
            <div className="row ">
                <h1>Animals Page</h1>
            </div>
            <div className="row ani-list">
                {data?.map((i) => 
                    <Card key={i}/>
               )}
            </div>
        </div>
    )
}

export default Home