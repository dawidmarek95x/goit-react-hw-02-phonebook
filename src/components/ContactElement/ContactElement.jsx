import styles from './ContactElement.module.scss';

export const ContactElement = ({id, name, number, deleteContact}) => {
  const {item, btn, link, wrapper} = styles;

  return (
    <>
      <li className={item}>
        <div className={wrapper}>
          {name}: {number}
          <a className={link} href={`tel:${number}`}> </a>
          <button 
            className={btn} 
            type="button" 
            onClick={() => deleteContact(id)}>
          </button>
        </div>
      </li>
    </>
  )
}

export default ContactElement;