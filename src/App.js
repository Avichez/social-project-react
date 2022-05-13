import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersPageContainer from './components/UsersPage/UsersPageContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <div className='container'>
      <Header />
      <Sidebar state={props.store.getState()}/>
      <main className='main_section'>
        <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
        <Route path='/dialogs' render={() => <DialogsContainer />}/>
        <Route path='/users' render={() => <UsersPageContainer />}/>
      </main>
      <Footer />
    </div>
  )
}

export default App;
