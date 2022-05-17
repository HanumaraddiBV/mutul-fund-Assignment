import { useEffect, useState } from "react";
import axios from "axios";
import "./app.css"
export const MutulFundList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getDataList();
  }, []);

  const getDataList = () => {
    axios
      .get("https://mutul-fund-data.herokuapp.com/datas/last_7days")
      .then((list) => {
        setData(list.data);
      });
  };
  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Scheme Code</th>
              <th>Scheme Name</th>
              <th>ISIN Div Payout/ISIN Growth</th>
              <th>Net Asset Value</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele) => (
              <tr>
                <td>{ele.code}</td>
                <td>{ele.name}</td>
                <td>{ele.ISIN}</td>
                <td>{ele.netAssetValue}</td>
                <td>{ele.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
