import React, { useContext, useEffect, useState } from "react";import axios from "axios";
import styles from './SideBar.module.css';
import { Link } from "react-router-dom";
import { ReducerContext } from "../../App";
const SideBar = () => {
const [category, setCategory] = useState([]);
const { state, dispatch } = useContext(ReducerContext);

    useEffect(() => {
        axios.get('https://api.thecatapi.com/v1/categories')
            .then(response => setCategory(response.data));
    }, []);



const postID = (id) => {
    dispatch({ type: "CHANGEID", id });
}

    return(
        <>
            <div className={styles.component}>

         <ul>
            {
                category.map((cat)  => {
                    return(

                        <li key={cat.id} onClick={ (e) => postID(cat.id) } > <Link to ={`/${cat.name}`}> {cat.name}</Link> </li>
                    )
                })
            }

         </ul>

            </div>

        </>
    )
}

export default SideBar;