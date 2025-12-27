import React from 'react';
import { renderMarkdown } from '../utils';
import { BasicsType, ProfileType } from '../types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import ChatIcon from '@mui/icons-material/Chat';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LanguageIcon from '@mui/icons-material/Language';

export interface IProfileProps {
    profileData: BasicsType;
    onChangeLanguage: Function;
}

const Profile: React.FC<IProfileProps> = (props) => {
    const profile = props.profileData;
    const markdownData = renderMarkdown(profile.information);

    return (
        <Card elevation={3}>
            <CardContent sx={{ textAlign: 'center' }}>
                <Stack spacing={1} alignItems="center">
                    <Avatar alt={profile.name} src={process.env.PUBLIC_URL + '/images/' + profile.picture} sx={{ width: 120, height: 120 }} />
                    <Typography variant="h6">{profile.name}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">{profile.label}</Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                        <img src={process.env.PUBLIC_URL + '/images/flags/fr.svg'} onClick={() => props.onChangeLanguage('fr')} style={{ cursor: 'pointer', width: 36 }} alt="fr" />
                        <img src={process.env.PUBLIC_URL + '/images/flags/us_uk.svg'} onClick={() => props.onChangeLanguage('en')} style={{ cursor: 'pointer', width: 36 }} alt="en" />
                    </Stack>
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Typography variant="body2" sx={{ mb: 1 }}>
                    {profile.location.city}, {profile.location.region}, {profile.location.countryCode}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                    <Link href={`mailto:${profile.email}`}>{profile.email}</Link>
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 2 }}>
                    {profile.profiles.map((p: ProfileType, i: number) => {
                        const renderIcon = () => {
                            const net = (p.network || '').toLowerCase();
                            if (net.includes('linkedin')) return <LinkedInIcon />;
                            if (net.includes('github')) return <GitHubIcon />;
                            if (net.includes('stack')) return <CodeIcon />;
                            if (net.includes('skype')) return <ChatIcon />;
                            if (net.includes('resume') || net.includes('cv') || p.url?.endsWith('.pdf')) return <PictureAsPdfIcon />;
                            return <LanguageIcon />;
                        }

                        return (
                            <IconButton key={i} component="a" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={p.network}>
                                {renderIcon()}
                            </IconButton>
                        );
                    })}
                </Stack>

                <Divider sx={{ my: 2 }} />

                <div className="justify-align" dangerouslySetInnerHTML={markdownData} />
            </CardContent>
        </Card>
    );
};

export default Profile;