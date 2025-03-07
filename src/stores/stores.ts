import type { AddressObject, DaoOverview, ExchangeRate, PoxInfo, SbtcUserSettingI, StacksBalance, StacksInfo, StoredOpinionPoll, TokenPermissionEvent } from '@mijoco/stx_helpers/dist/index';
import { persisted } from 'svelte-local-storage-store';
import { writable } from 'svelte/store';

export const sessionStore = persisted('sessionStore', {} as BigMarketSessionStore);

export type Currency = {
	code: string;
	name: string;
	flag: string;
	symbol: string;
};

export type BigMarketSessionStore = {
	name: string;
	loggedIn: boolean;
	balances?: StacksBalance;
	keySets: { [key: string]: AddressObject };
	userSettings: SbtcUserSettingI;
	poxInfo: PoxInfo;
	exchangeRates: Array<ExchangeRate>;
	stacksInfo: StacksInfo;
	tokens: Array<TokenPermissionEvent>;
	daoOverview: DaoOverview;
};

// stores.ts

// Track user input amount
export const bitcoinMode = writable(false);
export const stakeAmount = writable(0);
export const stakeAmountHome = writable(0);
//export const selectedCurrency = writable({ code: 'USD', name: 'US Dollar', flag: '🇺🇸', symbol: '$' });
export const selectedCurrency = persisted('selectedCurrency', { code: 'USD', name: 'US Dollar', flag: '🇺🇸', symbol: '$' } as Currency);
export const aiMarket = persisted('aiMarket', {} as StoredOpinionPoll);
