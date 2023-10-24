-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Country" ADD VALUE 'AD';
ALTER TYPE "Country" ADD VALUE 'AE';
ALTER TYPE "Country" ADD VALUE 'AG';
ALTER TYPE "Country" ADD VALUE 'AL';
ALTER TYPE "Country" ADD VALUE 'AM';
ALTER TYPE "Country" ADD VALUE 'AO';
ALTER TYPE "Country" ADD VALUE 'AR';
ALTER TYPE "Country" ADD VALUE 'AT';
ALTER TYPE "Country" ADD VALUE 'AU';
ALTER TYPE "Country" ADD VALUE 'AZ';
ALTER TYPE "Country" ADD VALUE 'BA';
ALTER TYPE "Country" ADD VALUE 'BB';
ALTER TYPE "Country" ADD VALUE 'BD';
ALTER TYPE "Country" ADD VALUE 'BE';
ALTER TYPE "Country" ADD VALUE 'BF';
ALTER TYPE "Country" ADD VALUE 'BG';
ALTER TYPE "Country" ADD VALUE 'BH';
ALTER TYPE "Country" ADD VALUE 'BI';
ALTER TYPE "Country" ADD VALUE 'BJ';
ALTER TYPE "Country" ADD VALUE 'BN';
ALTER TYPE "Country" ADD VALUE 'BO';
ALTER TYPE "Country" ADD VALUE 'BR';
ALTER TYPE "Country" ADD VALUE 'BS';
ALTER TYPE "Country" ADD VALUE 'BT';
ALTER TYPE "Country" ADD VALUE 'BW';
ALTER TYPE "Country" ADD VALUE 'BY';
ALTER TYPE "Country" ADD VALUE 'BZ';
ALTER TYPE "Country" ADD VALUE 'CA';
ALTER TYPE "Country" ADD VALUE 'CD';
ALTER TYPE "Country" ADD VALUE 'CF';
ALTER TYPE "Country" ADD VALUE 'CG';
ALTER TYPE "Country" ADD VALUE 'CH';
ALTER TYPE "Country" ADD VALUE 'CI';
ALTER TYPE "Country" ADD VALUE 'CL';
ALTER TYPE "Country" ADD VALUE 'CM';
ALTER TYPE "Country" ADD VALUE 'CN';
ALTER TYPE "Country" ADD VALUE 'CO';
ALTER TYPE "Country" ADD VALUE 'CR';
ALTER TYPE "Country" ADD VALUE 'CU';
ALTER TYPE "Country" ADD VALUE 'CV';
ALTER TYPE "Country" ADD VALUE 'CY';
ALTER TYPE "Country" ADD VALUE 'CZ';
ALTER TYPE "Country" ADD VALUE 'DJ';
ALTER TYPE "Country" ADD VALUE 'DK';
ALTER TYPE "Country" ADD VALUE 'DM';
ALTER TYPE "Country" ADD VALUE 'DO';
ALTER TYPE "Country" ADD VALUE 'DZ';
ALTER TYPE "Country" ADD VALUE 'EC';
ALTER TYPE "Country" ADD VALUE 'EE';
ALTER TYPE "Country" ADD VALUE 'EG';
ALTER TYPE "Country" ADD VALUE 'ER';
ALTER TYPE "Country" ADD VALUE 'ET';
ALTER TYPE "Country" ADD VALUE 'FJ';
ALTER TYPE "Country" ADD VALUE 'FM';
ALTER TYPE "Country" ADD VALUE 'GA';
ALTER TYPE "Country" ADD VALUE 'GB';
ALTER TYPE "Country" ADD VALUE 'GD';
ALTER TYPE "Country" ADD VALUE 'GE';
ALTER TYPE "Country" ADD VALUE 'GH';
ALTER TYPE "Country" ADD VALUE 'GM';
ALTER TYPE "Country" ADD VALUE 'GN';
ALTER TYPE "Country" ADD VALUE 'GQ';
ALTER TYPE "Country" ADD VALUE 'GR';
ALTER TYPE "Country" ADD VALUE 'GT';
ALTER TYPE "Country" ADD VALUE 'GW';
ALTER TYPE "Country" ADD VALUE 'GY';
ALTER TYPE "Country" ADD VALUE 'HN';
ALTER TYPE "Country" ADD VALUE 'HR';
ALTER TYPE "Country" ADD VALUE 'HT';
ALTER TYPE "Country" ADD VALUE 'HU';
ALTER TYPE "Country" ADD VALUE 'ID';
ALTER TYPE "Country" ADD VALUE 'IE';
ALTER TYPE "Country" ADD VALUE 'IL';
ALTER TYPE "Country" ADD VALUE 'IN';
ALTER TYPE "Country" ADD VALUE 'IQ';
ALTER TYPE "Country" ADD VALUE 'IS';
ALTER TYPE "Country" ADD VALUE 'JM';
ALTER TYPE "Country" ADD VALUE 'JO';
ALTER TYPE "Country" ADD VALUE 'JP';
ALTER TYPE "Country" ADD VALUE 'KE';
ALTER TYPE "Country" ADD VALUE 'KG';
ALTER TYPE "Country" ADD VALUE 'KH';
ALTER TYPE "Country" ADD VALUE 'KI';
ALTER TYPE "Country" ADD VALUE 'KM';
ALTER TYPE "Country" ADD VALUE 'KN';
ALTER TYPE "Country" ADD VALUE 'KR';
ALTER TYPE "Country" ADD VALUE 'KW';
ALTER TYPE "Country" ADD VALUE 'KZ';
ALTER TYPE "Country" ADD VALUE 'LA';
ALTER TYPE "Country" ADD VALUE 'LB';
ALTER TYPE "Country" ADD VALUE 'LC';
ALTER TYPE "Country" ADD VALUE 'LI';
ALTER TYPE "Country" ADD VALUE 'LK';
ALTER TYPE "Country" ADD VALUE 'LR';
ALTER TYPE "Country" ADD VALUE 'LS';
ALTER TYPE "Country" ADD VALUE 'LT';
ALTER TYPE "Country" ADD VALUE 'LU';
ALTER TYPE "Country" ADD VALUE 'LV';
ALTER TYPE "Country" ADD VALUE 'LY';
ALTER TYPE "Country" ADD VALUE 'MA';
ALTER TYPE "Country" ADD VALUE 'MC';
ALTER TYPE "Country" ADD VALUE 'MD';
ALTER TYPE "Country" ADD VALUE 'ME';
ALTER TYPE "Country" ADD VALUE 'MG';
ALTER TYPE "Country" ADD VALUE 'MH';
ALTER TYPE "Country" ADD VALUE 'MK';
ALTER TYPE "Country" ADD VALUE 'ML';
ALTER TYPE "Country" ADD VALUE 'MM';
ALTER TYPE "Country" ADD VALUE 'MN';
ALTER TYPE "Country" ADD VALUE 'MR';
ALTER TYPE "Country" ADD VALUE 'MT';
ALTER TYPE "Country" ADD VALUE 'MU';
ALTER TYPE "Country" ADD VALUE 'MV';
ALTER TYPE "Country" ADD VALUE 'MW';
ALTER TYPE "Country" ADD VALUE 'MX';
ALTER TYPE "Country" ADD VALUE 'MY';
ALTER TYPE "Country" ADD VALUE 'MZ';
ALTER TYPE "Country" ADD VALUE 'NA';
ALTER TYPE "Country" ADD VALUE 'NE';
ALTER TYPE "Country" ADD VALUE 'NG';
ALTER TYPE "Country" ADD VALUE 'NI';
ALTER TYPE "Country" ADD VALUE 'NL';
ALTER TYPE "Country" ADD VALUE 'NO';
ALTER TYPE "Country" ADD VALUE 'NP';
ALTER TYPE "Country" ADD VALUE 'NR';
ALTER TYPE "Country" ADD VALUE 'NZ';
ALTER TYPE "Country" ADD VALUE 'OM';
ALTER TYPE "Country" ADD VALUE 'PA';
ALTER TYPE "Country" ADD VALUE 'PE';
ALTER TYPE "Country" ADD VALUE 'PG';
ALTER TYPE "Country" ADD VALUE 'PH';
ALTER TYPE "Country" ADD VALUE 'PK';
ALTER TYPE "Country" ADD VALUE 'PL';
ALTER TYPE "Country" ADD VALUE 'PT';
ALTER TYPE "Country" ADD VALUE 'PW';
ALTER TYPE "Country" ADD VALUE 'PY';
ALTER TYPE "Country" ADD VALUE 'QA';
ALTER TYPE "Country" ADD VALUE 'RO';
ALTER TYPE "Country" ADD VALUE 'RS';
ALTER TYPE "Country" ADD VALUE 'RW';
ALTER TYPE "Country" ADD VALUE 'SA';
ALTER TYPE "Country" ADD VALUE 'SB';
ALTER TYPE "Country" ADD VALUE 'SC';
ALTER TYPE "Country" ADD VALUE 'SD';
ALTER TYPE "Country" ADD VALUE 'SE';
ALTER TYPE "Country" ADD VALUE 'SG';
ALTER TYPE "Country" ADD VALUE 'SI';
ALTER TYPE "Country" ADD VALUE 'SK';
ALTER TYPE "Country" ADD VALUE 'SL';
ALTER TYPE "Country" ADD VALUE 'SM';
ALTER TYPE "Country" ADD VALUE 'SN';
ALTER TYPE "Country" ADD VALUE 'SO';
ALTER TYPE "Country" ADD VALUE 'SR';
ALTER TYPE "Country" ADD VALUE 'SS';
ALTER TYPE "Country" ADD VALUE 'ST';
ALTER TYPE "Country" ADD VALUE 'SV';
ALTER TYPE "Country" ADD VALUE 'SY';
ALTER TYPE "Country" ADD VALUE 'SZ';
ALTER TYPE "Country" ADD VALUE 'TD';
ALTER TYPE "Country" ADD VALUE 'TG';
ALTER TYPE "Country" ADD VALUE 'TH';
ALTER TYPE "Country" ADD VALUE 'TJ';
ALTER TYPE "Country" ADD VALUE 'TL';
ALTER TYPE "Country" ADD VALUE 'TM';
ALTER TYPE "Country" ADD VALUE 'TN';
ALTER TYPE "Country" ADD VALUE 'TO';
ALTER TYPE "Country" ADD VALUE 'TR';
ALTER TYPE "Country" ADD VALUE 'TT';
ALTER TYPE "Country" ADD VALUE 'TV';
ALTER TYPE "Country" ADD VALUE 'TW';
ALTER TYPE "Country" ADD VALUE 'TZ';
ALTER TYPE "Country" ADD VALUE 'UA';
ALTER TYPE "Country" ADD VALUE 'UG';
ALTER TYPE "Country" ADD VALUE 'US';
ALTER TYPE "Country" ADD VALUE 'UY';
ALTER TYPE "Country" ADD VALUE 'UZ';
ALTER TYPE "Country" ADD VALUE 'VA';
ALTER TYPE "Country" ADD VALUE 'VC';
ALTER TYPE "Country" ADD VALUE 'VE';
ALTER TYPE "Country" ADD VALUE 'VN';
ALTER TYPE "Country" ADD VALUE 'VU';
ALTER TYPE "Country" ADD VALUE 'WS';
ALTER TYPE "Country" ADD VALUE 'YE';
ALTER TYPE "Country" ADD VALUE 'ZA';
ALTER TYPE "Country" ADD VALUE 'ZM';
ALTER TYPE "Country" ADD VALUE 'ZW';