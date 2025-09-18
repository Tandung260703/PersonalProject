import "./BackToTopBtn.css"
import {varContext} from "../../App.jsx"
import {useContext} from "react"

const BackToTopBtn=()=>{
    const {scrollTop}=useContext(varContext)
    const backToTop=()=>{
  if (scrollTop.current) {
    scrollTop.current.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
    return (
        <div id="backToTop"  onClick={backToTop} style={{border:'1px solid white',width:"100px",height:"100px",}} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 17.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 117.3 160 488c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
        </div>
    )

}

export default BackToTopBtn;