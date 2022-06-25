import  {ListItem} from "../";
import  style from "./List.module.css"

export default function List({ data }) {
  return (
    <section className={style.List}>
      <div className={style.Listcontainer}>
        {data.map(item => <ListItem {...item} key={item.id}  state_name={item.address.state_name}/>)}
      </div>
    </section>
  )
}