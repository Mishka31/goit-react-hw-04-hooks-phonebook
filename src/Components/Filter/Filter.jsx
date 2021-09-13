import s from "./Filter.module.css";

function Find({ value, onSearch }) {
  return (
    <div className={s.container}>
      <p className={s.title}>Find contacts by name:</p>
      <input type="text" value={value} onChange={onSearch} className={s.imput}></input>
    </div>
  );
}

export default Find;
