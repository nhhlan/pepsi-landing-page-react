import React from 'react'
import './ProDetail.css';

export const ProDetail = ({
    calorie, fatG, fatP, sodiumG, sodiumP, carbG, carbP, imgSrc, alt, title, desc, priColor, secColor
}) => {
    return (
        <>
            <div className="detail container">
                
                <div className="detail__img">
                    <img src={imgSrc} alt={alt}/>                 
                </div>
                <div className="detail__text">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <h5>Nutrition Facts</h5>
                    <div className="detail__table">
                        <div className="table__item">
                            <span className="table__name" style={{background: priColor}}>Calorie</span>
                            <span className="table__number" style={{background: priColor}}>{calorie}</span>
                            <span className="table__perc" style={{background: secColor}}>per serving</span>
                        </div>
                        <div className="table__item">
                            <span className="table__name" style={{background: priColor}}>Total Fat</span>
                            <span className="table__number" style={{background: priColor}}>{fatG}</span>
                            <span className="table__perc" style={{background: secColor}}>{fatP}</span>
                        </div>
                        <div className="table__item">
                            <span className="table__name" style={{background: priColor}}>Sodium</span>
                            <span className="table__number" style={{background: priColor}}>{sodiumG}</span>
                            <span className="table__perc" style={{background: secColor}}>{sodiumP}</span>
                        </div>
                        <div className="table__item">
                            <span className="table__name" style={{background: priColor}}>Carbohydrate</span>
                            <span className="table__number" style={{background: priColor}}>{carbG}</span>
                            <span className="table__perc" style={{background: secColor}}>{carbP}</span>
                        </div>
                    </div>
                    <button className="detail__btn btn-outline">Buy Now</button>
                </div>
            </div>
        </>
    )
}
