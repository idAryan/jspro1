import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(menuData);
  return (

    <>
        <section className="main-card--cointainer">
            {menuData.map((curElem)=>{
                return(
                    <> 
                        <div className="card-container" key={curElem.userId}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">ID{curElem.userId}</span>
                                    <span className="card-author subtle" style={{color: "red"}}>{curElem.title}</span>
                                    <span className="card-description subtle">
                                        {curElem.body}
                                    </span>
                                    <span>
                                    <div className="card-read">Read</div>
                                    </span>
                                </div>
                            </div>
                        </div>
                                    
                    </>

                )
            })}
        </section>
    </>
  );
};

export default MenuCard;
