
import { useRouter } from "next/router";
import { useFetch } from "../../hooks";
import style from "./SinglePage.module.css"

export default function View( /* { data, categories, description } */) {
  const router = useRouter()
  const searchValue = router.query.value;

  const { data } = useFetch({ url: `/items/${searchValue}` });
  const { data: description } = useFetch({
    url: `/items/${searchValue}/description`,
  });

  const { data: categories } = useFetch({ url: `/categories/${data?.category_id}` });

  if( !data|| !description || !categories) {return <p>Loading...</p>}

  return (
    <div className={style.SinglePage}>
      <header className={style.SinglePageheader}>
          {categories?.path_from_root.map(category => (
            <div key={category.name}>
              <p className={style.SinglePagearrow} >{'>'}</p>{category.name} 
            </div>
          ))}
      </header>
      <main className={style.SinglePagemain}>
        <section className={style.SinglePageSection}>
          <img src={data.pictures[0].url} alt="Imagen de producto" className={style.SinglePageimg}/>
          <section>
            <h3 className={style.SinglePagemainTitle}>Descripcion del producto</h3>
            <p className={style.SinglePagedescripcion}>{description.plain_text}</p>
          </section>
        </section>
        <div className={style.SinglePageSidebar}>
          <p className={style.SinglePageSidebarcondicion}>{data.condition === "new" ? "Nuevo" : "Usado"}</p>
          <h3 className={style.SinglePageSidebartitulo}>{data.title}</h3>
          <h3 className={style.SinglePageSidebarprecio}>$ {data.price.toLocaleString('de', {useGrouping:true})}</h3>
          <button className={style.SinglePagebuy}>Comprar ahora</button>
        </div>
      </main>
    </div>
  );
}

/* export async function getServerSideProps() {
  const router = useRouter()
  const searchValue = router.query.value;

  const { data } = useFetch({ url: `/items/${searchValue}` });
  const { data: description } = useFetch({
    url: `/items/${searchValue}/description`,
  });

  const { data: categories } = useFetch({ url: `/categories/${data?.category_id}` });
  return { props: { data, categories, description } }
} */