const User = ({ active, styles, usr, changeUser }) => {
    return (
        <div 
            className={`${active ? styles.active : ""} ${styles.user}`}
            onClick={() => changeUser(usr)}>
                {usr.firstName} {usr.lastName}
        </div>
    );
}

export default User;