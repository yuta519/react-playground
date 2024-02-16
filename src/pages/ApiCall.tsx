import { useEffect, useState } from "react";
import { useDummyData } from "../hooks/useDummyData";

export default function ApiCall () {
  const [data, setData] = useState({ id: 0, quote: '', author: ''});
  const [id, setId] = useState(1);
  const { fetchQuoteById } = useDummyData()

  useEffect(() => {
    data.id !== id && (async() => setData(await fetchQuoteById(id)))();
  }, [id]);
  
  const handleClick = () => setId(Math.ceil(Math.random() * 100));

  return (
    <>
      {!!data.id ? (
        <>
          <h3>{data.author}</h3>
          <div>{data.quote}</div>
          <button onClick={handleClick}>Change Article</button>
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  )
  ;
}