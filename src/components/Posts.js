import React, { useEffect, useState } from "react";
import './Posts.css'
var axios = require("axios").default;




var options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-summary',
    params: { region: 'US' },
    headers: {
        'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
};

const Posts = () => {
const [posts, setposts] = useState();
useEffect(() => {
    axios.request(options).then(function (response) {
        setposts(response.data.marketSummaryAndSparkResponse.result);
    }).catch(function (error) {
        console.error(error);
    })
}, []);
return(
    <>
           { !posts ? ("No data found") : (
               <div className="table-container">
          <table className="table-heading">
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Time Zone</th>
                    <th>Short Name</th>
                    <th>Source Interval</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map((post, index)=>(
                    <tr key={index}>
                    <td>{post.fullExchangeName}</td>
                    <td>{post.exchangeTimezoneName}</td>
                    <td>{post.shortName}</td>
                    <td>{post.sourceInterval}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
        </div>
        )}
    </>
)
}


export default Posts;