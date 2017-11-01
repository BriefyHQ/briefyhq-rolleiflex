export interface IPagination {
  items_per_page: number;
  page_count: number;
  page: number;
  total: number;
  next_page?: number;
  previous_page?: number;
}

export interface ISummary {

  id: string;
  title: string;
  description: string;
  slug: string;

}

export interface ILeicaData extends ISummary {

  created_at: any;
  updated_at: any;

}

export interface IAPIList {
  pagination: IPagination;
  data: ISummary[];
  total: number;
}

export interface IHistoryList {
  pagination: IPagination;
  data: any[];
  total: number;
}

export interface IBadRequestErrorItem {
  location?: string;
  name: string;
  description: string;
}
