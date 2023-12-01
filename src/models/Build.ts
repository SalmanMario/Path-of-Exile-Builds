export interface Build {
  leagueId: number;
  ascendancy: string;
  buildName: string;
  cardImage: string;
  patchName: string;
  bossDamage: string;
  leagueMechanic: string;
  clearSpeed: string;
  survability: string;
  cons: string;
  pro: string;
  content: string;
  exaltedPng: string;
  investment: string;
  items: Items[];
  youtubeLink: string;
  youtubeGameplay: string;
  leagueInfo: {
    leagueImg: string;
    description: string;
    linkTrailer: string;
    startDate: Date;
    endDate: Date;
  };
}

export interface BuildCardProps {
  color: string;
  data: Build;
}

interface Items {
  linkUnique: string;
  nameUnique: string;
}
