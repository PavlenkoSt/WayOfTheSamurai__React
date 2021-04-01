import Friend from './Friend/Friend'
import s from './Friends.module.css'

const Friends = props => {

  const sidebarFriends = props.friends.map( friend => <Friend key={friend.id} name={friend.name}/>)

    return (
        <div>
            <h3 className={s.header}>Друзья</h3>
            <div className={s.friends}>
                {sidebarFriends}
            </div>
        </div>
    )
}

export default Friends