import { api } from './api';

export async function getHorses() {
  const { data } = await api.get('/api/horse');

  return data;
}

export async function getHorseDetails(uuid?: string) {
  const { data } = await api.get('/api/horse/' + uuid);

  return data;
}
