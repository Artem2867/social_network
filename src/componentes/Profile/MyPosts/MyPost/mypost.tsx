import React, { FC } from 'react'
import style from './mypost.module.css'

type PropsType = {
    post: string | null
    like: number | null
    id: number | null
}


const MyPost: FC<PropsType> = ({post, like, id}) => {

    const addLike = () => {
        console.log()
    }

    return (
        <div key={id}>
            <div className={style.ava}>
                <img src='https://upload.wikimedia.org/wikipedia/ru/3/34/AS_ep20_electric_screwdriver.png' alt="ava"/>
            </div>
            <div className={style.text}>
                {post}
            </div>
            <div>
                like:{like}
            </div>
            <div className={style.heart} onClick={addLike}>
                <img src="https://cdna.artstation.com/p/assets/images/images/015/794/204/large/haitam-ouahabi-x-heart-icon-by-haitam-ouahabi.jpg?1549659789" alt="heart"/>
            </div>
        </div>
    )
}


export default MyPost