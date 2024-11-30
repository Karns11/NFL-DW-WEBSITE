import React from "react";
import {
  useGetPlayerDimQuery,
  useGetDwTablesQuery,
} from "../slices/NFLDwSlice";

const HomeScreen = () => {
  const {
    data: playerDim,
    // isLoading: loadingGetPlayerDim,
    // error,
    // refetch,
  } = useGetPlayerDimQuery();

  const {
    data: NFLDwTables,
    // isLoading: loadingGetPlayerDim,
    // error,
    // refetch,
  } = useGetDwTablesQuery();

  return (
    <div>
      <h1>Welcome to my NFL Data DataWarehouse!</h1>
      {playerDim && playerDim.length > 0 ? (
        <ul>
          {NFLDwTables.tables.map((table, index) => (
            <li key={index}>
              {/* Display each player's information */}
              {table}
            </li>
          ))}
        </ul>
      ) : (
        <h1>Hello</h1>
      )}
    </div>
  );
};

export default HomeScreen;
