/* eslint-disable import/first */
import * as React from "react";

export const UserContext = React.createContext(
  // default values used by a Consumer when it does not have a
  // matching Provider above it in the tree, useful for testing.
  {
    userContext: {
      users: [],
    },
    filterUsers: () => {},
    loadMore: () => {},
    filterCity: () => {},
  }
);

export default class UserProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      filterCity: this.filterCity.bind(this),
      filterUsers: this.filterUsers.bind(this),
      loadMore: this.loadMore.bind(this),
      users: [],
      moreItemsLoading: false,
      hasNextPage: true,
      defaultValue: 10,
      isFetching: false,
    };
  }

  users = users => {
    this.setState({ users });
  };

  async loadMore() {
    let { users } = this.state;
    let data;
    const cachedUsers = localStorage.getItem("users");
    if (cachedUsers == null) {
      data = 0;
    } else {
      data = JSON.parse(cachedUsers).length;
    }

    if (data < 100) {
      const response = await fetch("https://randomuser.me/api/?results=10")
        .then(this.setState({ isFetching: true }))
        .catch(console.log);
      const json = await response.json();
      localStorage.setItem("users", JSON.stringify(users.concat(json.results)));
      this.setState({ users: users.concat(json.results), isFetching: false });
    } else {
      this.setState({ users: JSON.parse(cachedUsers), isFetching: false });
    }
  }

  filterUsers() {
    let { users } = this.state;
    let data = users.sort((a, b) => (a.dob.age > b.dob.age ? 1 : -1));
    this.setState({
      users: data,
    });
  }

  filterCity() {
    let { users } = this.state;
    let data = users.sort(function(a, b) {
      if (a.location.city < b.location.city) {
        return -1;
      }
      if (a.location.city > b.location.city) {
        return 1;
      }
      return 0;
    });
    this.setState({
      users: data,
    });
    console.log(data);
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          userContext: {
            ...this.state,
          },
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
