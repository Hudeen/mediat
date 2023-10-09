import "./partners.css";
const Partners = () => {
    return (
        <>
            <div className="partners">
                <h1 className="partners_title">Наши партнёры</h1>
                <div className="partners_block-first">
                    <div className="partners-block__animate">
                        <div className="partners_item media">
                        </div>
                        <h1 className="partners_text">Полиграфия</h1>
                    </div>
                    <div className="partners-block__animate">
                        <div className="partners_item Julia"></div>
                        <h1 className="partners_text">Бизнес тренер</h1>
                    </div>
                    <div className="partners-block__animate">
                        <div className="partners_item mss"></div>
                        <h1 className="partners_text">Системы безопасности</h1>
                    </div>
                    <div className="partners-block__animate test-1">
                        <div className="partners_item transit"></div>
                        <h1 className="partners_text">Грузоперевозки</h1>
                    </div>
                    <div className="partners-block__animate test-2">
                        <div className="partners_item rent"></div>
                        <h1 className="partners_text">Аренда техники</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners