export interface IWorkExpData {
  key: string;
  position: string;
  period: IWorkExpPeriod;
  organization: IWorkExpOrganization;
  place: string;
}

interface IWorkExpPeriod {
  from: string;
  to: string;
}

interface IWorkExpOrganization {
  label: string;
  link: string;
}

export interface IEducationData {
  key: string;
  profession: string;
  organization: IOrganization;
  place: string;
  description: string;
}

interface IOrganization {
  label: string;
  link: string;
}

export interface ICertificateData {
  key: string;
  cerfLink: string;
  title: string;
  school: ISchool;
}

interface ISchool {
  img: string;
  label: string;
  link: string;
}

export interface IProjectData {
  key: string;
  name: IProjectName;
  description: string[];
  pullRequest: IProjectPullRequest;
  deploy: IProjectDeploy;
  skills: string[];
}

interface IProjectName {
  link: string;
  label: string;
}

interface IProjectPullRequest {
  link: string;
  label: string;
}

interface IProjectDeploy {
  link: string;
  label: string;
}
