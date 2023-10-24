import { Currency } from './Currency';

export enum Country {
  AD = 'AD', // Andorra
  AE = 'AE', // United Arab Emirates
  //AF = 'AF', // Afghanistan
  AG = 'AG', // Antigua and Barbuda
  AL = 'AL', // Albania
  AM = 'AM', // Armenia
  AO = 'AO', // Angola
  AR = 'AR', // Argentina
  AT = 'AT', // Austria
  AU = 'AU', // Australia
  AZ = 'AZ', // Azerbaijan
  BA = 'BA', // Bosnia and Herzegovina
  BB = 'BB', // Barbados
  BD = 'BD', // Bangladesh
  BE = 'BE', // Belgium
  BF = 'BF', // Burkina Faso
  BG = 'BG', // Bulgaria
  BH = 'BH', // Bahrain
  BI = 'BI', // Burundi
  BJ = 'BJ', // Benin
  BN = 'BN', // Brunei
  BO = 'BO', // Bolivia
  BR = 'BR', // Brazil
  BS = 'BS', // Bahamas
  BT = 'BT', // Bhutan
  BW = 'BW', // Botswana
  BY = 'BY', // Belarus
  BZ = 'BZ', // Belize
  CA = 'CA', // Canada
  CD = 'CD', // Democratic Republic of the Congo
  CF = 'CF', // Central African Republic
  CG = 'CG', // Republic of the Congo
  CH = 'CH', // Switzerland
  CI = 'CI', // Côte d'Ivoire
  CL = 'CL', // Chile
  CM = 'CM', // Cameroon
  CN = 'CN', // China
  CO = 'CO', // Colombia
  CR = 'CR', // Costa Rica
  CU = 'CU', // Cuba
  CV = 'CV', // Cape Verde
  CY = 'CY', // Cyprus
  CZ = 'CZ', // Czech Republic
  DE = 'DE', // Germany
  DJ = 'DJ', // Djibouti
  DK = 'DK', // Denmark
  DM = 'DM', // Dominica
  DO = 'DO', // Dominican Republic
  DZ = 'DZ', // Algeria
  EC = 'EC', // Ecuador
  EE = 'EE', // Estonia
  EG = 'EG', // Egypt
  ER = 'ER', // Eritrea
  ES = 'ES', // Spain
  ET = 'ET', // Ethiopia
  FI = 'FI', // Finland
  FJ = 'FJ', // Fiji
  FM = 'FM', // Micronesia
  FR = 'FR', // France
  GA = 'GA', // Gabon
  GB = 'GB', // United Kingdom
  GD = 'GD', // Grenada
  GE = 'GE', // Georgia
  GH = 'GH', // Ghana
  GM = 'GM', // Gambia
  GN = 'GN', // Guinea
  GQ = 'GQ', // Equatorial Guinea
  GR = 'GR', // Greece
  GT = 'GT', // Guatemala
  GW = 'GW', // Guinea-Bissau
  GY = 'GY', // Guyana
  HN = 'HN', // Honduras
  HR = 'HR', // Croatia
  HT = 'HT', // Haiti
  HU = 'HU', // Hungary
  ID = 'ID', // Indonesia
  IE = 'IE', // Ireland
  IL = 'IL', // Israel
  IN = 'IN', // India
  IQ = 'IQ', // Iraq
  //IR = 'IR', // Iran
  IS = 'IS', // Iceland
  IT = 'IT', // Italy
  JM = 'JM', // Jamaica
  JO = 'JO', // Jordan
  JP = 'JP', // Japan
  KE = 'KE', // Kenya
  KG = 'KG', // Kyrgyzstan
  KH = 'KH', // Cambodia
  KI = 'KI', // Kiribati
  KM = 'KM', // Comoros
  KN = 'KN', // Saint Kitts and Nevis
  //KP = 'KP', // North Korea
  KR = 'KR', // South Korea
  KW = 'KW', // Kuwait
  KZ = 'KZ', // Kazakhstan
  LA = 'LA', // Laos
  LB = 'LB', // Lebanon
  LC = 'LC', // Saint Lucia
  LI = 'LI', // Liechtenstein
  LK = 'LK', // Sri Lanka
  LR = 'LR', // Liberia
  LS = 'LS', // Lesotho
  LT = 'LT', // Lithuania
  LU = 'LU', // Luxembourg
  LV = 'LV', // Latvia
  LY = 'LY', // Libya
  MA = 'MA', // Morocco
  MC = 'MC', // Monaco
  MD = 'MD', // Moldova
  ME = 'ME', // Montenegro
  MG = 'MG', // Madagascar
  MH = 'MH', // Marshall Islands
  MK = 'MK', // North Macedonia
  ML = 'ML', // Mali
  MM = 'MM', // Myanmar
  MN = 'MN', // Mongolia
  MR = 'MR', // Mauritania
  MT = 'MT', // Malta
  MU = 'MU', // Mauritius
  MV = 'MV', // Maldives
  MW = 'MW', // Malawi
  MX = 'MX', // Mexico
  MY = 'MY', // Malaysia
  MZ = 'MZ', // Mozambique
  NA = 'NA', // Namibia
  NE = 'NE', // Niger
  NG = 'NG', // Nigeria
  NI = 'NI', // Nicaragua
  NL = 'NL', // Netherlands
  NO = 'NO', // Norway
  NP = 'NP', // Nepal
  NR = 'NR', // Nauru
  NZ = 'NZ', // New Zealand
  OM = 'OM', // Oman
  PA = 'PA', // Panama
  PE = 'PE', // Peru
  PG = 'PG', // Papua New Guinea
  PH = 'PH', // Philippines
  PK = 'PK', // Pakistan
  PL = 'PL', // Poland
  PT = 'PT', // Portugal
  PW = 'PW', // Palau
  PY = 'PY', // Paraguay
  QA = 'QA', // Qatar
  RO = 'RO', // Romania
  RS = 'RS', // Serbia
  //RU = 'RU', // Russia
  RW = 'RW', // Rwanda
  SA = 'SA', // Saudi Arabia
  SB = 'SB', // Solomon Islands
  SC = 'SC', // Seychelles
  SD = 'SD', // Sudan
  SE = 'SE', // Sweden
  SG = 'SG', // Singapore
  SI = 'SI', // Slovenia
  SK = 'SK', // Slovakia
  SL = 'SL', // Sierra Leone
  SM = 'SM', // San Marino
  SN = 'SN', // Senegal
  SO = 'SO', // Somalia
  SR = 'SR', // Suriname
  SS = 'SS', // South Sudan
  ST = 'ST', // Sao Tome and Principe
  SV = 'SV', // El Salvador
  SY = 'SY', // Syria
  SZ = 'SZ', // Eswatini
  TD = 'TD', // Chad
  TG = 'TG', // Togo
  TH = 'TH', // Thailand
  TJ = 'TJ', // Tajikistan
  TL = 'TL', // Timor-Leste
  TM = 'TM', // Turkmenistan
  TN = 'TN', // Tunisia
  TO = 'TO', // Tonga
  TR = 'TR', // Turkey
  TT = 'TT', // Trinidad and Tobago
  TV = 'TV', // Tuvalu
  TW = 'TW', // Taiwan
  TZ = 'TZ', // Tanzania
  UA = 'UA', // Ukraine
  UG = 'UG', // Uganda
  US = 'US', // United States
  UY = 'UY', // Uruguay
  UZ = 'UZ', // Uzbekistan
  VA = 'VA', // Vatican City
  VC = 'VC', // Saint Vincent and the Grenadines
  VE = 'VE', // Venezuela
  VN = 'VN', // Vietnam
  VU = 'VU', // Vanuatu
  WS = 'WS', // Samoa
  YE = 'YE', // Yemen
  ZA = 'ZA', // South Africa
  ZM = 'ZM', // Zambia
  ZW = 'ZW', // Zimbabwe
}
export const COUNTRY_DETAILS = {
  [Country.AL]: { currency: Currency.ALL }, // Albania
  [Country.DZ]: { currency: Currency.DZD }, // Algeria
  [Country.AD]: { currency: Currency.EUR }, // Andorra
  [Country.AO]: { currency: Currency.AOA }, // Angola
  [Country.AG]: { currency: Currency.XCD }, // Antigua and Barbuda
  [Country.AR]: { currency: Currency.ARS }, // Argentina
  [Country.AM]: { currency: Currency.AMD }, // Armenia
  [Country.AU]: { currency: Currency.AUD }, // Australia
  [Country.AT]: { currency: Currency.EUR }, // Austria
  [Country.AZ]: { currency: Currency.AZN }, // Azerbaijan
  [Country.BS]: { currency: Currency.BSD }, // Bahamas
  [Country.BH]: { currency: Currency.BHD }, // Bahrain
  [Country.BD]: { currency: Currency.BDT }, // Bangladesh
  [Country.BB]: { currency: Currency.BBD }, // Barbados
  [Country.BY]: { currency: Currency.BYN }, // Belarus
  [Country.BE]: { currency: Currency.EUR }, // Belgium
  [Country.BZ]: { currency: Currency.BZD }, // Belize
  [Country.BJ]: { currency: Currency.XOF }, // Benin
  [Country.BT]: { currency: Currency.BTN }, // Bhutan
  [Country.BO]: { currency: Currency.BOB }, // Bolivia
  [Country.BA]: { currency: Currency.BAM }, // Bosnia and Herzegovina
  [Country.BW]: { currency: Currency.BWP }, // Botswana
  [Country.BR]: { currency: Currency.BRL }, // Brazil
  [Country.BN]: { currency: Currency.BND }, // Brunei
  [Country.BG]: { currency: Currency.BGN }, // Bulgaria
  [Country.BF]: { currency: Currency.XOF }, // Burkina Faso
  [Country.BI]: { currency: Currency.BIF }, // Burundi
  [Country.CV]: { currency: Currency.CVE }, // Cape Verde
  [Country.KH]: { currency: Currency.KHR }, // Cambodia
  [Country.CM]: { currency: Currency.XAF }, // Cameroon
  [Country.CA]: { currency: Currency.CAD }, // Canada
  [Country.CF]: { currency: Currency.XAF }, // Central African Republic
  [Country.TD]: { currency: Currency.XAF }, // Chad
  [Country.CL]: { currency: Currency.CLP }, // Chile
  [Country.CN]: { currency: Currency.CNY }, // China
  [Country.CO]: { currency: Currency.COP }, // Colombia
  [Country.KM]: { currency: Currency.KMF }, // Comoros
  [Country.CD]: { currency: Currency.CDF }, // Congo, Democratic Republic of the
  [Country.CG]: { currency: Currency.XAF }, // Congo, Republic of the
  [Country.CR]: { currency: Currency.CRC }, // Costa Rica
  [Country.HR]: { currency: Currency.HRK }, // Croatia
  [Country.CU]: { currency: Currency.CUP }, // Cuba
  [Country.CY]: { currency: Currency.EUR }, // Cyprus
  [Country.CZ]: { currency: Currency.CZK }, // Czechia
  [Country.DK]: { currency: Currency.DKK }, // Denmark
  [Country.DJ]: { currency: Currency.DJF }, // Djibouti
  [Country.DM]: { currency: Currency.XCD }, // Dominica
  [Country.DO]: { currency: Currency.DOP }, // Dominican Republic
  [Country.EC]: { currency: Currency.USD }, // Ecuador
  [Country.EG]: { currency: Currency.EGP }, // Egypt
  [Country.SV]: { currency: Currency.USD }, // El Salvador
  [Country.GQ]: { currency: Currency.XAF }, // Equatorial Guinea
  [Country.ER]: { currency: Currency.ERN }, // Eritrea
  [Country.EE]: { currency: Currency.EUR }, // Estonia
  [Country.SZ]: { currency: Currency.SZL }, // Eswatini (Swaziland)
  [Country.ET]: { currency: Currency.ETB }, // Ethiopia
  [Country.FJ]: { currency: Currency.FJD }, // Fiji
  [Country.FI]: { currency: Currency.EUR }, // Finland
  [Country.FR]: { currency: Currency.EUR }, // France
  [Country.GA]: { currency: Currency.XAF }, // Gabon
  [Country.GM]: { currency: Currency.GMD }, // Gambia
  [Country.GE]: { currency: Currency.GEL }, // Georgia
  [Country.DE]: { currency: Currency.EUR }, // Germany
  [Country.GH]: { currency: Currency.GHS }, // Ghana
  [Country.GR]: { currency: Currency.EUR }, // Greece
  [Country.GD]: { currency: Currency.XCD }, // Grenada
  [Country.GT]: { currency: Currency.GTQ }, // Guatemala
  [Country.GN]: { currency: Currency.GNF }, // Guinea
  [Country.GW]: { currency: Currency.XOF }, // Guinea-Bissau
  [Country.GY]: { currency: Currency.GYD }, // Guyana
  [Country.HT]: { currency: Currency.HTG }, // Haiti
  [Country.HN]: { currency: Currency.HNL }, // Honduras
  [Country.HU]: { currency: Currency.HUF }, // Hungary
  [Country.IS]: { currency: Currency.ISK }, // Iceland
  [Country.IN]: { currency: Currency.INR }, // India
  [Country.ID]: { currency: Currency.IDR }, // Indonesia
  [Country.IQ]: { currency: Currency.IQD }, // Iraq
  [Country.IE]: { currency: Currency.EUR }, // Ireland
  [Country.IL]: { currency: Currency.ILS }, // Israel
  [Country.IT]: { currency: Currency.EUR }, // Italy
  [Country.CI]: { currency: Currency.XOF }, // Ivory Coast
  [Country.JM]: { currency: Currency.JMD }, // Jamaica
  [Country.JP]: { currency: Currency.JPY }, // Japan
  [Country.JO]: { currency: Currency.JOD }, // Jordan
  [Country.KZ]: { currency: Currency.KZT }, // Kazakhstan
  [Country.KE]: { currency: Currency.KES }, // Kenya
  [Country.KI]: { currency: Currency.AUD }, // Kiribati
  [Country.KR]: { currency: Currency.KRW }, // South Korea
  [Country.KW]: { currency: Currency.KWD }, // Kuwait
  [Country.KG]: { currency: Currency.KGS }, // Kyrgyzstan
  [Country.LA]: { currency: Currency.LAK }, // Laos
  [Country.LV]: { currency: Currency.EUR }, // Latvia
  [Country.LB]: { currency: Currency.LBP }, // Lebanon
  [Country.LS]: { currency: Currency.LSL }, // Lesotho
  [Country.LR]: { currency: Currency.LRD }, // Liberia
  [Country.LY]: { currency: Currency.LYD }, // Libya
  [Country.LI]: { currency: Currency.CHF }, // Liechtenstein
  [Country.LT]: { currency: Currency.EUR }, // Lithuania
  [Country.LU]: { currency: Currency.EUR }, // Luxembourg
  [Country.MK]: { currency: Currency.MKD }, // North Macedonia
  [Country.MG]: { currency: Currency.MGA }, // Madagascar
  [Country.MW]: { currency: Currency.MWK }, // Malawi
  [Country.MY]: { currency: Currency.MYR }, // Malaysia
  [Country.MV]: { currency: Currency.MVR }, // Maldives
  [Country.ML]: { currency: Currency.XOF }, // Mali
  [Country.MT]: { currency: Currency.EUR }, // Malta
  [Country.MH]: { currency: Currency.USD }, // Marshall Islands
  [Country.MR]: { currency: Currency.MRO }, // Mauritania
  [Country.MU]: { currency: Currency.MUR }, // Mauritius
  [Country.MX]: { currency: Currency.MXN }, // Mexico
  [Country.FM]: { currency: Currency.USD }, // Micronesia
  [Country.MD]: { currency: Currency.MDL }, // Moldova
  [Country.MC]: { currency: Currency.EUR }, // Monaco
  [Country.MN]: { currency: Currency.MNT }, // Mongolia
  [Country.ME]: { currency: Currency.EUR }, // Montenegro
  [Country.MA]: { currency: Currency.MAD }, // Morocco
  [Country.MZ]: { currency: Currency.MZN }, // Mozambique
  [Country.MM]: { currency: Currency.MMK }, // Myanmar (Burma)
  [Country.NA]: { currency: Currency.NAD }, // Namibia
  [Country.NR]: { currency: Currency.AUD }, // Nauru
  [Country.NP]: { currency: Currency.NPR }, // Nepal
  [Country.NL]: { currency: Currency.EUR }, // Netherlands
  [Country.NZ]: { currency: Currency.NZD }, // New Zealand
  [Country.NI]: { currency: Currency.NIO }, // Nicaragua
  [Country.NE]: { currency: Currency.XOF }, // Niger
  [Country.NG]: { currency: Currency.NGN }, // Nigeria
  [Country.NO]: { currency: Currency.NOK }, // Norway
  [Country.OM]: { currency: Currency.OMR }, // Oman
  [Country.PK]: { currency: Currency.PKR }, // Pakistan
  [Country.PW]: { currency: Currency.USD }, // Palau
  [Country.PA]: { currency: Currency.PAB }, // Panama
  [Country.PG]: { currency: Currency.PGK }, // Papua New Guinea
  [Country.PY]: { currency: Currency.PYG }, // Paraguay
  [Country.PE]: { currency: Currency.PEN }, // Peru
  [Country.PH]: { currency: Currency.PHP }, // Philippines
  [Country.PL]: { currency: Currency.PLN }, // Poland
  [Country.PT]: { currency: Currency.EUR }, // Portugal
  [Country.QA]: { currency: Currency.QAR }, // Qatar
  [Country.RO]: { currency: Currency.RON }, // Romania
  [Country.RW]: { currency: Currency.RWF }, // Rwanda
  [Country.KN]: { currency: Currency.XCD }, // Saint Kitts and Nevis
  [Country.LC]: { currency: Currency.XCD }, // Saint Lucia
  [Country.VC]: { currency: Currency.XCD }, // Saint Vincent and the Grenadines
  [Country.WS]: { currency: Currency.WST }, // Samoa
  [Country.SM]: { currency: Currency.EUR }, // San Marino
  [Country.ST]: { currency: Currency.STN }, // Sao Tome and Principe
  [Country.SA]: { currency: Currency.SAR }, // Saudi Arabia
  [Country.SN]: { currency: Currency.XOF }, // Senegal
  [Country.RS]: { currency: Currency.RSD }, // Serbia
  [Country.SC]: { currency: Currency.SCR }, // Seychelles
  [Country.SL]: { currency: Currency.SLL }, // Sierra Leone
  [Country.SG]: { currency: Currency.SGD }, // Singapore
  [Country.SK]: { currency: Currency.EUR }, // Slovakia
  [Country.SI]: { currency: Currency.EUR }, // Slovenia
  [Country.SB]: { currency: Currency.SBD }, // Solomon Islands
  [Country.SO]: { currency: Currency.SOS }, // Somalia
  [Country.ZA]: { currency: Currency.ZAR }, // South Africa
  [Country.SS]: { currency: Currency.SSP }, // South Sudan
  [Country.ES]: { currency: Currency.EUR }, // Spain
  [Country.LK]: { currency: Currency.LKR }, // Sri Lanka
  [Country.SD]: { currency: Currency.SDG }, // Sudan
  [Country.SR]: { currency: Currency.SRD }, // Suriname
  [Country.SE]: { currency: Currency.SEK }, // Sweden
  [Country.CH]: { currency: Currency.CHF }, // Switzerland
  [Country.SY]: { currency: Currency.SYP }, // Syria
  [Country.TW]: { currency: Currency.TWD }, // Taiwan
  [Country.TJ]: { currency: Currency.TJS }, // Tajikistan
  [Country.TZ]: { currency: Currency.TZS }, // Tanzania
  [Country.TH]: { currency: Currency.THB }, // Thailand
  [Country.TL]: { currency: Currency.USD }, // Timor-Leste
  [Country.TG]: { currency: Currency.XOF }, // Togo
  [Country.TO]: { currency: Currency.TOP }, // Tonga
  [Country.TT]: { currency: Currency.TTD }, // Trinidad and Tobago
  [Country.TN]: { currency: Currency.TND }, // Tunisia
  [Country.TR]: { currency: Currency.TRY }, // Turkey
  [Country.TM]: { currency: Currency.TMT }, // Turkmenistan
  [Country.TV]: { currency: Currency.AUD }, // Tuvalu
  [Country.UG]: { currency: Currency.UGX }, // Uganda
  [Country.US]: { currency: Currency.USD }, // United States
  [Country.UA]: { currency: Currency.UAH }, // Ukraine
  [Country.AE]: { currency: Currency.AED }, // United Arab Emirates
  [Country.GB]: { currency: Currency.GBP }, // United Kingdom
  [Country.UY]: { currency: Currency.UYU }, // Uruguay
  [Country.UZ]: { currency: Currency.UZS }, // Uzbekistan
  [Country.VU]: { currency: Currency.VUV }, // Vanuatu
  [Country.VA]: { currency: Currency.EUR }, // Vatican City
  [Country.VE]: { currency: Currency.VEF }, // Venezuela
  [Country.VN]: { currency: Currency.VND }, // Vietnam
  [Country.YE]: { currency: Currency.YER }, // Yemen
  [Country.ZM]: { currency: Currency.ZMW }, // Zambia
  [Country.ZW]: { currency: Currency.ZWL }, // Zimbabwe
};

const CurrencySymbols = {
  [Currency.EUR]: '€',
  [Currency.USD]: '$',
  [Currency.JPY]: '¥',
  [Currency.BGN]: 'лв',
  [Currency.CZK]: 'Kč',
  [Currency.DKK]: 'kr',
  [Currency.GBP]: '£',
  [Currency.HUF]: 'Ft',
};

export const getCurrencySymbol = (currency: Currency) => {
  if (currency in CurrencySymbols) {
    return CurrencySymbols[currency as keyof typeof CurrencySymbols].toString();
  }
  return currency.toString();
};
