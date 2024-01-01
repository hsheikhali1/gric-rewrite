const RAPID_API_KEY = import.meta.env.RAPID_API_KEY;

type APIResponse = {
  code: boolean;
  status: string;
  data: {
    timings: Record<string, string>;
    date: {
      readable: string;
      timestamp: string;
      hijri: {
        date: string;
        format: string;
        day: string;
        weekday: { en: string; ar: string };
        year: string;
      };
    };
  };
};

const dateObj = new Date();
const month = dateObj.getUTCMonth() + 1; //months from 1-12
const day = dateObj.getUTCDate();
const year = dateObj.getUTCFullYear();

const newdate = day + "-" + month + "-" + year;

const API_URL = `https://api.aladhan.com/v1/timingsByCity/${newdate}?city=kitchener&country=canada`;

const getPrayerTimes = async (): Promise<APIResponse> => {
  const req = await fetch(API_URL, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "aladhan.p.rapidapi.com"
    }
  });

  const response = await req.json();

  return response as APIResponse;
};

export default getPrayerTimes;
