export interface DataTypeDeposit {
    amount: number;
    fromAddress: string;
}

export interface DataTypeWithdrawls {
    amount: number;
    toAddress: string;
    wasApprovedByUser2FA: boolean;
}

export interface DataTypeTradeOrder {
    amount: number;
    tradeOrderType: {
        name: string;
    };
}