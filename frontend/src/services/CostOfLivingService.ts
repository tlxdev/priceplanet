import { AddCountryDetailsFormDto, AddCountryDetailsFormFromLanderDto } from '@/constants/CostOfLiving';
import Api from '@/services/ApiService';

export const createCostOfLiving = async (data: AddCountryDetailsFormDto) => {
  const response = await Api.post('/cost-of-living', data);
  return response.data;
};

export const createCostOfLivingFromLander = async (data: AddCountryDetailsFormFromLanderDto) => {
  const response = await Api.post('/cost-of-living/from-lander', data);
  return response.data;
};