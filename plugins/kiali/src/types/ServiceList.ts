import { ServiceHealth } from './Health';
import { ObjectReference, ObjectValidation, Validations } from './IstioObjects';
import { AdditionalItem } from './Workload';

export interface ServiceList {
  cluster?: string;
  services: ServiceListItem[];
  validations: Validations;
}

export interface ServiceOverview {
  name: string;
  cluster?: string;
  istioSidecar: boolean;
  istioAmbient: boolean;
  additionalDetailSample?: AdditionalItem;
  labels: { [key: string]: string };
  ports: { [key: string]: number };
  istioReferences: ObjectReference[];
  kialiWizard: string;
  serviceRegistry: string;
  health: ServiceHealth;
}

export interface ServiceListItem extends ServiceOverview {
  namespace: string;
  validation?: ObjectValidation;
}

export interface ServiceListQuery {
  health: 'true' | 'false';
  istioResources: 'true' | 'false';
  onlyDefinitions: 'true' | 'false';
  rateInterval: string;
}
