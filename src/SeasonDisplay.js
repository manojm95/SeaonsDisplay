import './SeasonDisplay.css';
import React from 'react';


export const data = {1:"one", 2:"two"};

const getSeason = (lat,month) => {
    if(month>2 && month<9) {
        return lat>0 ? 'summer' : 'winter';
    }
    else
    {
     return lat>0 ? 'winter' : 'summer';
    }
}

const SeasonConfig = {
    winter : {
        text : "Blurr,its chilly",
        icon : "snowflake"
    },

    summer : {
        text: "Lets go to the beach",
        icon :"sun"
    }
};

const SeasonDisplay = props => {
    //console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    // const text = season ==='winter' ? "Blurr,its chilly" : "Lets go the beach";
    // const icon = season=== 'winter' ? 'snowflake' : 'sun';
    // instead of the above two lines of code we could use SeasonConfig
    const {text,icon} = SeasonConfig[season];
    // const val = SeasonConfig[season];
    //val.icon

    console.log(season);
    return (

     <div>
    <i className = {`icon-left massive ${icon} icon`} />
    <h1>{text}</h1>
    <i className = {`icon -right massive ${icon} icon`} />
    </div>
    )
};

export default SeasonDisplay ; 

