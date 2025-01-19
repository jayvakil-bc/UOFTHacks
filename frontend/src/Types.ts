export interface Row{
    id: string;
    age: string,
    location: string,
    ethnicity: string,
    percentage: string,
    restaurant: string,
    marketshare: string
    [index: string]: string
}

export interface Form {
    location: string;
    restaurantType: string,
    // capital: string,
    // size: string,
    price: string,
    description: string,
    [index: string]: string
}

export interface Results {
    summary: string;
    // strengths: string,
    // competitorAnalysis: string,
    // breakevenAnalysis: string,
    // locationInsights: string,
    // recommendations: string,
    // conclusion: string,
    [index: string]: string
}
