import * as React from "react";

export const UserContext = React.createContext(
    // default values used by a Consumer when it does not have a
    // matching Provider above it in the tree, useful for testing.
    {
      userContext: {
        users: [],
      }
    }
  );
  

export default class UserProvider extends React.Component {
  constructor() {
    super();
    this.state = {
    //   setRates: this.setRates.bind(this),
    //   setValue: this.setValue.bind(this),
    //   addCurrency: this.addCurrency.bind(this),
    //   removeCurrency: this.removeCurrency.bind(this),
      users: [],
      defaultValue: 10,
      isFetching: false,
    };
  }

  fetchData() {
    fetch(
      "https://randomuser.me/api/?results=10"
    )
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

//   setRates(updateBase) {
//     this.setState({ updateBase });
//     this.fetchNewData(updateBase);
//   }

//   setValue(updateValue) {
//     this.setState({ ...updateValue });
//   }


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
