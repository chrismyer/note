import type { Config } from "tailwindcss";
import Forms from "@tailwindcss/forms";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        "primary-color": "rgb(var(--primary-color))",
        "secondary-color": "var(--secondary-color)",
      },
    },
  },
  plugins: [Forms],
};
export default config;
