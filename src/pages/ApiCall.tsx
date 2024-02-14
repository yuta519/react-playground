import axios from "axios";
import { useEffect, useState } from "react";

export default function ApiCall () {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/data").then((response: any) => {setData(response)})
  }, []);
  

  return (<>{data.length ? (<>aaa</>) : (<>Nothing</>)}</>)
  ;
}