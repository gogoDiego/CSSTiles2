import React, {useState, useEffect} from "react"


export default function Settings(props) {


    const [shadownav, setShadowNav] = useState("left")

    useEffect(() => {
        document.documentElement.style.setProperty('--tilesize', props.props.size.tileSize + 'px');
    }, [props.props.size.tileSize]);

    useEffect(() => {
        document.documentElement.style.setProperty('--centersize', props.props.size.faceSize);
    }, [props.props.size.faceSize]);

    
    useEffect(() => {
        document.documentElement.style.setProperty('--innerColor', props.props.inner.innerColor);
    }, [props.props.inner.innerColor]);

    useEffect(() => {
        document.documentElement.style.setProperty('--outerColor', props.props.outer.outerColor);
    }, [props.props.outer.outerColor]);


    useEffect(() => {
        document.documentElement.style.setProperty('--innerColorStrength', props.props.inner.innerStrength + "%") ;
    }, [props.props.inner.innerStrength]);

    useEffect(() => {
        document.documentElement.style.setProperty('--outerColorStrength', props.props.outer.outerStrength + "%");
    }, [props.props.outer.outerStrength]);


    
    useEffect(() => {
        document.documentElement.style.setProperty('--leftShadowFirstColor', props.props.leftShadow.firstColor );
    }, [props.props.leftShadow.firstColor]);

    useEffect(() => {
        document.documentElement.style.setProperty('--leftShadowFirstStrength', props.props.leftShadow.firstStrength + "%");
    }, [props.props.leftShadow.firstStrength]);

    useEffect(() => {
        document.documentElement.style.setProperty('--leftShadowSecondColor', props.props.leftShadow.secondColor );
    }, [props.props.leftShadow.secondColor]);

    useEffect(() => {
        document.documentElement.style.setProperty('--leftShadowSecondStrength', props.props.leftShadow.secondStrength + "%");
    }, [props.props.leftShadow.secondStrength]);

    




    useEffect(() => {
        document.documentElement.style.setProperty('--topShadowFirstColor', props.props.topShadow.firstColor );
    }, [props.props.topShadow.firstColor]);

    useEffect(() => {
        document.documentElement.style.setProperty('--topShadowFirstStrength', props.props.topShadow.firstStrength + "%");
    }, [props.props.topShadow.firstStrength]);

    useEffect(() => {
        document.documentElement.style.setProperty('--topShadowSecondColor', props.props.topShadow.secondColor );
    }, [props.props.topShadow.secondColor]);

    useEffect(() => {
        document.documentElement.style.setProperty('--topShadowSecondStrength', props.props.topShadow.secondStrength + "%");
    }, [props.props.topShadow.secondStrength]);





    useEffect(() => {
        document.documentElement.style.setProperty('--rightShadowFirstColor', props.props.rightShadow.firstColor );
    }, [props.props.rightShadow.firstColor]);

    useEffect(() => {
        document.documentElement.style.setProperty('--rightShadowFirstStrength', props.props.rightShadow.firstStrength + "%");
    }, [props.props.rightShadow.firstStrength]);

    useEffect(() => {
        document.documentElement.style.setProperty('--rightShadowSecondColor', props.props.rightShadow.secondColor );
    }, [props.props.rightShadow.secondColor]);

    useEffect(() => {
        document.documentElement.style.setProperty('--rightShadowSecondStrength', props.props.rightShadow.secondStrength + "%");
    }, [props.props.rightShadow.secondStrength]);




    useEffect(() => {
        document.documentElement.style.setProperty('--bottomShadowFirstColor', props.props.bottomShadow.firstColor );
    }, [props.props.bottomShadow.firstColor]);

    useEffect(() => {
        document.documentElement.style.setProperty('--bottomShadowFirstStrength', props.props.bottomShadow.firstStrength + "%");
    }, [props.props.bottomShadow.firstStrength]);

    useEffect(() => {
        document.documentElement.style.setProperty('--bottomShadowSecondColor', props.props.bottomShadow.secondColor );
    }, [props.props.bottomShadow.secondColor]);

    useEffect(() => {
        document.documentElement.style.setProperty('--bottomShadowSecondStrength', props.props.bottomShadow.secondStrength + "%");
    }, [props.props.bottomShadow.secondStrength]);


    return(
            <div id="menu">

                <div>
                    <h2> Size: </h2>
                    <input 
                        type="range"
                        name="size"
                        min="25"
                        max="750"
                        step="1"
                        className='inputrange'
                        value={props.props.size.tileSize}
                        onChange={(event) => props.handleState(event,"size","tileSize")}
                    />
                    <h3> {props.props.size.tileSize}px </h3>
                </div>

                <div>
                    <h2> Center-Size: </h2>
                    <input 
                        type="range"
                        name="size"
                        min=".005"
                        max=".7"
                        step=".01"
                        className='inputrange'
                        value={props.props.size.faceSize}
                        onChange={(event) => props.handleState(event,"size","faceSize")}
                    />
                    <h3> {props.props.size.faceSize} </h3>
                </div>



                <div className="colorinput">
                    <h2> Inner-Face-Color:</h2> 
                    <div className="colorinput">
                        <input
                            type="color"
                            className="colorinput"
                            value={props.props.inner.innerColor}
                            onChange={(event) => props.handleState(event,"inner","innerColor")}
                        />
                    </div>
                    <h3> {props.props.inner.innerColor} </h3>
                </div>

                <div>
                    <h2> Strength:</h2> 
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        className='inputrange'
                        value={props.props.inner.innerStrength}
                        onChange={(event) => props.handleState(event,"inner","innerStrength")}
                    />
                    <h3> {props.props.inner.innerStrength}% </h3>
                </div>



                <div className="colorinput">
                    <h2> Outer-Face-Color:</h2> 
                    <div className="colorinput">
                        <input
                            type="color"
                            value={props.props.outer.outerColor}
                            onChange={(event) => props.handleState(event,"outer","outerColor")}
                        />
                    </div>
                    <h3> {props.props.outer.outerColor} </h3>
                </div>

                <div>
                    <h2> Strength:</h2> 
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        className='inputrange'
                        value={props.props.outer.outerStrength}
                        onChange={(event) => props.handleState(event,"outer","outerStrength")}
                    />
                    <h3> {props.props.outer.outerStrength}% </h3>
                </div>



                <div className="row">
                    <h2> Shadow: </h2>
                    <h2
                    className={shadownav === "left" ? "selectedNav shadownav" : "shadownav"}
                    onClick={() => setShadowNav("left")}
                    > Left </h2>
                    <h2
                    className={shadownav === "top" ? "selectedNav shadownav" : "shadownav"}
                    onClick={() => setShadowNav("top")}
                    > Top </h2>
                    <h2
                    className={shadownav === "right" ? "selectedNav shadownav" : "shadownav"}
                    onClick={() => setShadowNav("right")}
                    > Right </h2>
                    <h2
                    className={shadownav === "bottom" ? "selectedNav shadownav" : "shadownav"}
                    onClick={() => setShadowNav("bottom")}
                    > Bottom </h2>
                </div>

                <div>
                    <h3> Start </h3>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        className='inputrange'
                        value={props.props[`${shadownav}Shadow`].firstStrength}
                        onChange={(event) => props.handleState(event,`${shadownav}Shadow`,"firstStrength")}
                    />

                    <h3> {props.props[`${shadownav}Shadow`].firstStrength}%</h3>

                    <div className="colorinput">
                        <input
                            type="color"
                            value={props.props[`${shadownav}Shadow`].firstColor}
                            onChange={(event) => props.handleState(event,`${shadownav}Shadow`,"firstColor")}
                        />
                    </div>

                    <h3> {props.props[`${shadownav}Shadow`].firstColor}</h3>
                    
                </div>

                <div>
                    <h3> End </h3>
                    <input
                        type="range"
                        min="1"
                        max="100"
                        step="1"
                        className='inputrange'
                        value={props.props[`${shadownav}Shadow`].secondStrength}
                        onChange={(event) => props.handleState(event,`${shadownav}Shadow`,"secondStrength")}
                    />

                    <h3> {props.props[`${shadownav}Shadow`].secondStrength}%</h3>
                    <div className="colorinput">
                        <input
                            type="color"
                            value={props.props[`${shadownav}Shadow`].secondColor}
                            onChange={(event) => props.handleState(event,`${shadownav}Shadow`,"secondColor")}
                        />
                    </div>

                    <h3> {props.props[`${shadownav}Shadow`].secondColor}</h3>

                </div>



                
    {/* 
                {/* <div>
                    <h2> Remove: Face </h2>
                    <input
                        type="checkbox"
                    />
                </div> */}



            </div>
    )
}