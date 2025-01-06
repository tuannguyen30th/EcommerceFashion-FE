import axios from 'axios';

interface Province {
  code: string;
  name: string;
}

interface District {
  code: string;
  name: string;
}

export const getProvinces = async (): Promise<Province[]> => {
  const response = await axios.get('https://provinces.open-api.vn/api/p/');
  return response.data;
};

export const getDistricts = async (provinceCode: string): Promise<District[]> => {
  const response = await axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);
  return response.data.districts;
};

