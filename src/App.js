
import Navbar from "./componentes/Navbar/navbar";
import Music from "./componentes/Music/music";
import News from "./componentes/News/news";
import DialogsConteiner from "./componentes/Dialogs/dialogConteiner";
import Settings from "./componentes/Settings/setting";
import { Route} from "react-router-dom";
import './App.css';
import UsersConteiner from "./componentes/Users/usersConteiner";
import ProfileConteiner from "./componentes/Profile/profileConteiner";
import HeaderConteiner from "./componentes/Header/HeaderConteiner";



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
					<Route path="/users" render={() => <UsersConteiner/>}/>
				</div>
			</div>
	);
}

export default App;
