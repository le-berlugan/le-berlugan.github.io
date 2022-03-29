import 'font-awesome/css/font-awesome.min.css';
import { renderMardown } from '../utils';
import {BasicsType, ProfileType} from "../types"

export interface IProfileProps {
    profileData: BasicsType;
    onChangeLanguage: Function;
}

const FR_FLAG = "fr.svg";
const US_UK_FLAG = "us_uk.svg";

const Profile = (props:IProfileProps) => {

    const markdownData = renderMardown(props.profileData.information); 
    const profile = props.profileData;

    const getProfileLinks = () => {
		return profile.profiles.map((profileLink: ProfileType, index) => {
            return (
                <li key={"profile_link_" + index}>
                    <a className={profileLink.icon + " fa-2x tooltips"} rel="noreferrer noopener" href={profileLink.url} target="_blank"><span>{profileLink.network}</span></a>
                </li>                
            );
        });
    }

    return (
        <div className="profile">
            <div className="profileImg">
                <img className="img-circle center-block" src={process.env.PUBLIC_URL + "/images/" + profile.picture} alt="myself" />
            </div>
            <h1 className="text-center">{profile.name}</h1>
            <h2 className="text-center">{profile.label}</h2>
            <div className="text-center">
                <img src={process.env.PUBLIC_URL + "/images/flags/" + FR_FLAG}  onClick={() => {props.onChangeLanguage("fr")}} className="drap" alt="fr_FR" />
                <img src={process.env.PUBLIC_URL + "/images/flags/" + US_UK_FLAG}  onClick={() => {props.onChangeLanguage("en")}} className="drap" alt="en_US" />
            </div>            
            <div className="divider"></div>
                <div className="row">
                    <div className="col-md-1">
                        <i className="fa fa-lg fa-location-arrow"></i>
                    </div>
                    <div className="col-md-10">
                        {profile.location.city}, {profile.location.region}, {profile.location.countryCode}
                    </div>            
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <i className="fa fa-lg fa-envelope"></i>
                    </div>
                    <div className="col-md-10">
                        <a href={"mailto:" + profile.email} >{profile.email}</a>
                    </div>            
                </div>

            <div className="divider"></div>
            <ul className="profileLinks list-inline text-center">
                { getProfileLinks() }
                {/* <li>
                    <a className="fa fa-linkedin-square fa-2x tooltips" rel="noreferrer noopener" href={profile.profiles[0].url} target="_blank"><span>{profile.profiles[0].network}</span></a>
                </li>
                <li>
                    <a className="fa fa-github fa-2x tooltips" rel="noreferrer noopener" href={profile.profiles[1].url} target="_blank"><span>{profile.profiles[1].network}</span></a>
                </li>
                <li>
                    <a className="fa fa-stack-overflow fa-2x tooltips" rel="noreferrer noopener" href={profile.profiles[2].url} target="_blank"><span>{profile.profiles[2].network}</span></a>
                </li>
                <li>
                    <a className="fa fa-skype fa-2x tooltips" rel="noreferrer noopener" href={profile.profiles[3].url} target="_blank"><span>{profile.profiles[3].network}</span></a>
                </li>
                <li>
                    <a className="fa fa-file-pdf-o fa-2x tooltips" rel="noreferrer noopener" href={profile.profiles[4].url} target="_blank"><span>{profile.profiles[4].network}</span></a>
                </li> */}
            </ul>
            <div className="divider"></div>
            <div className="justify-align" dangerouslySetInnerHTML={markdownData} />                
        </div>
    );   
}
export default Profile;