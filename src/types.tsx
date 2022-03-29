export interface JsonResumeType {
    basics:       BasicsType;
    work:         WorkType;
    volunteer:    any[];
    education:    EducationType;
    awards:       any[];
    publications: any[];
    skills:       ElementType;
    languages:    LanguagesType;
    interests:    ElementType;
    references:   ReferenceType[];
    project:      ProjectType;
}

export interface AboutType {
    title:      string;
    summary:    string;
}

export interface BasicsType {
    title:       string;
    name:        string;
    label:       string;
    picture:     string;
    email:       string;
    phone:       string;
    website:     string;
    summary:     string;
    information: string;
    location:    LocationType;
    profiles:    ProfileType[];
    menu:        MenuType[];
}

export interface LocationType {
    address:     string;
    postalCode:  string;
    city:        string;
    countryCode: string;
    region:      string;
}

export interface MenuType {
    label:  string;
    icon:   string;
    click?: string;
    url:    string;
}

export interface ProfileType {
    network:  string;
    username: string;
    icon:     string;
    url:      string;
}

export interface EducationType {
    title: string;
    items: EducationItemType[];
}

export interface EducationItemType {
    institution: string;
    area:        string;
    studyType:   string;
    startDate:   string;
    endDate:     string;
    link:        string;
    place:       string;
    picture:     string;
    gpa:         string;
    courses:     string[];
}

export interface LanguagesType {
    title: string;
    items: LanguagesItemType[];
}

export interface LanguagesItemType {
    language: string;
    link:     string;
    fluency:  string;
}

export interface ProjectType {
    title: string;
    items: ProjectItemType[];
}

export interface ProjectItemType {
    name:       string;
    date:       string;
    link:       string;
    summary:    string;
    highlights: string[];
}

export interface ReferenceType {
    name:      string;
    reference: string;
}

export interface ElementType {
    title: string;
    items: ElementItemType[];
}

export interface ElementItemType {
    name:     string;
    level?:    string;
    keywords: string[];
}

export interface WorkType {
    title: string;
    items: WorkItemType[];
}

export interface WorkItemType {
    company:     string;
    position:    string;
    website:     string;
    startDate:   string;
    endDate:     string;
    place:       string;
    picture:     string;
    summary:     string;
    attachments: MenuType[];
    highlights:  string[];
}
