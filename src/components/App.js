import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Home from './Home'
import ListofContacts from './ListofContacts'
import ContactNew from './ContactNew'
import ContactDetail from './ContactDetail'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        //my contact to populate on load
        { id:1000000000, name: "Patrick", imgUrl:"https://media.licdn.com/dms/image/C4E03AQHpEkQPqrVkWw/profile-displayphoto-shrink_200_200/0?e=1578528000&v=beta&t=Vo6fjMxNdUGva_HOrs9o8Ptlu-uVoj25pBJL6RwYd4s", email: "pcrawford94@gmail.com", number: "9194132003"},
      ]
    }
    
    this.addContact = this.addContact.bind(this);
  }
  
  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/contacts' render={() => (
            <ListofContacts contacts={this.state.contacts}/>
            )}/>
          <Route exact path='/contacts/new' render={(props) =>(
              <ContactNew props={props} addContact={this.addContact} contacts={this.state.contacts}/>
              )}/>
          <Route path='/contacts/:id' render={(props) =>(
              <ContactDetail props={props} contacts={this.state.contacts}/>
              )}/>
        </Switch>
      </div>
    )
  }
}

export default App