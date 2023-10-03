import { AddCountryDetailsFormDto } from '@/constants/CostOfLiving';
import Api from '@/services/ApiService';

export const createCostOfLiving = async (data: AddCountryDetailsFormDto) => {
  const response = await Api.post('/cost-of-living', data);
  return response.data;
};
