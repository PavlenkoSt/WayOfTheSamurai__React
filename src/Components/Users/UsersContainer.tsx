import { connect } from "react-redux"
import UsersAPI from "./UsersAPI"
import { usersActions, getUsers, unfollowUser, followUser } from './../../Redux/usersReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from "redux"
import { AppStateType } from "../../Redux/reduxStore"
import { ProfileType } from "../../types/types"
import { ComponentType } from "react"

type MapStatePropsType = {
    users: Array<ProfileType>
    usersCountOnPage: number
    totalCount: number
    currentPage: number
    portionsSize: number
    isFetching: boolean
    followingProgress: Array<number>
}

type MapDispatchPropsType = {
    setTotalCount: (totalCount: number) => void 
    setCurrentPage: (currentPage: number) => void
    getUsers: (countOnPage: number, currentPage: number) => any
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        usersCountOnPage: state.usersPage.usersCountOnPage,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        portionsSize: state.usersPage.portionsSize,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

const mapDispatchToProps = { 
    setTotalCount: usersActions.setTotalCount,
    setCurrentPage: usersActions.setCurrentPage, 
    getUsers, 
    unfollowUser, 
    followUser 
}


export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersAPI)