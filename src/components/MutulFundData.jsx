import { useEffect, useState } from "react";
import axios from "axios";
import "./app.css"
export const MutulFundData = () => {
  const [topTenList, setTopTenList] = useState([]);
  

  useEffect(() => {
    getData();
  
  }, []);

  const getData = () => {
    axios
      .get("https://mutul-funds-data.herokuapp.com/latests/funds")
      .then((list) => {
        setTopTenList(list.data);
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
              <th>standard deviation</th>
            </tr>
          </thead>
          <tbody>
            {topTenList.map((ele) => (
              <tr key={ele.code}>
                <td>{ele.code}</td>
                <td>{ele.name}</td>
                <td>{ele.ISIN}</td>
                <td>{ele.netAssetValue}</td>
                <td>{ele.standardDiv}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
