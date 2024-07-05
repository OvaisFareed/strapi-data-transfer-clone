import type { Schema, Attribute } from '@strapi/strapi';

export interface BusinessPageFooter extends Schema.Component {
  collectionName: 'components_business_page_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    letUsWatch: Attribute.Relation<
      'business-page.footer',
      'oneToOne',
      'api::let-us-watch.let-us-watch'
    >;
    currencyChart: Attribute.Relation<
      'business-page.footer',
      'oneToOne',
      'api::currency-chart.currency-chart'
    >;
    newsletter: Attribute.Relation<
      'business-page.footer',
      'oneToOne',
      'api::newsletter.newsletter'
    >;
    faq: Attribute.Relation<'business-page.footer', 'oneToOne', 'api::faq.faq'>;
  };
}

export interface BusinessPageHeader extends Schema.Component {
  collectionName: 'components_business_page_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    tabs: Attribute.Component<'ui-components.tabs', true>;
  };
}

export interface CompareChartBank extends Schema.Component {
  collectionName: 'components_compare_chart_banks';
  info: {
    displayName: 'Bank';
  };
  attributes: {
    name: Attribute.String;
    amount: Attribute.BigInteger;
    isOrange: Attribute.Boolean;
  };
}

export interface FormDropdown extends Schema.Component {
  collectionName: 'components_form_dropdowns';
  info: {
    displayName: 'Dropdown';
  };
  attributes: {
    label: Attribute.String;
    searchBar: Attribute.Component<'form.form'>;
    options: Attribute.Component<'form.option', true>;
    defaultValue: Attribute.String;
    placeholder: Attribute.String;
  };
}

export interface FormForm extends Schema.Component {
  collectionName: 'components_form_forms';
  info: {
    displayName: 'Input';
    description: '';
  };
  attributes: {
    label: Attribute.Text;
    placeholder: Attribute.String;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<false>;
    hint: Attribute.Text;
    type: Attribute.Enumeration<
      [
        'text',
        'number',
        'password',
        'email',
        'checkbox',
        'radio',
        'button',
        'select'
      ]
    >;
    defaultValue: Attribute.String;
  };
}

