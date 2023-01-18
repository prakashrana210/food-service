import React from 'react';

const Navbar = ({filterItem, menuList}) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group"> 
                    {
                        menuList.map((curElem) => {
                            return (
                                <div className="Nav">
                                    <button className="btn-group__item" onClick={() => filterItem(curElem)}>{curElem}</button>
                                </div>
                            );
                        })
                    }
                    {/* <button className="btn-group__item" onClick={() => filterItem("lunch")}>lunch</button>
                    <button className="btn-group__item" onClick={() => filterItem("evening")}>Evening</button>
                    <button className="btn-group__item" onClick={() => filterItem("dinner")}>Dinner</button>
                    <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button> */}
                </div>
            </nav>
        </>
    );
};

export default Navbar;