import assert from 'assert';

import {
  NodeFilterType,
  NodeNameFilterType,
  ProviderConfig,
  SupportProviderEnum,
} from '../types';

let globalPort: number = 61100;

export default class Provider {
  public readonly type: SupportProviderEnum;
  public readonly nodeFilter?: NodeFilterType;
  public readonly netflixFilter?: NodeNameFilterType;
  public readonly youtubePremiumFilter?: NodeNameFilterType;
  public readonly customFilters?: ProviderConfig['customFilters'];
  public readonly addFlag?: boolean;
  private startPort?: number;

  constructor(config: ProviderConfig) {
    this.type = config.type;
    this.nodeFilter = config.nodeFilter;
    this.netflixFilter = config.netflixFilter;
    this.youtubePremiumFilter = config.youtubePremiumFilter;
    this.customFilters = config.customFilters;
    this.addFlag = config.addFlag;
    this.startPort = config.startPort;
  }

  public get nextPort(): number {
    if (this.startPort) {
      return this.startPort++;
    }
    return globalPort++;
  }
}