import React from 'react'

import Blackcheckers from "./Blackchecker.js"
import Whitecheckers from "./Whitechecker.js"
import Settings from "./settings.js"
import Code from "./code.js"
import More from "./more.js"

export default function Page (){

    function RenderComponents(num) {
        const components = [];
        for (let i = 0; i < num; i++) {
            components.push(<Blackcheckers/>);
            components.push(<Whitecheckers/>);
        }
        return components;
    }

    function Render2Row(num){
        const components = [];
        for (let i = 0; i < num; i++) {
            components.push(
            <div className="row">
                {RenderComponents(8)}
                <Blackcheckers/>
            </div>
            );

            components.push(
            <div className="row">
                <Whitecheckers/>
                {RenderComponents(8)}
            </div>
            );
        }
        return components;
    }


    const [nav, setNav] = React.useState("Setting")


    const [settingStates,setSettingState] = React.useState({
        inner:{
            innerColor:"#cbdbe6",
            innerStrength: 0,
        },
        outer:{
            outerColor:"#7ae4ff",
            outerStrength: 100,
        },
        size:{
            tileSize: 505,
            faceSize: .555,
        },
        leftShadow:{
            firstColor:"#7ad3ff",
            firstStrength: 40,
            secondColor: "#5686b3",
            secondStrength: 604,
        },
        topShadow:{
            firstColor:"#ffffff",
            firstStrength: 23,
            secondColor: "#8fdaff",
            secondStrength: 57,
        },
        rightShadow:{
            firstColor:"#ffffff",
            firstStrength: 12,
            secondColor: "#89cffb",
            secondStrength: 87,
        },
        bottomShadow:{
            firstColor:"#81c7fd",
            firstStrength: 14,
            secondColor: "#4b7fa0",
            secondStrength: 52,
        },
    })


    const cssCodeString = `

:root {
    --tilesize: ${settingStates.size.tileSize};
    --centersize: ${settingStates.size.faceSize};

    --innerColor: ${settingStates.inner.innerColor};
    --outerColor: ${settingStates.outer.outerColor};
  
    --innerColorStrength: ${settingStates.inner.innerStrength}%;
    --outerColorStrength: ${settingStates.outer.outerStrength}%;
  
    --leftShadowFirstColor: ${settingStates.leftShadow.firstColor};
    --leftShadowFirstStrength: ${settingStates.leftShadow.firstStrength}%;
    --leftShadowSecondColor: ${settingStates.leftShadow.secondColor};
    --leftShadowSecondStrength: ${settingStates.leftShadow.secondStrength}%;
  
    --topShadowFirstColor: ${settingStates.leftShadow.firstColor};
    --topShadowFirstStrength: ${settingStates.leftShadow.firstStrength}%;
    --topShadowSecondColor: ${settingStates.leftShadow.secondColor};
    --topShadowSecondStrength: ${settingStates.leftShadow.secondStrength}%;
  
    --rightShadowFirstColor: ${settingStates.leftShadow.firstColor};
    --rightShadowFirstStrength: ${settingStates.leftShadow.firstStrength}%;
    --rightShadowSecondColor: ${settingStates.leftShadow.secondColor};
    --rightShadowSecondStrength: ${settingStates.leftShadow.secondStrength}%;
  
    --bottomShadowFirstColor: ${settingStates.leftShadow.firstColor};
    --bottomShadowFirstStrength: ${settingStates.leftShadow.firstStrength}%;
    --bottomShadowSecondColor: ${settingStates.leftShadow.secondColor};
    --bottomShadowSecondStrength: ${settingStates.leftShadow.secondStrength}%;
  
  }

.color {

    position: relative;
    display: block;
  
    width: calc((var(--tilesize) * .66666) + 5px);
    height: calc((var(--tilesize) * .66666) + 5px);
  
}
  
.tile {
  
    position: relative;
    display: block;
    width: var(--tilesize);
    height: var(--tilesize);

    rotate: 45deg;

    clip-path: polygon(0 50%, 50% 0, 50% 0, 100% 50%, 100% 50%, 50% 100%, 50% 100%, 0 50%);

    right: calc((var(--tilesize) * .1666));
    bottom: calc((var(--tilesize) * .1666));
  
}
  
.face{
  
    display: flex;
    position: absolute;
  
    justify-content: center;
    align-items: center;
  
    rotate: 45deg;
  
    width: var(--tilesize);
    height: var(--tilesize);
  
}
  
  
.facefront{
  
    display: flex;
    position: relative;
  
    width: calc(var(--tilesize) * var(--centersize));
    height: calc(var(--tilesize) * var(--centersize));
  
    border-radius: 4px;

}
  
  
.facecolor {
  
    background: radial-gradient(circle, var(--innerColor) var(--innerColorStrength), var(--outerColor) var(--outerColorStrength));
  
}
  
.subtile{
  
    width: calc(var(--tilesize)/2);
    height: calc(var(--tilesize)/2);
  
}
  
.onecolor{
    background: linear-gradient(-45deg, var(--topShadowFirstColor) var(--topShadowFirstStrength), var(--topShadowSecondColor) var(--topShadowSecondStrength));
}
  
.twocolor{
    background: linear-gradient(45deg, var(--rightShadowFirstColor) var(--rightShadowFirstStrength), var(--rightShadowSecondColor) var(--rightShadowSecondStrength));
}
    
.threecolor{
    background: linear-gradient(-135deg, var(--leftShadowFirstColor) var(--leftShadowFirstStrength), var(--leftShadowSecondColor) var(--leftShadowSecondStrength));
}
  
.fourcolor{
    background: linear-gradient(135deg, var(--bottomShadowFirstColor) var(--bottomShadowFirstStrength), var(--bottomShadowSecondColor) var(--bottomShadowSecondStrength));
}
  
`;


    function HandleState (event, state, property){

        setSettingState( prev => {
            const newSettingState = { ...prev };
            newSettingState[state][property] = event.target.value;
            return {...prev, newSettingState};

        })
    }





    return(

        <div id="page">

            <div id="background">
                    {Render2Row(5)}
            </div>

            <div id="title">
                <h1>Realistic CSS Tiles </h1>
            </div>




            <div id="dashboard">

                
                <div id="prototype">
                
                    <div className="colordemo">
                        <div className="tiledemo">

                            <div className="facedemo">
                                <div className="facecolordemo facefrontdemo">
                                </div>
                            </div>

                            <div className="row">
                                <div className="onecolordemo subtiledemo">
                                </div>
                                <div className="twocolordemo subtiledemo">
                                </div>
                            </div>

                            <div className="row">
                                <div className="threecolordemo subtiledemo">
                                </div>
                                <div className="fourcolordemo subtiledemo">
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div id="menudiv">

                    <div className="row navSlider">
                        <h1
                        className={ nav === "Setting" ? 'selectedNav' : null}
                        onClick={() => setNav("Setting")}
                        > Setting </h1>
                        <h1
                        className={ nav === "Code" ? 'selectedNav' : null}
                        onClick={() => setNav("Code")}
                        > Code </h1>
                        <h1
                        className={ nav === "More" ? 'selectedNav' : null}
                        onClick={() => setNav("More")}
                        > More </h1>
                    </div>

                    {nav === "Setting" &&
                    <Settings
                        props={settingStates}
                        handleState={HandleState}
                    />
                    }

                    {nav === "Code" &&
                    <Code
                        props={cssCodeString}

                    />
                    }
                    
                    {nav === "More" &&
                    <More/>
                    }

                </div>

            </div>

        </div>

    )
}