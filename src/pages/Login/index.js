import React from "react"
import Slogan from "../../components/Slogan"
import Form from "../../components/Form"
import SubSlogan from "../../components/Sub-Slogan"
import "./Login.scss"

const Login = () => {
    return (
        <div className="container login-page">
            <div className="row mt-4">
                <div className="col-8">
                    <Slogan>
                        <SubSlogan />
                        <div>
                            <button className="btn-primary">
                                Get Quote Now
                            </button>
                            <button className="btn-transparent ml-1">
                                Learn More
                            </button>
                        </div>
                    </Slogan>
                </div>
                <div className="col-4 col-12">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Login