export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--color_bg_1': '#3e5356',
    '--color_bg_2': '#68a1ab',
    '--color_primary': '#ee7266',
    '--color_secondary': '#24535b',
    '--color_accent': '#d0ddcc',
    '--color_day_text': '#ffffff',
    '--color_container_bg': '#ffffff',
    '--color_main_bg': '#000000',
    '--color_main_text': '#ee7266',
    '--color_card_bg': '#ffffff',
    '--color_card_text': '#ee7266',
    '--color_box_bg': '#ffffff',
    '--color_box_text': '#000000',
    '--color_box_src_text': '#000000',
    '--color_box_src_border': '#d3d3d3',
    '--color_copyright': '#d6d6d6',
    '--color_not_supported_text': '#ffffff'
  }
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--color_bg_1': '#a7a7a7',
    '--color_bg_2': '#8bc8d3',
    '--color_primary': '#5484a2',
    '--color_secondary': '#c3b57f',
    '--color_accent': '#727272',
    '--color_day_text': '#ffffff',
    '--color_container_bg': '#ffffff',
    '--color_main_bg': '#000000',
    '--color_main_text': '#c3b57f',
    '--color_card_bg': '#363f63',
    '--color_card_text': '#7babca',
    '--color_box_bg': '#ffffff',
    '--color_box_text': '#000000',
    '--color_box_src_text': '#000000',
    '--color_box_src_border': '#d3d3d3',
    '--color_copyright': '#595959',
    '--color_not_supported_text': '#ffffff'
  }
};
