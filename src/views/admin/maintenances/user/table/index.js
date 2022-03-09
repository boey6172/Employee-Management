import React, { useEffect, useState } from "react";
import Toolbar from "../widgets/ToolBarList";
import TableList from "./TableList";
import { Box } from "@material-ui/core";
// import { useQuery, gql } from "@apollo/client";
import ErrorDialog from "../../../../../widgets/ErrorDialog";
import BackDrop from "../../../../../widgets/BackDrop";
// import { GET_USERS } from "src/views/user/admin/Maintenance/user/query";

export default () => {
  const [search, setSearch] = useState("")
  const [filteredUsers, setFilteredUsers] = useState([])
  // const { loading, error, data, refetch } = useQuery(GET_USERS, {
  //   errorPolicy: "all",
  // });

  const setKeyWords = (key) => {
    setSearch(key)
  }

  // useEffect(() => {
  //   if (search == "") {
  //     setFilteredUsers(data?.users);
  //   } else {
  //     setFilteredUsers(
  //       data?.users.filter((user) =>
  //         user.info.first_name
  //           .concat(
  //             " ",
  //             user.info.last_name,
  //             " ",
  //             user.info?.email,
  //             " ",
  //             user.credential?.username
  //           )
  //           .toLowerCase()
  //           .includes(search.toLowerCase())
  //       )
  //     );
  //   }
  //   refetch();
  // }, [search, data]);

  // useEffect(() => {
  // }, [search])

  return (
    <>
      <Toolbar setKeyWords={setKeyWords} />
      <Box mt={3}>
        <TableList users={filteredUsers} />
      </Box>
      {/* <BackDrop loading={loading} />
      <ErrorDialog error={error} /> */}
    </>
  );
};
