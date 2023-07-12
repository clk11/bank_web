import React, { useState, useEffect } from "react";
import ApiFetch from "../service/ApiCalls/request";
import type { ColumnsType } from "antd/es/table";
import BasicTable from "../Components/BasicTable";
import { DataTypeDeposit, DataTypeTradeOrder, DataTypeWithdrawls } from "../Interfaces/Interfaces";

//====================================================================
const columnsDeposit: ColumnsType<DataTypeDeposit> = [
  {
    title: "Amount",
    dataIndex: "amount",
    width: 150,
  },
  {
    title: "From Address",
    dataIndex: "fromAddress",
  },
];

const columnsTradeOrders: ColumnsType<DataTypeTradeOrder> = [
  {
    title: "Amount",
    dataIndex: "amount",
    width: 150,
  },
  {
    title: "Trade Order Type",
    dataIndex: ["tradeOrderType", "name"],
  },
];

const columnsWithdrawals: ColumnsType<DataTypeWithdrawls> = [
  {
    title: "Amount",
    dataIndex: "amount",
    width: 150,
  },
  {
    title: "ToAddress",
    dataIndex: "toAddress",
  },
  {
    title: "2FA Confirmed",
    dataIndex: "wasApprovedByUser2FA",
    key: "isActive",
    render: (isActive: any) => (isActive ? "True" : "False"),
  },
];

//====================================================================
const Dashboard = () => {
  const [data, setData] = useState<any>();
  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState("Deposit");

  const handleSelectDropDown = (event: any) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const fetchDropDown = async () => {
      try {
        const response = await fetch(ApiFetch.fetchOperationTypes);
        const data = await response.json();
        const newOptions = data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));
        setOptions(newOptions);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDropDown();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "";
        switch (selectedValue) {
          case "Deposit":
            url = ApiFetch.fetchDeposits;
            break;
          case "Withdrawal":
            url = ApiFetch.fetchWithdrawals;
            break;
          case "TradeOrder":
            url = ApiFetch.fetchTradeOrder;
            break;
          default:
            url = "";
        }
        if (url) {
          const response = await fetch(url);
          const json = await response.json();
          console.log(response);
          setData(json);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [selectedValue]);

  return (
    <div>
      <h1>Operation table</h1>
      <select value={selectedValue} onChange={handleSelectDropDown}>
        {options.map((option: any) => (
          <option key={option.value} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="Table-grid">
        {selectedValue === "Deposit" ? (
          <BasicTable colType={columnsDeposit} data={data} />
        ) : selectedValue === "Withdrawal" ? (
          <BasicTable colType={columnsWithdrawals} data={data} />
        ) : selectedValue === "TradeOrder" ? (
          <BasicTable colType={columnsTradeOrders} data={data} />
        ) : null}
      </div>
    </div>
  );
}

export default Dashboard;