import { colors } from "../theme/colors";

export const formatJSON = (data) => {
  if (typeof data !== 'object') return data;
  
  try {
    return JSON.stringify(data, null, 2);
  } catch (error) {
    return String(data);
  }
};

export const getJSONSyntaxHighlighting = () => ({
  '.json-string': {
    color: colors.success,
  },
  '.json-number': {
    color: colors.warning,
  },
  '.json-boolean': {
    color: colors.error,
  },
  '.json-null': {
    color: colors.muted,
  },
  '.json-key': {
    color: colors.highlight,
  }
});