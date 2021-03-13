import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../components/navbar/navbar';
import { banner as Banner } from '../components/heroBanner/banner';
import { footer as Footer } from '../components/footer/footer';
import { Themes } from '../components/ThemesSection/Themes';
import { Schedule } from '../components/schedule/Schedule';
import { Speakers } from '../components/speakers/speakers';
import { AboutUs } from '../components/AboutUs/AboutUs';
import { ContactUs } from './ContactUs/ContactUs';
import { Sponsor } from '../components/sponsor/sponsor';
import { Team } from '../components/Team/Team';

export default function Home() {
	return (
		<div>
			<Banner></Banner>
			<AboutUs></AboutUs>
			<Themes></Themes>
			<Schedule></Schedule>
			<Speakers></Speakers>
			<Team></Team>
			<Sponsor></Sponsor>
		</div>
	);
}
