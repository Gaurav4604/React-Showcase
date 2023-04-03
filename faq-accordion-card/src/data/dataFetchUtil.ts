import { promises as fs } from "fs";
import path from "path";

const faqDataPath = path.join(process.cwd(), "/src/data/faq");

export type FAQDataSchema = {
  params: {
    id: string;
    question: string;
    answer: string;
  };
}[];

export const fetchFAQdata = async () => {
  const data = await fs.readFile(`${faqDataPath}.json`, { encoding: "utf-8" });
  return JSON.parse(data) as FAQDataSchema;
};
