import { Experience } from "@/payload-types";
import { serverURL } from "@/utils/consts";

export const getExperienceData = async () => {
    const experienceRes = await fetch(`${serverURL}/read-api/experience`, {
        cache: 'force-cache',
        next: {
          tags: ['experience']
        }
    });
    const experience: Experience = await experienceRes.json();
    return experience;
  }