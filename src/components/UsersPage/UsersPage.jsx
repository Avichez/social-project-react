import React from "react";
import style from './UsersPage.module.css'
import defaultPhoto from './../../assets/images/defaultPhoto.png'
import { NavLink } from "react-router-dom";

const UsersPage = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i <= 12) {
            pages.push(i);
        }
    }

    return (
        <div className={style.wrapper}>
            <div className={style.pages_list}>
                {
                    pages.map(page => {
                        return <span key={page} className={props.currentPage === page ? style.activePage : null}
                            onClick={() => { props.onPageChanged(page) }}>{page}</span>
                    })
                }
            </div>
            <div className={style.cards_wrapper}>
                {
                    props.usersData.map(user =>
                        <div key={user.id} className={style.user_card}>
                            <div className={style.user_photo_wrapper}>
                                <div>
                                    <NavLink to={'/profile/' + user.id}>
                                        <img src={user.photos.small != null ? user.photos.small : defaultPhoto} className={style.userPhoto} width='100' alt="Avatar" />
                                    </NavLink>
                                </div>
                                {user.followed
                                    ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                    : <button onClick={() => { props.follow(user.id) }}>Follow</button>
                                }
                            </div>
                            <div className={style.user_descr}>
                                <h3>{user.name}</h3>
                                <p>Status: {user.status}</p>
                                <p></p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default UsersPage;