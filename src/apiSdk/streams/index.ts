import axios from 'axios';
import queryString from 'query-string';
import { StreamInterface, StreamGetQueryInterface } from 'interfaces/stream';
import { GetQueryInterface } from '../../interfaces';

export const getStreams = async (query?: StreamGetQueryInterface) => {
  const response = await axios.get(`/api/streams${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createStream = async (stream: StreamInterface) => {
  const response = await axios.post('/api/streams', stream);
  return response.data;
};

export const updateStreamById = async (id: string, stream: StreamInterface) => {
  const response = await axios.put(`/api/streams/${id}`, stream);
  return response.data;
};

export const getStreamById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/streams/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteStreamById = async (id: string) => {
  const response = await axios.delete(`/api/streams/${id}`);
  return response.data;
};
