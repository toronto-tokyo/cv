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
