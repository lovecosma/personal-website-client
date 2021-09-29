import './App.css';

import { useMediaQuery } from "react-responsive"
import {DesktopRouter} from "./desktopComponents/DesktopRouter"
import { MobileTabletRouter } from './mobileTabletComponents/MobileTabletRouter';
const App = (props) => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  console.log(isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isPortrait, isRetina);

    if(isDesktopOrLaptop || isBigScreen){
        return (
          <div>
              <DesktopRouter/>
          </div>
        ) 
    } else if(isTabletOrMobile){
          return(
              <div>
                <MobileTabletRouter/>
              </div>
          )
    } else {
      return <div></div>
    }
}

export default App;
