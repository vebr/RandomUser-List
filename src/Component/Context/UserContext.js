import * as React from "react";

export const UserContext = React.createContext(
  // default values used by a Consumer when it does not have a
  // matching Provider above it in the tree, useful for testing.
  {
    userContext: {
      users: [],
    },
    filterUsers: () => {},
    filterCity: () => {},
  }
);

export default class UserProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      filterUsers: this.filterUsers.bind(this),
      filterCity: this.filterCity.bind(this),
      //   setValue: this.setValue.bind(this),
      //   addCurrency: this.addCurrency.bind(this),
      //   removeCurrency: this.removeCurrency.bind(this),
      users: this.users.bind(this),
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

  componentDidMount() {
    this.fetchData();
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
