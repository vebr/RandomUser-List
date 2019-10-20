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
      fetchData: this.fetchData.bind(this),
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

  fetchData() {
    fetch("https://randomuser.me/api/?results=10")
      .then(this.setState({ isFetching: true }))
      .then(res => res.json())
      .then(data => {
        let { results } = data;
        this.setState({ users: results, isFetching: false });
      })
      .catch(console.log);
  }

  async loadMore() {
    let { users } = this.state;
    console.log(users.length);
    if (users.length >= 100) {
      return null;
    } else {
      const response = await fetch("https://randomuser.me/api/?results=10")
        .then(this.setState({ isFetching: true }))
        // .then(res => res.json())
        // .then(data => {
        //   let { results } = data;
        //   let { users } = this.state;
        //   this.setState({ users: users.concat(results), isFetching: false });
        // })
        .catch(console.log);
      const json = await response.json();
      this.setState({ users: users.concat(json.results), isFetching: false });
      console.log(users);
    }
  }

  // componentDidMount() {
  //   this.fetchData();
  // }

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
