import Navbar from "./componentes/Navbar/navbar";
import Music from "./componentes/Music/music";
import News from "./componentes/News/news";
import DialogsConteiner from "./componentes/Dialogs/dialogConteiner";
import Settings from "./componentes/Settings/setting";
import { Route} from "react-router-dom";
import './App.css';
import UsersConteinerApi from "./componentes/Users/UsersConteiner";
import ProfileConteiner from "./componentes/Profile/profileConteiner";
import HeaderConteiner from "./componentes/Header/HeaderConteiner";
import Login from "./componentes/Login/login";



function App (props) {
	return (
			<div className="app-wrapper">
				<HeaderConteiner/>
				<Navbar/>
				<div className="content">
					<Route 
						path="/profile/:userId?" 
						render={() => <ProfileConteiner/>}/>
					<Route 
						path="/dialogs" 
						render={() => <DialogsConteiner/>}/>
					<Route path="/music" component={Music}/>
					<Route path="/news" component={News}/>
					<Route path="/settings" component={Settings}/>
					<Route path="/users" render={() => <UsersConteinerApi/>}/>
					<Route path="/login" component={Login}/>
				</div>
			</div>
	);
}

export default App;
