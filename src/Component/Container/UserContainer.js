/* eslint-disable import/first */
import React, { useContext } from "react";
import { UserContext, UserConsumer } from "../Context/UserContext";
import UserCard, { UserCardLoad } from "../Card";
import InfiniteLoader from "react-window-infinite-loader";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import useMediaQuery from "@material-ui/core/useMediaQuery";

let items = {};

const isItemLoaded = ({ index }) => !!items[index];

function UserContainer(props) {
  const { userContext } = useContext(UserContext);
  const matches = useMediaQuery("(min-width:960px)");

  return (
    <UserConsumer>
      {props => {
        let Row = ({ index, style }) => {
          const item = userContext.users[index];
          return (
            <div className="inline-block" style={style}>
              {item ? (
                <UserCard
                  key={index}
                  item={item}
                  index={index}
                  value={item[index]}
                />
              ) : (
                <UserCardLoad key={index} index={index} />
              )}
            </div>
          );
        };

        return (
          <AutoSizer>
            {({ height, width }) => (
              <InfiniteLoader
                isItemLoaded={isItemLoaded}
                loadMoreItems={userContext.loadMore}
                itemCount={100}
              >
                {({ onItemsRendered, ref }) => (
                  <List
                    className="List"
                    height={height}
                    itemCount={100}
                    itemSize={matches ? 350 : 185}
                    width={width}
                    layout={matches ? "horizontal" : "vertical"}
                    ref={ref}
                    onItemsRendered={onItemsRendered}
                  >
                    {Row}
                  </List>
                )}
              </InfiniteLoader>
            )}
          </AutoSizer>
          // <div props={props} className="card__container">
          //   {data === undefined || data.length === 0 ? load : items}
          // </div>
        );
      }}
    </UserConsumer>
  );
}

export default UserContainer;
