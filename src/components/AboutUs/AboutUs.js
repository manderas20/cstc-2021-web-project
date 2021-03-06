import React, { useState, useEffect } from 'react';
import './aboutUs.css';
import { LearnUs } from '../LearnAboutUs/LearnUs';
import { IoIosClock } from 'react-icons/io';
import { ImBullhorn, ImRoad } from 'react-icons/im';
import { RiGitBranchFill, RiGitBranchLine } from 'react-icons/ri';
import { GiMicrophone } from 'react-icons/gi';
import { IoRocket } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const AboutUs = () => {
	useEffect(() => {
		AOS.init({
			duration: 3000,
		});
	}, []);
	const onStyle = {
		padding: '0 15px',
		fontSize: '72px',
		verticalAlign: 'middle',
		color: '#233e62',
		borderRadius: '4px',
		display: 'block',
		marginBottom: '-2px',
		lineHeight: '1',
		WebkitTransition: 'all 0.4s ease-in-out',
		transition: 'all 0.4s ease-in-out',
	};
	const outStyle = {
		padding: '0 10px',
		fontSize: '72px',
		verticalAlign: 'middle',
		color: '#fff',
		borderRadius: '4px',
		display: 'block',
		marginBottom: '-2px',
		lineHeight: '1',
		WebkitTransition: 'all 0.4s ease-in-out',
		transition: 'all 0.4s ease-in-out',
	};
	const [styleAlarm, setStyleClock] = useState(onStyle);
	const [styleBullhorn, setstyleBull] = useState(onStyle);
	const [styleRocket, setstyleRocket] = useState(onStyle);
	const [styleMic, setstyleMic] = useState(onStyle);
	const onMouseOver = () => {
		setStyleClock(onStyle);
	};
	const onMouseOut = () => {
		setStyleClock(outStyle);
	};
	const onMouseOverBull = () => {
		setstyleBull(onStyle);
	};
	const onMouseOutBull = () => {
		setstyleBull(outStyle);
	};
	const onMouseOverRocket = () => {
		setstyleRocket(onStyle);
	};
	const onMouseOutrocket = () => {
		setstyleRocket(outStyle);
	};
	const onMouseOverMic = () => {
		setstyleMic(onStyle);
	};
	const onMouseOutMic = () => {
		setstyleMic(outStyle);
	};

	return (
		<div id='about' style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
			<section className='pt100 pb100'>
				<div className='container'>
					<div
						className='section_title text-center'
						style={{ overflowX: 'hidden' }}
					>
						<h3 className='title primary-text' data-aos='zoom-in-down'>
							About the event
						</h3>
					</div>
					<div className='row justify-content-center' yy>
						<div className='col-12 col-md-6' data-aos='fade-down-right'>
							<p className='text-part'>
								The CS Chapter helps boost the skills of developers and future
								engineers by providing a variety of professional pieces of
								training, which allows them to test their skills through yearly
								competitions and teaches them teamwork by integrating them in
								the IEEE family.
							</p>
						</div>
						<div className='col-12 col-md-6' style={{ overflowX: 'hidden' }}>
							<p className='text-part' data-aos='fade-down-left'>
								The Computer Society Tech Congress (CSTC) is a 3-day congress
								organized by IEEE CS INSAT SBC. This event has 20 ambassadors
								from several Tunisian universities. As a result, it is estimated
								that 250 students will participate in this congress.
							</p>
						</div>
					</div>
					<br></br>
					<div className='space-p'>
						<LearnUs></LearnUs>
					</div>
					<br></br>
					<div className='row justify-content-center mt30'>
						<div
							className='col-12 col-md-6 col-lg-3 col-sm-6'
							data-aos='zoom-in-up'
						>
							<div
								className='icon_box_one'
								onMouseOut={onMouseOverMic}
								onMouseOver={onMouseOutMic}
							>
								<div className='justify-content-center'>
									<div className='pad_icon'>
										<GiMicrophone size='120px' style={styleMic} />{' '}
									</div>
								</div>
								<div className='content'>
									<div className='pad_icon'>
										{' '}
										<h4>5 Speakers</h4>
									</div>
									<p className='aboutUsP'>
										Our Congress is the best, because we have the best speakers
										in the entire world brought to you to discuss the trendiest
										topics in the Tech industry within a fun and innovative
										environment. So, are you ready to get to know them and talk
										Science and Technology with them?
									</p>
								</div>
							</div>
						</div>
						<div
							className='col-12 col-md-6 col-lg-3 col-sm-6'
							data-aos='zoom-in-down'
						>
							<div
								className='icon_box_one'
								onMouseOut={onMouseOverRocket}
								onMouseOver={onMouseOutrocket}
							>
								<div className='pad_icon'>
									<IoRocket size='120px' style={styleRocket}></IoRocket>{' '}
								</div>
								<div className='content'>
									<div className='pad_icon'>
										<h4>48 hrs Competition</h4>
									</div>
									<p className='aboutUsP'>
										This year’s theme raises a lot of intriguing questions and
										we believe you have the answers because we are change makers
										and this century is certainly ours . So we invite you to
										participate in our 48-hour competition and pitch your
										brilliant ideas in front of the jury .Needless to say, a lot
										of valuable prizes are to be won.
									</p>
								</div>
							</div>
						</div>
						<div
							className='col-12 col-md-6 col-lg-3 col-sm-6'
							data-aos='zoom-in-up'
						>
							<div
								className='icon_box_one'
								onMouseOut={onMouseOverBull}
								onMouseOver={onMouseOutBull}
							>
								<div className='pad_icon'>
									{' '}
									<ImBullhorn size='120px' style={styleBullhorn}></ImBullhorn>
								</div>

								<div className='content'>
									<div className='pad_icon'>
										{' '}
										<h4>Debate</h4>{' '}
									</div>
									<p className='aboutUsP'>
										This part of the event is about YOU and your creative ideas.
										Let us all think out loud with our beloved guests and
										inspire each other. Let us hear what you think. So what's
										your own definition of mindful use of social media ?
									</p>
								</div>
							</div>
						</div>
						<div
							className='col-12 col-md-6
							 col-lg-3 col-sm-6'
							data-aos='zoom-in-down'
						>
							<div
								className='icon_box_one'
								onMouseOut={onMouseOver}
								onMouseOver={onMouseOut}
							>
								<div className='pad_icon'>
									{' '}
									<RiGitBranchLine
										size='120px'
										style={styleAlarm}
									></RiGitBranchLine>
								</div>

								<div className='content'>
									<div className='pad_icon'>
										{' '}
										<h4>3 Tracks</h4>{' '}
									</div>
									<p className='aboutUsP'>
										Our event will revolve around three tracks. Machine
										learning, big data and deep learning. We will discover how
										social media integrate AI and big data to analyze social
										data in order to extract useful insights. Our exploration
										will be through various workshops that range from
										introductory levels to intermediate, held by experts in the
										field.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
