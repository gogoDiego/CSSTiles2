import React from "react"



export default function Code(props){

const [codestate, setCodeState] = React.useState("css")
const codeContainer = React.useRef()

const htmlcodeString = `

<div className="tilediv">

    <div className="tile">

        <div className="face">
            <div className="facecolor facefront">
            </div>
        </div>

        <div className="row">
            <div className="onecolor subtile">
            </div>
            <div className="twocolor subtile">
            </div>
        </div>

        <div className="row">
            <div className="threecolor subtile">
            </div>
            <div className="fourcolor subtile">
            </div>
        </div>

    </div>
    
</div>
`;


const copyToClipboard = e => {
    const el = codeContainer.current
    el.select()
    el.setSelectionRange(0, 99999)
    document.execCommand('copy')
    props.props.current.classList.add('copied')

    setTimeout(() => {
    props.props.current.classList.remove('copied')
    }, 1000)
  }



    return(
        <div id="codediv">

            <div className="row">
                    <h3
                    className={codestate === "html" ? "selectedNav shadownav" : "shadownav"}
                    onClick={() => setCodeState("html")}
                    > HTML </h3>
                    <h3
                    className={codestate === "css" ? "selectedNav shadownav" : "shadownav"}
                    onClick={() => setCodeState("css")}
                    > CSS </h3>
                    <button id="copy" onClick={copyToClipboard}>
                    Copy
                    </button>
                </div>
        
            <textarea id="codearea" ref={codeContainer} value={codestate === "html" ? htmlcodeString : props.props} readOnly/>

        </div>
    )
}