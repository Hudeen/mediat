import './reviews.css';
const Reviews = () => {
    return(
        <>
            <div className="reviews">
                <h1 className="reviews_title">Список наших продуктов</h1>
                <div className='reviews_block'>
                    <div className='reviews_item'>
                        <span className='item-title'>Заголовок</span>
                        <span className='item-text'>Какой-то текст</span>
                    </div>
                    <div className='reviews_item-img'></div>
                </div>
            </div>
        </>
    )
}

export default Reviews