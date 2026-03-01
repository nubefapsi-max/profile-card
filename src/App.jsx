import styles from "./ProfileCard.module.css";

function App(){

  const usuario = {
    nombre:"Luis",
    rol:"Administrador",
    descripcion:"Administrador de platfaorma digital",
    email:"jl@mail.com"
  };

  return(
  <div className={styles.card}>
    <h1>{usuario.nombre}</h1>
    <p>{usuario.rol}</p>
    <p>{usuario.descripcion}</p>
    <p>{usuario.email}</p>
  </div>);
}

export default App;