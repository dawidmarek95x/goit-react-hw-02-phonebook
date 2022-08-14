import styles from './Filter.module.scss';

export const Filter = ({setFilter}) => {
  const {filterInput} = styles;

  return (
    <>
      <label>
        Find contacts by name:
        <input 
          className={filterInput} 
          type="text"
          onChange={setFilter}
        />
      </label>
    </>
  )
}

export default Filter;