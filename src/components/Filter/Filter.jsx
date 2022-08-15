import styles from './Filter.module.scss';

export const Filter = ({setFilter}) => {
  const {label, input} = styles;

  return (
    <>
      <label className={label}>
        Find contacts by name
        <input 
          className={input} 
          type="text"
          onChange={setFilter}
        />
      </label>
    </>
  )
}

export default Filter;