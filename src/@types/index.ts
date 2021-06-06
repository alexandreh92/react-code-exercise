import { lightTheme } from '~/styles/theme';

export type { ApplicationState } from '~/store/ducks/types';

export type Theme = typeof lightTheme;

export interface Member {
  id: string;
  title: string;
  short_title: string;
  api_uri: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  suffix?: string;
  date_of_birth: string;
  gender: string;
  party: string;
  leadership_role?: string;
  twitter_account: string;
  facebook_account: string;
  youtube_account: string;
  govtrack_id: string;
  cspan_id: string;
  votesmart_id: string;
  icpsr_id: string;
  crp_id: string;
  google_entity_id: string;
  fec_candidate_id: string;
  url: string;
  rss_url: string;
  contact_form: string;
  in_office: boolean;
  cook_pvi?: string;
  dw_nominate: number;
  ideal_point?: string;
  seniority: string;
  next_election: string;
  total_votes: number;
  missed_votes: number;
  total_present: number;
  last_updated: string;
  ocd_id: string;
  office: string;
  phone: string;
  fax: string;
  state: string;
  senate_class: string;
  state_rank: string;
  lis_id: string;
  missed_votes_pct: number;
  votes_with_party_pct: number;
  votes_against_party_pct: number;
}

export interface MemberLookup
  extends Pick<
    Member,
    | 'id'
    | 'first_name'
    | 'middle_name'
    | 'last_name'
    | 'suffix'
    | 'date_of_birth'
    | 'gender'
    | 'govtrack_id'
    | 'cspan_id'
    | 'votesmart_id'
    | 'icpsr_id'
    | 'twitter_account'
    | 'facebook_account'
    | 'youtube_account'
    | 'crp_id'
    | 'google_entity_id'
    | 'rss_url'
    | 'in_office'
    | 'last_updated'
  > {
  member_id: string;
  url: string;
  times_topics_url: string;
  times_tag: string;
  current_party: string;
  most_recent_vote: string;
  roles: Role[];
}

export interface Role {
  congress: string;
  chamber: string;
  title: string;
  short_title: string;
  state: string;
  party: string;
  leadership_role: string;
  fec_candidate_id: string;
  seniority: string;
  district: string;
  at_large: boolean;
  ocd_id: string;
  start_date: string;
  end_date: string;
  office: string;
  phone: string;
  fax?: string;
  contact_form?: string;
  cook_pvi: string;
  dw_nominate: number;
  ideal_point?: number;
  next_election: string;
  total_votes: number;
  missed_votes: number;
  total_present: number;
  senate_class: string;
  state_rank: string;
  lis_id: string;
  bills_sponsored: number;
  bills_cosponsored: number;
  missed_votes_pct: number;
  votes_with_party_pct: number;
  votes_against_party_pct: number;
  committees: Committee[];
  subcommittees: SubCommittee[];
}

export interface Committee {
  name: string;
  code: string;
  api_uri: string;
  side: string;
  title: string;
  rank_in_party: number;
  begin_date: string;
  end_date: string;
}

export interface SubCommittee extends Committee {
  parent_committee_id: number;
}
