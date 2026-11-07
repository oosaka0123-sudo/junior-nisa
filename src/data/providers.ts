export type ProviderKey = 'sbi' | 'rakuten' | 'monex' | 'mufg-esmart' | 'matsui' | 'daiwa';

export type ProviderLinkConfig = {
  name: string;
  officialUrl: string;
  affiliateUrl: string | null;
  affiliateNetworks: string[];
  affiliateProgramVerifiedDate: string | null;
  verifiedDate: string;
};

export const providerLinks: Record<ProviderKey, ProviderLinkConfig> = {
  sbi: {
    name: 'SBI証券',
    officialUrl: 'https://www.sbisec.co.jp/ETGate/?OutSide=on&_ActionID=DefaultAID&_ControlID=WPLETmgR001Control&_DataStoreID=DSWPLETmgR001Control&_PageID=WPLETmgR001Mdtl30&burl=search_nisa&cat1=nisa&cat2=underage&dir=underage&file=underagenisa.html&getFlg=on',
    affiliateUrl: null,
    affiliateNetworks: ['TGアフィリエイト', 'アクセストレード', 'JANet', 'felmat', 'TCSアフィリエイト'],
    affiliateProgramVerifiedDate: '2026-11-07',
    verifiedDate: '2026-11-07',
  },
  rakuten: {
    name: '楽天証券',
    officialUrl: 'https://www.rakuten-sec.co.jp/web/info/info20260911-02.html',
    affiliateUrl: null,
    affiliateNetworks: ['リンクシェア（TGアフィリエイト登録）'],
    affiliateProgramVerifiedDate: '2026-11-07',
    verifiedDate: '2026-11-07',
  },
  monex: {
    name: 'マネックス証券',
    officialUrl: 'https://info.monex.co.jp/nisa/kodomo-nisa/guide/index.html',
    affiliateUrl: null,
    affiliateNetworks: [],
    affiliateProgramVerifiedDate: null,
    verifiedDate: '2026-11-07',
  },
  'mufg-esmart': {
    name: '三菱UFJ eスマート証券',
    officialUrl: 'https://kabu.com/company/lp/nisa/kodomo/01',
    affiliateUrl: null,
    affiliateNetworks: ['afb', 'TCS Affiliate', 'ACCESSTRADE'],
    affiliateProgramVerifiedDate: '2026-11-07',
    verifiedDate: '2026-11-07',
  },
  matsui: {
    name: '松井証券',
    officialUrl: 'https://support.matsui.co.jp/faq/show/56741?site_domain=faq',
    affiliateUrl: null,
    affiliateNetworks: ['アクセストレード', 'JANet', 'A8.net', 'TGアフィリエイト', 'TCSアフィリエイト'],
    affiliateProgramVerifiedDate: '2026-11-07',
    verifiedDate: '2026-11-07',
  },
  daiwa: {
    name: '大和証券',
    officialUrl: 'https://www.daiwa.jp/nisa/kodomo_nisa/',
    affiliateUrl: null,
    affiliateNetworks: [],
    affiliateProgramVerifiedDate: null,
    verifiedDate: '2026-11-07',
  },
};
