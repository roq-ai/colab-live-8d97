import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface StreamInterface {
  id?: string;
  platform: string;
  status: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface StreamGetQueryInterface extends GetQueryInterface {
  id?: string;
  platform?: string;
  status?: string;
  organization_id?: string;
}
