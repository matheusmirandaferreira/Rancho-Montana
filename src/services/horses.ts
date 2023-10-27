import { api } from './api';

export async function getHorses() {
  const { data } = await api.get('/api/horse');

  console.log('data', data);

  if (data.status === '00') return data.data;

  return data;
}

export async function getHorseDetails(uuid?: string) {
  const { data } = await api.get('/api/horse/' + uuid);

  return data;
}
