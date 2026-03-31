import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  'sortable-entries': {
    enabled: true,
  },
  tinymce: {
    enabled: true,
    config: {
      editor: {
        outputFormat: 'html',
        editorConfig: {
          height: 500,
          menubar: false,
          plugins: 'lists link image table code help wordcount',
          toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
        },
      },
    },
  },
});

export default config;
