import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import userIcon from '../../assets/image/users.jpg'
import { UserType } from '../../utilits/MyType';
import style from './users.module.css'

type PropsType = {
    users: Array<UserType>
    follow: (id: number | null) => void
    unfollow: (id: number | null) => void
}

const User: FC<PropsType> = (props)  => {
    return <>
        {props.users.map((u: UserType) => {
            return (
                <div className={style.user} key={u.id}>
                    <div className={style.rightBlock}>
                        <NavLink to={`/profile/${u.id}`}>
                            <div className={style.icon}>
                                <img src={u.photos.small ? u.photos.small : userIcon} alt='icon' />
                            </div>
                        </NavLink>
                        <div className={style.btn}>
                            <button onClick={() => u.followed === true ? props.unfollow(u.id) : props.follow(u.id)}>
                                {u.followed === true ? 'UNFOLLOWED' : 'FOLLOWED'}
                            </button>
                        </div>
                    </div>
                    <div className={style.leftBlock}>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                        <div>
                            {'u.location.country'}
                        </div>
                        <div>
                            {'u.location.city'}
                        </div>
                    </div>
                </div>
            );
        })}
    </>
}



export default User;