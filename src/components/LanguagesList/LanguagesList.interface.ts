interface ILanguagesListProps {
  languages: ILanguagesData;
}

type ILanguagesData = Record<string, ILanguageData>;

export type ILanguageData = {
  label: string;
  data: string;
};

export default ILanguagesListProps;
