import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutUsAboutUs extends Schema.SingleType {
  collectionName: 'about_uses';
  info: {
    singularName: 'about-us';
    pluralName: 'about-uses';
    displayName: 'About Us';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'api::banner.banner'
    >;
    board: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'api::board.board'
    >;
    meta: Attribute.Component<'shared.meta'>;
    bank_slider: Attribute.Component<'ui-components.bank-slider'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiArticleArticle extends Schema.CollectionType {
  collectionName: 'articles';
  info: {
    singularName: 'article';
    pluralName: 'articles';
    displayName: 'Article';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    subtitle: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiArticleSlideArticleSlide extends Schema.CollectionType {
  collectionName: 'article_slides';
  info: {
    singularName: 'article-slide';
    pluralName: 'article-slides';
    displayName: 'Article Slide';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Attribute.String & Attribute.Required;
    is_active: Attribute.Boolean & Attribute.DefaultTo<false>;
    button_text: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::article-slide.article-slide',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::article-slide.article-slide',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBannerBanner extends Schema.CollectionType {
  collectionName: 'banners';
  info: {
    singularName: 'banner';
    pluralName: 'banners';
    displayName: 'Banner';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.String;
    subtitle: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Attribute.Relation<
      'api::banner.banner',
      'oneToOne',
      'api::button.button'
    >;
    style: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::banner.banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::banner.banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBatchPaymentBatchPayment extends Schema.SingleType {
  collectionName: 'batch_payments';
  info: {
    singularName: 'batch-payment';
    pluralName: 'batch-payments';
    displayName: 'Batch Payment';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::batch-payment.batch-payment', 'title'>;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    board: Attribute.Relation<
      'api::batch-payment.batch-payment',
      'oneToOne',
      'api::board.board'
    >;
    guide_banner: Attribute.Component<'ui-components.card'>;
    steps: Attribute.Component<'ui-components.stepper'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::batch-payment.batch-payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::batch-payment.batch-payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'Blog';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    versions: {
      versioned: true;
    };
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    category: Attribute.Enumeration<['Blog', 'Press Room']> &
      Attribute.DefaultTo<'Blog'>;
    author: Attribute.String;
    is_short: Attribute.Boolean;
    slug: Attribute.UID<'api::blog.blog', 'title'>;
    meta: Attribute.Component<'shared.meta'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    excerpt: Attribute.Text;
    date: Attribute.Date;
    slider: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true> &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    slider_type: Attribute.Enumeration<['Basic', 'Autoplay']> &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.DefaultTo<'Autoplay'>;
    slider_theme: Attribute.Enumeration<['Orange', 'Black']> &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    show_publish_date: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiBlogAndPressRoomBlogAndPressRoom extends Schema.SingleType {
  collectionName: 'blog_and_press_rooms';
  info: {
    singularName: 'blog-and-press-room';
    pluralName: 'blog-and-press-rooms';
    displayName: 'Blog & Press Room';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<
      'api::blog-and-press-room.blog-and-press-room',
      'title'
    >;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-and-press-room.blog-and-press-room',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blog-and-press-room.blog-and-press-room',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogsCssBlogsCss extends Schema.SingleType {
  collectionName: 'blogs_csses';
  info: {
    singularName: 'blogs-css';
    pluralName: 'blogs-csses';
    displayName: 'Blogs CSS';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    File: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blogs-css.blogs-css',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blogs-css.blogs-css',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBoardBoard extends Schema.CollectionType {
  collectionName: 'boards';
  info: {
    singularName: 'board';
    pluralName: 'boards';
    displayName: 'Board';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    slug: Attribute.String;
    items: Attribute.Component<'ui-components.board-item', true>;
    subtitle: Attribute.String;
    style: Attribute.RichText;
    background_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Attribute.Relation<
      'api::board.board',
      'oneToOne',
      'api::button.button'
    >;
    visible: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::board.board',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::board.board',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBpBlogBpBlog extends Schema.SingleType {
  collectionName: 'bp_blogs';
  info: {
    singularName: 'bp-blog';
    pluralName: 'bp-blogs';
    displayName: 'Blogs';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::bp-blog.bp-blog', 'title'>;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bp-blog.bp-blog',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bp-blog.bp-blog',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBpPressroomBpPressroom extends Schema.SingleType {
  collectionName: 'bp_pressrooms';
  info: {
    singularName: 'bp-pressroom';
    pluralName: 'bp-pressrooms';
    displayName: 'Pressroom';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::bp-pressroom.bp-pressroom', 'title'>;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bp-pressroom.bp-pressroom',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bp-pressroom.bp-pressroom',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBusinessBusiness extends Schema.SingleType {
  collectionName: 'businesses';
  info: {
    singularName: 'business';
    pluralName: 'businesses';
    displayName: 'Business';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::business.business', 'title'>;
    meta: Attribute.Component<'shared.meta'>;
    navbar: Attribute.Component<'ui-components.link-button', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::business.business',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::business.business',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiButtonButton extends Schema.CollectionType {
  collectionName: 'buttons';
  info: {
    singularName: 'button';
    pluralName: 'buttons';
    displayName: 'Button';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::button.button',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::button.button',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCareerCareer extends Schema.SingleType {
  collectionName: 'careers';
  info: {
    singularName: 'career';
    pluralName: 'careers';
    displayName: 'Career';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'api::banner.banner'
    >;
    title: Attribute.String;
    content: Attribute.RichText;
    job_openings: Attribute.Relation<
      'api::career.career',
      'oneToMany',
      'api::job-posting.job-posting'
    >;
    subtitle: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    newsletter: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'api::newsletter.newsletter'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiChecklistChecklist extends Schema.CollectionType {
  collectionName: 'checklists';
  info: {
    singularName: 'checklist';
    pluralName: 'checklists';
    displayName: 'Checklist';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'ui-components.check-item', true>;
    slug: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::checklist.checklist',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::checklist.checklist',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCompareChartCompareChart extends Schema.SingleType {
  collectionName: 'compare_charts';
  info: {
    singularName: 'compare-chart';
    pluralName: 'compare-charts';
    displayName: 'Compare Chart';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.RichText;
    mtfx_exchange_rate_buffer: Attribute.BigInteger;
    bank_exchange_direct_rate_buffer: Attribute.BigInteger;
    bank_exchange_indirect_rate_buffer: Attribute.BigInteger;
    mtfx_fees: Attribute.BigInteger;
    bank_fees: Attribute.BigInteger;
    mtfx_fees_limit: Attribute.BigInteger;
    compare_chart_default_value: Attribute.BigInteger;
    mtfx_percentage: Attribute.Float;
    bank_percentage: Attribute.Float;
    tick_interval: Attribute.BigInteger;
    minimum: Attribute.BigInteger;
    mobile_tick_interval: Attribute.BigInteger;
    bank_list: Attribute.Component<'compare-chart.bank', true>;
    style: Attribute.RichText;
    mobile_minimum: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::compare-chart.compare-chart',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::compare-chart.compare-chart',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactCardContactCard extends Schema.CollectionType {
  collectionName: 'contact_cards';
  info: {
    singularName: 'contact-card';
    pluralName: 'contact-cards';
    displayName: 'Contact Card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    media: Attribute.Component<'ui-components.tab-item'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-card.contact-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-card.contact-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCookiePolicyCookiePolicy extends Schema.SingleType {
  collectionName: 'cookie_policies';
  info: {
    singularName: 'cookie-policy';
    pluralName: 'cookie-policies';
    displayName: 'Cookie Policy';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Attribute.Relation<
      'api::cookie-policy.cookie-policy',
      'oneToOne',
      'api::banner.banner'
    >;
    title: Attribute.String;
    content: Attribute.RichText;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cookie-policy.cookie-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cookie-policy.cookie-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCountryListCountryList extends Schema.CollectionType {
  collectionName: 'country_lists';
  info: {
    singularName: 'country-list';
    pluralName: 'country-lists';
    displayName: 'Country List';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::country-list.country-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::country-list.country-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCuFxForecastCuFxForecast extends Schema.SingleType {
  collectionName: 'cu_fx_forecasts';
  info: {
    singularName: 'cu-fx-forecast';
    pluralName: 'cu-fx-forecasts';
    displayName: 'Fx Forecast';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::cu-fx-forecast.cu-fx-forecast', 'title'>;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    content: Attribute.RichText;
    banner: Attribute.Relation<
      'api::cu-fx-forecast.cu-fx-forecast',
      'oneToOne',
      'api::banner.banner'
    >;
    image: Attribute.String;
    excerpt: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cu-fx-forecast.cu-fx-forecast',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cu-fx-forecast.cu-fx-forecast',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCuFxMonthlyCuFxMonthly extends Schema.SingleType {
  collectionName: 'cu_fx_monthlies';
  info: {
    singularName: 'cu-fx-monthly';
    pluralName: 'cu-fx-monthlies';
    displayName: 'Fx Monthly';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::cu-fx-monthly.cu-fx-monthly', 'title'>;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    banner: Attribute.Relation<
      'api::cu-fx-monthly.cu-fx-monthly',
      'oneToOne',
      'api::banner.banner'
    >;
    content: Attribute.RichText;
    image: Attribute.String;
    excerpt: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cu-fx-monthly.cu-fx-monthly',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cu-fx-monthly.cu-fx-monthly',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCurrencyBufferCurrencyBuffer extends Schema.CollectionType {
  collectionName: 'currency_buffers';
  info: {
    singularName: 'currency-buffer';
    pluralName: 'currency-buffers';
    displayName: 'currency buffer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    buffer: Attribute.Float;
    source: Attribute.String;
    active: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::currency-buffer.currency-buffer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::currency-buffer.currency-buffer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCurrencyChartCurrencyChart extends Schema.CollectionType {
  collectionName: 'currency_charts';
  info: {
    singularName: 'currency-chart';
    pluralName: 'currency-charts';
    displayName: 'Currency Chart';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    pageID: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::currency-chart.currency-chart',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::currency-chart.currency-chart',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCurrencyChartConfigCurrencyChartConfig
  extends Schema.CollectionType {
  collectionName: 'currency_chart_configs';
  info: {
    singularName: 'currency-chart-config';
    pluralName: 'currency-chart-configs';
    displayName: 'Currency Chart Config';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    stroke_color: Attribute.String;
    line_style: Attribute.String;
    tick_point: Attribute.Integer;
    type: Attribute.String;
    stroke_width: Attribute.Integer;
    chart_type: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::currency-chart-config.currency-chart-config',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::currency-chart-config.currency-chart-config',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCurrencyConversionCurrencyConversion
  extends Schema.SingleType {
  collectionName: 'currency_conversions';
  info: {
    singularName: 'currency-conversion';
    pluralName: 'currency-conversions';
    displayName: 'Currency Conversion';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    conversion_form: Attribute.Component<'ui-components.form'>;
    bank_slider: Attribute.Component<'ui-components.bank-slider'>;
    board: Attribute.Relation<
      'api::currency-conversion.currency-conversion',
      'oneToOne',
      'api::board.board'
    >;
    how_it_works: Attribute.Relation<
      'api::currency-conversion.currency-conversion',
      'oneToOne',
      'api::how-it-work.how-it-work'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::currency-conversion.currency-conversion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::currency-conversion.currency-conversion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCurrencyDropdownCurrencyDropdown
  extends Schema.CollectionType {
  collectionName: 'currency_dropdowns';
  info: {
    singularName: 'currency-dropdown';
    pluralName: 'currency-dropdowns';
    displayName: 'Currency Dropdown';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    primary: Attribute.String;
    secondary: Attribute.String;
    flag: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    is_supported: Attribute.Boolean;
    inverse: Attribute.Boolean;
    two_letter_code: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::currency-dropdown.currency-dropdown',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::currency-dropdown.currency-dropdown',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCurrencyListCurrencyList extends Schema.CollectionType {
  collectionName: 'currency_lists';
  info: {
    singularName: 'currency-list';
    pluralName: 'currency-lists';
    displayName: 'Currency List';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    currency_code: Attribute.String;
    currency_name: Attribute.String;
    is_supported: Attribute.Boolean;
    inverse: Attribute.Boolean;
    two_letter_code: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::currency-list.currency-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::currency-list.currency-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCurrencyUpdateCurrencyUpdate extends Schema.SingleType {
  collectionName: 'currency_updates';
  info: {
    singularName: 'currency-update';
    pluralName: 'currency-updates';
    displayName: 'Currency Update';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::currency-update.currency-update', 'title'>;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    banner: Attribute.Relation<
      'api::currency-update.currency-update',
      'oneToOne',
      'api::banner.banner'
    >;
    items: Attribute.Component<'ui-components.currency-update-item', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::currency-update.currency-update',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::currency-update.currency-update',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCustomerTestimonialCustomerTestimonial
  extends Schema.SingleType {
  collectionName: 'customer_testimonials';
  info: {
    singularName: 'customer-testimonial';
    pluralName: 'customer-testimonials';
    displayName: 'Customer Testimonial';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    pageUrl: Attribute.String;
    slug: Attribute.UID<
      'api::customer-testimonial.customer-testimonial',
      'title'
    >;
    meta: Attribute.Component<'shared.meta'>;
    banner: Attribute.Relation<
      'api::customer-testimonial.customer-testimonial',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::customer-testimonial.customer-testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::customer-testimonial.customer-testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDailyEconomicTableDailyEconomicTable
  extends Schema.SingleType {
  collectionName: 'daily_economic_tables';
  info: {
    singularName: 'daily-economic-table';
    pluralName: 'daily-economic-tables';
    displayName: 'Daily Economic Table';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    data_table: Attribute.Relation<
      'api::daily-economic-table.daily-economic-table',
      'oneToOne',
      'api::fx-daily-economic-table.fx-daily-economic-table'
    >;
    footer: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::daily-economic-table.daily-economic-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::daily-economic-table.daily-economic-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDailyMarketUpdateTableDailyMarketUpdateTable
  extends Schema.SingleType {
  collectionName: 'daily_market_update_tables';
  info: {
    singularName: 'daily-market-update-table';
    pluralName: 'daily-market-update-tables';
    displayName: 'Daily Market Update Table';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    data_table: Attribute.Relation<
      'api::daily-market-update-table.daily-market-update-table',
      'oneToOne',
      'api::fx-daily-market-update.fx-daily-market-update'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::daily-market-update-table.daily-market-update-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::daily-market-update-table.daily-market-update-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDailyRatesTableDailyRatesTable extends Schema.SingleType {
  collectionName: 'daily_rates_tables';
  info: {
    singularName: 'daily-rates-table';
    pluralName: 'daily-rates-tables';
    displayName: 'Daily Rates Table';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header_items: Attribute.Component<'form.label', true>;
    data_table: Attribute.Relation<
      'api::daily-rates-table.daily-rates-table',
      'oneToOne',
      'api::fx-daily-rates-table.fx-daily-rates-table'
    >;
    footer: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::daily-rates-table.daily-rates-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::daily-rates-table.daily-rates-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDailyTradingTableDailyTradingTable
  extends Schema.SingleType {
  collectionName: 'daily_trading_tables';
  info: {
    singularName: 'daily-trading-table';
    pluralName: 'daily-trading-tables';
    displayName: 'Daily Trading Table';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    data_table: Attribute.Relation<
      'api::daily-trading-table.daily-trading-table',
      'oneToOne',
      'api::fx-daily-trading-table.fx-daily-trading-table'
    >;
    footer: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::daily-trading-table.daily-trading-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::daily-trading-table.daily-trading-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDefaultCurrencyCodeDefaultCurrencyCode
  extends Schema.SingleType {
  collectionName: 'default_currency_codes';
  info: {
    singularName: 'default-currency-code';
    pluralName: 'default-currency-codes';
    displayName: 'Default Currency Code';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    from: Attribute.String;
    to: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::default-currency-code.default-currency-code',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::default-currency-code.default-currency-code',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiESignConsentAgreementESignConsentAgreement
  extends Schema.SingleType {
  collectionName: 'e_sign_consent_agreements';
  info: {
    singularName: 'e-sign-consent-agreement';
    pluralName: 'e-sign-consent-agreements';
    displayName: ' E-Sign Consent Agreement';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Attribute.Relation<
      'api::e-sign-consent-agreement.e-sign-consent-agreement',
      'oneToOne',
      'api::banner.banner'
    >;
    title: Attribute.String;
    content: Attribute.RichText;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::e-sign-consent-agreement.e-sign-consent-agreement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::e-sign-consent-agreement.e-sign-consent-agreement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEconomicEventsLogEconomicEventsLog
  extends Schema.CollectionType {
  collectionName: 'economic_events_logs';
  info: {
    singularName: 'economic-events-log';
    pluralName: 'economic-events-logs';
    displayName: 'Economic Events Logs';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    date: Attribute.DateTime;
    records: Attribute.Integer;
    status: Attribute.String;
    type: Attribute.String;
    failed_data: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::economic-events-log.economic-events-log',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::economic-events-log.economic-events-log',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEconomicEventsWithDateEconomicEventsWithDate
  extends Schema.CollectionType {
  collectionName: 'economic_events_with_dates';
  info: {
    singularName: 'economic-events-with-date';
    pluralName: 'economic-events-with-dates';
    displayName: 'Economic Events With Date';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    event_id: Attribute.String;
    event_name: Attribute.String;
    generic_name: Attribute.String;
    detail: Attribute.RichText;
    date: Attribute.Date;
    source: Attribute.String;
    is_inverse: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::economic-events-with-date.economic-events-with-date',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::economic-events-with-date.economic-events-with-date',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqFaq extends Schema.CollectionType {
  collectionName: 'faqs';
  info: {
    singularName: 'faq';
    pluralName: 'faqs';
    displayName: 'FAQ';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'ui-components.accordion', true>;
    button: Attribute.Component<'ui-components.link-button'>;
    slug: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFaqKeyFaqKey extends Schema.CollectionType {
  collectionName: 'faq_keys';
  info: {
    singularName: 'faq-key';
    pluralName: 'faq-keys';
    displayName: 'FAQ key';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    key: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faq-key.faq-key',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::faq-key.faq-key',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqPageFaqPage extends Schema.SingleType {
  collectionName: 'faq_pages';
  info: {
    singularName: 'faq-page';
    pluralName: 'faq-pages';
    displayName: 'FAQ page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    pageUrl: Attribute.String;
    slug: Attribute.UID<'api::faq-page.faq-page', 'title'>;
    meta: Attribute.Component<'shared.meta'>;
    items: Attribute.Relation<
      'api::faq-page.faq-page',
      'oneToMany',
      'api::faq.faq'
    >;
    banner: Attribute.Relation<
      'api::faq-page.faq-page',
      'oneToOne',
      'api::banner.banner'
    >;
    objKey: Attribute.Relation<
      'api::faq-page.faq-page',
      'oneToMany',
      'api::faq-key.faq-key'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faq-page.faq-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::faq-page.faq-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiForwardContractForwardContract extends Schema.SingleType {
  collectionName: 'forward_contracts';
  info: {
    singularName: 'forward-contract';
    pluralName: 'forward-contracts';
    displayName: 'Forward Contract';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::forward-contract.forward-contract', 'title'>;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    banner: Attribute.Relation<
      'api::forward-contract.forward-contract',
      'oneToOne',
      'api::banner.banner'
    >;
    board: Attribute.Relation<
      'api::forward-contract.forward-contract',
      'oneToOne',
      'api::board.board'
    >;
    guide_banner: Attribute.Component<'ui-components.card'>;
    checklist: Attribute.Relation<
      'api::forward-contract.forward-contract',
      'oneToOne',
      'api::checklist.checklist'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::forward-contract.forward-contract',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::forward-contract.forward-contract',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxDailyFxDaily extends Schema.CollectionType {
  collectionName: 'fx_dailies';
  info: {
    singularName: 'fx-daily';
    pluralName: 'fx-dailies';
    displayName: 'FX Daily';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    meta: Attribute.Component<'shared.meta'>;
    date: Attribute.Date;
    image: Attribute.String;
    slug: Attribute.UID<'api::fx-daily.fx-daily', 'title'>;
    banner: Attribute.Relation<
      'api::fx-daily.fx-daily',
      'oneToOne',
      'api::banner.banner'
    >;
    excerpt: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-daily.fx-daily',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-daily.fx-daily',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxDailyEconomicTableFxDailyEconomicTable
  extends Schema.CollectionType {
  collectionName: 'fx_daily_economic_tables';
  info: {
    singularName: 'fx-daily-economic-table';
    pluralName: 'fx-daily-economic-tables';
    displayName: 'FX Economic Table';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    items: Attribute.Component<
      'ui-components.fx-daily-economic-table-row',
      true
    >;
    slug: Attribute.String;
    date: Attribute.Date;
    title: Attribute.String;
    header_items: Attribute.Component<'form.label', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-daily-economic-table.fx-daily-economic-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-daily-economic-table.fx-daily-economic-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxDailyMarketUpdateFxDailyMarketUpdate
  extends Schema.CollectionType {
  collectionName: 'fx_daily_market_updates';
  info: {
    singularName: 'fx-daily-market-update';
    pluralName: 'fx-daily-market-updates';
    displayName: 'FX Market Update';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    items: Attribute.Component<'ui-components.protecting-your-business', true>;
    slug: Attribute.String;
    date: Attribute.Date;
    title: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-daily-market-update.fx-daily-market-update',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-daily-market-update.fx-daily-market-update',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxDailyPageFxDailyPage extends Schema.SingleType {
  collectionName: 'fx_daily_pages';
  info: {
    singularName: 'fx-daily-page';
    pluralName: 'fx-daily-pages';
    displayName: 'Fx Daily Page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    pageUrl: Attribute.String;
    slug: Attribute.UID<'api::fx-daily-page.fx-daily-page', 'title'>;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-daily-page.fx-daily-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-daily-page.fx-daily-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxDailyRatesTableFxDailyRatesTable
  extends Schema.CollectionType {
  collectionName: 'fx_daily_rates_tables';
  info: {
    singularName: 'fx-daily-rates-table';
    pluralName: 'fx-daily-rates-tables';
    displayName: 'FX Rates Table';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    items: Attribute.Component<'ui-components.fx-daily-rates-table-row', true>;
    slug: Attribute.String;
    header_items: Attribute.Component<'form.label', true>;
    date: Attribute.Date;
    title: Attribute.String;
    is_unit: Attribute.Boolean;
    unit: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-daily-rates-table.fx-daily-rates-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-daily-rates-table.fx-daily-rates-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxDailyTradingTableFxDailyTradingTable
  extends Schema.CollectionType {
  collectionName: 'fx_daily_trading_tables';
  info: {
    singularName: 'fx-daily-trading-table';
    pluralName: 'fx-daily-trading-tables';
    displayName: 'FX Trading Table';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Attribute.String;
    items: Attribute.Component<
      'ui-components.fx-daily-trading-table-row',
      true
    >;
    date: Attribute.Date;
    title: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-daily-trading-table.fx-daily-trading-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-daily-trading-table.fx-daily-trading-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxDailyUpdateFxDailyUpdate extends Schema.SingleType {
  collectionName: 'fx_daily_updates';
  info: {
    singularName: 'fx-daily-update';
    pluralName: 'fx-daily-updates';
    displayName: 'FX Daily Update';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    date: Attribute.Date;
    description: Attribute.RichText;
    table_content: Attribute.RichText;
    sub_banner: Attribute.Component<'ui-components.sub-banner'>;
    cta: Attribute.Component<'shared.tool-banner'>;
    after_cta_content: Attribute.RichText;
    article_slides: Attribute.Relation<
      'api::fx-daily-update.fx-daily-update',
      'oneToMany',
      'api::article-slide.article-slide'
    >;
    newsletter: Attribute.Component<'ui-components.form'>;
    how_it_work: Attribute.Relation<
      'api::fx-daily-update.fx-daily-update',
      'oneToOne',
      'api::how-it-work.how-it-work'
    >;
    meta: Attribute.Component<'shared.meta'>;
    sections: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-daily-update.fx-daily-update',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-daily-update.fx-daily-update',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxDailyV3FxDailyV3 extends Schema.SingleType {
  collectionName: 'fx_daily_v3s';
  info: {
    singularName: 'fx-daily-v3';
    pluralName: 'fx-daily-v3s';
    displayName: 'FX Daily v3';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    date: Attribute.Date;
    description: Attribute.RichText;
    cta: Attribute.Component<'shared.tool-banner'>;
    article_slides: Attribute.Relation<
      'api::fx-daily-v3.fx-daily-v3',
      'oneToMany',
      'api::article-slide.article-slide'
    >;
    newsletter: Attribute.Component<'ui-components.form'>;
    how_it_work: Attribute.Relation<
      'api::fx-daily-v3.fx-daily-v3',
      'oneToOne',
      'api::how-it-work.how-it-work'
    >;
    meta: Attribute.Component<'shared.meta'>;
    before_cta: Attribute.Component<'shared.tool-banner'>;
    subtitle: Attribute.String;
    fx_rates_table: Attribute.Relation<
      'api::fx-daily-v3.fx-daily-v3',
      'oneToOne',
      'api::fx-daily-rates-table.fx-daily-rates-table'
    >;
    fx_trading_table: Attribute.Relation<
      'api::fx-daily-v3.fx-daily-v3',
      'oneToOne',
      'api::fx-daily-trading-table.fx-daily-trading-table'
    >;
    fx_economic_table: Attribute.Relation<
      'api::fx-daily-v3.fx-daily-v3',
      'oneToOne',
      'api::fx-daily-economic-table.fx-daily-economic-table'
    >;
    fx_market_update: Attribute.Relation<
      'api::fx-daily-v3.fx-daily-v3',
      'oneToOne',
      'api::fx-daily-market-update.fx-daily-market-update'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-daily-v3.fx-daily-v3',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-daily-v3.fx-daily-v3',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxForecastTableFxForecastTable
  extends Schema.CollectionType {
  collectionName: 'fx_forecast_tables';
  info: {
    singularName: 'fx-forecast-table';
    pluralName: 'fx-forecast-tables';
    displayName: 'Fx Forecast Table';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    header_items: Attribute.Component<'form.label', true>;
    items: Attribute.Component<'ui-components.fx-forecast-table-row', true>;
    slug: Attribute.String;
    is_unit: Attribute.Boolean;
    unit: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-forecast-table.fx-forecast-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-forecast-table.fx-forecast-table',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxForecastV2FxForecastV2 extends Schema.SingleType {
  collectionName: 'fx_forecast_v2s';
  info: {
    singularName: 'fx-forecast-v2';
    pluralName: 'fx-forecast-v2s';
    displayName: 'Fx Forecast v2';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.RichText;
    cta: Attribute.Component<'shared.tool-banner'>;
    article_slides: Attribute.Relation<
      'api::fx-forecast-v2.fx-forecast-v2',
      'oneToMany',
      'api::article-slide.article-slide'
    >;
    newsletter: Attribute.Component<'ui-components.form'>;
    how_it_work: Attribute.Relation<
      'api::fx-forecast-v2.fx-forecast-v2',
      'oneToOne',
      'api::how-it-work.how-it-work'
    >;
    USD_CAD_commentry: Attribute.Component<'ui-components.protecting-your-business'>;
    USD_CAD_table: Attribute.Relation<
      'api::fx-forecast-v2.fx-forecast-v2',
      'oneToOne',
      'api::fx-forecast-table.fx-forecast-table'
    >;
    EUR_CAD_commentry: Attribute.Component<'ui-components.protecting-your-business'>;
    EUR_CAD_table: Attribute.Relation<
      'api::fx-forecast-v2.fx-forecast-v2',
      'oneToOne',
      'api::fx-forecast-table.fx-forecast-table'
    >;
    GBP_CAD_commentry: Attribute.Component<'ui-components.protecting-your-business'>;
    GBP_CAD_table: Attribute.Relation<
      'api::fx-forecast-v2.fx-forecast-v2',
      'oneToOne',
      'api::fx-forecast-table.fx-forecast-table'
    >;
    before_cta: Attribute.Component<'shared.tool-banner'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-forecast-v2.fx-forecast-v2',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-forecast-v2.fx-forecast-v2',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxMonthlyUsFxMonthlyUs extends Schema.SingleType {
  collectionName: 'fx_monthly_uses';
  info: {
    singularName: 'fx-monthly-us';
    pluralName: 'fx-monthly-uses';
    displayName: 'Fx Monthly US';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    date: Attribute.Date;
    description: Attribute.RichText;
    before_cta: Attribute.Component<'shared.tool-banner'>;
    cta: Attribute.Component<'shared.tool-banner'>;
    article_slides: Attribute.Relation<
      'api::fx-monthly-us.fx-monthly-us',
      'oneToMany',
      'api::article-slide.article-slide'
    >;
    how_it_work: Attribute.Relation<
      'api::fx-monthly-us.fx-monthly-us',
      'oneToOne',
      'api::how-it-work.how-it-work'
    >;
    newsletter: Attribute.Component<'ui-components.form'>;
    fx_rates_table: Attribute.Relation<
      'api::fx-monthly-us.fx-monthly-us',
      'oneToOne',
      'api::fx-daily-rates-table.fx-daily-rates-table'
    >;
    fx_trading_table: Attribute.Relation<
      'api::fx-monthly-us.fx-monthly-us',
      'oneToOne',
      'api::fx-daily-trading-table.fx-daily-trading-table'
    >;
    fx_economic_table: Attribute.Relation<
      'api::fx-monthly-us.fx-monthly-us',
      'oneToOne',
      'api::fx-daily-economic-table.fx-daily-economic-table'
    >;
    subtitle: Attribute.String;
    fx_rates_table_v2: Attribute.Relation<
      'api::fx-monthly-us.fx-monthly-us',
      'oneToOne',
      'api::fx-daily-rates-table.fx-daily-rates-table'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-monthly-us.fx-monthly-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-monthly-us.fx-monthly-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxMonthlyV2FxMonthlyV2 extends Schema.SingleType {
  collectionName: 'fx_monthly_v2s';
  info: {
    singularName: 'fx-monthly-v2';
    pluralName: 'fx-monthly-v2s';
    displayName: 'Fx Monthly v2';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    content: Attribute.RichText;
    meta: Attribute.Component<'shared.meta'>;
    slug: Attribute.String;
    banner: Attribute.Component<'shared.tool-banner'>;
    items: Attribute.Component<'ui-components.card', true>;
    form: Attribute.Component<'ui-components.form'>;
    faq: Attribute.Relation<
      'api::fx-monthly-v2.fx-monthly-v2',
      'oneToOne',
      'api::faq.faq'
    >;
    style: Attribute.RichText;
    headline: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-monthly-v2.fx-monthly-v2',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-monthly-v2.fx-monthly-v2',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxMonthlyV3FxMonthlyV3 extends Schema.SingleType {
  collectionName: 'fx_monthly_v3s';
  info: {
    singularName: 'fx-monthly-v3';
    pluralName: 'fx-monthly-v3s';
    displayName: 'Fx Monthly CAD';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    date: Attribute.Date;
    description: Attribute.RichText;
    before_cta: Attribute.Component<'shared.tool-banner'>;
    cta: Attribute.Component<'shared.tool-banner'>;
    article_slides: Attribute.Relation<
      'api::fx-monthly-v3.fx-monthly-v3',
      'oneToMany',
      'api::article-slide.article-slide'
    >;
    how_it_work: Attribute.Relation<
      'api::fx-monthly-v3.fx-monthly-v3',
      'oneToOne',
      'api::how-it-work.how-it-work'
    >;
    fx_rates_table: Attribute.Relation<
      'api::fx-monthly-v3.fx-monthly-v3',
      'oneToOne',
      'api::fx-daily-rates-table.fx-daily-rates-table'
    >;
    fx_trading_table: Attribute.Relation<
      'api::fx-monthly-v3.fx-monthly-v3',
      'oneToOne',
      'api::fx-daily-trading-table.fx-daily-trading-table'
    >;
    fx_economic_table: Attribute.Relation<
      'api::fx-monthly-v3.fx-monthly-v3',
      'oneToOne',
      'api::fx-daily-economic-table.fx-daily-economic-table'
    >;
    newsletter: Attribute.Component<'ui-components.form'>;
    subtitle: Attribute.String;
    fx_rates_table_v2: Attribute.Relation<
      'api::fx-monthly-v3.fx-monthly-v3',
      'oneToOne',
      'api::fx-daily-rates-table.fx-daily-rates-table'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-monthly-v3.fx-monthly-v3',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-monthly-v3.fx-monthly-v3',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxPaymentFxPayment extends Schema.SingleType {
  collectionName: 'fx_payments';
  info: {
    singularName: 'fx-payment';
    pluralName: 'fx-payments';
    displayName: 'Fx Payment';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    fx_payment_links: Attribute.Component<'ui-components.section-4'>;
    board: Attribute.Relation<
      'api::fx-payment.fx-payment',
      'oneToOne',
      'api::board.board'
    >;
    how_it_works: Attribute.Relation<
      'api::fx-payment.fx-payment',
      'oneToOne',
      'api::how-it-work.how-it-work'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-payment.fx-payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-payment.fx-payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxSectionFxSection extends Schema.CollectionType {
  collectionName: 'fx_sections';
  info: {
    singularName: 'fx-section';
    pluralName: 'fx-sections';
    displayName: 'Fx section';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.RichText;
    slug: Attribute.String;
    footer: Attribute.RichText;
    items: Attribute.Relation<
      'api::fx-section.fx-section',
      'oneToMany',
      'api::table-content.table-content'
    >;
    style: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-section.fx-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-section.fx-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxWeeklyFxWeekly extends Schema.CollectionType {
  collectionName: 'fx_weeklies';
  info: {
    singularName: 'fx-weekly';
    pluralName: 'fx-weeklies';
    displayName: 'FX Weekly';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    meta: Attribute.Component<'shared.meta'>;
    banner: Attribute.Relation<
      'api::fx-weekly.fx-weekly',
      'oneToOne',
      'api::banner.banner'
    >;
    date: Attribute.Date;
    image: Attribute.String;
    slug: Attribute.UID<'api::fx-weekly.fx-weekly', 'title'>;
    excerpt: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-weekly.fx-weekly',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-weekly.fx-weekly',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFxWeeklyPageFxWeeklyPage extends Schema.SingleType {
  collectionName: 'fx_weekly_pages';
  info: {
    singularName: 'fx-weekly-page';
    pluralName: 'fx-weekly-pages';
    displayName: 'FX Weekly Page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    pageUrl: Attribute.String;
    slug: Attribute.UID<'api::fx-weekly-page.fx-weekly-page', 'title'>;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fx-weekly-page.fx-weekly-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fx-weekly-page.fx-weekly-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlobalCssGlobalCss extends Schema.SingleType {
  collectionName: 'global_csses';
  info: {
    singularName: 'global-css';
    pluralName: 'global-csses';
    displayName: 'Global-css';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Css: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global-css.global-css',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::global-css.global-css',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlobalPaymentSolutionGlobalPaymentSolution
  extends Schema.SingleType {
  collectionName: 'global_payment_solutions';
  info: {
    singularName: 'global-payment-solution';
    pluralName: 'global-payment-solutions';
    displayName: 'Global Payment Solution';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<
      'api::global-payment-solution.global-payment-solution',
      'title'
    >;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global-payment-solution.global-payment-solution',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::global-payment-solution.global-payment-solution',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomeV2HomeV2 extends Schema.SingleType {
  collectionName: 'home_v2s';
  info: {
    singularName: 'home-v2';
    pluralName: 'home-v2s';
    displayName: 'Home V2';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Attribute.Component<'main-page.dynamic-header'>;
    clients: Attribute.Component<'online-sellers.marketplaces', true>;
    board: Attribute.Relation<
      'api::home-v2.home-v2',
      'oneToOne',
      'api::board.board'
    >;
    slider: Attribute.Component<'ui-components.card', true>;
    security_section: Attribute.Component<'ui-components.widget-2'>;
    board_2: Attribute.Relation<
      'api::home-v2.home-v2',
      'oneToOne',
      'api::board.board'
    >;
    cta: Attribute.Component<'shared.tool-banner'>;
    signup_banner: Attribute.Component<'shared.tool-banner'>;
    dashboard: Attribute.Component<'ui-components.dashboard'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-v2.home-v2',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-v2.home-v2',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHowItWorkHowItWork extends Schema.CollectionType {
  collectionName: 'how_it_works';
  info: {
    singularName: 'how-it-work';
    pluralName: 'how-it-works';
    displayName: 'How it work';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    items: Attribute.Component<'ui-components.board-item', true>;
    slug: Attribute.String;
    buttons: Attribute.Relation<
      'api::how-it-work.how-it-work',
      'oneToMany',
      'api::button.button'
    >;
    style: Attribute.RichText;
    background_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::how-it-work.how-it-work',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::how-it-work.how-it-work',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiImageSectionImageSection extends Schema.CollectionType {
  collectionName: 'image_sections';
  info: {
    singularName: 'image-section';
    pluralName: 'image-sections';
    displayName: 'Image Section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    pageID: Attribute.String;
    image: Attribute.Component<'ui-components.image'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::image-section.image-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::image-section.image-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIncomingPaymentIncomingPayment extends Schema.SingleType {
  collectionName: 'incoming_payments';
  info: {
    singularName: 'incoming-payment';
    pluralName: 'incoming-payments';
    displayName: ' Incoming Payment';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::incoming-payment.incoming-payment', 'title'>;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    banner: Attribute.Relation<
      'api::incoming-payment.incoming-payment',
      'oneToOne',
      'api::banner.banner'
    >;
    board: Attribute.Relation<
      'api::incoming-payment.incoming-payment',
      'oneToOne',
      'api::board.board'
    >;
    guide_banner: Attribute.Component<'ui-components.card'>;
    checklist: Attribute.Relation<
      'api::incoming-payment.incoming-payment',
      'oneToOne',
      'api::checklist.checklist'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::incoming-payment.incoming-payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::incoming-payment.incoming-payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIndustrySolutionIndustrySolution extends Schema.SingleType {
  collectionName: 'industry_solutions';
  info: {
    singularName: 'industry-solution';
    pluralName: 'industry-solutions';
    displayName: 'Industry Solution';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::industry-solution.industry-solution', 'title'>;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::industry-solution.industry-solution',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::industry-solution.industry-solution',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIndustrySolutionPostIndustrySolutionPost
  extends Schema.CollectionType {
  collectionName: 'industry_solution_posts';
  info: {
    singularName: 'industry-solution-post';
    pluralName: 'industry-solution-posts';
    displayName: 'Industry Solutions';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Attribute.String;
    title: Attribute.String;
    content: Attribute.RichText;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    meta: Attribute.Component<'shared.meta'>;
    banner: Attribute.Relation<
      'api::industry-solution-post.industry-solution-post',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::industry-solution-post.industry-solution-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::industry-solution-post.industry-solution-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInternationalPaymentInternationalPayment
  extends Schema.SingleType {
  collectionName: 'international_payments';
  info: {
    singularName: 'international-payment';
    pluralName: 'international-payments';
    displayName: 'International Payment';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<
      'api::international-payment.international-payment',
      'title'
    >;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    banner: Attribute.Relation<
      'api::international-payment.international-payment',
      'oneToMany',
      'api::banner.banner'
    >;
    board: Attribute.Relation<
      'api::international-payment.international-payment',
      'oneToOne',
      'api::board.board'
    >;
    checklist: Attribute.Relation<
      'api::international-payment.international-payment',
      'oneToOne',
      'api::checklist.checklist'
    >;
    guide_banner: Attribute.Component<'ui-components.card'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::international-payment.international-payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::international-payment.international-payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIsLegalIsLegal extends Schema.SingleType {
  collectionName: 'is_legals';
  info: {
    singularName: 'is-legal';
    pluralName: 'is-legals';
    displayName: 'IS-Legal';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::is-legal.is-legal', 'title'>;
    pageUrl: Attribute.String;
    header: Attribute.Component<'main-page.dynamic-header'>;
    meta: Attribute.Component<'shared.meta', true>;
    mtfxFeatures: Attribute.Relation<
      'api::is-legal.is-legal',
      'oneToOne',
      'api::mtfx-feature.mtfx-feature'
    >;
    letUsWatch: Attribute.Relation<
      'api::is-legal.is-legal',
      'oneToOne',
      'api::let-us-watch.let-us-watch'
    >;
    currencyChart: Attribute.Relation<
      'api::is-legal.is-legal',
      'oneToOne',
      'api::currency-chart.currency-chart'
    >;
    newsletter: Attribute.Relation<
      'api::is-legal.is-legal',
      'oneToOne',
      'api::newsletter.newsletter'
    >;
    faq: Attribute.Relation<
      'api::is-legal.is-legal',
      'oneToOne',
      'api::faq.faq'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::is-legal.is-legal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::is-legal.is-legal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIsMedicalIsMedical extends Schema.SingleType {
  collectionName: 'is_medicals';
  info: {
    singularName: 'is-medical';
    pluralName: 'is-medicals';
    displayName: 'IS-Medical';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::is-medical.is-medical', 'title'>;
    pageUrl: Attribute.String;
    header: Attribute.Component<'main-page.dynamic-header'>;
    meta: Attribute.Component<'shared.meta', true>;
    mtfxFeatures: Attribute.Relation<
      'api::is-medical.is-medical',
      'oneToOne',
      'api::mtfx-feature.mtfx-feature'
    >;
    letUsWatch: Attribute.Relation<
      'api::is-medical.is-medical',
      'oneToOne',
      'api::let-us-watch.let-us-watch'
    >;
    currencyChart: Attribute.Relation<
      'api::is-medical.is-medical',
      'oneToOne',
      'api::currency-chart.currency-chart'
    >;
    newsletter: Attribute.Relation<
      'api::is-medical.is-medical',
      'oneToOne',
      'api::newsletter.newsletter'
    >;
    faq: Attribute.Relation<
      'api::is-medical.is-medical',
      'oneToOne',
      'api::faq.faq'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::is-medical.is-medical',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::is-medical.is-medical',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIsMiningIsMining extends Schema.SingleType {
  collectionName: 'is_minings';
  info: {
    singularName: 'is-mining';
    pluralName: 'is-minings';
    displayName: 'IS-Mining';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::is-mining.is-mining', 'title'>;
    pageUrl: Attribute.String;
    header: Attribute.Component<'main-page.dynamic-header'>;
    meta: Attribute.Component<'shared.meta', true>;
    mtfxFeatures: Attribute.Relation<
      'api::is-mining.is-mining',
      'oneToOne',
      'api::mtfx-feature.mtfx-feature'
    >;
    letUsWatch: Attribute.Relation<
      'api::is-mining.is-mining',
      'oneToOne',
      'api::let-us-watch.let-us-watch'
    >;
    currencyChart: Attribute.Relation<
      'api::is-mining.is-mining',
      'oneToOne',
      'api::currency-chart.currency-chart'
    >;
    newsletter: Attribute.Relation<
      'api::is-mining.is-mining',
      'oneToOne',
      'api::newsletter.newsletter'
    >;
    faq: Attribute.Relation<
      'api::is-mining.is-mining',
      'oneToOne',
      'api::faq.faq'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::is-mining.is-mining',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::is-mining.is-mining',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIsOnlineSellerIsOnlineSeller extends Schema.SingleType {
  collectionName: 'is_online_sellers';
  info: {
    singularName: 'is-online-seller';
    pluralName: 'is-online-sellers';
    displayName: 'IS-Online-Seller';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::is-online-seller.is-online-seller', 'title'>;
    pageUrl: Attribute.String;
    header: Attribute.Component<'main-page.dynamic-header'>;
    meta: Attribute.Component<'shared.meta', true>;
    letUsWatch: Attribute.Relation<
      'api::is-online-seller.is-online-seller',
      'oneToOne',
      'api::let-us-watch.let-us-watch'
    >;
    currencyChart: Attribute.Relation<
      'api::is-online-seller.is-online-seller',
      'oneToOne',
      'api::currency-chart.currency-chart'
    >;
    newsletter: Attribute.Relation<
      'api::is-online-seller.is-online-seller',
      'oneToOne',
      'api::newsletter.newsletter'
    >;
    faq: Attribute.Relation<
      'api::is-online-seller.is-online-seller',
      'oneToOne',
      'api::faq.faq'
    >;
    mtfxFeatures: Attribute.Relation<
      'api::is-online-seller.is-online-seller',
      'oneToOne',
      'api::mtfx-feature.mtfx-feature'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::is-online-seller.is-online-seller',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::is-online-seller.is-online-seller',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIsTechnologyCompanyIsTechnologyCompany
  extends Schema.SingleType {
  collectionName: 'is_technology_companies';
  info: {
    singularName: 'is-technology-company';
    pluralName: 'is-technology-companies';
    displayName: 'IS-Technology-Company';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<
      'api::is-technology-company.is-technology-company',
      'title'
    >;
    pageUrl: Attribute.String;
    header: Attribute.Component<'main-page.dynamic-header'>;
    meta: Attribute.Component<'shared.meta', true>;
    mtfxFeatures: Attribute.Relation<
      'api::is-technology-company.is-technology-company',
      'oneToOne',
      'api::mtfx-feature.mtfx-feature'
    >;
    letUsWatch: Attribute.Relation<
      'api::is-technology-company.is-technology-company',
      'oneToOne',
      'api::let-us-watch.let-us-watch'
    >;
    currencyChart: Attribute.Relation<
      'api::is-technology-company.is-technology-company',
      'oneToOne',
      'api::currency-chart.currency-chart'
    >;
    newsletter: Attribute.Relation<
      'api::is-technology-company.is-technology-company',
      'oneToOne',
      'api::newsletter.newsletter'
    >;
    faq: Attribute.Relation<
      'api::is-technology-company.is-technology-company',
      'oneToOne',
      'api::faq.faq'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::is-technology-company.is-technology-company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::is-technology-company.is-technology-company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIsTravelIsTravel extends Schema.SingleType {
  collectionName: 'is_travels';
  info: {
    singularName: 'is-travel';
    pluralName: 'is-travels';
    displayName: 'IS-Travel';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::is-travel.is-travel', 'title'>;
    pageUrl: Attribute.String;
    header: Attribute.Component<'main-page.dynamic-header'>;
    meta: Attribute.Component<'shared.meta', true>;
    letUsWatch: Attribute.Relation<
      'api::is-travel.is-travel',
      'oneToOne',
      'api::let-us-watch.let-us-watch'
    >;
    currencyChart: Attribute.Relation<
      'api::is-travel.is-travel',
      'oneToOne',
      'api::currency-chart.currency-chart'
    >;
    newsletter: Attribute.Relation<
      'api::is-travel.is-travel',
      'oneToOne',
      'api::newsletter.newsletter'
    >;
    faq: Attribute.Relation<
      'api::is-travel.is-travel',
      'oneToOne',
      'api::faq.faq'
    >;
    mtfxFeatures: Attribute.Relation<
      'api::is-travel.is-travel',
      'oneToOne',
      'api::mtfx-feature.mtfx-feature'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::is-travel.is-travel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::is-travel.is-travel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJobPostingJobPosting extends Schema.CollectionType {
  collectionName: 'job_postings';
  info: {
    singularName: 'job-posting';
    pluralName: 'job-postings';
    displayName: 'Job Openings';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    slug: Attribute.UID<'api::job-posting.job-posting', 'title'>;
    unit: Attribute.String;
    requirement_date: Attribute.Date;
    expire_date: Attribute.Date;
    is_visible: Attribute.Boolean;
    location: Attribute.Enumeration<
      ['Toronto - ON', 'Jersey City - NJ', 'Calgary - AL', 'Vancouver - BC']
    >;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::job-posting.job-posting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::job-posting.job-posting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLandingPageLandingPage extends Schema.CollectionType {
  collectionName: 'landing_pages';
  info: {
    singularName: 'landing-page';
    pluralName: 'landing-pages';
    displayName: 'Landing Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    board: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToOne',
      'api::board.board'
    >;
    banner: Attribute.Component<'main-page.dynamic-header'>;
    subBanner: Attribute.Component<'ui-components.sub-banner'>;
    how_it_works: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToOne',
      'api::how-it-work.how-it-work'
    >;
    slug: Attribute.String;
    widget: Attribute.Component<'ui-components.widget'>;
    widget_2: Attribute.Component<'ui-components.widget-2'>;
    style: Attribute.RichText;
    type: Attribute.String;
    fx_payment_links: Attribute.Component<'ui-components.section-4'>;
    bank_slider: Attribute.Component<'ui-components.bank-slider'>;
    meta: Attribute.Component<'shared.meta'>;
    source: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLandingPageHeaderLandingPageHeader
  extends Schema.CollectionType {
  collectionName: 'landing_page_headers';
  info: {
    singularName: 'landing-page-header';
    pluralName: 'landing-page-headers';
    displayName: 'Landing Page Header';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.RichText;
    content: Attribute.RichText;
    button: Attribute.Relation<
      'api::landing-page-header.landing-page-header',
      'oneToOne',
      'api::button.button'
    >;
    button_2: Attribute.Relation<
      'api::landing-page-header.landing-page-header',
      'oneToOne',
      'api::button.button'
    >;
    style: Attribute.RichText;
    source: Attribute.String;
    slug: Attribute.String;
    board: Attribute.Relation<
      'api::landing-page-header.landing-page-header',
      'oneToOne',
      'api::board.board'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::landing-page-header.landing-page-header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::landing-page-header.landing-page-header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLandingPageWidgetLandingPageWidget
  extends Schema.CollectionType {
  collectionName: 'landing_page_widgets';
  info: {
    singularName: 'landing-page-widget';
    pluralName: 'landing-page-widgets';
    displayName: 'Landing Page Widget';
    description: '';
  };
  options: {
    draftAndPublish: true;
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
    from_label: Attribute.String;
    to_label: Attribute.String;
    conversion_message: Attribute.String;
    mtfx_fee_text: Attribute.String;
    total_amount_text: Attribute.String;
    button: Attribute.Relation<
      'api::landing-page-widget.landing-page-widget',
      'oneToOne',
      'api::button.button'
    >;
    style: Attribute.RichText;
    slug: Attribute.String;
    source: Attribute.String;
    signup_button_hint: Attribute.RichText;
    min_amount: Attribute.Integer;
    rate_validation: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::landing-page-widget.landing-page-widget',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::landing-page-widget.landing-page-widget',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLayoutLayout extends Schema.SingleType {
  collectionName: 'layouts';
  info: {
    singularName: 'layout';
    pluralName: 'layouts';
    displayName: 'Business Layout';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    let_us_watch: Attribute.Relation<
      'api::layout.layout',
      'oneToOne',
      'api::let-us-watch.let-us-watch'
    >;
    currency_chart: Attribute.Relation<
      'api::layout.layout',
      'oneToOne',
      'api::currency-chart.currency-chart'
    >;
    newsletter: Attribute.Relation<
      'api::layout.layout',
      'oneToOne',
      'api::newsletter.newsletter'
    >;
    faq: Attribute.Relation<'api::layout.layout', 'oneToOne', 'api::faq.faq'>;
    board: Attribute.Relation<
      'api::layout.layout',
      'oneToOne',
      'api::mtfx-feature.mtfx-feature'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::layout.layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::layout.layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLetUsWatchLetUsWatch extends Schema.CollectionType {
  collectionName: 'let_us_watches';
  info: {
    singularName: 'let-us-watch';
    pluralName: 'let-us-watches';
    displayName: 'Let us watch';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    button: Attribute.Component<'ui-components.link-button'>;
    slug: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Attribute.Text;
    style: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::let-us-watch.let-us-watch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::let-us-watch.let-us-watch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLiveCurrencyRatePairLiveCurrencyRatePair
  extends Schema.SingleType {
  collectionName: 'live_currency_rate_pairs';
  info: {
    singularName: 'live-currency-rate-pair';
    pluralName: 'live-currency-rate-pairs';
    displayName: 'Live Currency Rate Pair';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pairs: Attribute.Component<'form.label', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::live-currency-rate-pair.live-currency-rate-pair',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::live-currency-rate-pair.live-currency-rate-pair',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLiveExchangeRatesDefaultLiveExchangeRatesDefault
  extends Schema.SingleType {
  collectionName: 'live_exchange_rates_defaults';
  info: {
    singularName: 'live-exchange-rates-default';
    pluralName: 'live-exchange-rates-defaults';
    displayName: 'Live Exchange Rates Default';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    rates: Attribute.Component<'form.label', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::live-exchange-rates-default.live-exchange-rates-default',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::live-exchange-rates-default.live-exchange-rates-default',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMainMain extends Schema.SingleType {
  collectionName: 'mains';
  info: {
    singularName: 'main';
    pluralName: 'mains';
    displayName: 'Main';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::main.main', 'title'>;
    pageUrl: Attribute.String;
    banner: Attribute.Component<'main-page.dynamic-header'>;
    try_us: Attribute.Component<'ui-components.card'>;
    meta: Attribute.Component<'shared.meta'>;
    exchange_rates: Attribute.Component<'shared.table'>;
    registration: Attribute.Component<'ui-components.sub-banner'>;
    testimonials: Attribute.Component<'ui-components.testimonial'>;
    board: Attribute.Relation<'api::main.main', 'oneToOne', 'api::board.board'>;
    how_it_works: Attribute.Relation<
      'api::main.main',
      'oneToOne',
      'api::board.board'
    >;
    mtfx_features: Attribute.Relation<
      'api::main.main',
      'oneToOne',
      'api::mtfx-feature.mtfx-feature'
    >;
    fx_bg_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    style: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::main.main', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::main.main', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiMainFooterMainFooter extends Schema.SingleType {
  collectionName: 'main_footers';
  info: {
    singularName: 'main-footer';
    pluralName: 'main-footers';
    displayName: 'Main Footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    style: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::main-footer.main-footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::main-footer.main-footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMainFooterV2MainFooterV2 extends Schema.SingleType {
  collectionName: 'main_footer_v2s';
  info: {
    singularName: 'main-footer-v2';
    pluralName: 'main-footer-v2s';
    displayName: 'Main Footer v2';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::main-footer-v2.main-footer-v2',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::main-footer-v2.main-footer-v2',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMarketOrderMarketOrder extends Schema.SingleType {
  collectionName: 'market_orders';
  info: {
    singularName: 'market-order';
    pluralName: 'market-orders';
    displayName: ' Market Order';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::market-order.market-order', 'title'>;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    banner: Attribute.Relation<
      'api::market-order.market-order',
      'oneToOne',
      'api::banner.banner'
    >;
    board: Attribute.Relation<
      'api::market-order.market-order',
      'oneToOne',
      'api::board.board'
    >;
    guide_banner: Attribute.Component<'ui-components.card'>;
    checklist: Attribute.Relation<
      'api::market-order.market-order',
      'oneToOne',
      'api::checklist.checklist'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::market-order.market-order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::market-order.market-order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMediumBusinessMediumBusiness extends Schema.SingleType {
  collectionName: 'medium_businesses';
  info: {
    singularName: 'medium-business';
    pluralName: 'medium-businesses';
    displayName: 'Medium Business';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::medium-business.medium-business', 'title'>;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    banner: Attribute.Relation<
      'api::medium-business.medium-business',
      'oneToOne',
      'api::banner.banner'
    >;
    board: Attribute.Relation<
      'api::medium-business.medium-business',
      'oneToOne',
      'api::board.board'
    >;
    how_it_works: Attribute.Relation<
      'api::medium-business.medium-business',
      'oneToOne',
      'api::how-it-work.how-it-work'
    >;
    mtfx_features: Attribute.Relation<
      'api::medium-business.medium-business',
      'oneToOne',
      'api::mtfx-feature.mtfx-feature'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::medium-business.medium-business',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::medium-business.medium-business',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMtfxFeatureMtfxFeature extends Schema.CollectionType {
  collectionName: 'mtfx_features';
  info: {
    singularName: 'mtfx-feature';
    pluralName: 'mtfx-features';
    displayName: 'MTFX Feature';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.String;
    description: Attribute.RichText;
    items: Attribute.Component<'ui-components.card', true>;
    style: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mtfx-feature.mtfx-feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::mtfx-feature.mtfx-feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMtfxFeeMtfxFee extends Schema.CollectionType {
  collectionName: 'mtfx_fees';
  info: {
    singularName: 'mtfx-fee';
    pluralName: 'mtfx-fees';
    displayName: 'mtfx fee';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    credit_amount: Attribute.Integer;
    source: Attribute.String;
    active: Attribute.Boolean & Attribute.DefaultTo<true>;
    currencies: Attribute.Component<'ui-components.mtfx-fee', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mtfx-fee.mtfx-fee',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::mtfx-fee.mtfx-fee',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMultiCurrencyAccountMultiCurrencyAccount
  extends Schema.SingleType {
  collectionName: 'multi_currency_accounts';
  info: {
    singularName: 'multi-currency-account';
    pluralName: 'multi-currency-accounts';
    displayName: ' Multi-Currency Account';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<
      'api::multi-currency-account.multi-currency-account',
      'title'
    >;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    banner: Attribute.Relation<
      'api::multi-currency-account.multi-currency-account',
      'oneToOne',
      'api::banner.banner'
    >;
    board: Attribute.Relation<
      'api::multi-currency-account.multi-currency-account',
      'oneToOne',
      'api::board.board'
    >;
    guide_banner: Attribute.Component<'ui-components.card'>;
    checklist: Attribute.Relation<
      'api::multi-currency-account.multi-currency-account',
      'oneToOne',
      'api::checklist.checklist'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::multi-currency-account.multi-currency-account',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::multi-currency-account.multi-currency-account',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMultinationalMultinational extends Schema.SingleType {
  collectionName: 'multinationals';
  info: {
    singularName: 'multinational';
    pluralName: 'multinationals';
    displayName: 'Multinational';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::multinational.multinational', 'title'>;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    banner: Attribute.Relation<
      'api::multinational.multinational',
      'oneToOne',
      'api::banner.banner'
    >;
    board: Attribute.Relation<
      'api::multinational.multinational',
      'oneToOne',
      'api::board.board'
    >;
    how_it_works: Attribute.Relation<
      'api::multinational.multinational',
      'oneToOne',
      'api::how-it-work.how-it-work'
    >;
    mtfx_features: Attribute.Relation<
      'api::multinational.multinational',
      'oneToOne',
      'api::mtfx-feature.mtfx-feature'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::multinational.multinational',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::multinational.multinational',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNavMenuItemNavMenuItem extends Schema.CollectionType {
  collectionName: 'nav_menu_items';
  info: {
    singularName: 'nav-menu-item';
    pluralName: 'nav-menu-items';
    displayName: 'Nav Menu Item';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.String;
    link: Attribute.String;
    submenu: Attribute.Boolean;
    parent: Attribute.String;
    shown_on_navbar: Attribute.Boolean;
    shown_on_footer: Attribute.Boolean;
    sort_order: Attribute.Integer;
    origin: Attribute.String;
    sublinks: Attribute.Relation<
      'api::nav-menu-item.nav-menu-item',
      'oneToMany',
      'api::nav-menu-item.nav-menu-item'
    >;
    is_on_sitemap: Attribute.Boolean & Attribute.DefaultTo<true>;
    base_url: Attribute.String &
      Attribute.DefaultTo<'https://uat-content.mtfxgroup.com'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::nav-menu-item.nav-menu-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::nav-menu-item.nav-menu-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsletterNewsletter extends Schema.CollectionType {
  collectionName: 'newsletters';
  info: {
    singularName: 'newsletter';
    pluralName: 'newsletters';
    displayName: 'Newsletter';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    inputs: Attribute.Component<'form.form', true>;
    items: Attribute.Component<'ui-components.card', true>;
    checkbox: Attribute.Component<'form.form'>;
    button: Attribute.Component<'ui-components.link-button'>;
    slug: Attribute.String;
    terms: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::newsletter.newsletter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::newsletter.newsletter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOnlineSellerOnlineSeller extends Schema.SingleType {
  collectionName: 'online_sellers';
  info: {
    singularName: 'online-seller';
    pluralName: 'online-sellers';
    displayName: 'Online Seller';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::online-seller.online-seller', 'title'>;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    banner: Attribute.Relation<
      'api::online-seller.online-seller',
      'oneToOne',
      'api::banner.banner'
    >;
    how_it_works: Attribute.Relation<
      'api::online-seller.online-seller',
      'oneToOne',
      'api::how-it-work.how-it-work'
    >;
    checklist: Attribute.Relation<
      'api::online-seller.online-seller',
      'oneToOne',
      'api::checklist.checklist'
    >;
    board: Attribute.Relation<
      'api::online-seller.online-seller',
      'oneToOne',
      'api::board.board'
    >;
    marketplaces: Attribute.Component<'online-sellers.marketplaces'>;
    guide_banner: Attribute.Component<'ui-components.card'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::online-seller.online-seller',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::online-seller.online-seller',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPartnerWithUsPartnerWithUs extends Schema.SingleType {
  collectionName: 'partner_with_uses';
  info: {
    singularName: 'partner-with-us';
    pluralName: 'partner-with-uses';
    displayName: 'Partner with us';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Attribute.Relation<
      'api::partner-with-us.partner-with-us',
      'oneToOne',
      'api::banner.banner'
    >;
    title: Attribute.String;
    content: Attribute.RichText;
    form: Attribute.Component<'ui-components.form'>;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::partner-with-us.partner-with-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::partner-with-us.partner-with-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPostLayoutPostLayout extends Schema.SingleType {
  collectionName: 'post_layouts';
  info: {
    singularName: 'post-layout';
    pluralName: 'post-layouts';
    displayName: 'Post Layout';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    board: Attribute.Relation<
      'api::post-layout.post-layout',
      'oneToOne',
      'api::board.board'
    >;
    how_it_works: Attribute.Relation<
      'api::post-layout.post-layout',
      'oneToOne',
      'api::board.board'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::post-layout.post-layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::post-layout.post-layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrivacyPolicyPrivacyPolicy extends Schema.SingleType {
  collectionName: 'privacy_policies';
  info: {
    singularName: 'privacy-policy';
    pluralName: 'privacy-policies';
    displayName: 'Privacy Policy';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'api::banner.banner'
    >;
    title: Attribute.String;
    content: Attribute.RichText;
    meta: Attribute.Component<'shared.meta'>;
    contact_cards: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToMany',
      'api::contact-card.contact-card'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRegulatoryInformationRegulatoryInformation
  extends Schema.SingleType {
  collectionName: 'regulatory_informations';
  info: {
    singularName: 'regulatory-information';
    pluralName: 'regulatory-informations';
    displayName: 'Regulatory Information';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    pageUrl: Attribute.String;
    slug: Attribute.UID<
      'api::regulatory-information.regulatory-information',
      'title'
    >;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::regulatory-information.regulatory-information',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::regulatory-information.regulatory-information',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRegulatoryInformationTabContentRegulatoryInformationTabContent
  extends Schema.CollectionType {
  collectionName: 'regulatory_information_tab_contents';
  info: {
    singularName: 'regulatory-information-tab-content';
    pluralName: 'regulatory-information-tab-contents';
    displayName: 'Regulatory Information Tab Content';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageID: Attribute.String;
    content: Attribute.RichText;
    slug: Attribute.String;
    title: Attribute.String;
    banner: Attribute.Relation<
      'api::regulatory-information-tab-content.regulatory-information-tab-content',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::regulatory-information-tab-content.regulatory-information-tab-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::regulatory-information-tab-content.regulatory-information-tab-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRiskManagementRiskManagement extends Schema.SingleType {
  collectionName: 'risk_managements';
  info: {
    singularName: 'risk-management';
    pluralName: 'risk-managements';
    displayName: 'Risk Management';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::risk-management.risk-management', 'title'>;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::risk-management.risk-management',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::risk-management.risk-management',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRiskManagementTabRiskManagementTab
  extends Schema.CollectionType {
  collectionName: 'risk_management_tabs';
  info: {
    singularName: 'risk-management-tab';
    pluralName: 'risk-management-tabs';
    displayName: 'Risk Management Tab';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<
      'api::risk-management-tab.risk-management-tab',
      'title'
    >;
    banner: Attribute.Relation<
      'api::risk-management-tab.risk-management-tab',
      'oneToOne',
      'api::banner.banner'
    >;
    board: Attribute.Relation<
      'api::risk-management-tab.risk-management-tab',
      'oneToOne',
      'api::board.board'
    >;
    guide_banner: Attribute.Component<'ui-components.card'>;
    checklist: Attribute.Relation<
      'api::risk-management-tab.risk-management-tab',
      'oneToOne',
      'api::checklist.checklist'
    >;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::risk-management-tab.risk-management-tab',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::risk-management-tab.risk-management-tab',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSafeHarborPolicySafeHarborPolicy extends Schema.SingleType {
  collectionName: 'safe_harbor_policies';
  info: {
    singularName: 'safe-harbor-policy';
    pluralName: 'safe-harbor-policies';
    displayName: 'Safe Harbor Policy';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Attribute.Relation<
      'api::safe-harbor-policy.safe-harbor-policy',
      'oneToOne',
      'api::banner.banner'
    >;
    title: Attribute.String;
    content: Attribute.RichText;
    meta: Attribute.Component<'shared.meta'>;
    contact_cards: Attribute.Relation<
      'api::safe-harbor-policy.safe-harbor-policy',
      'oneToMany',
      'api::contact-card.contact-card'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::safe-harbor-policy.safe-harbor-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::safe-harbor-policy.safe-harbor-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSiteConfigSiteConfig extends Schema.SingleType {
  collectionName: 'site_configs';
  info: {
    singularName: 'site-config';
    pluralName: 'site-configs';
    displayName: 'Site Config';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    economicFilter: Attribute.JSON;
    exchangeCurrencies: Attribute.JSON;
    toolsCurrencyPairs: Attribute.JSON;
    mainExchangeCurrencies: Attribute.JSON;
    defaultEconomicFilter: Attribute.JSON;
    defaultCurrency: Attribute.String;
    toolsConvertCurrency: Attribute.String;
    economicCalendar: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::site-config.site-config',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::site-config.site-config',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSiteMapSiteMap extends Schema.SingleType {
  collectionName: 'site_maps';
  info: {
    singularName: 'site-map';
    pluralName: 'site-maps';
    displayName: 'Site Map';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    pageUrl: Attribute.String;
    slug: Attribute.UID<'api::site-map.site-map', 'title'>;
    meta: Attribute.Component<'shared.meta'>;
    banner: Attribute.Relation<
      'api::site-map.site-map',
      'oneToOne',
      'api::banner.banner'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::site-map.site-map',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::site-map.site-map',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSmallBusinessSmallBusiness extends Schema.SingleType {
  collectionName: 'small_businesses';
  info: {
    singularName: 'small-business';
    pluralName: 'small-businesses';
    displayName: 'Small Business';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::small-business.small-business', 'title'>;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    banner: Attribute.Relation<
      'api::small-business.small-business',
      'oneToOne',
      'api::banner.banner'
    >;
    board: Attribute.Relation<
      'api::small-business.small-business',
      'oneToOne',
      'api::board.board'
    >;
    how_it_works: Attribute.Relation<
      'api::small-business.small-business',
      'oneToOne',
      'api::how-it-work.how-it-work'
    >;
    mtfx_features: Attribute.Relation<
      'api::small-business.small-business',
      'oneToOne',
      'api::mtfx-feature.mtfx-feature'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::small-business.small-business',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::small-business.small-business',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStyleStyle extends Schema.CollectionType {
  collectionName: 'styles';
  info: {
    singularName: 'style';
    pluralName: 'styles';
    displayName: 'Style';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    style: Attribute.RichText;
    slug: Attribute.UID<'api::style.style', 'title'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::style.style',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::style.style',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTabTab extends Schema.CollectionType {
  collectionName: 'tabs';
  info: {
    singularName: 'tab';
    pluralName: 'tabs';
    displayName: 'Tabs';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageID: Attribute.String;
    tabsContent: Attribute.Relation<
      'api::tab.tab',
      'oneToMany',
      'api::tab-content.tab-content'
    >;
    tabsList: Attribute.Relation<
      'api::tab.tab',
      'oneToMany',
      'api::tab-item.tab-item'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::tab.tab', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::tab.tab', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTabContentTabContent extends Schema.CollectionType {
  collectionName: 'tab_contents';
  info: {
    singularName: 'tab-content';
    pluralName: 'tab-contents';
    displayName: 'Global Payment';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    board: Attribute.Relation<
      'api::tab-content.tab-content',
      'oneToOne',
      'api::board.board'
    >;
    checklist: Attribute.Relation<
      'api::tab-content.tab-content',
      'oneToOne',
      'api::checklist.checklist'
    >;
    banner: Attribute.Relation<
      'api::tab-content.tab-content',
      'oneToOne',
      'api::banner.banner'
    >;
    title: Attribute.String;
    slug: Attribute.UID<'api::tab-content.tab-content', 'title'>;
    guide_banner: Attribute.Component<'ui-components.card'>;
    steps: Attribute.Component<'ui-components.stepper'>;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tab-content.tab-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tab-content.tab-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTabItemTabItem extends Schema.CollectionType {
  collectionName: 'tab_items';
  info: {
    singularName: 'tab-item';
    pluralName: 'tab-items';
    displayName: 'Tab Item';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pageID: Attribute.String;
    name: Attribute.String;
    slug: Attribute.UID<'api::tab-item.tab-item', 'name'>;
    media: Attribute.Component<'ui-components.tab-item'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tab-item.tab-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tab-item.tab-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTableContentTableContent extends Schema.CollectionType {
  collectionName: 'table_contents';
  info: {
    singularName: 'table-content';
    pluralName: 'table-contents';
    displayName: 'Table Content';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    from: Attribute.String;
    to: Attribute.String;
    daily_change: Attribute.String;
    week_to_date: Attribute.String;
    month_to_date: Attribute.String;
    page_url: Attribute.String;
    remarks: Attribute.RichText;
    from_rate: Attribute.String;
    to_rate: Attribute.String;
    spot_rate: Attribute.String;
    date: Attribute.DateTime;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::table-content.table-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::table-content.table-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTermsOfUseTermsOfUse extends Schema.SingleType {
  collectionName: 'terms_of_uses';
  info: {
    singularName: 'terms-of-use';
    pluralName: 'terms-of-uses';
    displayName: 'Terms of use';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Attribute.Relation<
      'api::terms-of-use.terms-of-use',
      'oneToOne',
      'api::banner.banner'
    >;
    content: Attribute.RichText;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::terms-of-use.terms-of-use',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::terms-of-use.terms-of-use',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTestTest extends Schema.SingleType {
  collectionName: 'tests';
  info: {
    singularName: 'test';
    pluralName: 'tests';
    displayName: 'Test';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    html: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::test.test', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::test.test', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTestHtmlTestHtml extends Schema.SingleType {
  collectionName: 'test_htmls';
  info: {
    singularName: 'test-html';
    pluralName: 'test-htmls';
    displayName: 'test-css';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    global_scss: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    pages_scss: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    globals_css: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    global_fonts: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content_editor: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::test-html.test-html',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::test-html.test-html',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTestimonialTestimonial extends Schema.CollectionType {
  collectionName: 'testimonials';
  info: {
    singularName: 'testimonial';
    pluralName: 'testimonials';
    displayName: 'Testimonial';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    qoute: Attribute.RichText;
    name: Attribute.String;
    designation: Attribute.String;
    company: Attribute.String;
    industry: Attribute.Component<'ui-components.testimonial-industry'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::testimonial.testimonial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTestingTesting extends Schema.CollectionType {
  collectionName: 'testings';
  info: {
    singularName: 'testing';
    pluralName: 'testings';
    displayName: 'Testing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    event_id: Attribute.String;
    event_name: Attribute.Text;
    detail: Attribute.RichText;
    date: Attribute.Date;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::testing.testing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::testing.testing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTestingLogTestingLog extends Schema.CollectionType {
  collectionName: 'testing_logs';
  info: {
    singularName: 'testing-log';
    pluralName: 'testing-logs';
    displayName: 'Testing logs';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    date: Attribute.DateTime;
    records: Attribute.Integer;
    status: Attribute.String;
    type: Attribute.String;
    range: Attribute.String & Attribute.DefaultTo<'null'>;
    statuses: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::testing-log.testing-log',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::testing-log.testing-log',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiToolTool extends Schema.CollectionType {
  collectionName: 'tools';
  info: {
    singularName: 'tool';
    pluralName: 'tools';
    displayName: 'Tool';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    content: Attribute.RichText;
    slug: Attribute.String;
    article: Attribute.Component<'ui-components.protecting-your-business'>;
    banner: Attribute.Component<'shared.tool-banner'>;
    board: Attribute.Relation<
      'api::tool.tool',
      'oneToOne',
      'api::mtfx-feature.mtfx-feature'
    >;
    faq: Attribute.Relation<'api::tool.tool', 'oneToOne', 'api::faq.faq'>;
    meta: Attribute.Component<'shared.meta'>;
    style: Attribute.RichText;
    chart_logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    banner_v2: Attribute.Component<'shared.tool-banner'>;
    banner_v3: Attribute.Component<'shared.tool-banner'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::tool.tool', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::tool.tool', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiToolsCurrencyChartToolsCurrencyChart
  extends Schema.SingleType {
  collectionName: 'tools_currency_charts';
  info: {
    singularName: 'tools-currency-chart';
    pluralName: 'tools-currency-charts';
    displayName: 'Tools-Currency-Chart';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<
      'api::tools-currency-chart.tools-currency-chart',
      'title'
    >;
    pageUrl: Attribute.String;
    header: Attribute.Component<'main-page.dynamic-header'>;
    sections: Attribute.JSON;
    metadata: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tools-currency-chart.tools-currency-chart',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tools-currency-chart.tools-currency-chart',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiToolsCurrencyRateAlertToolsCurrencyRateAlert
  extends Schema.SingleType {
  collectionName: 'tools_currency_rate_alerts';
  info: {
    singularName: 'tools-currency-rate-alert';
    pluralName: 'tools-currency-rate-alerts';
    displayName: 'Tools-Currency Rate Alert';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<
      'api::tools-currency-rate-alert.tools-currency-rate-alert',
      'title'
    >;
    pageUrl: Attribute.String;
    header: Attribute.Component<'main-page.dynamic-header'>;
    sections: Attribute.JSON;
    metadata: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tools-currency-rate-alert.tools-currency-rate-alert',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tools-currency-rate-alert.tools-currency-rate-alert',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiToolsDailyExchangeRateLookupToolsDailyExchangeRateLookup
  extends Schema.SingleType {
  collectionName: 'tools_daily_exchange_rate_lookups';
  info: {
    singularName: 'tools-daily-exchange-rate-lookup';
    pluralName: 'tools-daily-exchange-rate-lookups';
    displayName: 'Tools-Daily-Exchange-Rate-Lookup';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<
      'api::tools-daily-exchange-rate-lookup.tools-daily-exchange-rate-lookup',
      'title'
    >;
    pageUrl: Attribute.String;
    header: Attribute.Component<'main-page.dynamic-header'>;
    sections: Attribute.JSON;
    metadata: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tools-daily-exchange-rate-lookup.tools-daily-exchange-rate-lookup',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tools-daily-exchange-rate-lookup.tools-daily-exchange-rate-lookup',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiToolsEconomicCalendarToolsEconomicCalendar
  extends Schema.SingleType {
  collectionName: 'tools_economic_calendars';
  info: {
    singularName: 'tools-economic-calendar';
    pluralName: 'tools-economic-calendars';
    displayName: 'Tools-Economic-Calendar';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<
      'api::tools-economic-calendar.tools-economic-calendar',
      'title'
    >;
    pageUrl: Attribute.String;
    header: Attribute.Component<'main-page.dynamic-header'>;
    meta: Attribute.Component<'shared.meta', true>;
    chart: Attribute.Component<'ui-components.dynamic-graph'>;
    calendarFeatures: Attribute.Component<'ui-components.protecting-your-business'>;
    registration: Attribute.Component<'main-page.dynamic-header'>;
    mtfxFeatures: Attribute.Relation<
      'api::tools-economic-calendar.tools-economic-calendar',
      'oneToOne',
      'api::mtfx-feature.mtfx-feature'
    >;
    faq: Attribute.Relation<
      'api::tools-economic-calendar.tools-economic-calendar',
      'oneToOne',
      'api::faq.faq'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tools-economic-calendar.tools-economic-calendar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tools-economic-calendar.tools-economic-calendar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiToolsFxMarketUpdateToolsFxMarketUpdate
  extends Schema.SingleType {
  collectionName: 'tools_fx_market_updates';
  info: {
    singularName: 'tools-fx-market-update';
    pluralName: 'tools-fx-market-updates';
    displayName: 'Tools-FX Market Update';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<
      'api::tools-fx-market-update.tools-fx-market-update',
      'title'
    >;
    pageUrl: Attribute.String;
    header: Attribute.Component<'main-page.dynamic-header'>;
    sections: Attribute.JSON;
    metadata: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tools-fx-market-update.tools-fx-market-update',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tools-fx-market-update.tools-fx-market-update',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiToolsHistoricalRateToolsHistoricalRate
  extends Schema.SingleType {
  collectionName: 'tools_historical_rates';
  info: {
    singularName: 'tools-historical-rate';
    pluralName: 'tools-historical-rates';
    displayName: 'Tools-Historical-Rate';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<
      'api::tools-historical-rate.tools-historical-rate',
      'title'
    >;
    pageUrl: Attribute.String;
    header: Attribute.Component<'main-page.dynamic-header'>;
    sections: Attribute.JSON;
    metadata: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tools-historical-rate.tools-historical-rate',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tools-historical-rate.tools-historical-rate',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiToolsIndexToolsIndex extends Schema.SingleType {
  collectionName: 'tools_indices';
  info: {
    singularName: 'tools-index';
    pluralName: 'tools-indices';
    displayName: 'Tools Index';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    pageUrl: Attribute.String;
    slug: Attribute.UID<'api::tools-index.tools-index', 'title'>;
    meta: Attribute.Component<'shared.meta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tools-index.tools-index',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tools-index.tools-index',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiToolsLiveExchangeRateToolsLiveExchangeRate
  extends Schema.SingleType {
  collectionName: 'tools_live_exchange_rates';
  info: {
    singularName: 'tools-live-exchange-rate';
    pluralName: 'tools-live-exchange-rates';
    displayName: 'Tools-Live-Exchange-Rate';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<
      'api::tools-live-exchange-rate.tools-live-exchange-rate',
      'title'
    >;
    pageUrl: Attribute.String;
    header: Attribute.Component<'main-page.dynamic-header'>;
    meta: Attribute.Component<'shared.meta', true>;
    chart: Attribute.Component<'ui-components.dynamic-graph'>;
    mtfxBenefits: Attribute.Component<'ui-components.protecting-your-business'>;
    registration: Attribute.Component<'main-page.dynamic-header'>;
    mtfxFeatures: Attribute.Relation<
      'api::tools-live-exchange-rate.tools-live-exchange-rate',
      'oneToOne',
      'api::mtfx-feature.mtfx-feature'
    >;
    faq: Attribute.Relation<
      'api::tools-live-exchange-rate.tools-live-exchange-rate',
      'oneToOne',
      'api::faq.faq'
    >;
    socialIcons: Attribute.DynamicZone<['ui-components.icon']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tools-live-exchange-rate.tools-live-exchange-rate',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tools-live-exchange-rate.tools-live-exchange-rate',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiToolsRateCalculatorToolsRateCalculator
  extends Schema.SingleType {
  collectionName: 'tools_rate_calculators';
  info: {
    singularName: 'tools-rate-calculator';
    pluralName: 'tools-rate-calculators';
    displayName: 'Tools-Rate-Calculator';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<
      'api::tools-rate-calculator.tools-rate-calculator',
      'title'
    >;
    pageUrl: Attribute.String;
    chart: Attribute.Component<'ui-components.dynamic-graph'>;
    registration: Attribute.Component<'main-page.dynamic-header'>;
    mtfxFeatures: Attribute.Relation<
      'api::tools-rate-calculator.tools-rate-calculator',
      'oneToOne',
      'api::mtfx-feature.mtfx-feature'
    >;
    faq: Attribute.Relation<
      'api::tools-rate-calculator.tools-rate-calculator',
      'oneToOne',
      'api::faq.faq'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tools-rate-calculator.tools-rate-calculator',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tools-rate-calculator.tools-rate-calculator',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTopBannerTopBanner extends Schema.SingleType {
  collectionName: 'top_banners';
  info: {
    singularName: 'top-banner';
    pluralName: 'top-banners';
    displayName: 'Top Banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::top-banner.top-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::top-banner.top-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTransferMoneyTransferMoney extends Schema.SingleType {
  collectionName: 'transfer_moneys';
  info: {
    singularName: 'transfer-money';
    pluralName: 'transfer-moneys';
    displayName: 'Transfer Money';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::transfer-money.transfer-money', 'title'>;
    pageUrl: Attribute.String;
    meta: Attribute.Component<'shared.meta'>;
    banner: Attribute.Relation<
      'api::transfer-money.transfer-money',
      'oneToOne',
      'api::banner.banner'
    >;
    board: Attribute.Relation<
      'api::transfer-money.transfer-money',
      'oneToOne',
      'api::board.board'
    >;
    how_it_works: Attribute.Relation<
      'api::transfer-money.transfer-money',
      'oneToOne',
      'api::how-it-work.how-it-work'
    >;
    mtfx_features: Attribute.Relation<
      'api::transfer-money.transfer-money',
      'oneToOne',
      'api::mtfx-feature.mtfx-feature'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::transfer-money.transfer-money',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::transfer-money.transfer-money',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about-us.about-us': ApiAboutUsAboutUs;
      'api::article.article': ApiArticleArticle;
      'api::article-slide.article-slide': ApiArticleSlideArticleSlide;
      'api::banner.banner': ApiBannerBanner;
      'api::batch-payment.batch-payment': ApiBatchPaymentBatchPayment;
      'api::blog.blog': ApiBlogBlog;
      'api::blog-and-press-room.blog-and-press-room': ApiBlogAndPressRoomBlogAndPressRoom;
      'api::blogs-css.blogs-css': ApiBlogsCssBlogsCss;
      'api::board.board': ApiBoardBoard;
      'api::bp-blog.bp-blog': ApiBpBlogBpBlog;
      'api::bp-pressroom.bp-pressroom': ApiBpPressroomBpPressroom;
      'api::business.business': ApiBusinessBusiness;
      'api::button.button': ApiButtonButton;
      'api::career.career': ApiCareerCareer;
      'api::checklist.checklist': ApiChecklistChecklist;
      'api::compare-chart.compare-chart': ApiCompareChartCompareChart;
      'api::contact-card.contact-card': ApiContactCardContactCard;
      'api::cookie-policy.cookie-policy': ApiCookiePolicyCookiePolicy;
      'api::country-list.country-list': ApiCountryListCountryList;
      'api::cu-fx-forecast.cu-fx-forecast': ApiCuFxForecastCuFxForecast;
      'api::cu-fx-monthly.cu-fx-monthly': ApiCuFxMonthlyCuFxMonthly;
      'api::currency-buffer.currency-buffer': ApiCurrencyBufferCurrencyBuffer;
      'api::currency-chart.currency-chart': ApiCurrencyChartCurrencyChart;
      'api::currency-chart-config.currency-chart-config': ApiCurrencyChartConfigCurrencyChartConfig;
      'api::currency-conversion.currency-conversion': ApiCurrencyConversionCurrencyConversion;
      'api::currency-dropdown.currency-dropdown': ApiCurrencyDropdownCurrencyDropdown;
      'api::currency-list.currency-list': ApiCurrencyListCurrencyList;
      'api::currency-update.currency-update': ApiCurrencyUpdateCurrencyUpdate;
      'api::customer-testimonial.customer-testimonial': ApiCustomerTestimonialCustomerTestimonial;
      'api::daily-economic-table.daily-economic-table': ApiDailyEconomicTableDailyEconomicTable;
      'api::daily-market-update-table.daily-market-update-table': ApiDailyMarketUpdateTableDailyMarketUpdateTable;
      'api::daily-rates-table.daily-rates-table': ApiDailyRatesTableDailyRatesTable;
      'api::daily-trading-table.daily-trading-table': ApiDailyTradingTableDailyTradingTable;
      'api::default-currency-code.default-currency-code': ApiDefaultCurrencyCodeDefaultCurrencyCode;
      'api::e-sign-consent-agreement.e-sign-consent-agreement': ApiESignConsentAgreementESignConsentAgreement;
      'api::economic-events-log.economic-events-log': ApiEconomicEventsLogEconomicEventsLog;
      'api::economic-events-with-date.economic-events-with-date': ApiEconomicEventsWithDateEconomicEventsWithDate;
      'api::faq.faq': ApiFaqFaq;
      'api::faq-key.faq-key': ApiFaqKeyFaqKey;
      'api::faq-page.faq-page': ApiFaqPageFaqPage;
      'api::forward-contract.forward-contract': ApiForwardContractForwardContract;
      'api::fx-daily.fx-daily': ApiFxDailyFxDaily;
      'api::fx-daily-economic-table.fx-daily-economic-table': ApiFxDailyEconomicTableFxDailyEconomicTable;
      'api::fx-daily-market-update.fx-daily-market-update': ApiFxDailyMarketUpdateFxDailyMarketUpdate;
      'api::fx-daily-page.fx-daily-page': ApiFxDailyPageFxDailyPage;
      'api::fx-daily-rates-table.fx-daily-rates-table': ApiFxDailyRatesTableFxDailyRatesTable;
      'api::fx-daily-trading-table.fx-daily-trading-table': ApiFxDailyTradingTableFxDailyTradingTable;
      'api::fx-daily-update.fx-daily-update': ApiFxDailyUpdateFxDailyUpdate;
      'api::fx-daily-v3.fx-daily-v3': ApiFxDailyV3FxDailyV3;
      'api::fx-forecast-table.fx-forecast-table': ApiFxForecastTableFxForecastTable;
      'api::fx-forecast-v2.fx-forecast-v2': ApiFxForecastV2FxForecastV2;
      'api::fx-monthly-us.fx-monthly-us': ApiFxMonthlyUsFxMonthlyUs;
      'api::fx-monthly-v2.fx-monthly-v2': ApiFxMonthlyV2FxMonthlyV2;
      'api::fx-monthly-v3.fx-monthly-v3': ApiFxMonthlyV3FxMonthlyV3;
      'api::fx-payment.fx-payment': ApiFxPaymentFxPayment;
      'api::fx-section.fx-section': ApiFxSectionFxSection;
      'api::fx-weekly.fx-weekly': ApiFxWeeklyFxWeekly;
      'api::fx-weekly-page.fx-weekly-page': ApiFxWeeklyPageFxWeeklyPage;
      'api::global-css.global-css': ApiGlobalCssGlobalCss;
      'api::global-payment-solution.global-payment-solution': ApiGlobalPaymentSolutionGlobalPaymentSolution;
      'api::home-v2.home-v2': ApiHomeV2HomeV2;
      'api::how-it-work.how-it-work': ApiHowItWorkHowItWork;
      'api::image-section.image-section': ApiImageSectionImageSection;
      'api::incoming-payment.incoming-payment': ApiIncomingPaymentIncomingPayment;
      'api::industry-solution.industry-solution': ApiIndustrySolutionIndustrySolution;
      'api::industry-solution-post.industry-solution-post': ApiIndustrySolutionPostIndustrySolutionPost;
      'api::international-payment.international-payment': ApiInternationalPaymentInternationalPayment;
      'api::is-legal.is-legal': ApiIsLegalIsLegal;
      'api::is-medical.is-medical': ApiIsMedicalIsMedical;
      'api::is-mining.is-mining': ApiIsMiningIsMining;
      'api::is-online-seller.is-online-seller': ApiIsOnlineSellerIsOnlineSeller;
      'api::is-technology-company.is-technology-company': ApiIsTechnologyCompanyIsTechnologyCompany;
      'api::is-travel.is-travel': ApiIsTravelIsTravel;
      'api::job-posting.job-posting': ApiJobPostingJobPosting;
      'api::landing-page.landing-page': ApiLandingPageLandingPage;
      'api::landing-page-header.landing-page-header': ApiLandingPageHeaderLandingPageHeader;
      'api::landing-page-widget.landing-page-widget': ApiLandingPageWidgetLandingPageWidget;
      'api::layout.layout': ApiLayoutLayout;
      'api::let-us-watch.let-us-watch': ApiLetUsWatchLetUsWatch;
      'api::live-currency-rate-pair.live-currency-rate-pair': ApiLiveCurrencyRatePairLiveCurrencyRatePair;
      'api::live-exchange-rates-default.live-exchange-rates-default': ApiLiveExchangeRatesDefaultLiveExchangeRatesDefault;
      'api::main.main': ApiMainMain;
      'api::main-footer.main-footer': ApiMainFooterMainFooter;
      'api::main-footer-v2.main-footer-v2': ApiMainFooterV2MainFooterV2;
      'api::market-order.market-order': ApiMarketOrderMarketOrder;
      'api::medium-business.medium-business': ApiMediumBusinessMediumBusiness;
      'api::mtfx-feature.mtfx-feature': ApiMtfxFeatureMtfxFeature;
      'api::mtfx-fee.mtfx-fee': ApiMtfxFeeMtfxFee;
      'api::multi-currency-account.multi-currency-account': ApiMultiCurrencyAccountMultiCurrencyAccount;
      'api::multinational.multinational': ApiMultinationalMultinational;
      'api::nav-menu-item.nav-menu-item': ApiNavMenuItemNavMenuItem;
      'api::newsletter.newsletter': ApiNewsletterNewsletter;
      'api::online-seller.online-seller': ApiOnlineSellerOnlineSeller;
      'api::partner-with-us.partner-with-us': ApiPartnerWithUsPartnerWithUs;
      'api::post-layout.post-layout': ApiPostLayoutPostLayout;
      'api::privacy-policy.privacy-policy': ApiPrivacyPolicyPrivacyPolicy;
      'api::regulatory-information.regulatory-information': ApiRegulatoryInformationRegulatoryInformation;
      'api::regulatory-information-tab-content.regulatory-information-tab-content': ApiRegulatoryInformationTabContentRegulatoryInformationTabContent;
      'api::risk-management.risk-management': ApiRiskManagementRiskManagement;
      'api::risk-management-tab.risk-management-tab': ApiRiskManagementTabRiskManagementTab;
      'api::safe-harbor-policy.safe-harbor-policy': ApiSafeHarborPolicySafeHarborPolicy;
      'api::site-config.site-config': ApiSiteConfigSiteConfig;
      'api::site-map.site-map': ApiSiteMapSiteMap;
      'api::small-business.small-business': ApiSmallBusinessSmallBusiness;
      'api::style.style': ApiStyleStyle;
      'api::tab.tab': ApiTabTab;
      'api::tab-content.tab-content': ApiTabContentTabContent;
      'api::tab-item.tab-item': ApiTabItemTabItem;
      'api::table-content.table-content': ApiTableContentTableContent;
      'api::terms-of-use.terms-of-use': ApiTermsOfUseTermsOfUse;
      'api::test.test': ApiTestTest;
      'api::test-html.test-html': ApiTestHtmlTestHtml;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::testing.testing': ApiTestingTesting;
      'api::testing-log.testing-log': ApiTestingLogTestingLog;
      'api::tool.tool': ApiToolTool;
      'api::tools-currency-chart.tools-currency-chart': ApiToolsCurrencyChartToolsCurrencyChart;
      'api::tools-currency-rate-alert.tools-currency-rate-alert': ApiToolsCurrencyRateAlertToolsCurrencyRateAlert;
      'api::tools-daily-exchange-rate-lookup.tools-daily-exchange-rate-lookup': ApiToolsDailyExchangeRateLookupToolsDailyExchangeRateLookup;
      'api::tools-economic-calendar.tools-economic-calendar': ApiToolsEconomicCalendarToolsEconomicCalendar;
      'api::tools-fx-market-update.tools-fx-market-update': ApiToolsFxMarketUpdateToolsFxMarketUpdate;
      'api::tools-historical-rate.tools-historical-rate': ApiToolsHistoricalRateToolsHistoricalRate;
      'api::tools-index.tools-index': ApiToolsIndexToolsIndex;
      'api::tools-live-exchange-rate.tools-live-exchange-rate': ApiToolsLiveExchangeRateToolsLiveExchangeRate;
      'api::tools-rate-calculator.tools-rate-calculator': ApiToolsRateCalculatorToolsRateCalculator;
      'api::top-banner.top-banner': ApiTopBannerTopBanner;
      'api::transfer-money.transfer-money': ApiTransferMoneyTransferMoney;
    }
  }
}
