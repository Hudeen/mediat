import './footer.css'
const Footer = () => {
    return(
        <>
            <div className="footer">
                <h1 className='footer_title'>Оставьте свой телефон</h1>
                <div className='form'>
                    <div className="form__container">
                        <input placeholder=" " className="form__input" id="phone" name="phone" type="number"/>
                        <label className="form__placeholder">Ваш номер</label>
                        <button className="form__button">Отправить номер</button>
                    </div>
                    <p className='policy'>Вы соглашаетесь с нашей политикой конфиденциальности</p>
                </div>
            </div>
        </>
    )
}

export default Footer;