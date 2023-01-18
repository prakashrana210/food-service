import React from 'react';

const MenuCard = ({ menuData }) => {
    console.log(menuData);
    return (
        <>
            <section className="main-card-container">
            {menuData.map((curElem) => {
                const {id,name,category, image, description} = curElem;
                return (
                    <>
                    <div className="card-container" key={id}>
                    <div className="Card">
                        <div className="card-body">
                            <span className="card-number card-circle subtle" key={id}>
                            </span>
                            {/* <span className="card-author subtle" style={{color:"red"}}>Breakfast</span> */}
                            {/* <span className="card-author subtle" style={myStyle}>Breakfast</span> */}
                            <span className="card-author subtle">{id}</span>
                            <h2 className="card-title" >{name}</h2>
                            <span className="card-description subtle">{description}
                            </span>
                            <div className="card-read">Read</div>
                        </div>
                        <img src={image} alt="images" className="card-media"/>
                        <span className="card-tag subtle">Order Now</span>
                    </div>
                    </div>
                    </>
                ); 
            })}
          </section>
        </>
    )
}

export default MenuCard;

