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
  school: ISchool;
  place: string;
  description: string;
}

interface ISchool {
  label: string;
  link: string;
}
