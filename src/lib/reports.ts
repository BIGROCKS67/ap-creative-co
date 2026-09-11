export type ReportFigure = {
  label: string;
  value: string;
};

export type DesignedReport = {
  id: string;
  headline: string;
  headlineLabel: string;
  lift: string;
  period?: string;
  figures: ReportFigure[];
};

/** Numbers taken from Anthony’s analytics screenshots. Not invented. */
export const designedReports: DesignedReport[] = [
  {
    id: "reach-7m",
    headline: "7.46M",
    headlineLabel: "people reached",
    lift: "+6,743%",
    period: "6 Feb – 5 Mar",
    figures: [
      { label: "Engagement", value: "1.82M" },
      { label: "Video views", value: "3.36M" },
      { label: "Video lift", value: "+4,356%" },
    ],
  },
  {
    id: "construction",
    headline: "5.29M",
    headlineLabel: "people reached",
    lift: "+4,925%",
    period: "3 Feb – 2 Mar · Construction recruitment",
    figures: [
      { label: "Engagement", value: "1.57M" },
      { label: "Video views", value: "2.39M" },
      { label: "Followers", value: "3,032" },
    ],
  },
  {
    id: "week-aug",
    headline: "223.8K",
    headlineLabel: "impressions",
    lift: "+8,495%",
    period: "21 – 27 Aug",
    figures: [
      { label: "Accounts reached", value: "+22,713%" },
      { label: "Window", value: "7 days" },
      { label: "Vs week before", value: "14 – 20 Aug" },
    ],
  },
  {
    id: "fb-916",
    headline: "916.6K",
    headlineLabel: "Facebook reach",
    lift: "+13,700%",
    figures: [
      { label: "Source", value: "Facebook" },
      { label: "Type", value: "Page reach" },
      { label: "Shape", value: "One spike" },
    ],
  },
  {
    id: "fb-980",
    headline: "980.8K",
    headlineLabel: "Facebook reach",
    lift: "+8,300%",
    period: "26 Apr – 23 May",
    figures: [
      { label: "Exact reach", value: "980,762" },
      { label: "Source", value: "Organic" },
      { label: "Vs 28 days prior", value: "+8,600%" },
    ],
  },
  {
    id: "video-495",
    headline: "495K",
    headlineLabel: "video views",
    lift: "+58,628%",
    period: "14 Sep – 11 Oct",
    figures: [
      { label: "Likes", value: "18K" },
      { label: "Profile views", value: "7,242" },
      { label: "Comments", value: "282" },
    ],
  },
  {
    id: "views-658",
    headline: "658.5K",
    headlineLabel: "views",
    lift: "+163%",
    period: "Last 28 days",
    figures: [
      { label: "Interactions", value: "7.9K" },
      { label: "Link clicks", value: "7.1K" },
      { label: "Follows", value: "379" },
    ],
  },
  {
    id: "views-437",
    headline: "437K",
    headlineLabel: "views",
    lift: "+278%",
    figures: [
      { label: "Interactions", value: "6.3K" },
      { label: "Interaction lift", value: "+268%" },
      { label: "Shape", value: "One spike" },
    ],
  },
  {
    id: "views-1-2m",
    headline: "1.2M",
    headlineLabel: "views",
    lift: "+248%",
    figures: [
      { label: "Interactions", value: "4.7K" },
      { label: "Follows", value: "1.3K" },
      { label: "Link clicks", value: "2.1K" },
    ],
  },
  {
    id: "views-313",
    headline: "313.1K",
    headlineLabel: "Facebook views",
    lift: "+4,922%",
    figures: [
      { label: "Interactions", value: "9.9K" },
      { label: "Interaction lift", value: "+2,100%" },
      { label: "Window", value: "Selected period" },
    ],
  },
  {
    id: "reach-14337",
    headline: "+14,337%",
    headlineLabel: "more accounts reached",
    lift: "vs week before",
    period: "Vs 13 – 19 Aug",
    figures: [
      { label: "Metric", value: "Reach" },
      { label: "Comparison", value: "Week on week" },
      { label: "Direction", value: "Up" },
    ],
  },
  {
    id: "views-1-4m",
    headline: "1.4M",
    headlineLabel: "views",
    lift: "+254%",
    figures: [
      { label: "Also", value: "943.1K" },
      { label: "That lift", value: "+144%" },
      { label: "Follows", value: "1.3K" },
    ],
  },
];
