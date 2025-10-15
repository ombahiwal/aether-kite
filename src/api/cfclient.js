import axios from "axios";

const SPACE_ID = "gplow0denyzu";
const ACCESS_TOKEN = "hxMNq9D1s4S4CyJ1yhN3tRcWuapfbEo826_W4xB2bAo";

const BASE_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master`;

export const getContent = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/entries`, {
      params: {
        access_token: ACCESS_TOKEN,
        include: 2, // include linked assets
      },
    });

    const assetsMap = {};
    (response.data.includes?.Asset || []).forEach((asset) => {
      assetsMap[asset.sys.id] = asset.fields.file?.url
        ? `https:${asset.fields.file.url}`
        : null;
    });

    const resolveField = (field) => {
      if (Array.isArray(field)) {
        return field.map(resolveField);
      } else if (field?.sys?.type === "Link" && field.sys.linkType === "Asset") {
        return assetsMap[field.sys.id] || null;
      } else if (typeof field === "object") {
        const obj = {};
        for (const key in field) {
          obj[key] = resolveField(field[key]);
        }
        return obj;
      }
      return field;
    };

    // Map entries and resolve asset links
    const mappedResult = response.data.items.map((item) => ({
      id: item.sys.id,
      contentType: item.sys.contentType.sys.id,
      fields: resolveField(item.fields),
    }));

    // Sort by fields.order (ascending)
    const sortedResult = mappedResult.sort(
      (a, b) => (a.fields.order || 0) - (b.fields.order || 0)
    );

    console.log("Resolved & sorted Contentful data:", sortedResult);
    return sortedResult;
  } catch (error) {
    console.error("Error fetching from Contentful:", error);
    return [];
  }
};
