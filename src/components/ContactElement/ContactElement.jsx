import styles from './ContactElement.module.scss';

export const ContactElement = ({id, name, number, deleteContact}) => {
  const {item} = styles;

  return (
    <>
      <li className={item}>
        {name}: {number}
        <button type="button" onClick={() => deleteContact(id)}></button>
      </li>
    </>
  )
}

export default ContactElement;