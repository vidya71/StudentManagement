// import React, { useState, useEffect } from 'react';
// import axios from "axios";

// const Home = () => {
//     const [data, setData] = useState([]);
//     const loadData = async () => {
//         const response = await axios.get("http://localhost:5000/api/get");
//         setData(response.data);
//     };
    
//     useEffect(() => {
//         loadData();
//     }, []);

//     return (
//         <div style={{marginTop: "150px"}}>
//             <table className="styled-table">
//                 <thead>
//                     <tr>
//                         <th style={{textAlign: "center"}}>ID</th>
//                         <th style={{textAlign: "center"}}>NAME</th>
//                         <th style={{textAlign: "center"}}>REGD</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item,index) => {
//                         return (
//                             <tr key={item.id}>
//                                 <th scope="row">{index+1}</th>
//                                 <td>{item.name}</td>
//                                 <td>{item.regno}</td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Home;
// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/get");
            console.log("Data fetched:", response.data); // Log the fetched data
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div style={{ marginTop: "150px" }}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <Link to={`/student/${item.id}`}>
                                    {item.id}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
