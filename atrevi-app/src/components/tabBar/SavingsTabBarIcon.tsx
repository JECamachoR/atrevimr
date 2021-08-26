import React from "react"
import useColorScheme from "../../hooks/useColorScheme"
import LightD from "../../assets/icons/tabBar/LightDefaultSavingsIcon"
import LightA from "../../assets/icons/tabBar/LightActiveSavingsIcon"
import DarkD  from "../../assets/icons/tabBar/DarkDefaultSavingsIcon"
import DarkA  from "../../assets/icons/tabBar/DarkActiveSavingsIcon"

const SavingsTabBarIcon = ({focused}: {focused: boolean}): React.ReactElement => {
    const d = {height: 22, width: 43}
    switch(useColorScheme()){
        case "dark":
            return focused ? <DarkA {...d}/> : <DarkD {...d}/>
        default: 
            return focused ? <LightA {...d}/> : <LightD {...d}/>
    }
}

export default SavingsTabBarIcon