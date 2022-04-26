export interface ICountrysListResp {
  countries: countries[];
}

interface countries {
  name: string;
  code: string;
}

export interface IHolidaysListResp {
  holidays: holidays[];
}

interface holidays {
  name: string;
  date: string;
  local_name: string;
  country_code: string;
  regions: string[];
  types: string[];
}
