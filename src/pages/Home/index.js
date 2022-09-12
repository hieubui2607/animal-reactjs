import React, { useEffect, useState } from "react"
import Card from "../../components/Card"
import dataApi from "../../api/dataApi"
import "./Home.scss"

const Home = () => {
    const [dataAni, setDataAni] = useState([])
    const [pageCurrent, setPageCurrent] = useState(1)

    useEffect(() => {
        if(localStorage.getItem('access_token')){
            let token = localStorage.getItem('access_token')
            const config = {
                headers: { "Authorization": `Bearer ${token}` },
            };
            const param = {
                pageCurrent
            };
            const callDataAni = async () => {
                await dataApi.getData(config, param).then((res) => {
                    setDataAni(res.animals)
                })
                .catch((err) => {
                    localStorage.remove();
                });
            }
            callDataAni();
        }
    }, [pageCurrent])

    // const handlePrevPage = () => {
    //     if(pageCurrent > 1) {
    //         setPageCurrent(pageCurrent - 1)
    //     }
    // }


    return (
        <div className="container">
            <div className="row ">
                <h1>Animals Page</h1>
            </div>
            <div className="row ani-list">
                {dataAni?.map((data, i) => 
                    <Card key={i} name={data?.name} desrcription={data?.description} specie={data.type}/>
               )}
            </div>
            <div className="center mt-1">
                {pageCurrent < 2 ? null :<button className="btn-pagination" onClick={() => setPageCurrent(pageCurrent - 1)}>Next Page</button>}
                <button className="btn-pagination" onClick={() => setPageCurrent(pageCurrent + 1)}>Next Page</button>
            </div>
        </div>
    )
}

export default Home