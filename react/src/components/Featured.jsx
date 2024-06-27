import Promo from "./Promo";
const Featured = (props) =>{
    return(
    <div>
<h5>Featured</h5>
<div className="card-container d-flex flex-row justify-content-start" style={{ gap: "20px", padding: "20px" }}>
{
    props.data.map((promo) => (
    <Promo key={promo.id} data={promo} />
    ))
}
</div>
    </div>)
}
export default Featured;