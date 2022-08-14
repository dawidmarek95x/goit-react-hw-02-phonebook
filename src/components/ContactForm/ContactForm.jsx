import React, { Component } from "react";

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChange = evt => {
    const {name, value} = evt.target;
    this.setState({ [name]: value });
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.setContacts(this.state);
    evt.target.reset();
  }

  render() {
    const {name, number} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            required
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    )
  }
}

export default ContactForm;