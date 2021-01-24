export type WineComponentObject = {
    percentage: number;
    variety: string;
    year: number;
    region: string;
}

export type WineDataObject = {
    lotCode: string;
    volume: number;
    description: string;
    tankCode: string;
    productState: string;
    ownerName: string;
    components: WineComponentObject[];
}