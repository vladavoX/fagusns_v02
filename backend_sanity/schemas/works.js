export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      title: 'Language',
      type: 'string',
      name: 'language',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Srpski', value: 'sr' }
        ]
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string'
        }
      ]
    },

    {
      name: 'showcase',
      title: 'Image Showcase',
      type: 'array',
      of: [
        { type: 'image' }
      ]
    },
    {
      name: 'hingeone',
      title: 'Hinge First',
      type: 'image',
    },
    {
      name: 'hingetwo',
      title: 'Hinge Second',
      type: 'image',
    },
    {
      name: 'hingethree',
      title: 'Hinge Third',
      type: 'image',
    }
  ]
};