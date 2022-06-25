
import style from "./ListItem.module.css"
import Link from 'next/link'

export default function ListItem({id, thumbnail, price, title, state_name}) {
    

  return (
    <Link href={`/SinglePage?value=${id}`}>
      <article className={style.ListItem}>
          <img
            className={style.ListItemimg}
            src={thumbnail}
            alt="thumbnail"
          />
            <main className={style.ListItemmaintitle}>{title}</main>
            <header className={style.ListItemmainprice}>$ {price?.toLocaleString('de', {useGrouping:true})}</header>
        <div className={style.ListItemstateName}>
          {state_name}
        </div>
      </article>
    </Link>
   
  );
}

{/* <Link to={`/items/${id}`}>
   </Link> */}