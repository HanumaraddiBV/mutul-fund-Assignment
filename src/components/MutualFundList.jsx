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
      .get("https://mutul-funds-data.herokuapp.com/latests/latest_return")
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
              <th>7 days return</th>
             
            </tr>
          </thead>
          <tbody>
            {data.map((ele) => (
              <tr key={ele.code}>
                <td>{ele.code}</td>
                <td>{ele.name}</td>
                <td>{ele.ISIN}</td>
                <td>{ele.netAssetValue}</td>
                <td>{ele.latest_return}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
