export default {
  name: 'abouts',
  title: 'Abouts',
  type: 'document',
  fields: [
    {
      title: "Language",
      type: "string",
      name: "language",
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Srpski', value: 'sr' }
        ]
      }
    },
    {
      title: "Title",
      type: "string",
      name: "title",
    },
    {
      title: "Description",
      type: "string",
      name: "description",
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
}