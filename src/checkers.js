import React from "react"



export default function Checkers (){

    const RenderBlack = () => {

        return(

            <div className="black">
                <div className="tile">

                    <div className="face">
                        <div className="faceblack facefront">
                        </div>
                    </div>

                    <div className="row">
                        <div className="oneblack subtile">
                        </div>
                        <div className="twoblack subtile">
                        </div>
                    </div>

                    <div className="row">
                        <div className="threeblack subtile">
                        </div>
                        <div className="fourblack subtile">
                        </div>
                    </div>

                </div>
            </div>

        )
    }

    const RenderWhite = () => {

        return(

            <div className="white">
                <div className="tile">

                    <div className="face ">
                        <div className="facewhite facefront">
                        </div>
                    </div>

                    <div className="row">
                        <div className="onewhite subtile">
                        </div>
                        <div className="twowhite subtile">
                        </div>
                    </div>

                    <div className="row">
                        <div className="threewhite subtile">
                        </div>
                        <div className="fourwhite subtile">
                        </div>
                    </div>

                </div>
        </div>

        )
    }

    




    return(
        <div className="Checkers">

            <div className="black">
                <div className="tile">

                    <div className="face">
                        <div className="faceblack facefront">
                        </div>
                    </div>

                    <div className="row">
                        <div className="oneblack subtile">
                        </div>
                        <div className="twoblack subtile">
                        </div>
                    </div>

                    <div className="row">
                        <div className="threeblack subtile">
                        </div>
                        <div className="fourblack subtile">
                        </div>
                    </div>


                </div>
            </div>
            
            <div className="white">
                <div className="tile">

                    <div className="face ">
                        <div className="facewhite facefront">
                        </div>
                    </div>

                    <div className="row">
                        <div className="onewhite subtile">
                        </div>
                        <div className="twowhite subtile">
                        </div>
                    </div>

                    <div className="row">
                        <div className="threewhite subtile">
                        </div>
                        <div className="fourwhite subtile">
                        </div>
                    </div>


                </div>
            </div>
            

        </div>
    )
}