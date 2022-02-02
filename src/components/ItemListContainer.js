const ItemListContainer = (props) =>{
  return(
    <>
      <div className="max-w-4xl mx-auto px-2">
        <p>Este es el ItemListContainer {props.contenido}</p>
      </div>
      <ItemCount />
    </>
  );
}
export default ItemListContainer;