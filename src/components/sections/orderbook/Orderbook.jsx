import React from "react";
import DataTable from "../../dataTable/DataTable";
import "./orderbook.scss";
const Orderbook = ({ columnsList, rowList }) => {
  return (
    <DataTable
      rows={rowList}
      columns={columnsList}
      class_name="orderbook-list_header"
    />
  );
};

export default Orderbook;
