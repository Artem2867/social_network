import React from 'react'
import style from './mypost.module.css'

const MyPost = (props) => {

    const addLike = () => {
        console.log(props)
    }

    return (
        <div key={props.id}>
            <div className={style.ava}>
                <img src='https://upload.wikimedia.org/wikipedia/ru/3/34/AS_ep20_electric_screwdriver.png' alt="ava"/>
            </div>
            <div className={style.text}>
                {props.post}
            </div>
            <div>
                like:{props.like}
            </div>
            <div className={style.heart} onClick={addLike}>
                <img src="https://cdna.artstation.com/p/assets/images/images/015/794/204/large/haitam-ouahabi-x-heart-icon-by-haitam-ouahabi.jpg?1549659789" alt="heart"/>
            </div>
        </div>
    )
}


export default MyPost