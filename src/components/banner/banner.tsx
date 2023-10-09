import "./banner.css"
import Banr from "../../images/banner-background.jpg"
const Banner = () => {
    return (
        <>
            <div className="banner">
                <img className="banner_img" src={Banr}></img>
                <div className="banner_block">
                    <div className="banner_item">
                        <h1 className="banner_title">Медиатор</h1>
                        <h1 className="banner_text">Оценка высшего уровня только для вас</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner