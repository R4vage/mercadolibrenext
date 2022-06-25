import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useRouter } from 'next/router'
import style from "./Items.module.css"
import { List } from "../../components";

export default function Items() {
  const [page, setPage] = useState(1);
  const router = useRouter()
  const searchValue = router.query.search;




  const { data } = useFetch({ url: `/sites/MLA/search?q=${searchValue}&offset=${page * 10}&limit=10` });

  function handleNextClick() {
    if (page<data.paging.total) 
    setPage(prevValue => prevValue + 1);
  }

  function handlePreviousClick () {
    if (page>1) 
    setPage(prevValue => prevValue - 1)
  }

  useEffect(() => {
    setPage(1)
  }, [searchValue])
  

  if (!data) {
    return <div>Loading...</div>
  }


  return (
    <div className={style.Items}>
      <List data={data.results} />
      <div className={style.Searchpaginacion}>
        <button onClick={handlePreviousClick} className={(page>1)?style.arrows:style.hidden}>
        {"< "} Anterior  
        </button>
        <button className={style.current}>{page}</button>
        <p>de {data.paging.total}</p>
        <button onClick={handleNextClick} className={(page<data.paging.total)?style.Searcharrows:style.hidden}>
          Siguiente 
        </button>
      </div>
    </div>
  )
}

