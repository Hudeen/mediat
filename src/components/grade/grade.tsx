import "./grade.css";
import  laptop  from "../../icons/laptop.svg";
import company from "../../icons/company.svg";
const Grade = () => {
    return (
        <>
            <div className="container">
                <div className="grade">
                    <div className="grade_item">
                        <div className="grade_content">

                            <img className="grade_image" src={laptop}></img>

                        </div>
                        <div className="grade_box">
                            <div className="box_text">Оценка автомобилей</div>
                        </div>
                    </div>
                    <div className="grade_item">
                        <div className="grade_content">

                            <img className="grade_image" src={laptop}></img>

                        </div>
                        <div className="grade_box">
                            <div className="box_text">Оценка недвижемости</div>
                        </div>
                    </div>
                    <div className="grade_item">
                        <div className="grade_content">
                            <img className="grade_image" src={laptop}></img>
                        </div>
                        <div className="grade_box">
                            <div className="box_text">Аудит компаний</div>
                        </div>
                    </div>
                    <div className="grade_item">
                        <div className="grade_content">
                            <img className="grade_image" src={laptop}></img>
                        </div>
                        <div className="grade_box">
                            <div className="box_text">Аудит IT</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grade