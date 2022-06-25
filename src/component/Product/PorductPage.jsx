import React, { useContext, useEffect, useState } from "react";
import styles from './ProductPage.module.css';
import axios from "axios";
import { ReducerContext } from "../../App";

const ProductPage = () => {
    const [product, setProduct] = useState([]);
    const [interval,  setInterval] = useState(10)
    const [caterLink, setCaterLink] = useState(1)
    const { state, dispatch } = useContext(ReducerContext);

   
    const incrementCount = () => {
       setInterval(interval + 10) 
   }
   useEffect(() => {
    setCaterLink(state)
    setInterval(10)
   },[state])
    
  


       useEffect(() => {
           axios.get(`https://api.thecatapi.com/v1/images/search?limit=${interval}&page=1&category_ids=${caterLink}`)
               .then(response => setProduct(response.data));
       }, [state, interval]);
    return(
        <>
        

        <div className={styles.container}>
            <div className={styles.product_content}>
            {
                product.map((item) => {
                    return(
                        <div  classname={styles.product_container} key={item.id}>
                            <div className={styles.card}>
                                <img src={item.url} alt="cat_image" />
                            </div>
                        </div>
                    )
                })
            }
            </div>
            
            
            <div className={styles.button_box}>  
            <button onClick={incrementCount}> More... </button> 
            </div> 
       
        </div>
       
        </>
    )
}

export default ProductPage;