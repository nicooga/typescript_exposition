class BoogleMetricsCollector {
    constructor(
        private readonly daysToCollect: number,
        private readonly metricsService: BoogleMetricsService,
        private readonly campaignRepo: BoogleCampaignRepo,
        private readonly metricsRepo: BoogleDailyMetricsRepo
    ) { }

    async perform() {
        const rawMetrics = await this.getRawMetrics();
        const dailyMetrics = await this.matchRawMetricsToListings(rawMetrics);
        await this.metricsRepo.save(dailyMetrics);
    }

    private async matchRawMetricsToListings(rawMetrics: BoogleCampaignMetrics[]): Promise<BoogleDailyMetrics[]> { 
        const campaignIds = rawMetrics.map(m => m.campaignId);
        const boogleCampaigns = await this.campaignRepo.getByCampaignIds(campaignIds);

        const boogleCampaignsByCampaignId =
            boogleCampaigns.reduce(
                (acc, campaign) => {
                    acc[campaign.boogleCampaignId] = campaign;
                    return acc;
                },
                {} as Record<string, BoogleCampaign | undefined>
            );

        const dailyMetrics: BoogleDailyMetrics[] = [];

        rawMetrics.forEach(rawMetrics => {
            const boogleCampaign = boogleCampaignsByCampaignId[rawMetrics.campaignId];

            if (!boogleCampaign) return;

            const listingId = boogleCampaign.listingId;

            const dailyMetric: BoogleDailyMetrics = {
                ...rawMetrics,
                listingId,
                boogleCampaignId: rawMetrics.campaignId
            }

            dailyMetrics.push(dailyMetric);
        });

        return dailyMetrics;
    }

    private async getRawMetrics(): Promise<BoogleCampaignMetrics[]> {
        const rawMetrics: BoogleCampaignMetrics[] = [];

        for (let i = 0; i < this.daysToCollect; i++) {
            // Simulate we somehow get the date
            const date = i as unknown as Date
            const metricsForDate = await this.metricsService.getMetricsForDate(date)
            rawMetrics.push(...metricsForDate);
        }

        return rawMetrics;
    }
}

/** Query Boogle to get the metrics we need */
interface BoogleMetricsService {
    getMetricsForDate(date: Date): Promise<BoogleCampaignMetrics[]>;
}

interface BoogleCampaignMetrics {
    campaignId: string;
    cost: number;
    leads: number;
    date: Date;
}

/** Associate a Boogle campaign with a listing */
interface BoogleCampaignRepo {
    put(campaign: BoogleCampaign): Promise<void>;
    getByCampaignIds(campaignIds: string[]): Promise<BoogleCampaign[]>;
}

interface BoogleCampaign {
    listingId: string;
    boogleCampaignId: string;
}

/** Persist the needed metrics */
interface BoogleDailyMetricsRepo {
    save(metrics: BoogleDailyMetrics[]): Promise<void>;
}

interface BoogleDailyMetrics {
    listingId: string;
    boogleCampaignId: string;
    date: Date;
    cost: number;
    leads: number;
}