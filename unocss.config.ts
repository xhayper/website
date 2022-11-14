import transformerDirectives from "@unocss/transformer-directives";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetIcons from "@unocss/preset-icons";
import presetWind from "@unocss/preset-wind";
import { defineConfig } from "unocss";

export default defineConfig({
  transformers: [transformerDirectives()],
  presets: [
    presetWind(),
    presetIcons(),
    presetWebFonts({
      provider: "none",
      fonts: {
        sans: "Inter var",
      },
    }),
  ],
});
