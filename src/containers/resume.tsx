import Menu from "./menu"
import Profile from "./profile"
import {Routes ,Route} from "react-router-dom";
import Home from "./home"
import Project from "./project"
import GoogleMap from "./googlemap"
import {JsonResumeType} from "../types"
import React, { useEffect, useRef, useState } from "react";

export interface IResumeProps {
	data: JsonResumeType;
	onChangeLanguage: Function;
}

const Resume = (props:IResumeProps) => { 

	const profile = props.data.basics;
	const aboutData = { 
		"title": props.data.basics.title, 
		"summary": props.data.basics.summary
	};

	// Fallback sticky logic: will apply fixed positioning when CSS sticky fails
	const asideRef = useRef<HTMLDivElement | null>(null);
	const innerRef = useRef<HTMLDivElement | null>(null);
	const [isFixed, setIsFixed] = useState(false);

	useEffect(() => {
		const handle = () => {
			const minWidth = 768; // match CSS media query
			if (window.innerWidth < minWidth) {
				setIsFixed(false);
				return;
			}
			const asideEl = asideRef.current;
			const innerEl = innerRef.current;
			if (!asideEl || !innerEl) return;
			const asideRect = asideEl.getBoundingClientRect();
			const offsetTop = 20; // match CSS top
			// When the top of the aside would scroll past the offset, fix it
			if (asideRect.top < offsetTop) {
				if (!isFixed) setIsFixed(true);
			} else {
				if (isFixed) setIsFixed(false);
			}
		};
		// Throttle using requestAnimationFrame
		let rafId: number | null = null;
		const onScroll = () => {
			if (rafId !== null) cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(() => {
				handle();
				rafId = null;
			});
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		handle();
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			if (rafId !== null) cancelAnimationFrame(rafId);
		};
	}, [isFixed]);

	return (
		<div className="container">
			<Menu menuItemData={profile.menu} />
			<div className="row">
				<aside className="col-md-3" ref={asideRef}>
					<div
						className="inner"
						ref={innerRef}
						style={
							isFixed
								? (() => {
									  const asideEl = asideRef.current;
									  if (!asideEl) return { position: 'fixed', top: 25 };
									  const rect = asideEl.getBoundingClientRect();
									  return { position: 'fixed', top: 25, left: rect.left + 'px', width: rect.width + 'px', zIndex: 1000 };
								  })()
								: {}
						}
					>
						<Profile profileData={profile} onChangeLanguage={props.onChangeLanguage} />
					</div>
				</aside>
				<main className="col-md-9">
					<div className="inner">
						<Routes>
							<Route path={"/map"} element={<GoogleMap />} />
							<Route path={"/projects"} element={
								<Project projectData={props.data.project} />} >
							</Route>
							<Route path={"/"} element={
								<Home
									aboutData={aboutData} 
									workData={props.data.work} 
									skillsData={props.data.skills} 
									educationData={props.data.education} 
									languagesData={props.data.languages} 
									interestsData={props.data.interests} 
								/>} >
							</Route>
						</Routes>
					</div>
				</main>
			</div>
		</div>
	);
}

export default Resume;
