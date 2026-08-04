export type CompanyProduct = {
  itemKey?: string;
  itemName?: string;
  displayName?: string;
  quantity?: number;
  unitPrice?: number;
  totalRevenue?: number;
  soldQuantity?: number;
  lastSoldAt?: string;
  latestSaleValue?: number;
  latestSaleQuantity?: number;
  active?: boolean;
};

export type CompanyMember = { playerId?: string; username: string; role?: string };

export type Company = {
  companyId: string;
  name: string;
  displayName?: string;
  description?: string | null;
  status?: string;
  licenseLevel?: number;
  category?: string | null;
  ownerName?: string | null;
  settlementName?: string | null;
  memberCount?: number;
  members?: CompanyMember[];
  balance?: number | null;
  totalSales?: number;
  totalRevenue?: number;
  transactionCount?: number;
  productsForSale?: CompanyProduct[];
  activeListings?: CompanyProduct[];
  salesHistory?: CompanyProduct[];
  topProducts?: CompanyProduct[];
  createdAt?: string;
};

export type ApiEnvelope<T> = { status: string; result?: T; message?: string; errors?: Array<{ message?: string }> };
