import React, { Component } from 'react';
import style from './Form.module.css'
import './Form.module.css'
import { v4 as uuidv4 } from 'uuid';
import ListPeople from './ListPeople/ListPeople';
import FillterForm from './FillterForm/FillterForm';
import ContactForm from './ContactForm/ContactForm';
import { CSSTransition } from 'react-transition-group'




export default class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
    inShow: true,
  }

  componentDidMount() {
    const localdata = localStorage.getItem("contacts")
    if (localdata) {
      this.setState({ contacts: JSON.parse(localdata) })
    }
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))

    }
    console.log(this.state)
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
  }

  getFilterValue = (e) => {
    this.setState({ filter: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    console.log(this.state)
    this.addContact({ id: uuidv4(), name, number })
    this.setState({ name: '', number: '', filter: '' })
  }

  addContact = (contact) => {
    this.setState(prevState => ({ contacts: [...prevState.contacts, contact] }))
  }

  getInfo = () => {
    const { contacts, filter } = this.state;
    if (filter) {
      const filterArr = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
      return filterArr
    } else {
      return contacts
    }
  }

  deliteContac = (e) => {
    const id = e.target.name
    const { contacts } = this.state;
    const findContact = contacts.filter(contact => contact.id !== id)
    this.setState({ contacts: [...findContact] })
  }

  render() {
    const { name, number, filter, inShow } = this.state;
    return (
        <form onSubmit={this.handleSubmit} className={style.formContainer}>
          <CSSTransition in={inShow} classNames="title" timeout={550} unmountOnExit>
            <h2>Phonebook</h2>
            </CSSTransition>
            <ContactForm handleChange={this.handleChange} name={name} number={number} />
            <FillterForm filter={filter} onChange={this.handleChange} />
            {filter !== "" && <ListPeople contacts={this.getInfo()} deliteContact={this.deliteContac} />}
        </form>
     
    );
  }
}


