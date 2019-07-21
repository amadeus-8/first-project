import React from 'react';
import {connect} from 'react-redux';
import {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers} from '../../redux/users-reducer.js'
import Users from './Users.jsx';
import Preloader from '../common/Preloader/Preloader.js';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);

    /*
    this.props.toggleIsFetching(true); //Это и есть action creator которому мы передаем значение true
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    }) */
  }

  onPageChanged = (pageNumber) => {

    this.props.getUsers(pageNumber, this.props.pageSize);
    /*
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    })
    */
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}


//сюда приходит полный state который возвращается со store, state = store.getState()
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

//сюда параметром он передаст store.dispatch.bind(store)
/*const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },

    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },

    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },

    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount));
    },

    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    }

  }
}*/

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers
})(UsersContainer);

//<UsersContainer users={state.usersPage.users} follow={follow} ... />
