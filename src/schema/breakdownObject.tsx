export type BreakdownComponentObject = {
    key: string;
    percentage: number;
}

export type BreakdownObject = {
    breakDownType: string;
    breakdown: BreakdownComponentObject[];
}