export interface FormLabel extends Schema.Component {
  collectionName: 'components_form_labels';
  info: {
    displayName: 'Label';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface FormListItem extends Schema.Component {
  collectionName: 'components_form_list_items';
  info: {
    displayName: 'List Item';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    imageUrl: Attribute.String;
    link: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface FormOption extends Schema.Component {
  collectionName: 'components_form_options';
  info: {
    displayName: 'option';
  };
  attributes: {
    label: Attribute.String;
    value: Attribute.String;
  };
}

export interface MainPageDynamicHeader extends Schema.Component {
  collectionName: 'components_ui_components_dynamic_headers';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Attribute.Relation<
      'main-page.dynamic-header',
      'oneToOne',
      'api::button.button'
    >;
    style: Attribute.RichText;
    css: Attribute.Relation<
      'main-page.dynamic-header',
      'oneToOne',
      'api::style.style'
    >;
    heading: Attribute.RichText;
    content: Attribute.RichText;
    button_2: Attribute.Relation<
      'main-page.dynamic-header',
      'oneToOne',
      'api::button.button'
    >;
  };
}

export interface OnlineSellersMarketplaces extends Schema.Component {
  collectionName: 'components_online_sellers_marketplaces';
  info: {
    displayName: 'Marketplaces';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface SharedFaQs extends Schema.Component {
  collectionName: 'components_shared_fa_qs';
  info: {
    displayName: 'FAQs';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'ui-components.accordion', true>;
    title: Attribute.String;
    button: Attribute.Component<'ui-components.link-button'>;
  };
}

export interface SharedFaqContentItem extends Schema.Component {
  collectionName: 'components_shared_faq_content_items';
  info: {
    displayName: 'FAQ Content item';
  };
  attributes: {
    name: Attribute.String;
    key: Attribute.String;
  };
}

export interface SharedFxDailyTableV2 extends Schema.Component {
  collectionName: 'components_shared_fx_daily_table_v2s';
  info: {
    displayName: 'FX Daily Table v2';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    header_items: Attribute.Component<'form.label', true>;
    data_table: Attribute.Relation<
      'shared.fx-daily-table-v2',
      'oneToOne',
      'api::fx-daily-trading-table.fx-daily-trading-table'
    >;
    style: Attribute.RichText;
  };
}

export interface SharedFxDailyTableV3 extends Schema.Component {
  collectionName: 'components_shared_fx_daily_table_v3s';
  info: {
    displayName: 'FX Daily Table v3';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    header_items: Attribute.Component<'form.label', true>;
    data_table: Attribute.Relation<
      'shared.fx-daily-table-v3',
      'oneToOne',
      'api::fx-daily-economic-table.fx-daily-economic-table'
    >;
    style: Attribute.RichText;
  };
}

export interface SharedFxDailyTable extends Schema.Component {
  collectionName: 'components_shared_fx_daily_tables';
  info: {
    displayName: 'FX Daily Table';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    header_items: Attribute.Component<'form.label', true>;
    data_table: Attribute.Relation<
      'shared.fx-daily-table',
      'oneToOne',
      'api::fx-daily-rates-table.fx-daily-rates-table'
    >;
    style: Attribute.RichText;
  };
}

export interface SharedLetUsWatch extends Schema.Component {
  collectionName: 'components_shared_let_us_watches';
  info: {
    displayName: 'Let us watch';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    imageUrl: Attribute.String;
    button: Attribute.Component<'ui-components.link-button'>;
    pageID: Attribute.String;
  };
}

export interface SharedMeta extends Schema.Component {
  collectionName: 'components_shared_metas';
  info: {
    displayName: 'meta';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    og_title: Attribute.String;
    og_description: Attribute.Text;
    google_web_master: Attribute.String;
    og_locale: Attribute.String & Attribute.DefaultTo<'en_CA'>;
    og_locale_alternative: Attribute.String & Attribute.DefaultTo<'en_US'>;
    keywords: Attribute.Component<'form.label', true>;
    og_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    site_name: Attribute.String;
    twitter_card_type: Attribute.String;
    twitter_site: Attribute.String;
    twitter_author: Attribute.String;
  };
}

export interface SharedNewsletter extends Schema.Component {
  collectionName: 'components_shared_newsletters';
  info: {
    displayName: 'Newsletter';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    inputs: Attribute.Component<'form.form', true>;
    boardItems: Attribute.Component<'ui-components.card', true>;
    agreement: Attribute.Component<'form.form'>;
    button: Attribute.Component<'ui-components.link-button'>;
  };
}

export interface SharedTableHeaderItem extends Schema.Component {
  collectionName: 'components_shared_table_header_items';
  info: {
    displayName: 'Table Header Item';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    type: Attribute.Enumeration<['text', 'dropdown']>;
    icon1: Attribute.String;
    icon2: Attribute.String;
  };
}

export interface SharedTable extends Schema.Component {
  collectionName: 'components_shared_tables';
  info: {
    displayName: 'Table';
    description: '';
  };
  attributes: {
    thead: Attribute.Component<'shared.table-header-item', true>;
    title: Attribute.String;
    tooltip: Attribute.Text;
    style: Attribute.RichText;
  };
}

export interface SharedToolBanner extends Schema.Component {
  collectionName: 'components_shared_tool_banners';
  info: {
    displayName: 'tool-banner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    button: Attribute.Relation<
      'shared.tool-banner',
      'oneToOne',
      'api::button.button'
    >;
    content: Attribute.RichText;
    visible: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface UiComponentsAccordion extends Schema.Component {
  collectionName: 'components_accordion_accordions';
  info: {
    displayName: 'Accordion';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    content: Attribute.RichText;
    expanded: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface UiComponentsArticle2 extends Schema.Component {
  collectionName: 'components_ui_components_article_2_s';
  info: {
    displayName: 'Article-2 ';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface UiComponentsBankCard extends Schema.Component {
  collectionName: 'components_ui_components_bank_cards';
  info: {
    displayName: 'Bank Card';
  };
  attributes: {
    header_item_1: Attribute.String;
    header_item_2: Attribute.String;
    dot_color: Attribute.String;
    bank_name: Attribute.String;
    cad_saved: Attribute.String;
    bank_url: Attribute.String;
  };
}

export interface UiComponentsBankSlider extends Schema.Component {
  collectionName: 'components_ui_components_bank_sliders';
  info: {
    displayName: 'Bank Slider';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'ui-components.bank-card', true>;
  };
}

export interface UiComponentsBoardItem2 extends Schema.Component {
  collectionName: 'components_ui_components_board_item_2s';
  info: {
    displayName: 'BoardItem-2';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    icon1: Attribute.String;
    icon2: Attribute.String;
  };
}

export interface UiComponentsBoardItem extends Schema.Component {
  collectionName: 'components_ui_components_board_items';
  info: {
    displayName: 'boardItem';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    image: Attribute.String;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Attribute.Relation<
      'ui-components.board-item',
      'oneToOne',
      'api::button.button'
    >;
  };
}

export interface UiComponentsCard extends Schema.Component {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    image: Attribute.String;
    content: Attribute.RichText;
    title: Attribute.String;
    button: Attribute.Component<'ui-components.link-button'>;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    style: Attribute.RichText;
  };
}

export interface UiComponentsChart extends Schema.Component {
  collectionName: 'components_chart_charts';
  info: {
    displayName: 'Chart';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface UiComponentsCheckItem extends Schema.Component {
  collectionName: 'components_ui_components_check_items';
  info: {
    displayName: 'Check Item';
    description: '';
  };
  attributes: {
    image: Attribute.String;
    content: Attribute.RichText;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface UiComponentsContactCard extends Schema.Component {
  collectionName: 'components_ui_components_contact_cards';
  info: {
    displayName: 'Contact Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    background: Attribute.Component<'ui-components.tab-icon'>;
    foreground: Attribute.Component<'ui-components.tab-icon'>;
  };
}

export interface UiComponentsCurrencyUpdateItem extends Schema.Component {
  collectionName: 'components_ui_components_currency_update_items';
  info: {
    displayName: 'Currency Update Item';
  };
  attributes: {
    title: Attribute.String;
    excerpt: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Attribute.Component<'ui-components.link-button'>;
  };
}

export interface UiComponentsDashboard extends Schema.Component {
  collectionName: 'components_ui_components_dashboards';
  info: {
    displayName: 'Dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    buttons: Attribute.Component<'ui-components.link-button', true>;
    side_panel: Attribute.Component<'ui-components.sub-banner'>;
    board: Attribute.Relation<
      'ui-components.dashboard',
      'oneToOne',
      'api::board.board'
    >;
  };
}

export interface UiComponentsDynamicGraph extends Schema.Component {
  collectionName: 'components_ui_components_dynamic_graphs';
  info: {
    displayName: 'Dynamic Charts';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.RichText;
    filters: Attribute.Component<'form.form', true>;
    buttons: Attribute.Component<'ui-components.link-button', true>;
    chartData: Attribute.JSON;
    tooltip: Attribute.String;
  };
}

export interface UiComponentsForm extends Schema.Component {
  collectionName: 'components_ui_components_forms';
  info: {
    displayName: 'Form';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    inputs: Attribute.Component<'form.form', true>;
    button: Attribute.Component<'ui-components.link-button'>;
    terms: Attribute.RichText;
    subtitle: Attribute.String;
  };
}

export interface UiComponentsFxDailyEconomicTableRow extends Schema.Component {
  collectionName: 'components_ui_components_fx_daily_economic_table_rows';
  info: {
    displayName: 'FX Daily Economic Table Row';
    description: '';
  };
  attributes: {
    from: Attribute.String;
    content: Attribute.RichText;
    date: Attribute.DateTime;
  };
}

export interface UiComponentsFxDailyRatesTableRow extends Schema.Component {
  collectionName: 'components_ui_components_fx_daily_rates_table_rows';
  info: {
    displayName: 'FX Daily Rates Table Row';
  };
  attributes: {
    from: Attribute.String;
    to: Attribute.String;
    spot_rate: Attribute.String;
    daily_change: Attribute.String;
    week_to_date: Attribute.String;
    month_to_date: Attribute.String;
  };
}

export interface UiComponentsFxDailyTradingTableRow extends Schema.Component {
  collectionName: 'components_ui_components_fx_daily_trading_table_rows';
  info: {
    displayName: 'FX Daily Trading Table Row';
  };
  attributes: {
    from: Attribute.String;
    from_rate: Attribute.String;
    to_rate: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface UiComponentsFxForecastTableRow extends Schema.Component {
  collectionName: 'components_ui_components_fx_forecast_table_rows';
  info: {
    displayName: 'Fx Forecast Table Row';
  };
  attributes: {
    bank: Attribute.String;
    spot: Attribute.String;
    Q1_forecast: Attribute.String;
    Q2_forecast: Attribute.String;
    Q3_forecast: Attribute.String;
    Q4_forecast: Attribute.String;
  };
}

export interface UiComponentsHowItWorks extends Schema.Component {
  collectionName: 'components_transfer_money_how_it_works';
  info: {
    displayName: 'How it works';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    button1: Attribute.Component<'ui-components.link-button'>;
    button2: Attribute.Component<'ui-components.link-button'>;
    boardItems: Attribute.Component<'ui-components.board-item', true>;
  };
}

export interface UiComponentsIcon extends Schema.Component {
  collectionName: 'components_ui_components_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    name: Attribute.String;
    class: Attribute.String;
    link: Attribute.String;
  };
}

export interface UiComponentsImage extends Schema.Component {
  collectionName: 'components_ui_components_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    src: Attribute.String;
    alt: Attribute.String;
  };
}

export interface UiComponentsJobPostingAccordion extends Schema.Component {
  collectionName: 'components_ui_components_job_posting_accordions';
  info: {
    displayName: 'Job Posting Accordion';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface UiComponentsLinkButton extends Schema.Component {
  collectionName: 'components_ui_components_link_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
  };
}

export interface UiComponentsLink extends Schema.Component {
  collectionName: 'components_ui_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.String;
  };
}

export interface UiComponentsListItem extends Schema.Component {
  collectionName: 'components_ui_components_list_items';
  info: {
    displayName: 'List Item';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface UiComponentsMtfxFee extends Schema.Component {
  collectionName: 'components_ui_components_mtfx_fees';
  info: {
    displayName: 'mtfx fee';
  };
  attributes: {
    currency_code: Attribute.String;
    fee: Attribute.Integer;
    base_amount: Attribute.Integer;
  };
}

export interface UiComponentsProtectingYourBusiness extends Schema.Component {
  collectionName: 'components_forward_contract_protecting_your_businesses';
  info: {
    displayName: 'Article';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface UiComponentsSection2 extends Schema.Component {
  collectionName: 'components_ui_components_section_2s';
  info: {
    displayName: 'Section-2';
  };
  attributes: {
    title: Attribute.String;
    boardItems: Attribute.Component<'ui-components.board-item', true>;
  };
}

export interface UiComponentsSection3 extends Schema.Component {
  collectionName: 'components_ui_components_section_3s';
  info: {
    displayName: 'Section-3';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    boardItems: Attribute.Component<'ui-components.board-item-2', true>;
  };
}

export interface UiComponentsSection4 extends Schema.Component {
  collectionName: 'components_ui_components_section_4s';
  info: {
    displayName: 'Section-4';
  };
  attributes: {
    items: Attribute.Component<'ui-components.list-item', true>;
    button: Attribute.Relation<
      'ui-components.section-4',
      'oneToOne',
      'api::button.button'
    >;
  };
}

export interface UiComponentsSection extends Schema.Component {
  collectionName: 'components_ui_components_sections';
  info: {
    displayName: 'Section';
    description: '';
  };
  attributes: {
    boardItems: Attribute.Component<'ui-components.card', true>;
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface UiComponentsStepper extends Schema.Component {
  collectionName: 'components_ui_components_steppers';
  info: {
    displayName: 'Stepper';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'ui-components.protecting-your-business', true>;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface UiComponentsSubBanner extends Schema.Component {
  collectionName: 'components_shared_sub_banners';
  info: {
    displayName: 'Sub Banner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    button: Attribute.Relation<
      'ui-components.sub-banner',
      'oneToOne',
      'api::button.button'
    >;
    style: Attribute.RichText;
    content: Attribute.RichText;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    background_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    visible: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface UiComponentsTabIcon extends Schema.Component {
  collectionName: 'components_ui_components_tab_icons';
  info: {
    displayName: 'Tab Icon';
  };
  attributes: {
    static_url: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface UiComponentsTabItem extends Schema.Component {
  collectionName: 'components_ui_components_tab_items';
  info: {
    displayName: 'Tab Item';
  };
  attributes: {
    background: Attribute.Component<'ui-components.tab-icon'>;
    foreground: Attribute.Component<'ui-components.tab-icon'>;
  };
}

export interface UiComponentsTabs extends Schema.Component {
  collectionName: 'components_ui_components_tabs';
  info: {
    displayName: 'Tab';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    icons: Attribute.Component<'ui-components.link', true>;
  };
}

export interface UiComponentsTestimonialIndustry extends Schema.Component {
  collectionName: 'components_ui_components_testimonial_industries';
  info: {
    displayName: 'Testimonial Industry';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    tags: Attribute.Component<'ui-components.link-button', true>;
  };
}

export interface UiComponentsTestimonial extends Schema.Component {
  collectionName: 'components_testimonial_testimonials';
  info: {
    displayName: 'Testimonial';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Relation<
      'ui-components.testimonial',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    button: Attribute.Component<'ui-components.link-button'>;
    style: Attribute.RichText;
  };
}

export interface UiComponentsTestimonials extends Schema.Component {
  collectionName: 'components_ui_components_testimonials';
  info: {
    displayName: 'Testimonials';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'ui-components.testimonial', true>;
    button: Attribute.Component<'ui-components.link-button'>;
  };
}

export interface UiComponentsWidget2 extends Schema.Component {
  collectionName: 'components_ui_components_widget_2s';
  info: {
    displayName: 'Widget-2';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    button: Attribute.Relation<
      'ui-components.widget-2',
      'oneToOne',
      'api::button.button'
    >;
    items: Attribute.Component<'ui-components.board-item', true>;
    style: Attribute.RichText;
  };
}

export interface UiComponentsWidget extends Schema.Component {
  collectionName: 'components_ui_components_widgets';
  info: {
    displayName: 'Widget';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    type: Attribute.Enumeration<
      [
        'Compare Chart',
        'Fx Monthly',
        'Currency Chart',
        'Historical Rates',
        'Live Exchange',
        'Compare Chart 2',
        'Currency Conversion'
      ]
    >;
    style: Attribute.RichText;
    from_label: Attribute.String;
    to_label: Attribute.String;
    conversion_message: Attribute.String;
    mtfx_fee_text: Attribute.String;
    total_amount_text: Attribute.String;
    button: Attribute.Relation<
      'ui-components.widget',
      'oneToOne',
      'api::button.button'
    >;
    signup_button_hint: Attribute.RichText;
    min_amount: Attribute.Integer;
    rate_validation: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'business-page.footer': BusinessPageFooter;
      'business-page.header': BusinessPageHeader;
      'compare-chart.bank': CompareChartBank;
      'form.dropdown': FormDropdown;
      'form.form': FormForm;
      'form.label': FormLabel;
      'form.list-item': FormListItem;
      'form.option': FormOption;
      'main-page.dynamic-header': MainPageDynamicHeader;
      'online-sellers.marketplaces': OnlineSellersMarketplaces;
      'shared.fa-qs': SharedFaQs;
      'shared.faq-content-item': SharedFaqContentItem;
      'shared.fx-daily-table-v2': SharedFxDailyTableV2;
      'shared.fx-daily-table-v3': SharedFxDailyTableV3;
      'shared.fx-daily-table': SharedFxDailyTable;
      'shared.let-us-watch': SharedLetUsWatch;
      'shared.meta': SharedMeta;
      'shared.newsletter': SharedNewsletter;
      'shared.table-header-item': SharedTableHeaderItem;
      'shared.table': SharedTable;
      'shared.tool-banner': SharedToolBanner;
      'ui-components.accordion': UiComponentsAccordion;
      'ui-components.article-2': UiComponentsArticle2;
      'ui-components.bank-card': UiComponentsBankCard;
      'ui-components.bank-slider': UiComponentsBankSlider;
      'ui-components.board-item-2': UiComponentsBoardItem2;
      'ui-components.board-item': UiComponentsBoardItem;
      'ui-components.card': UiComponentsCard;
      'ui-components.chart': UiComponentsChart;
      'ui-components.check-item': UiComponentsCheckItem;
      'ui-components.contact-card': UiComponentsContactCard;
      'ui-components.currency-update-item': UiComponentsCurrencyUpdateItem;
      'ui-components.dashboard': UiComponentsDashboard;
      'ui-components.dynamic-graph': UiComponentsDynamicGraph;
      'ui-components.form': UiComponentsForm;
      'ui-components.fx-daily-economic-table-row': UiComponentsFxDailyEconomicTableRow;
      'ui-components.fx-daily-rates-table-row': UiComponentsFxDailyRatesTableRow;
      'ui-components.fx-daily-trading-table-row': UiComponentsFxDailyTradingTableRow;
      'ui-components.fx-forecast-table-row': UiComponentsFxForecastTableRow;
      'ui-components.how-it-works': UiComponentsHowItWorks;
      'ui-components.icon': UiComponentsIcon;
      'ui-components.image': UiComponentsImage;
      'ui-components.job-posting-accordion': UiComponentsJobPostingAccordion;
      'ui-components.link-button': UiComponentsLinkButton;
      'ui-components.link': UiComponentsLink;
      'ui-components.list-item': UiComponentsListItem;
      'ui-components.mtfx-fee': UiComponentsMtfxFee;
      'ui-components.protecting-your-business': UiComponentsProtectingYourBusiness;
      'ui-components.section-2': UiComponentsSection2;
      'ui-components.section-3': UiComponentsSection3;
      'ui-components.section-4': UiComponentsSection4;
      'ui-components.section': UiComponentsSection;
      'ui-components.stepper': UiComponentsStepper;
      'ui-components.sub-banner': UiComponentsSubBanner;
      'ui-components.tab-icon': UiComponentsTabIcon;
      'ui-components.tab-item': UiComponentsTabItem;
      'ui-components.tabs': UiComponentsTabs;
      'ui-components.testimonial-industry': UiComponentsTestimonialIndustry;
      'ui-components.testimonial': UiComponentsTestimonial;
      'ui-components.testimonials': UiComponentsTestimonials;
      'ui-components.widget-2': UiComponentsWidget2;
      'ui-components.widget': UiComponentsWidget;
    }
  }
}
