import { AIRTABLE_TABLE_ID, OST } from '.';

export function getData() {
  const recordId = 'recsYvPVRRIDnnQnt';
  return OST(AIRTABLE_TABLE_ID).find(recordId);
}



