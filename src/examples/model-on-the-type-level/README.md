### Problem

In order to know the daily performance of digital marketing campaigns on 3rd party provider Boogle Ads,
we need to query Boogle, and store the resulting metrics back in the DB.

In order to consume these metrics performantly, rather than performing a query for each listing,
we query Boogle for all the available campaign metrics for the target day,
and then match each Boogle campaign and its metrics to the listing it belongs to.

The metrics returned by Boogle for a given date have this general format:

```
interface BoogleCampaignMetrics {
    campaignId: string;
    cost: number;
    leads: number;
}
```

In order to be able to match these metrics to the listing they belong to,
when we create the Boogle campaign, we store the following entity:

```
interface BoogleCampaign {
    listingId: string;
    boogleCampaignId: string;
}
```

Once we have matched it `BoogleCampaignMetrics` to the listing they belong to,
we create a new entity that represents the daily performance metrics for that listing in ads provider Boogle:

```
interface DailyBooglePerformanceMetrics {
    listingId: string;
    boogleCampaignId: string;
    date: Date;
    cost: number;
    leads: number;
}
```

The general algorithm will look like this:

- for a given date D
    - query Boogle to get all the available metrics for day D
    - match the metrics to the listing they belong to
    - store the metrics

For that we will need the following pieces:

- service (?) BoogleMetricsCollector
- service BoogleMetricsService
- entity BoogleCampaign, repository BoogleCampaignRepo
- entity BoogleCampaignPerfomanceMetrics, repository BoogleCampaignPerfomanceMetrics

We then proceed to define all these abstractions at the type level, while identifying the dependencies between them.