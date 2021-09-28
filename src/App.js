import './App.css';

import { useMediaQuery } from "react-responsive"
import {DesktopRouter} from "./desktopComponents/DesktopRouter"
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
            <div  className="container white-text" style={{padding: "15px"}}>
              <p>Responsive Design in progress. Please visit on desktop for now.</p>
              <p style={{fontSize: "x-large"}} >Check out my repo <a href="https://github.com/lovecosma/personal-website-client" alt="repo" style={{fontSize: "x-large"}}>here</a></p>
              <p>Updated daily.</p>
            </div>
          )
    }
}

export default App;
